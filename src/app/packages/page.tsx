import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Subscription from "@/components/Subscription";

export const metadata: Metadata = { title: "Packages" };

const planNames = ["Basic", "Pro", "Enterprise"] as const;
const POPULAR = 1; // index of "Pro"

// true = included, false = not included, string = value shown in the cell
const comparison: { feature: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { feature: "Users", values: ["1", "5", "Unlimited"] },
  { feature: "Core features", values: [true, true, true] },
  { feature: "Support", values: ["Email", "Priority", "Dedicated 24/7"] },
  { feature: "Analytics", values: ["Basic", "Advanced", "Advanced"] },
  { feature: "Custom integrations", values: [false, true, true] },
  { feature: "SLA guarantee", values: [false, false, true] },
  { feature: "Custom solutions", values: [false, false, true] },
  { feature: "Free trial", values: [false, true, false] },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes. You can upgrade or downgrade at any time, and the price difference is adjusted on your next bill.",
  },
  {
    q: "How does the yearly discount work?",
    a: "Paying yearly saves you 20% compared with paying month by month for the same plan.",
  },
  {
    q: "Is there a free trial?",
    a: "The Pro plan comes with a free trial so you can try every feature before you pay.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept major credit and debit cards, bank transfer and popular mobile payment services.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. There are no long-term contracts, and you keep access until the end of your billing period.",
  },
];

const delay = (i: number, step = 80): CSSProperties => ({ animationDelay: `${i * step}ms` });
const fadeUp = "animate-fade-up motion-reduce:animate-none";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-[#FD6B04] text-white" aria-label="Included">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="size-3.5" aria-hidden="true">
          <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="text-base-content/30" aria-label="Not included">
        —
      </span>
    );
  }
  return <span className="font-medium">{value}</span>;
}

export default function PackagesPage() {
  return (
    <div className="space-y-8 [&>*:first-child]:mt-0">
      {/* Pricing cards with Monthly / Yearly toggle (same as the home page) */}
      <Subscription />

      {/* Comparison table */}
      <section className={`${fadeUp} rounded-box bg-base-100 p-6 shadow md:p-10`}>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Compare <span className="text-[#FD6B04]">Plans</span>
          </h2>
          <p className="mt-2 text-base-content/70">See exactly what you get with each package.</p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-0 text-center">
            <thead>
              <tr>
                <th className="w-2/5 p-4 text-left text-base-content/70">Features</th>
                {planNames.map((name, i) => (
                  <th
                    key={name}
                    className={`p-4 text-lg font-bold ${i === POPULAR ? "rounded-t-2xl bg-[#FD6B04] text-white" : ""}`}
                  >
                    {name}
                    {i === POPULAR && <span className="block text-xs font-medium text-white/80">Most Popular</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, r) => (
                <tr key={row.feature} className="transition-colors hover:bg-[#FD6B04]/5">
                  <td className="border-t border-base-300 p-4 text-left font-medium">{row.feature}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`border-t border-base-300 p-4 ${i === POPULAR ? "bg-[#FD6B04]/10" : ""} ${
                        i === POPULAR && r === comparison.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                    >
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-box bg-base-100 p-6 shadow md:p-10">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#FD6B04]/10 px-4 py-1.5 text-sm font-semibold text-[#FD6B04]">FAQ</span>
          <h2 className="mt-3 text-2xl font-extrabold md:text-4xl">
            Frequently Asked <span className="text-[#FD6B04]">Questions</span>
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`${fadeUp} collapse collapse-arrow rounded-2xl border border-base-300 bg-base-100 transition-colors hover:border-[#FD6B04] has-[input:checked]:border-[#FD6B04] has-[input:checked]:bg-[#FD6B04]/5`}
              style={delay(i)}
            >
              <input type="radio" name="packages-faq" defaultChecked={i === 0} aria-label={f.q} />
              <div className="collapse-title pr-12 font-semibold">{f.q}</div>
              <div className="collapse-content text-base-content/70">
                <p>{f.a}</p>
              </div>
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
          <h2 className="text-3xl font-extrabold md:text-4xl">Not sure which plan is right?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Tell us about your business and we&apos;ll help you pick the package that fits best.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg rounded-xl border-white bg-white text-[#FD6B04] hover:border-white hover:bg-white/90"
            >
              Talk to Sales
            </Link>
            <Link
              href="/process"
              className="btn btn-lg rounded-xl border-white bg-transparent text-white hover:bg-white hover:text-[#FD6B04]"
            >
              See Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
