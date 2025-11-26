"use client";

import { useEffect, useState } from "react";

export default function ImageCarousel({
  images,
  alt = "Service photo",
  intervalMs = 5000,
}) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="mt-8">
      <div className="relative w-full overflow-hidden rounded-lg border border-slate-200 bg-black">
        {images.map((src, i) => {
          const encodedSrc = encodeURI(src);
          return (
            <img
              key={src + i}
              src={encodedSrc}
              alt={alt}
              className={`w-full h-auto object-contain transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            />
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-blue-600" : "bg-slate-300"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
