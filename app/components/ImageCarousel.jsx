"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ImageCarousel({
  images = [],
  alt = "Project images",
  intervalMs = 5000,

  // NEW: control sizing globally, without editing pages
  mode = "contain", // "contain" (no crop) or "cover" (uniform crop)
  heightClass = "h-80 md:h-96", // uniform size across pages
  frameClassName = "",
}) {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [safeImages.length, intervalMs]);

  useEffect(() => {
    // reset index if images change
    setIndex(0);
  }, [safeImages.join("|")]);

  if (!safeImages.length) return null;

  const objectMode = mode === "cover" ? "object-cover" : "object-contain";
  const bg = mode === "cover" ? "" : "bg-slate-100";

  return (
    <section className={cx("mt-10", frameClassName)}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* IMPORTANT: This wrapper provides the height so Image fill can render */}
        <div className={cx("relative w-full", heightClass, bg)}>
          <Image
            src={safeImages[index]}
            alt={alt}
            fill
            sizes="100vw"
            className={cx(objectMode)}
            priority={index === 0}
          />

          {/* Dots */}
          {safeImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-black/40 px-3 py-2">
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className={cx(
                    "h-2 w-2 rounded-full transition",
                    i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
