"use client";

import { useEffect, useMemo, useState } from "react";

function getReviewText(r) {
  // Supports both shapes:
  // Yelp style: { text: "..." }
  // Angi/Google style: { review: "..." }
  const t = r?.text ?? r?.review ?? "";
  return typeof t === "string" ? t : "";
}

function getReviewLocation(r) {
  // Supports { city: "Reno, NV" } or { location: "Beresford Park, San Mateo, CA" }
  const loc = r?.city ?? r?.location ?? "";
  return typeof loc === "string" ? loc : "";
}

function truncateWords(str, maxWords = 40) {
  const safe = typeof str === "string" ? str : "";
  const words = safe.trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return safe.trim();
  return words.slice(0, maxWords).join(" ") + "…";
}

function StarRow({ rating = 5 }) {
  const r = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < r ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15.27 4.18 18.511 5.11 12.41.67 8.09 6.52 7.11 10 1.5l3.48 5.61 5.84.98-4.44 4.32.93 6.1z" />
        </svg>
      ))}
      <span className="ml-2 text-xs text-slate-500">{r.toFixed(1).replace(".0", "")}/5</span>
    </div>
  );
}

export default function ReviewCarousel({
  reviews = [],
  intervalMs = 5000,
  maxWords = 40,
  className = "",
}) {
  const safeReviews = useMemo(() => (Array.isArray(reviews) ? reviews : []), [reviews]);
  const [index, setIndex] = useState(0);

  // Keep index valid if list changes
  useEffect(() => {
    if (!safeReviews.length) return;
    setIndex((prev) => (prev >= safeReviews.length ? 0 : prev));
  }, [safeReviews.length]);

  // Auto-advance
  useEffect(() => {
    if (safeReviews.length <= 1) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeReviews.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [safeReviews.length, intervalMs]);

  if (!safeReviews.length) {
    return (
      <div className={`rounded-2xl border bg-white p-6 text-sm text-slate-600 shadow-sm ${className}`}>
        No reviews yet — check back soon.
      </div>
    );
  }

  const r = safeReviews[index];
  const name = r?.name ?? "Customer";
  const source = r?.source ?? "";
  const date = r?.date ?? "";
  const location = getReviewLocation(r);
  const rating = r?.rating ?? 5;

  const rawText = getReviewText(r);
  const clipped = truncateWords(rawText, maxWords);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
        {/* subtle top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600" />

        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <StarRow rating={rating} />

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="text-lg font-semibold text-slate-900">{name}</div>

                {location ? (
                  <div className="text-sm text-slate-500">• {location}</div>
                ) : null}

                {date ? (
                  <div className="text-sm text-slate-500">• {date}</div>
                ) : null}
              </div>
            </div>

            {source ? (
              <div className="inline-flex w-fit items-center rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                {source} Review
              </div>
            ) : null}
          </div>

          <p className="mt-4 text-base leading-relaxed text-slate-700">
            <span className="text-slate-400">“</span>
            {clipped || "Great experience — highly recommended!"}
            <span className="text-slate-400">”</span>
          </p>

          {/* Dots */}
          {safeReviews.length > 1 ? (
            <div className="mt-6 flex items-center justify-center gap-2">
              {safeReviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-blue-600" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
