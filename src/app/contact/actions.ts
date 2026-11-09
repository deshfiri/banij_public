"use server";

import { SUBJECTS } from "./subjects";

type Field = "name" | "email" | "phone" | "subject" | "message";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<Field, string>>;
  fields?: Partial<Record<Field, string>>; // sent back on error so the form keeps what the user typed
};

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const fields = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactState["errors"] = {};
  if (fields.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Please enter a valid email address.";
  if (fields.phone && !/^[+\d][\d\s-]{6,}$/.test(fields.phone)) errors.phone = "Please enter a valid phone number.";
  if (!SUBJECTS.includes(fields.subject as (typeof SUBJECTS)[number])) errors.subject = "Please choose a subject.";
  if (fields.message.length < 10) errors.message = "Please write at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", errors, fields };
  }

  // TODO: send an email or save to a database here.
  console.log("Contact message", fields);

  return { ok: true, message: `Thanks, ${fields.name}! Your message was sent. We'll reply within one business day.` };
}
