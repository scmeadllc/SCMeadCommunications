// app/testimonials/page.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { allReviews } from "../data/reviews";

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
        >
          <path d="M10 15.27 4.18 18.5l1.11-6.49L.59 7.51l6.52-.95L10 .67l2.89 5.89 6.52.95-4.7 4.5 1.11 6.49L10 15.27z" />
        </svg>
      ))}
    </div>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function TestimonialsPage() {
  const list = Array.isArray(allReviews) ? allReviews : [];

  return (
    <>
      <Header />

      {/* Push content below fixed header */}
      <main className="min-h-screen bg-slate-50 pt-24">
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Testimonials
                </p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                  What Clients Are Saying
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                  A collection of feedback from homeowners and businesses we’ve worked with across
                  Northern Nevada and beyond.
                </p>
              </div>

              <div className="mt-2 flex items-center gap-3 md:mt-0">
                <div className="rounded-full border bg-slate-50 px-4 py-2 text-sm text-slate-700">
                  {list.length} review{list.length === 1 ? "" : "s"}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {list.map((r) => (
                <article
                  key={r.id || `${r.source}-${r.name}-${r.text?.slice?.(0, 12)}`}
                  className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <Stars rating={r.rating ?? 5} />
                        <span className="text-xs font-semibold text-slate-500">
                          {r.source || "Review"}
                        </span>
                      </div>

                      <div className="mt-2 text-base font-semibold text-slate-900">
                        {r.name || "Client"}
                      </div>

                      <div className="mt-1 text-xs text-slate-500">
                        {(r.city || r.location || "").trim()}
                        {r.date ? (
                          <>
                            <span className="mx-2">•</span>
                            {formatDate(r.date)}
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    {r.text || r.review || ""}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-slate-900 px-6 py-6 text-white md:px-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-lg font-semibold">Want results like these?</div>
                  <div className="mt-1 text-sm text-slate-200">
                    Tell us what you’re working on and we’ll get back to you quickly.
                  </div>
                </div>
                <a
                  href="/#contact"
                  className="inline-flex w-fit items-center justify-center rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400"
                >
                  Request a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
