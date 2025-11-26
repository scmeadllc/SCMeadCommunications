"use client";

import { useEffect, useState } from "react";

const allReviews = [
  // Angi reviews
  {
    source: "Angi",
    name: "Robert E.",
    city: "Sparks, NV",
    rating: 5,
    review:
      "Shane did a great job. I had him extend my network in my home. He was professional and considerate while completing the work.",
  },
  {
    source: "Angi",
    name: "Ruell M.",
    city: "Sparks, NV",
    rating: 5,
    review: "Shane is excellent, prompt, professional and great quality.",
  },
  {
    source: "Angi",
    name: "Joe C.",
    city: "Reno, NV",
    rating: 5,
    review:
      "Quick, friendly. Helped with an additional issue and it made a huge difference! Would recommend!!",
  },
  {
    source: "Angi",
    name: "Lonnie R.",
    city: "Sparks, NV",
    rating: 5,
    review: "He got the job without calling people.",
  },
  {
    source: "Angi",
    name: "Grant S.",
    city: "Sparks, NV",
    rating: 5,
    review: "Good work and efficient.",
  },
  {
    source: "Angi",
    name: "Rafael P.",
    city: "Reno, NV",
    rating: 5,
    review: "Did a great job. Awesome work, would highly recommend.",
  },
  {
    source: "Angi",
    name: "Jody G.",
    city: "Reno, NV",
    rating: 5,
    review:
      "Shane did a fantastic job hanging many TVs and the associated sound bars throughout our new home. He is very professional and highly conscientious of the placement aesthetics including articulation, balance, and hiding wires. He answered all our questions and cleaned up as if he was never here.",
  },
  {
    source: "Angi",
    name: "Brent R.",
    city: "Reno, NV",
    rating: 5,
    review:
      "Provided the services as they were originally discussed. Arrived promptly and was very professional and courteous.",
  },
  {
    source: "Angi",
    name: "Steve A.",
    city: "Reno, NV",
    rating: 5,
    review: "They did a great job! Highly recommend them!!!",
  },
  {
    source: "Angi",
    name: "Jerry H.",
    city: "Reno, NV",
    rating: 5,
    review:
      "Shane is knowledgeable and professional. He came by to assess the work beforehand, was punctual, and very clear about his estimated costs.",
  },
  // Google reviews
  {
    source: "Google",
    name: "Paige B.",
    city: "Reno, NV",
    rating: 5,
    review:
      "Highly recommend! Sean did a great job for us. He was fast, efficient, and insisted on cleaning up all the mess left behind from running lines. Very happy we found him.",
  },
  {
    source: "Google",
    name: "Munro M. Bonnell",
    city: "Reno, NV",
    rating: 5,
    review:
      "Shane’s services were top notch! He assessed my network, gave me options, completed the work cleanly, communicated throughout, and verified full functionality. His installation of Ethernet wall plugs was super clean and professional. I highly recommend him!",
  },
];

export function getAllReviews() {
  return allReviews;
}

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
        <h2 className="text-2xl font-bold text-slate-900">What Clients Are Saying</h2>
        <p className="mt-2 text-sm text-slate-600">
          A few words from homeowners and businesses we&apos;ve worked with in Northern Nevada.
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
