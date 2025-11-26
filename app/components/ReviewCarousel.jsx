"use client";

import { useEffect, useState } from "react";
import { allReviews } from "../data/reviews";

function truncateWords(text, maxWords) {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

export default function ReviewCarousel({
  limit = 5,
  truncateToWords = 40,
  autoAdvanceMs = 3000,
}) {
  const reviews = allReviews.slice(0, limit);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, autoAdvanceMs);

    return () => clearInterval(id);
  }, [reviews.length, autoAdvanceMs]);

  const current = reviews[index];
  const stars = "★★★★★".slice(0, current.rating || 5);

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">
          What Clients Are Saying
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          A few words from homeowners and businesses we&apos;ve worked with in
          Northern Nevada.
        </p>

        <div className="mt-6 rounded-lg border bg-slate-50 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-yellow-500 text-sm">{stars}</div>
              <p className="mt-2 text-sm text-slate-800 italic">
                “{truncateWords(current.review, truncateToWords)}”
              </p>
              <p className="mt-3 text-xs font-semibold text-slate-700">
                {current.name}
                {current.city ? ` • ${current.city}` : ""}{" "}
                <span className="ml-1 text-[10px] uppercase tracking-wide text-slate-500">
                  {current.source} Review
                </span>
              </p>
            </div>

            <div className="hidden text-right text-[11px] text-slate-500 md:block">
              <div>
                Review {index + 1} of {reviews.length}
              </div>
              <div>Auto-rotating every 3 seconds</div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-blue-600" : "bg-slate-300"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <a
            href="/testimonials"
            className="text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            Read more reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
