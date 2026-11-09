import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { contactInfo, navLinks, siteDescription, siteName, socialLinks } from "@/lib/site";

// Cache Components requires time-based values to be cached (or rendered on the client).
async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

const icon = (path: ReactNode, filled = false) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-5"
    fill={filled ? "currentColor" : "none"}
    stroke={filled ? "none" : "currentColor"}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {path}
  </svg>
);

const socials = [
  {
    label: "Facebook",
    href: socialLinks.facebook,
    icon: icon(<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z" />, true),
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: icon(
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </>,
    ),
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: icon(
      <path d="M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zM10 9h3.8v1.7c.5-1 1.9-2 3.9-2 4 0 4.3 2.6 4.3 6V21h-4v-5.5c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H10z" />,
      true,
    ),
  },
  {
    label: "YouTube",
    href: socialLinks.youtube,
    icon: icon(
      <path d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 001.6 12 31 31 0 002 15.8a3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8zM10 15.2V8.8l5.2 3.2z" />,
      true,
    ),
  },
];

const planLinks = [
  { label: "Basic", href: "/packages" },
  { label: "Pro", href: "/packages" },
  { label: "Enterprise", href: "/packages" },
  { label: "Our Process", href: "/process" },
];

const contactItems = [
  {
    label: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: icon(<path d="M4 6h16v12H4zM4 7l8 6 8-6" />),
  },
  {
    label: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`,
    icon: icon(
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
    ),
  },
  {
    label: contactInfo.address,
    icon: icon(
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>,
    ),
  },
];

const headingClass = "mb-4 text-base font-semibold text-base-content";
const linkClass = "text-base-content/70 transition-colors hover:text-[#FD6B04]";

export default function Footer() {
  return (
    <footer className="mt-8 border-t-4 border-[#FD6B04] bg-base-100 text-base-content">
      <div className="container mx-auto grid gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block" aria-label={`${siteName} home`}>
            <Image
              src="/logo/logo-removebg-preview.png"
              alt={`${siteName} logo`}
              width={160}
              height={80}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-base-content/70">{siteDescription}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-[#FD6B04]/10 text-[#FD6B04] transition-colors hover:bg-[#FD6B04] hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h2 className={headingClass}>Quick Links</h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Plans */}
        <div>
          <h2 className={headingClass}>Plans</h2>
          <ul className="space-y-2">
            {planLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className={headingClass}>Contact Us</h2>
          <ul className="space-y-3">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-[#FD6B04]">{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                ) : (
                  <span className="text-base-content/70">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn mt-6 border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#D95A00] hover:bg-[#D95A00]"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="border-t border-base-300">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-base-content/70 sm:flex-row">
          <p>
            &copy; <CurrentYear /> {siteName}. All rights reserved.
          </p>
          <p>
            Made with <span className="text-[#FD6B04]">♥</span> in Bangladesh
          </p>
        </div>
      </div> */}
    </footer>
  );
}
