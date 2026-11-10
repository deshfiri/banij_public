"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { processSteps as steps } from "@/lib/process";

// One icon per step, in the same order as processSteps.
const STEP_ICONS: string[][] = [
  ["M21 12a8 8 0 01-11.8 7L4 20l1.1-4.6A8 8 0 1121 12zM8 10h8M8 14h5"], // chat
  ["M11 4a7 7 0 105.3 11.6L21 20M11 8v6M8 11h6"], // research
  ["M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6"], // document
  ["M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"], // tools
  ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4"], // shield check
  [
    "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z",
    "M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z",
  ], // rocket
];

function Icon({ paths, className = "size-6" }: { paths: string[]; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const CHECK = ["M5 12.5l4.5 4.5L19 7.5"];
const ARROW_LEFT = ["M19 12H5M11 6l-6 6 6 6"];
const ARROW_RIGHT = ["M5 12h14M13 6l6 6-6 6"];

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProcessSlider() {
  const [active, setActive] = useState(0);
  const last = steps.length - 1;
  const step = steps[active];
  const next = steps[active + 1];
  const progress = (active / last) * 100;

  const go = (i: number, focus = false) => {
    const n = Math.max(0, Math.min(last, i));
    setActive(n);
    if (focus) document.getElementById(`process-tab-${n}`)?.focus();
  };

  const onTabKey = (e: KeyboardEvent) => {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: last };
    if (e.key in map) {
      e.preventDefault();
      go(map[e.key], true);
    }
  };

  return (
    <section className="rounded-box border border-base-300 bg-base-100 px-6 py-10 shadow-xs md:px-10 md:py-14">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full bg-[#FD6B04]/10 px-4 py-1.5 text-sm font-semibold text-[#FD6B04]">
            How we work
          </span>
          <h2 className="mt-3 text-2xl font-extrabold md:text-4xl">
            Our <span className="text-[#FD6B04]">Process</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base-content/70 md:mx-0">
            {steps.length} simple steps from our first conversation to launch and beyond. You always know what
            happens next.
          </p>
        </div>
        <div className="flex justify-center gap-2 md:justify-end">
          <span className="rounded-full bg-base-200 px-4 py-2 text-sm font-semibold">{steps.length} steps</span>
          <span className="rounded-full bg-base-200 px-4 py-2 text-sm font-semibold">≈ 2–6 weeks total</span>
        </div>
      </div>

      {/* ───────── Desktop: interactive stepper + detail panel ───────── */}
      <div className="hidden md:block">
        <div className="relative mt-12">
          {/* Progress line runs between the first and last circle centres */}
          <div
            aria-hidden="true"
            className="absolute top-6 h-1 rounded-full bg-base-300"
            style={{ left: `${50 / steps.length}%`, right: `${50 / steps.length}%` }}
          >
            <div
              className="h-full rounded-full bg-[#FD6B04] transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div role="tablist" aria-label="Process steps" className="relative grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            {steps.map((s, i) => {
              const current = i === active;
              const done = i < active;
              return (
                <button
                  key={s.title}
                  id={`process-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={current}
                  aria-controls="process-panel"
                  tabIndex={current ? 0 : -1}
                  onClick={() => go(i)}
                  onKeyDown={onTabKey}
                  className="group flex cursor-pointer flex-col items-center gap-2 rounded-xl px-1 pb-2 text-center outline-none focus-visible:ring-2 focus-visible:ring-[#FD6B04]"
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      current
                        ? "scale-110 border-[#FD6B04] bg-[#FD6B04] text-white shadow-sm shadow-[#FD6B04]/15"
                        : done
                          ? "border-[#FD6B04] bg-base-100 text-[#FD6B04]"
                          : "border-base-300 bg-base-100 text-base-content/50 group-hover:border-[#FD6B04]/60 group-hover:text-[#FD6B04]"
                    }`}
                  >
                    {done ? <Icon paths={CHECK} className="size-5" /> : <Icon paths={STEP_ICONS[i]} className="size-5" />}
                  </span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-base-content/50">
                    Step {pad(i + 1)}
                  </span>
                  <span className={`text-sm font-bold leading-tight ${current ? "text-[#FD6B04]" : ""}`}>{s.title}</span>
                  <span className="text-xs text-base-content/60">{s.duration}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel for the selected step */}
        <div
          id="process-panel"
          role="tabpanel"
          aria-labelledby={`process-tab-${active}`}
          className="mt-8 rounded-2xl border border-base-300 bg-base-200 p-8"
        >
          <div key={active} className="flex animate-fade-up gap-6 motion-reduce:animate-none">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#FD6B04] text-white shadow-sm shadow-[#FD6B04]/15">
              <Icon paths={STEP_ICONS[active]} className="size-8" />
            </span>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-[#FD6B04]">
                  Step {active + 1} of {steps.length}
                </span>
                <span className="rounded-full bg-base-100 px-3 py-0.5 text-xs font-semibold">⏱ {step.duration}</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-base-content/75">{step.text}</p>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-base-content/60">What you get</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {step.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 rounded-xl bg-base-100 px-4 py-3 text-sm font-medium">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#FD6B04]/15 text-[#FD6B04]">
                      <Icon paths={CHECK} className="size-4" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-base-300 pt-6">
            <button
              type="button"
              onClick={() => go(active - 1)}
              disabled={active === 0}
              className="btn gap-2 border-[#FD6B04] bg-transparent text-[#FD6B04] shadow-none hover:border-[#E35F00] hover:bg-[#FD6B04] hover:text-white disabled:border-[#FD6B04]/30 disabled:bg-transparent disabled:text-[#FD6B04]/40"
            >
              <Icon paths={ARROW_LEFT} className="size-4" />
              Previous
            </button>

            {next ? (
              <button type="button" onClick={() => go(active + 1)} className="btn border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#E35F00] hover:bg-[#E35F00] gap-2">
                Next: {next.title}
                <Icon paths={ARROW_RIGHT} className="size-4" />
              </button>
            ) : (
              <Link href="/contact" className="btn border-[#FD6B04] bg-[#FD6B04] text-white hover:border-[#E35F00] hover:bg-[#E35F00] gap-2">
                Start your project
                <Icon paths={ARROW_RIGHT} className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ───────── Mobile: vertical timeline, every step visible ───────── */}
      <ol className="mt-8 space-y-5 md:hidden">
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-4">
            {i < last && (
              <span aria-hidden="true" className="absolute -bottom-5 left-[1.375rem] top-12 w-0.5 bg-[#FD6B04]/30" />
            )}
            <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FD6B04] text-white shadow-sm shadow-[#FD6B04]/15">
              <Icon paths={STEP_ICONS[i]} className="size-5" />
            </span>
            <div className="flex-1 rounded-2xl border border-base-300 bg-base-200 p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#FD6B04]">Step {pad(i + 1)}</span>
                <span className="rounded-full bg-base-100 px-2.5 py-0.5 text-xs font-semibold">⏱ {s.duration}</span>
              </div>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-base-content/75">{s.text}</p>
              <ul className="mt-3 space-y-1.5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm">
                    <Icon paths={CHECK} className="size-4 shrink-0 text-[#FD6B04]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex justify-center border-t border-base-300 pt-8">
        <Link
          href="/process"
          className="group btn gap-2 rounded-xl border-[#FD6B04] bg-transparent px-6 text-[#FD6B04] shadow-none hover:border-[#E35F00] hover:bg-[#FD6B04] hover:text-white"
        >
          See the full process in detail
          <Icon paths={ARROW_RIGHT} className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
