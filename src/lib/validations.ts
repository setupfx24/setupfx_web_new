import { z } from "zod";

import { ENQUIRY_TOPICS, FIELD_LIMITS } from "@/lib/constants";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(FIELD_LIMITS.name.min, { error: "Please enter your full name." })
    .max(FIELD_LIMITS.name.max, { error: "Please use 80 characters or fewer." }),
  email: z.email({ error: "Please enter a valid email address." }),
  company: z
    .string()
    .trim()
    .max(FIELD_LIMITS.company.max, { error: "Please use 80 characters or fewer." })
    .optional(),
  topic: z.enum(ENQUIRY_TOPICS, { error: "Please choose what you need help with." }),
  message: z
    .string()
    .trim()
    .min(FIELD_LIMITS.message.min, { error: "Please add at least 20 characters of detail." })
    .max(FIELD_LIMITS.message.max, { error: "Please use 2000 characters or fewer." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
