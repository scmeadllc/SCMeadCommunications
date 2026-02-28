import Header from "./components/header";
import Footer from "./components/footer";
import { reviews } from "./data/reviews";

function StarRow({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15.27 4.18 18.5l1.11-6.49L.59 7.51l6.52-.95L10 .67l2.89 5.89 6.52.95-4.7 4.5 1.11 6.49z" />
        </svg>
      ))}
    </div>
  );
}

function SourceBadge({ source }) {
  const map = {
    Google: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Yelp: "bg-red-50 text-red-700 ring-red-200",
    Angi: "bg-blue-50 text-blue-700 ring-blue-200",
    Facebook: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    Other: "bg-slate-50 text-slate-700 ring-slate-200",
  };

  const cls = map[source] ?? map.Other;

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${cls}`}>
      {source}
    </span>
  );
}

function formatDate(iso) {
  if (!iso) return "";
  // iso like "2026-02-27"
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function TestimonialsPage() {
  const safeReviews = Array.isArray(reviews) ? reviews : [];

  const total = safeReviews.length;
  const avg =
    total === 0
      ? 5
      : Math.round(
          (safeReviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0) / total) * 10
        ) / 10;

  const sources = [...new Set(safeReviews.map((r) => r.source).filter(Boolean))];

  const featured =
    safeReviews.find((r) => r.source === "Yelp") ||
    safeReviews[0] ||
    {
      name: "Client",
      location: "Northern Nevada",
      source: "Google",
      rating: 5,
      date: "",
      text: "We’re proud to be the call you make when you want clean, reliable low-voltage work done right.",
    };

  return (
    <>
      <Header />

      {/* IMPORTANT: fixed header spacing */}
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 md:pt-32">
        {/* Hero */}
        <section className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Testimonials
                </p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  What Clients Are Saying
                </h1>
                <p className="mt-3 text-sm text-slate-600 md:text-base">
                  A few words from homeowners and businesses we’ve worked with across Northern Nevada.
                  Clean installs, honest quotes, and work that’s built to last.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm">
                    <StarRow rating={Math.round(avg)} />
                    <span className="font-semibold">{avg}</span>
                    <span className="text-slate-500">average</span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm">
                    <span className="font-semibold">{total}</span>
                    <span className="text-slate-500">reviews</span>
                  </div>

                  {sources.length > 0 && (
                    <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm">
                      <span className="text-slate-500">Sources:</span>
                      {sources.map((s) => (
                        <SourceBadge key={s} source={s} />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-500"
                >
                  Request a Free Estimate
                </a>
                <a
                  href="tel:7753033269"
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Call: (775) 303-3269
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <StarRow rating={featured.rating || 5} />
                      <SourceBadge source={featured.source || "Other"} />
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-slate-900 md:text-2xl">
                      “{featured.text?.slice(0, 120)}{featured.text?.length > 120 ? "…" : ""}”
                    </h2>

                    <p className="mt-3 text-sm text-slate-600">
                      {featured.text}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">{featured.name}</span>
                      <span className="text-slate-400">•</span>
                      <span>{featured.location}</span>
                      {featured.date ? (
                        <>
                          <span className="text-slate-400">•</span>
                          <span>{formatDate(featured.date)}</span>
                        </>
                      ) : null}
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10 text-slate-200"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h7v-6H6.5a.5.5 0 0 1-.5-.5v-.33A2.17 2.17 0 0 1 8.17 9H9V6H7.17Zm14 0A5.17 5.17 0 0 0 16 11.17V18h7v-6h-2.5a.5.5 0 0 1-.5-.5v-.33A2.17 2.17 0 0 1 22.17 9H23V6h-1.83Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">What you can expect</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  Clear communication and upfront pricing.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  Clean runs, labeled terminations, and tidy installs.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  Reliable systems that are easy to service later.
                </li>
              </ul>

              <div className="mt-6 rounded-xl bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Service Area
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  Reno • Sparks • Carson City • Surrounding areas
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">All Reviews</h2>
              <p className="mt-1 text-sm text-slate-600">
                Real feedback from real customers.
              </p>
            </div>

            <a href="/#contact" className="text-sm font-semibold text-blue-700 hover:text-blue-600">
              Work with us →
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safeReviews.map((r) => (
              <article key={r.id ?? `${r.name}-${r.date}-${r.source}`} className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <StarRow rating={r.rating || 5} />
                    <SourceBadge source={r.source || "Other"} />
                  </div>
                  {r.date ? (
                    <span className="text-xs text-slate-500">{formatDate(r.date)}</span>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {r.text}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold text-slate-900">{r.name}</span>
                  {r.location ? (
                    <>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600">{r.location}</span>
                    </>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
