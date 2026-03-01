"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ImageCarousel({
  images = [],
  alt = "Project photos",
  intervalMs = 5000,
  height = 400,

  // New options (you can ignore these in your pages)
  showControls = true,
  showDots = true,
  pauseOnHover = true,
  pauseOnInteractionMs = 12000, // pause for 12s after any manual action
  maxWidthPercent = 66, // shrink images to 66% width (matches what you wanted)
}) {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimeoutRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Keep index valid if images change
  useEffect(() => {
    if (index >= safeImages.length) setIndex(0);
  }, [safeImages.length, index]);

  // Auto-advance
  useEffect(() => {
    if (!safeImages.length) return;
    if (isPaused) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [safeImages.length, intervalMs, isPaused]);

  const scheduleResumeAfterInteraction = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    setIsPaused(true);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, pauseOnInteractionMs);
  };

  const goPrev = () => {
    if (!safeImages.length) return;
    setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    scheduleResumeAfterInteraction();
  };

  const goNext = () => {
    if (!safeImages.length) return;
    setIndex((i) => (i + 1) % safeImages.length);
    scheduleResumeAfterInteraction();
  };

  const goTo = (i) => {
    setIndex(i);
    scheduleResumeAfterInteraction();
  };

  const onMouseEnter = () => {
    if (!pauseOnHover) return;
    setIsPaused(true);
  };

  const onMouseLeave = () => {
    if (!pauseOnHover) return;
    // If they interacted recently, let the interaction timer control resume
    if (pauseTimeoutRef.current) return;
    setIsPaused(false);
  };

  // Basic swipe support (mobile)
  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches?.[0]?.clientX ?? null;
    // when user touches, pause immediately (feels better)
    scheduleResumeAfterInteraction();
  };

  const onTouchEnd = (e) => {
    const startX = touchStartXRef.current;
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    touchStartXRef.current = null;
    if (startX == null || endX == null) return;

    const dx = endX - startX;
    const threshold = 45; // px
    if (Math.abs(dx) < threshold) return;

    if (dx > 0) goPrev();
    else goNext();
  };

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  if (!safeImages.length) {
    return null;
  }

  const current = safeImages[index];

  return (
    <section className="mt-10">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        style={{ height }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Image wrapper (keeps your "full image, no cropping" behavior) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative h-full"
            style={{ width: `${maxWidthPercent}%` }}
          >
            <Image
              key={current}
              src={current}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 900px"
              priority={false}
            />
          </div>
        </div>

        {/* Controls */}
        {showControls && safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5 text-slate-800">
                <path
                  fill="currentColor"
                  d="M12.8 15.3a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.4 1.4L8.5 10l4.3 4.3a1 1 0 0 1 0 1.4z"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5 text-slate-800">
                <path
                  fill="currentColor"
                  d="M7.2 4.7a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4L11.5 10 7.2 5.7a1 1 0 0 1 0-1.4z"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {showDots && safeImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* “Paused” subtle indicator (optional, but nice UX) */}
        {safeImages.length > 1 && isPaused && (
          <div className="absolute top-3 right-3 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            Paused
          </div>
        )}
      </div>
    </section>
  );
}
