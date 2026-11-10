import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { siteName } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const delay = (i: number, step = 100): CSSProperties => ({ animationDelay: `${i * step}ms` });
const fadeUp = "animate-fade-up motion-reduce:animate-none";

const icon = (path: ReactNode, className = "size-7") => (
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

// TODO: replace the numbers, story, milestones and team below with your real details.
const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "120+", label: "Happy clients" },
  { value: "300+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
];

const pillars = [
  {
    title: "Our Mission",
    text: "To give every business — big or small — the plan, tools and support it needs to grow with confidence.",
    icon: icon(<path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 17a5 5 0 100-10 5 5 0 000 10zM12 13a1 1 0 100-2 1 1 0 000 2z" />),
  },
  {
    title: "Our Vision",
    text: "To be the most trusted growth partner for businesses across Bangladesh and beyond.",
    icon: icon(<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z" />),
  },
  {
    title: "Our Values",
    text: "Honesty, quality and real partnership. We only succeed when our clients do.",
    icon: icon(<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.5-8 11-8 11z" />),
  },
];

const milestones = [
  { year: "2018", title: "The beginning", text: `${siteName} started with a small team and a big goal: help local businesses grow.` },
  { year: "2020", title: "First 50 clients", text: "Word spread, and we grew into a full team serving many industries." },
  { year: "2023", title: "Going further", text: "We added new services and launched our flexible subscription plans." },
  { year: "Today", title: "120+ clients", text: "We keep growing alongside the businesses that trust us every day." },
];

const reasons = [
  "A clear, step-by-step process",
  "Honest pricing with no hidden fees",
  "A dedicated team that knows your business",
  "Weekly updates and fast replies",
  "Support that continues after launch",
  "Proven results across many industries",
];

const team = [
  { name: "Team Member", role: "Founder & CEO" },
  { name: "Team Member", role: "Head of Operations" },
  { name: "Team Member", role: "Lead Designer" },
  { name: "Team Member", role: "Client Success Manager" },
];

function Check() {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#FD6B04] text-white">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="size-3.5" aria-hidden="true">
        <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const sectionTitle = "text-2xl font-extrabold md:text-4xl";
const accent = "text-[#FD6B04]";

export default function About() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-box bg-base-100 shadow">
        <div className="relative grid items-center gap-10 p-6 md:p-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className={`${fadeUp} inline-block rounded-full bg-[#FD6B04]/10 px-4 py-1.5 text-sm font-semibold ${accent}`}>
              About Us
            </span>
            <h1 className={`${fadeUp} mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl`} style={delay(1)}>
              We Help Businesses <span className={accent}>Grow</span> With Confidence
            </h1>
            <p className={`${fadeUp} mt-5 text-lg text-base-content/70`} style={delay(2)}>
              {siteName} is a team of planners, makers and problem-solvers. We combine clear thinking, honest pricing
              and hands-on support to turn your goals into results.
            </p>
            <div className={`${fadeUp} mt-8 flex flex-wrap justify-center gap-3 lg:justify-start`} style={delay(3)}>
              <Link
                href="/contact"
                className="btn btn-lg rounded-xl border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#D95A00] hover:bg-[#D95A00]"
              >
                Work With Us
              </Link>
              <Link
                href="/process"
                className="btn btn-lg rounded-xl border-[#FD6B04] bg-transparent text-[#FD6B04] hover:bg-[#FD6B04] hover:text-white"
              >
                Our Process
              </Link>
            </div>
          </div>

          {/* Visual: logo card with floating badges */}
          <div className={`${fadeUp} relative mx-auto w-full max-w-md`} style={delay(2)}>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FD6B04] to-[#FF9A4D] shadow-2xl shadow-[#FD6B04]/30">
              <div className="absolute inset-10 flex items-center justify-center rounded-3xl bg-white/95 p-8 shadow-xl">
                <Image
                  src="/logo/logo-removebg-preview.png"
                  alt={`${siteName} logo`}
                  width={320}
                  height={160}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>

            <div className="absolute -left-4 top-8 rounded-2xl bg-base-100 px-4 py-3 shadow-xl md:-left-8">
              <p className={`text-2xl font-extrabold ${accent}`}>120+</p>
              <p className="text-xs text-base-content/70">Happy clients</p>
            </div>
            <div className="absolute -right-4 bottom-8 rounded-2xl bg-base-100 px-4 py-3 shadow-xl md:-right-8">
              <p className={`text-2xl font-extrabold ${accent}`}>98%</p>
              <p className="text-xs text-base-content/70">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="grid grid-cols-2 gap-4 rounded-box bg-gradient-to-r from-[#FD6B04] to-[#FF8A2B] p-6 text-center text-white shadow-lg md:grid-cols-4 md:p-8">
        {stats.map((s, i) => (
          <div key={s.label} className={`${fadeUp} ${i > 0 ? "md:border-l md:border-white/25" : ""}`} style={delay(i)}>
            <p className="text-3xl font-extrabold md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-white/85">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Mission / Vision / Values */}
      <section className="rounded-box bg-base-100 px-6 py-12 shadow md:px-10 md:py-16">
        <div className="text-center">
          <h2 className={sectionTitle}>
            What <span className={accent}>Drives</span> Us
          </h2>
          <p className="mt-2 text-base-content/70">The ideas behind everything we do.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`${fadeUp} group rounded-3xl border-2 border-transparent bg-[#FD6B04]/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#FD6B04] hover:bg-base-100 hover:shadow-xl hover:shadow-[#FD6B04]/15`}
              style={delay(i)}
            >
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FD6B04] to-[#FF9A4D] text-white shadow-md shadow-[#FD6B04]/30">
                {p.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-base-content/70">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story timeline + Why choose us */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-box bg-base-100 p-6 shadow md:p-10">
          <h2 className={sectionTitle}>
            Our <span className={accent}>Story</span>
          </h2>
          <ol className="relative mt-8 space-y-8 border-l-2 border-[#FD6B04]/30 pl-8">
            {milestones.map((m, i) => (
              <li key={m.year} className={`${fadeUp} relative`} style={delay(i)}>
                <span className="absolute -left-[2.6rem] top-0.5 flex size-5 items-center justify-center rounded-full bg-[#FD6B04] ring-4 ring-[#FD6B04]/20" />
                <span className="rounded-full bg-[#FD6B04]/10 px-3 py-1 text-xs font-bold text-[#FD6B04]">{m.year}</span>
                <h3 className="mt-2 text-lg font-bold">{m.title}</h3>
                <p className="mt-1 text-base-content/70">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative overflow-hidden rounded-box bg-base-100 p-6 shadow md:p-10">
          <h2 className={`relative ${sectionTitle}`}>
            Why <span className={accent}>Choose</span> Us
          </h2>
          <p className="relative mt-2 text-base-content/70">What makes working with {siteName} different.</p>
          <ul className="relative mt-8 space-y-4">
            {reasons.map((r, i) => (
              <li
                key={r}
                className={`${fadeUp} flex items-center gap-4 rounded-2xl border border-base-300 p-4 transition-all duration-300 hover:translate-x-1 hover:border-[#FD6B04] hover:bg-[#FD6B04]/5`}
                style={delay(i, 70)}
              >
                <Check />
                <span className="font-medium">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="rounded-box bg-base-100 px-6 py-12 shadow md:px-10 md:py-16">
        <div className="text-center">
          <h2 className={sectionTitle}>
            Meet the <span className={accent}>Team</span>
          </h2>
          <p className="mt-2 text-base-content/70">The people who make it happen.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <div
              key={m.role}
              className={`${fadeUp} group rounded-3xl border-2 border-transparent bg-base-100 p-6 text-center shadow-lg`}
              style={delay(i)}
            >
              <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-[#FD6B04] to-[#FF9A4D] p-1">
                <div className="flex size-full items-center justify-center rounded-full bg-base-100 text-[#FD6B04]">
                  {icon(<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 21a8 8 0 0116 0" />, "size-10")}
                </div>
              </div>
              <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
              <p className="text-sm font-medium text-[#FD6B04]">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="relative overflow-hidden rounded-box bg-gradient-to-r from-[#FD6B04] to-[#FF8A2B] px-6 py-12 text-center text-white shadow-lg md:py-14">
        <div className="relative">
          <h2 className="text-3xl font-extrabold md:text-4xl">Let&apos;s build something great together</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Tell us about your business and goals — we&apos;ll show you how we can help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg rounded-xl border-white bg-white text-[#FD6B04] hover:border-white hover:bg-white/90"
            >
              Contact Us
            </Link>
            <Link
              href="/packages"
              className="btn btn-lg rounded-xl border-white bg-transparent text-white hover:bg-white hover:text-[#FD6B04]"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


<div className="text-center lg:text-left">
           
            <h1 className={`${fadeUp} mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl`} style={delay(1)}>
              We Help Businesses <span className={accent}>Grow</span> With Confidence
            </h1>
            <p className={`${fadeUp} mt-5 text-lg text-base-content/70`} style={delay(2)}>
              {siteName} is a team of planners, makers and problem-solvers. We combine clear thinking, honest pricing
              and hands-on support to turn your goals into results.
            </p>
            <div className={`${fadeUp} mt-8 flex flex-wrap justify-center gap-3 lg:justify-start`} style={delay(3)}>
              <Link
                href="/packages"
                className="btn btn-lg rounded-xl border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#D95A00] hover:bg-[#D95A00]"
              >
                get started
              </Link>
              <Link
                href="/process"
                className="btn btn-lg rounded-xl border-[#FD6B04] bg-transparent text-[#FD6B04] hover:bg-[#FD6B04] hover:text-white"
              >
                Our Process
              </Link>
            </div>
          </div>
