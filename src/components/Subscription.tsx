"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Billing = "monthly" | "yearly";

const YEARLY_DISCOUNT = 0.2; // "Save 20%"

const svg = (path: ReactNode, className = "size-8") => (
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

const icons = {
  crown: svg(<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" />, "size-5"),
  rocket: svg(
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>,
  ),
  diamond: svg(<path d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M12 21L8 9l4-6 4 6-4 12" />),
  building: svg(
    <path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16M16 9h3a1 1 0 011 1v11M2 21h20M8 7h4M8 11h4M8 15h4" />,
  ),
  star: svg(<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" fill="currentColor" />, "size-4"),
  chevron: svg(<path d="M9 6l6 6-6 6" />, "size-4"),
  shield: svg(<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />),
  headset: svg(
    <path d="M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 012-2h1v6H6a2 2 0 01-2-2v-2zM20 14a2 2 0 00-2-2h-1v6h1a2 2 0 002-2v-2zM17 18c0 1.5-2 3-5 3" />,
  ),
  bolt: svg(<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />),
  heart: svg(<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.5-8 11-8 11z" />),
};

const plans = [
  {
    name: "Basic",
    description: "Perfect for individuals getting started.",
    monthly: 9,
    icon: icons.rocket,
    features: ["Access to core features", "Email support", "1 user", "Basic analytics"],
    cta: { label: "Get Started", href: "/contact" },
    popular: false,
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses.",
    monthly: 19,
    icon: icons.diamond,
    features: ["All Basic features", "Priority support", "5 users", "Advanced analytics", "Custom integrations"],
    cta: { label: "Start Free Trial", href: "/login" },
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs.",
    monthly: 49,
    icon: icons.building,
    features: ["All Pro features", "Unlimited users", "Dedicated support", "SLA guarantee", "Custom solutions"],
    cta: { label: "Contact Sales", href: "/contact" },
    popular: false,
  },
];

const perks = [
  { icon: icons.shield, title: "Secure & Reliable", text: "Your data is safe with us." },
  { icon: icons.headset, title: "24/7 Support", text: "We're here to help anytime." },
  { icon: icons.bolt, title: "Easy Setup", text: "Get started in minutes." },
  { icon: icons.heart, title: "Trusted by 10K+ Businesses", text: "Join our growing community." },
];

function CheckIcon() {
  return (
    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FD6B04] text-white">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="size-3" aria-hidden="true">
        <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Subscription() {
  const [billing, setBilling] = useState<Billing>("monthly");

  const priceOf = (monthly: number) =>
    billing === "monthly" ? monthly : Math.round(monthly * 12 * (1 - YEARLY_DISCOUNT));

  const toggleBtn = (value: Billing) =>
    `rounded-full px-6 py-2 font-medium transition-colors ${
      billing === value ? "bg-[#FD6B04] text-white shadow-md shadow-[#FD6B04]/30" : "text-base-content/70 hover:text-base-content"
    }`;

  return (
    <section className="relative mt-8 overflow-hidden rounded-box bg-base-100 px-4 py-12 shadow md:px-8 md:py-16">
      {/* Decorative circles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-10 size-72 rounded-full bg-[#FD6B04]/10" />
        <div className="absolute left-10 top-40 size-32 rounded-full bg-[#FD6B04]/15" />
        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#FD6B04]/20" />
        <div className="absolute right-56 top-28 size-12 rounded-full bg-[#FD6B04]/25" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FD6B04]/10 px-4 py-1.5 font-semibold text-[#FD6B04]">
            {icons.crown} Flexible Plans
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            Choose Your <span className="text-[#FD6B04]">Subscription</span>
          </h2>
          <p className="mt-3 text-lg text-base-content/80">Simple, transparent pricing. No hidden fees.</p>

          {/* Monthly / Yearly toggle */}
          <div role="group" aria-label="Billing period" className="mt-6 inline-flex items-center rounded-full bg-base-200 p-1">
            <button type="button" className={toggleBtn("monthly")} aria-pressed={billing === "monthly"} onClick={() => setBilling("monthly")}>
              Monthly
            </button>
            <button type="button" className={`${toggleBtn("yearly")} flex items-center gap-2`} aria-pressed={billing === "yearly"} onClick={() => setBilling("yearly")}>
              Yearly
              <span className={`rounded-full px-2 py-0.5 text-sm font-semibold ${billing === "yearly" ? "bg-white/20 text-white" : "bg-[#FD6B04]/15 text-[#FD6B04]"}`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-14 grid items-stretch gap-10 md:gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-3xl border-2 border-transparent bg-base-100 p-6 shadow-lg transition-all duration-200 hover:border-[#FD6B04] hover:shadow-xl hover:shadow-[#FD6B04]/15 md:p-8"
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#FD6B04] px-5 py-2 font-semibold text-white shadow-md shadow-[#FD6B04]/30">
                  {icons.star} Most Popular
                </span>
              )}

              <div className="flex items-start gap-4">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#FD6B04]/15 text-[#FD6B04]">
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-base-content/70">{plan.description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2 border-b border-base-300 pb-6">
                <span className="text-5xl font-extrabold">${priceOf(plan.monthly)}</span>
                <span className="text-lg text-base-content/70">/ {billing === "monthly" ? "month" : "year"}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`btn btn-lg mt-8 w-full rounded-xl ${
                  plan.popular
                    ? "border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#D95A00] hover:bg-[#D95A00]"
                    : "border-[#FD6B04] bg-transparent text-[#FD6B04] hover:bg-[#FD6B04] hover:text-white"
                }`}
              >
                {plan.cta.label} {icons.chevron}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid gap-6 rounded-3xl bg-[#FD6B04]/10 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {perks.map((perk, i) => (
            <div key={perk.title} className={`flex items-center gap-4 lg:px-6 ${i > 0 ? "lg:border-l lg:border-[#FD6B04]/25" : ""}`}>
              <span className="shrink-0 text-[#FD6B04]">{perk.icon}</span>
              <div>
                <p className="font-semibold">{perk.title}</p>
                <p className="text-sm text-base-content/70">{perk.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
