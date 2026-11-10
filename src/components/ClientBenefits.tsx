"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// TODO: adjust the wording of the details to match your real services.
const clientBenefits = [
  {
    title: "Reach more customers",
    text: "A clear online presence helps the right people find your business and understand what you offer.",
    details: "We make your business easy to discover on search engines, social media and maps, so new customers find you when they are ready to buy.",
    points: ["Search-friendly website", "Consistent brand everywhere", "Local & social visibility"],
    icon: ["M17 20h5v-2a3 3 0 00-5.4-1.8M17 20H7m10 0v-2c0-.7-.1-1.3-.4-1.8M7 20H2v-2a3 3 0 015.4-1.8M7 20v-2c0-.7.1-1.3.4-1.8m0 0a5 5 0 019.2 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"],
  },
  {
    title: "Turn interest into sales",
    text: "Thoughtful design and messaging make it easier for visitors to take the next step and become customers.",
    details: "Clear pages, simple forms and strong calls to action guide visitors from first look to enquiry or purchase.",
    points: ["Clear calls to action", "Simple contact & checkout", "Messaging that builds trust"],
    icon: ["M3 3v18h18M7 15l4-4 3 3 6-6M15 8h5v5"],
  },
  {
    title: "Save time and grow steadily",
    text: "Reliable tools and ongoing support reduce everyday friction, so you can focus on running your business.",
    details: "We automate repetitive tasks and keep your tools running smoothly, so your team spends more time on customers.",
    points: ["Automated routine tasks", "Ongoing support & updates", "Tools that scale with you"],
    icon: ["M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2"],
  },
  {
    title: "Earn more money",
    text: "More customers, more sales and less wasted time add up to one result: higher, steadier income for your business.",
    details: "As visitors become paying customers and your costs go down, you keep more of what you earn every month.",
    points: ["More paying customers", "Lower running costs", "Growing monthly revenue"],
    icon: ["M12 21a9 9 0 100-18 9 9 0 000 18zM14.8 9.2A2.6 2.6 0 0012.4 8h-.8a2 2 0 000 4h.8a2 2 0 010 4h-.8a2.6 2.6 0 01-2.4-1.2M12 6.5V8m0 8v1.5"],
  },
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
const CHEVRON = ["M6 9l6 6 6-6"];
const ARROW = ["M5 12h14M13 6l6 6-6 6"];

const last = clientBenefits.length - 1;
const pad = (n: number) => String(n).padStart(2, "0");

export default function ClientBenefits() {
  // Only one card is open at a time; null = all closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Keep every closed card the same height on large screens (one row):
  // measure each summary and give them all the height of the tallest one.
  const summaryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [summaryHeight, setSummaryHeight] = useState<number>();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const measure = () => {
      if (!mq.matches) return setSummaryHeight(undefined);
      const heights = summaryRefs.current.map((el) => el?.offsetHeight ?? 0);
      setSummaryHeight(Math.max(...heights));
    };
    measure();
    const ro = new ResizeObserver(measure);
    summaryRefs.current.forEach((el) => el && ro.observe(el));
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, []);

  return (
    <section className="rounded-3xl border border-base-content/10 bg-base-100/60 px-6 py-10 backdrop-blur-md md:px-10 md:py-14">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-[#FD6B04]/25 bg-[#FD6B04]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FD6B04]">
          Business outcomes
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          How your business <span className="text-[#FD6B04]">benefits</span>
        </h2>
        <p className="mt-3 text-base-content/75">
          Each step builds on the one before, from reaching more customers all the way to earning more money.
        </p>
      </div>

      {/*
        Large screens: card → arrow → card … in one row (items-start, so only the opened card grows).
        Smaller screens: one column with downward arrows.
      */}
      <ol className="mx-auto mt-10 flex max-w-md flex-col lg:grid lg:max-w-none lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start">
        {clientBenefits.map((b, i) => {
          const isOpen = openIndex === i;
          const panelId = `benefit-details-${i}`;

          return (
            <Fragment key={b.title}>
              <li
                className={`flex flex-col rounded-2xl border bg-base-100 p-6 shadow-xs transition-[border-color,box-shadow] duration-300 ${
                  isOpen
                    ? "border-[#FD6B04]/60 shadow-sm shadow-[#FD6B04]/5"
                    : "border-base-content/10 hover:border-[#FD6B04]/40 hover:shadow-sm"
                }`}
              >
                {/* Summary — same height on every card */}
                <div style={{ minHeight: summaryHeight }}>
                  <div ref={(el) => void (summaryRefs.current[i] = el)}>
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-[#FD6B04]/10 text-[#FD6B04]">
                        <Icon paths={b.icon} />
                      </span>
                      <span className="text-sm font-bold text-base-content/30">{pad(i + 1)}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold leading-snug">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-base-content/75">{b.text}</p>
                  </div>
                </div>

                {/* Details — this card grows downward to show them */}
                <div
                  id={panelId}
                  inert={!isOpen}
                  className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-5 border-t border-base-content/10 pt-5">
                      <p className="text-sm leading-relaxed text-base-content/80">{b.details}</p>
                      <ul className="mt-4 space-y-2">
                        {b.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm">
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#FD6B04] text-white">
                              <Icon paths={CHECK} className="size-2.5" />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="mt-5 inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-lg text-sm font-semibold text-[#FD6B04] outline-none transition-colors hover:text-[#E35F00] focus-visible:ring-2 focus-visible:ring-[#FD6B04] focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
                >
                  {isOpen ? "Show less" : "Read more"}
                  <Icon paths={CHEVRON} className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </li>

              {/* Arrow to the next card — stays centred on the closed cards even when one is open */}
              {i < last && (
                <li
                  aria-hidden="true"
                  className="flex items-center justify-center py-3 lg:px-2 lg:py-0"
                  style={summaryHeight ? { marginTop: summaryHeight / 2 + 26 } : undefined}
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-[#FD6B04]/30 bg-base-100 text-[#FD6B04] shadow-xs">
                    <Icon paths={ARROW} className="size-4 rotate-90 lg:rotate-0" />
                  </span>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </section>
  );
}
