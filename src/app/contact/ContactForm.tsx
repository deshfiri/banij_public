"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "./actions";
import { SUBJECTS } from "./subjects";

const initialState: ContactState = { ok: false, message: "" };

const inputBase =
  "w-full rounded-xl border-2 bg-base-100 px-4 py-3 outline-none transition-colors placeholder:text-base-content/40 focus:border-[#FD6B04] focus:ring-4 focus:ring-[#FD6B04]/15";

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-center justify-between text-sm font-semibold">
        {label}
        {optional && <span className="text-xs font-normal text-base-content/50">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);
  const e = state.errors ?? {};
  const f = state.fields ?? {};

  const cls = (field: keyof typeof e) => `${inputBase} ${e[field] ? "border-error" : "border-base-300"}`;
  const aria = (field: keyof typeof e) =>
    e[field] ? { "aria-invalid": true, "aria-describedby": `${field}-error` } : {};

  if (state.ok) {
    return (
      <div role="status" className="flex flex-col items-center py-10 text-center animate-fade-up motion-reduce:animate-none">
        <span className="flex size-20 items-center justify-center rounded-full bg-[#FD6B04] text-white shadow-lg shadow-[#FD6B04]/30">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="size-10" aria-hidden="true">
            <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-6 text-2xl font-bold">Message sent!</h3>
        <p className="mt-2 max-w-sm text-base-content/70">{state.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn mt-8 rounded-xl border-[#FD6B04] bg-transparent text-[#FD6B04] hover:bg-[#FD6B04] hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && (
        <div role="alert" className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={e.name}>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name"
            defaultValue={f.name} className={cls("name")} {...aria("name")} required />
        </Field>
        <Field label="Email address" name="email" error={e.email}>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
            defaultValue={f.email} className={cls("email")} {...aria("email")} required />
        </Field>
        <Field label="Phone" name="phone" error={e.phone} optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+880 1XXX-XXXXXX"
            defaultValue={f.phone} className={cls("phone")} {...aria("phone")} />
        </Field>
        <Field label="Subject" name="subject" error={e.subject}>
          <select id="subject" name="subject" defaultValue={f.subject ?? ""}
            className={`${cls("subject")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23FD6B04%22 stroke-width=%222.5%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
            {...aria("subject")} required>
            <option value="" disabled>
              Choose a subject
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" name="message" error={e.message}>
        <textarea id="message" name="message" rows={5} placeholder="Tell us a little about your business and how we can help…"
          defaultValue={f.message} className={`${cls("message")} resize-y`} {...aria("message")} required />
      </Field>

      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-base-content/60">We usually reply within one business day.</p>
        <button
          type="submit"
          disabled={pending}
          className="btn btn-lg w-full rounded-xl border-[#FD6B04] bg-[#FD6B04] text-white shadow-lg shadow-[#FD6B04]/30 hover:border-[#D95A00] hover:bg-[#D95A00] disabled:bg-[#FD6B04]/60 disabled:text-white sm:w-auto"
        >
          {pending ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5" aria-hidden="true">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {pending ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
