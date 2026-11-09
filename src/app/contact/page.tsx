import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { contactInfo, siteName, socialLinks } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

const delay = (i: number, step = 100): CSSProperties => ({ animationDelay: `${i * step}ms` });
const fadeUp = "animate-fade-up motion-reduce:animate-none";
const accent = "text-[#FD6B04]";

const icon = (path: ReactNode, className = "size-6") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {path}
  </svg>
);

const cards = [
  {
    title: "Email Us",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: icon(<path d="M4 6h16v12H4zM4 7l8 6 8-6" />),
  },
  {
    title: "Call Us",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`,
    icon: icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />),
  },
  {
    title: "Visit Us",
    value: contactInfo.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.mapQuery)}`,
    icon: icon(
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>,
    ),
  },
  {
    title: "Working Hours",
    value: contactInfo.hours,
    icon: icon(<path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2" />),
  },
];

const socials = [
  { label: "Facebook", href: socialLinks.facebook, path: <path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z" fill="currentColor" stroke="none" /> },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    path: (
      <path
        d="M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zM10 9h3.8v1.7c.5-1 1.9-2 3.9-2 4 0 4.3 2.6 4.3 6V21h-4v-5.5c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H10z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
  {
    label: "YouTube",
    href: socialLinks.youtube,
    path: (
      <path
        d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 001.6 12 31 31 0 002 15.8a3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8zM10 15.2V8.8l5.2 3.2z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
];

const promises = ["Reply within 1 business day", "Free first consultation", "No obligation, no pressure"];

export default function Contact() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-box bg-base-100 px-6 py-14 text-center shadow md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 size-56 animate-float rounded-full bg-[#FD6B04]/10 motion-reduce:animate-none" />
          <div
            className="absolute -bottom-20 -right-10 size-72 animate-float rounded-full bg-[#FD6B04]/15 motion-reduce:animate-none"
            style={{ animationDelay: "-3s" }}
          />
          <div className="absolute right-1/4 top-12 size-8 animate-float rounded-full bg-[#FD6B04]/30 motion-reduce:animate-none" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <span className={`${fadeUp} inline-block rounded-full bg-[#FD6B04]/10 px-4 py-1.5 text-sm font-semibold ${accent}`}>
            Contact Us
          </span>
          <h1 className={`${fadeUp} mt-4 text-4xl font-extrabold tracking-tight md:text-5xl`} style={delay(1)}>
            Let&apos;s Talk About Your <span className={accent}>Business</span>
          </h1>
          <p className={`${fadeUp} mt-4 text-lg text-base-content/70`} style={delay(2)}>
            Have a question, need a quote or want to start a project? Send us a message and our team will get back to
            you quickly.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => {
          const inner = (
            <>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#FD6B04]/10 text-[#FD6B04] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#FD6B04] group-hover:text-white">
                {c.icon}
              </div>
              <h2 className="mt-5 text-lg font-bold">{c.title}</h2>
              <p className="mt-1 break-words text-base-content/70">{c.value}</p>
            </>
          );
          const cls = `${fadeUp} group block rounded-3xl border-2 border-transparent bg-base-100 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#FD6B04] hover:shadow-xl hover:shadow-[#FD6B04]/15`;
          return c.href ? (
            <a
              key={c.title}
              href={c.href}
              className={cls}
              style={delay(i)}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {inner}
            </a>
          ) : (
            <div key={c.title} className={cls} style={delay(i)}>
              {inner}
            </div>
          );
        })}
      </section>

      {/* Info + form */}
      <section className="grid overflow-hidden rounded-box bg-base-100 shadow lg:grid-cols-[2fr_3fr]">
        {/* Left: orange info panel */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#FD6B04] to-[#FF8A2B] p-8 text-white md:p-10">
          <div aria-hidden="true" className="absolute -bottom-16 -right-16 size-56 rounded-full bg-white/10" />
          <div aria-hidden="true" className="absolute -left-10 top-1/3 size-28 rounded-full bg-white/10" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold">Get in Touch</h2>
            <p className="mt-3 text-white/90">
              Fill out the form and the {siteName} team will contact you. Prefer to talk? Call or email us directly.
            </p>

            <ul className="mt-8 space-y-4">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-[#FD6B04]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="size-3.5" aria-hidden="true">
                      <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 border-t border-white/25 pt-8">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:underline">
                {icon(<path d="M4 6h16v12H4zM4 7l8 6 8-6" />, "size-5")}
                {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 hover:underline">
                {icon(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />, "size-5")}
                {contactInfo.phone}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#FD6B04]"
                >
                  {icon(s.path, "size-5")}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Send Us a <span className={accent}>Message</span>
          </h2>
          <p className="mb-8 mt-2 text-base-content/70">All fields are required unless marked optional.</p>
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="overflow-hidden rounded-box bg-base-100 shadow">
        <iframe
          title={`Map showing ${contactInfo.address}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.mapQuery)}&z=17&output=embed`}
          className="h-80 w-full grayscale-[30%] md:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
