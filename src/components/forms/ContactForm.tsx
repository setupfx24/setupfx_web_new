"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { Input, Label, Select, Textarea } from "@/components/ui/Input";
import { contactForm, topicLabels } from "@/content/contact";
import { CONTACT_ENDPOINT, ENQUIRY_TOPICS, FIELD_LIMITS } from "@/lib/constants";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

type Status = "idle" | "success" | "error";

const { fields, status: statusCopy, submit } = contactForm;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  /** Wires each control to its error message for assistive technology. */
  const describe = (field: keyof ContactFormValues) => ({
    id: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error(`Contact request failed with ${response.status}`);

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <fieldset disabled={isSubmitting} className="space-y-5">
        <legend className="sr-only">{contactForm.legend}</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label={fields.name.label} error={errors.name?.message}>
            <Input
              {...describe("name")}
              {...register("name")}
              type="text"
              autoComplete="name"
              maxLength={FIELD_LIMITS.name.max}
              placeholder={fields.name.placeholder}
            />
          </Field>

          <Field id="email" label={fields.email.label} error={errors.email?.message}>
            <Input
              {...describe("email")}
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder={fields.email.placeholder}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="company"
            label={fields.company.label}
            hint={fields.company.optionalNote}
            error={errors.company?.message}
          >
            <Input
              {...describe("company")}
              {...register("company")}
              type="text"
              autoComplete="organization"
              maxLength={FIELD_LIMITS.company.max}
              placeholder={fields.company.placeholder}
            />
          </Field>

          <Field id="topic" label={fields.topic.label} error={errors.topic?.message}>
            <Select {...describe("topic")} {...register("topic")} defaultValue="">
              <option value="" disabled>
                {fields.topic.placeholder}
              </option>
              {ENQUIRY_TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topicLabels[topic]}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Field id="message" label={fields.message.label} error={errors.message?.message}>
          <Textarea
            {...describe("message")}
            {...register("message")}
            maxLength={FIELD_LIMITS.message.max}
            placeholder={fields.message.placeholder}
          />
        </Field>

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" size="lg" aria-busy={isSubmitting}>
            {isSubmitting ? submit.pending : submit.idle}
          </Button>
          <p className="text-sm text-muted">{contactForm.privacyNote}</p>
        </div>
      </fieldset>

      <p aria-live="polite" className="text-sm">
        {status === "success" ? (
          <span className="font-medium text-primary">{statusCopy.success}</span>
        ) : null}
        {status === "error" ? (
          <span className="font-medium text-red-600 dark:text-red-400">{statusCopy.error}</span>
        ) : null}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label}
        {hint ? <span className="ml-1 font-normal text-muted">({hint})</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
