import Link from "next/link";
import type { CSSProperties } from "react";
import ClientBenefits from "@/components/ClientBenefits";
import ClientLogos from "@/components/ClientLogos";
import ProcessSlider from "@/components/ProcessSlider";
import Subscription from "@/components/Subscription";
import { siteName } from "@/lib/site";

const delay = (i: number, step = 100): CSSProperties => ({ animationDelay: `${i * step}ms` });
const fadeUp = "animate-fade-up motion-reduce:animate-none";
const accent = "text-[#FD6B04]";

// TODO: replace with your real numbers.
const heroStats = [
  { value: "120+", label: "Happy clients" },
  { value: "300+", label: "Projects delivered" },
  { value: "8+", label: "Years experience" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-box bg-base-100 shadow">
        <div className="relative grid items-center gap-12 p-6 md:p-12 lg:grid-cols-2">
          {/* Left 50%: heading, text, buttons */}
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
                Get Started
              </Link>
              <Link
                href="/process"
                className="btn btn-lg rounded-xl border-[#FD6B04] bg-transparent text-[#FD6B04] hover:bg-[#FD6B04] hover:text-white"
              >
                Our Process
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-base-300 pt-6 lg:justify-start">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className={`text-2xl font-extrabold ${accent}`}>{s.value}</p>
                  <p className="text-sm text-base-content/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right 50%: YouTube video in an orange frame */}
          <div className={`${fadeUp} relative mx-auto w-full max-w-2xl`} style={delay(2)}>
            
              <div className="aspect-video w-full overflow-hidden rounded-[0.50rem] bg-base-300">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/I-PXTCDFXNI?autoplay=1&mute=1&loop=1&playlist=I-PXTCDFXNI&rel=0&modestbranding=1&playsinline=1"
                  title={`${siteName} introduction video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            

            {/* Floating badges */}
            {/* <div className="absolute -left-3 -top-5 hidden animate-float items-center gap-3 rounded-2xl bg-base-100 px-4 py-3 shadow-xl motion-reduce:animate-none sm:flex md:-left-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#FD6B04]/10 text-[#FD6B04]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5" aria-hidden="true">
                  <path d="M3 17l6-6 4 4 8-8M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold">Business Growth</p>
                <p className="text-xs text-base-content/70">Results you can see</p>
              </div>
            </div> */}
            {/* <div
              className="absolute -bottom-5 -right-3 hidden animate-float items-center gap-3 rounded-2xl bg-base-100 px-4 py-3 shadow-xl motion-reduce:animate-none sm:flex md:-right-6"
              style={{ animationDelay: "-3s" }}
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#FD6B04] text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                  <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold">98% Satisfaction</p>
                <p className="text-xs text-base-content/70">From 120+ clients</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <ClientLogos />

    

      <ProcessSlider />
        <ClientBenefits />

      <Subscription />
    </>
  );
}
