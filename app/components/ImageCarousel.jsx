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

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [safeImages.length, intervalMs]);

  if (!safeImages.length) return null;

  return (
    <div className="relative w-full h-full">
      <Image
        src={safeImages[index]}
        alt={alt}
        fill
        className="object-contain bg-slate-100"
        sizes="100vw"
        priority
      />

      {/* Navigation dots */}
      {safeImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-3 py-1.5 rounded-full">
          {safeImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
