import Header from "../components/Header";
import Footer from "../components/Footer";
import { allReviews } from "../data/reviews";

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
    </div>
  );
}

function getText(r) {
  const t = r?.text ?? r?.review ?? "";
  return typeof t === "string" ? t : "";
}

function getLocation(r) {
  const loc = r?.city ?? r?.location ?? "";
  return typeof loc === "string" ? loc : "";
}

function safeKey(r, idx) {
  // Prevent React key collisions when some reviews lack `id`
  const base =
    r?.id ||
    `${r?.source || "src"}-${r?.name || "name"}-${r?.date || "nodate"}-${idx}`;
  return base;
}

function toTime(dateStr) {
  if (!dateStr) return 0;
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}

export default function TestimonialsPage() {
  const list = Array.isArray(allReviews) ? allReviews : [];

  // 1) Pin Yelp review(s) to top (no dependency on exact id)
  const yelp = list.filter((r) => String(r?.source || "").toLowerCase() === "yelp");

  // 2) Everything else
  const rest = list.filter((r) => String(r?.source || "").toLowerCase() !== "yelp");

  // 3) Sort within groups by newest date first (if date exists)
  yelp.sort((a, b) => toTime(b?.date) - toTime(a?.date));
  rest.sort((a, b) => toTime(b?.date) - toTime(a?.date));

  const sorted = [...yelp, ...rest];

  return (
    <>
      <Header />

      {/* Push below fixed header */}
      <main className="min-h-screen bg-slate-50 pt-24">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Testimonials
                </p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                  What Clients Are Saying
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
                  Real feedback from homeowners and businesses we’ve worked with.
                </p>
              </div>

              <div className="rounded-full border bg-slate-50 px-4 py-2 text-sm text-slate-700">
                {sorted.length} Review{sorted.length === 1 ? "" : "s"}
              </div>
            </div>

            {/* Reviews grid */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {sorted.map((r, idx) => (
                <article
                  key={safeKey(r, idx)}
                  className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <StarRow rating={r?.rating ?? 5} />
                      <div className="mt-2 text-lg font-semibold text-slate-900">
                        {r?.name || "Customer"}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {getLocation(r)}
                        {r?.date ? (
                          <>
                            <span className="mx-2">•</span>
                            {r.date}
                          </>
                        ) : null}
                      </div>
                    </div>

                    {r?.source ? (
                      <div className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                        {r.source}
                      </div>
                    ) : null}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    {getText(r) || "Great experience — highly recommended!"}
                  </p>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-slate-900 px-8 py-8 text-white">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-semibold">Ready to get started?</div>
                  <div className="mt-1 text-sm text-slate-300">
                    Tell us about your project and we’ll follow up promptly.
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="inline-flex w-fit items-center justify-center rounded-md bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-400"
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
