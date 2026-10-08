import { NextResponse } from "next/server";
import { z } from "zod";

import { siteConfig } from "@/config/site";
import { topicLabels } from "@/content/contact";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

/**
 * Handles contact form submissions.
 *
 * The payload is validated with the same Zod schema the form uses, so a request that
 * bypasses the browser is held to the same rules. Delivery uses Resend over plain
 * `fetch` to avoid an extra dependency; swap `sendNotification` for another provider
 * if you prefer. Without the email environment variables set, submissions are logged
 * and the request still succeeds, which keeps local development usable.
 */
export async function POST(request: Request): Promise<Response> {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", fields: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  try {
    const delivered = await sendNotification(parsed.data);
    return NextResponse.json({ delivered }, { status: 200 });
  } catch (error) {
    console.error("[contact] could not deliver enquiry", error);
    return NextResponse.json({ error: "Could not send your enquiry." }, { status: 502 });
  }
}

/** Returns true when the enquiry was emailed, false when it was only logged. */
async function sendNotification(values: ContactFormValues): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.CONTACT_SENDER_EMAIL;

  if (!apiKey || !to || !from) {
    console.info("[contact] email is not configured, logging enquiry instead", {
      name: values.name,
      email: values.email,
      topic: values.topic,
    });
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: values.email,
      subject: `${siteConfig.name} enquiry: ${topicLabels[values.topic]}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Company: ${values.company || "Not given"}`,
        `Topic: ${topicLabels[values.topic]}`,
        "",
        values.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider responded with ${response.status}`);
  }

  return true;
}
