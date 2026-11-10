import type { ReactNode } from "react";

export const inputBase =
  "w-full rounded-xl border-2 bg-base-100 px-4 py-3 outline-none transition-colors placeholder:text-base-content/40 focus:border-[#FD6B04] focus:ring-4 focus:ring-[#FD6B04]/15";

export const inputCls = (error?: string) => `${inputBase} ${error ? "border-error" : "border-base-300"}`;

export const ariaFor = (name: string, error?: string) =>
  error ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` } : {};

export const submitCls =
  "btn btn-lg w-full rounded-xl border-[#FD6B04] bg-[#FD6B04] text-white shadow-sm shadow-[#FD6B04]/15 hover:border-[#D95A00] hover:bg-[#D95A00] disabled:bg-[#FD6B04]/60 disabled:text-white";

export function Field({
  label,
  name,
  error,
  aside,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <label htmlFor={name} className="font-semibold">
          {label}
        </label>
        {aside}
      </div>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export function FormAlert({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div role="alert" className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
      {message}
    </div>
  );
}

const perks = ["Track every project in one place", "Clear pricing, no surprises", "Hands-on support from our team"];

// Two-column card: orange welcome panel (large screens) + the form.
export default function AuthShell({
  title,
  subtitle,
  panelTitle,
  panelText,
  children,
}: {
  title: ReactNode;
  subtitle: string;
  panelTitle: string;
  panelText: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto grid max-w-5xl overflow-hidden rounded-box bg-base-100 shadow-sm lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-[#FD6B04] p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 size-64 animate-float rounded-full bg-white/10 motion-reduce:animate-none" />
          <div
            className="absolute -bottom-20 -left-10 size-56 animate-float rounded-full bg-white/10 motion-reduce:animate-none"
            style={{ animationDelay: "-3s" }}
          />
        </div>
        <div className="relative">
          <h2 className="text-3xl font-extrabold leading-tight">{panelTitle}</h2>
          <p className="mt-3 text-white/90">{panelText}</p>
        </div>
        <ul className="relative mt-10 space-y-3">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="size-4" aria-hidden="true">
                  <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 sm:p-10">
        <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-2 text-base-content/70">{subtitle}</p>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
