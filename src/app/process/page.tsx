import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { processSteps } from "@/lib/process";

export const metadata: Metadata = { title: "Process" };

const delay = (i: number, step = 100): CSSProperties => ({ animationDelay: `${i * step}ms` });
const fadeUp = "animate-fade-up motion-reduce:animate-none";

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

// One icon per step, in the same order as processSteps.
const stepIcons = [
  icon(<path d="M21 12a8 8 0 01-11.8 7L4 20l1.1-4.6A8 8 0 1121 12zM8 10h8M8 14h5" />), // chat
  icon(<path d="M11 4a7 7 0 105.3 11.6L21 20M11 8v6M8 11h6" />), // research
  icon(<path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6" />), // document
  icon(<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />), // tools
  icon(<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />), // shield check
  icon(
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    </>,
  ), // rocket
];

const highlights = [
  { value: `${processSteps.length}`, label: "Clear steps" },
  { value: "2–6 wks", label: "Typical project" },
  { value: "Weekly", label: "Progress updates" },
  { value: "100%", label: "Transparent pricing" },
];

const values = [
  {
    title: "Transparent",
    text: "You always know what we're working on, what's next and what it costs.",
    icon: icon(<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z" />, "size-7"),
  },
  {
    title: "On Time",
    text: "Every project has milestones, so deadlines are planned, not hoped for.",
    icon: icon(<path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2" />, "size-7"),
  },
  {
    title: "Collaborative",
    text: "You're part of the team, with feedback built into every stage.",
    icon: icon(
      <path d="M16 19v-1a4 4 0 00-4-4H6a4 4 0 00-4 4v1M9 10a3 3 0 100-6 3 3 0 000 6zM22 19v-1a4 4 0 00-3-3.9M16 4.1a3 3 0 010 5.8" />,
      "size-7",
    ),
  },
  {
    title: "Quality First",
    text: "We test and review everything before it reaches your customers.",
    icon: icon(<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />, "size-7"),
  },
];

function Check() {
  return (
    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#FD6B04] text-white">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} className="size-2.5" aria-hidden="true">
        <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ProcessPage() {
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
          <div className="absolute left-1/4 top-12 size-8 animate-float rounded-full bg-[#FD6B04]/30 motion-reduce:animate-none" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <span className={`${fadeUp} inline-block rounded-full bg-[#FD6B04]/10 px-4 py-1.5 text-sm font-semibold text-[#FD6B04]`}>
            Our Process
          </span>
          <h1 className={`${fadeUp} mt-4 text-4xl font-extrabold tracking-tight md:text-5xl`} style={delay(1)}>
            How We <span className="text-[#FD6B04]">Work</span> With You
          </h1>
          <p className={`${fadeUp} mt-4 text-lg text-base-content/70`} style={delay(2)}>
            A simple, proven process that takes you from first idea to launch — with clear steps, honest timelines
            and support after go-live.
          </p>
          <div className={`${fadeUp} mt-8 flex flex-wrap justify-center gap-3`} style={delay(3)}>
            <Link
              href="/contact"
              className="btn btn-lg rounded-xl border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#D95A00] hover:bg-[#D95A00]"
            >
              Start a Project
            </Link>
            <Link
              href="/packages"
              className="btn btn-lg rounded-xl border-[#FD6B04] bg-transparent text-[#FD6B04] hover:bg-[#FD6B04] hover:text-white"
            >
              View Packages
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`${fadeUp} rounded-2xl border border-base-300 bg-base-100/80 p-5 backdrop-blur transition-transform duration-300 hover:-translate-y-1`}
              style={delay(i + 4)}
            >
              <p className="text-2xl font-extrabold text-[#FD6B04] md:text-3xl">{h.value}</p>
              <p className="mt-1 text-sm text-base-content/70">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="rounded-box bg-base-100 px-6 py-12 shadow md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Step by <span className="text-[#FD6B04]">Step</span>
          </h2>
          <p className="mt-2 text-base-content/70">What happens at each stage, how long it takes and what you get.</p>
        </div>

        <ol className="relative mx-auto mt-12 max-w-5xl">
          {/* Vertical line: left on phones, centre on larger screens */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-6 top-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#FD6B04] via-[#FD6B04]/60 to-[#FD6B04]/10 md:left-1/2"
          />

          {processSteps.map((step, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={step.title}
                className="relative grid grid-cols-[3rem_1fr] gap-4 pb-10 last:pb-0 md:grid-cols-[1fr_4rem_1fr] md:gap-8"
              >
                {/* Number dot */}
                <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#FD6B04] text-lg font-bold text-white shadow-lg shadow-[#FD6B04]/30 ring-8 ring-base-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <article
                  className={`${fadeUp} group col-start-2 row-start-1 rounded-3xl border-2 border-transparent bg-base-100 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FD6B04] hover:shadow-xl hover:shadow-[#FD6B04]/15 ${
                    right ? "md:col-start-3" : "md:col-start-1"
                  }`}
                  style={delay(i)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#FD6B04]/10 text-[#FD6B04] transition-colors duration-300 group-hover:bg-[#FD6B04] group-hover:text-white">
                      {stepIcons[i]}
                    </div>
                    <span className="rounded-full bg-[#FD6B04]/10 px-3 py-1 text-xs font-semibold text-[#FD6B04]">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-base-content/70">{step.text}</p>
                  <ul className="mt-4 space-y-2 border-t border-base-300 pt-4 text-sm">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <Check />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Why it works */}
      <section className="rounded-box bg-base-100 px-6 py-12 shadow md:px-10 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Why Our Process <span className="text-[#FD6B04]">Works</span>
          </h2>
          <p className="mt-2 text-base-content/70">The principles behind every project we deliver.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`${fadeUp} group rounded-3xl border-2 border-transparent bg-[#FD6B04]/5 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#FD6B04] hover:bg-base-100 hover:shadow-xl hover:shadow-[#FD6B04]/15`}
              style={delay(i)}
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FD6B04] to-[#FF9A4D] text-white shadow-md shadow-[#FD6B04]/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {v.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="relative overflow-hidden rounded-box bg-gradient-to-r from-[#FD6B04] to-[#FF8A2B] px-6 py-12 text-center text-white shadow-lg md:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 -top-10 size-40 animate-float rounded-full bg-white/10 motion-reduce:animate-none" />
          <div
            className="absolute -bottom-12 right-10 size-48 animate-float rounded-full bg-white/10 motion-reduce:animate-none"
            style={{ animationDelay: "-2s" }}
          />
        </div>
        <div className="relative">
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to take the first step?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Book a free consultation and we&apos;ll show you exactly how we&apos;d approach your project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg rounded-xl border-white bg-white text-[#FD6B04] hover:border-white hover:bg-white/90"
            >
              Book a Consultation
            </Link>
            <Link
              href="/packages"
              className="btn btn-lg rounded-xl border-white bg-transparent text-white hover:bg-white hover:text-[#FD6B04]"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
