import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { processSteps } from "@/lib/process";

export const metadata: Metadata = { title: "Process" };

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
      <section className="rounded-2xl border border-base-300 bg-transparent px-6 py-12 text-center md:py-16">
        <div className="mx-auto max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FD6B04]">
            Our Process
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            How We <span className="text-[#FD6B04]">Work</span> With You
          </h1>
          <p className="mt-4 text-lg text-base-content/70">
            A simple, proven process that takes you from first idea to launch — with clear steps, honest timelines
            and support after go-live.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="border-t-2 border-[#FD6B04]/30 px-3 py-4">
              <p className="text-2xl font-extrabold text-[#FD6B04] md:text-3xl">{h.value}</p>
              <p className="mt-1 text-sm text-base-content/70">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="rounded-2xl border border-base-300 bg-transparent px-6 py-10 md:px-10 md:py-14">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Step by <span className="text-[#FD6B04]">Step</span>
          </h2>
          <p className="mt-2 text-base-content/70">What happens at each stage, how long it takes and what you get.</p>
        </div>

        <ol className="mx-auto mt-10 max-w-3xl">
          {processSteps.map((step, i) => {
            return (
              <li key={step.title} className="relative grid grid-cols-[3.5rem_1fr] gap-4 sm:grid-cols-[4rem_1fr] sm:gap-6">
                {i < processSteps.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[1.35rem] top-12 w-px bg-[#FD6B04]/25 sm:left-[1.55rem]" />
                )}
                <div className="relative z-10 flex justify-center">
                  <span className="flex size-11 items-center justify-center rounded-full border-2 border-[#FD6B04] bg-white text-sm font-bold text-[#FD6B04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <article className="mb-8 rounded-xl border border-base-300 bg-white p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#FD6B04]">Step {i + 1}</p>
                      <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                    </div>
                    <span className="rounded-full bg-[#FD6B04]/10 px-3 py-1 text-sm font-medium text-[#D95A00]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-base-content/70">{step.text}</p>
                  <div className="mt-5 border-t border-base-300 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-base-content/60">What you get</p>
                    <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <Check />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Why it works */}
      <section className="rounded-2xl border border-base-300 bg-transparent px-6 py-10 md:px-10 md:py-14">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Why Our Process <span className="text-[#FD6B04]">Works</span>
          </h2>
          <p className="mt-2 text-base-content/70">The principles behind every project we deliver.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-[#FD6B04]/30 px-4 py-5 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#FD6B04]/10 text-[#FD6B04]">
                {v.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="rounded-2xl border border-base-300 bg-transparent px-6 py-10 text-center md:py-12">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to take the first step?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base-content/70">
            Book a free consultation and we&apos;ll show you exactly how we&apos;d approach your project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg rounded-xl border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#D95A00] hover:bg-[#D95A00]"
            >
              Book a Consultation
            </Link>
            <Link
              href="/packages"
              className="btn btn-lg rounded-xl border-[#FD6B04] bg-transparent text-[#FD6B04] hover:bg-[#FD6B04] hover:text-white"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
