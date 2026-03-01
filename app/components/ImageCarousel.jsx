"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function ImageCarousel({
  images = [],
  alt = "Project images",
  intervalMs = 5000,
}) {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(t);
  }, [safeImages.length, intervalMs]);

  if (!safeImages.length) return null;

  const current = safeImages[index];

  return (
    <div className="relative h-full w-full">
      <Image
        src={current}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
        priority={index === 0}
      />

      {/* Dots */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-3 py-2">
          {safeImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
