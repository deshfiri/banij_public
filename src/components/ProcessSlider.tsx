"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { processSteps as steps } from "@/lib/process";

export default function ProcessSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [progress, setProgress] = useState(0); // 0 → 1
  const [thumbSize, setThumbSize] = useState(1); // fraction of the track

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setThumbSize(el.scrollWidth ? Math.min(1, el.clientWidth / el.scrollWidth) : 1);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  // Click or drag on the bar to scroll the cards.
  const scrollToPointer = (clientX: number) => {
    const el = scrollerRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const thumbPx = rect.width * thumbSize;
    const ratio = (clientX - rect.left - thumbPx / 2) / (rect.width - thumbPx || 1);
    el.scrollLeft = Math.max(0, Math.min(1, ratio)) * (el.scrollWidth - el.clientWidth);
  };

  const scrollable = thumbSize < 1;

  return (
    <section className="relative mt-8 overflow-hidden rounded-box bg-base-100 p-6 shadow md:p-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-16 size-56 animate-float rounded-full bg-[#FD6B04]/10 motion-reduce:animate-none" />
        <div
          className="absolute -bottom-20 left-1/4 size-48 animate-float rounded-full bg-[#FD6B04]/10 motion-reduce:animate-none"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="relative mb-8 text-center md:text-left">
        <span className="inline-block rounded-full bg-[#FD6B04]/10 px-4 py-1.5 text-sm font-semibold text-[#FD6B04]">
          How we work
        </span>
        <h2 className="mt-3 text-2xl font-extrabold md:text-4xl">
          Our <span className="text-[#FD6B04]">Process</span>
        </h2>
        <p className="mt-2 text-base-content/70">Clear steps from first conversation to launch and beyond.</p>
      </div>

      <div
        id="process-steps"
        ref={scrollerRef}
        onScroll={update}
        className="relative flex flex-col items-center py-2 md:snap-x md:snap-mandatory md:flex-row md:items-stretch md:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step, i) => (
          <Fragment key={step.title}>
            <article className="group w-full shrink-0 snap-start rounded-3xl border-2 border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FD6B04] hover:shadow-xl hover:shadow-[#FD6B04]/15 md:w-72">
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#FD6B04] text-lg font-bold text-white shadow-lg shadow-[#FD6B04]/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step.duration && (
                  <span className="rounded-full bg-[#FD6B04]/10 px-3 py-1 text-xs font-semibold text-[#FD6B04]">
                    {step.duration}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold transition-colors group-hover:text-[#FD6B04]">{step.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">{step.text}</p>
            </article>

            {i < steps.length - 1 && (
              <svg
                className="my-2 h-8 w-10 shrink-0 rotate-90 self-center text-[#FD6B04] md:mx-3 md:my-0 md:rotate-0"
                viewBox="0 0 40 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 12h34M28 4l8 8-8 8" />
              </svg>
            )}
          </Fragment>
        ))}
      </div>

      {/* Scrollbar like the sketch: rounded track with a pill-shaped thumb */}
      {scrollable && (
        <div
          ref={trackRef}
          role="scrollbar"
          aria-controls="process-steps"
          aria-orientation="horizontal"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="relative mt-6 h-2.5 cursor-pointer touch-none rounded-full bg-[#FD6B04]/10"
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            scrollToPointer(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && scrollToPointer(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          <div
            className="absolute inset-y-0 rounded-full bg-[#FD6B04]"
            style={{
              width: `${thumbSize * 100}%`,
              left: `${progress * (1 - thumbSize) * 100}%`,
            }}
          />
        </div>
      )}
    </section>
  );
}
