import Header from "./components/header";
import Footer from "./components/footer";
import { reviews } from "./data/reviews";

function StarRow({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
        >
          <path d="M10 15.27 4.18 18.5l1.11-6.49L.59 7.51l6.52-.95L10 .67l2.89 5.89 6.52.95-4.7 4.5 1.11 6.49z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  const safeReviews = Array.isArray(reviews) ? reviews : [];
  const featured = safeReviews[0];

  return (
    <>
      <Header />

      {/* Offset for fixed header */}
      <main className="pt-28 md:pt-32">

        {/* HERO */}
        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Structured Cabling & Low Voltage Done Right
            </h1>
            <p className="mt-6 max-w-2xl text-slate-300 text-lg">
              Clean installs. Reliable systems. Honest pricing.
              Serving Reno, Sparks, Carson City and surrounding areas.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
              >
                Request a Free Estimate
              </a>

              <a
                href="tel:7753033269"
                className="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
              >
                Call (775) 303-3269
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Services
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border p-6 shadow-sm">
                <h3 className="font-semibold text-lg">Structured Cabling</h3>
                <p className="mt-3 text-slate-600 text-sm">
                  Ethernet drops, patch panels, clean terminations and labeled installs.
                </p>
              </div>

              <div className="rounded-xl border p-6 shadow-sm">
                <h3 className="font-semibold text-lg">WiFi & Network Setup</h3>
                <p className="mt-3 text-slate-600 text-sm">
                  Access points, router configuration, and optimized home/business coverage.
                </p>
              </div>

              <div className="rounded-xl border p-6 shadow-sm">
                <h3 className="font-semibold text-lg">CCTV & Security</h3>
                <p className="mt-3 text-slate-600 text-sm">
                  Clean camera installs with reliable recording and remote access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED REVIEW */}
        {featured && (
          <section className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-20">
              <h2 className="text-3xl font-bold text-slate-900">
                What Clients Are Saying
              </h2>

              <div className="mt-10 max-w-3xl rounded-2xl bg-white p-8 shadow-sm border">
                <StarRow rating={featured.rating || 5} />

                <p className="mt-6 text-slate-700 leading-relaxed">
                  {featured.text}
                </p>

                <div className="mt-6 text-sm text-slate-500">
                  <span className="font-semibold text-slate-900">
                    {featured.name}
                  </span>
                  {featured.location && ` • ${featured.location}`}
                  {featured.source && ` • ${featured.source}`}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/testimonials"
                  className="text-blue-600 font-semibold hover:text-blue-500"
                >
                  View All Reviews →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT SECTION */}
        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <h2 className="text-3xl font-bold text-slate-900">
              Let’s Get Your Project Done Right
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl">
              Whether it’s a clean Ethernet run, access point install,
              or full low-voltage setup — we’ll make sure it’s done
              efficiently and professionally.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:7753033269"
                className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
              >
                Call Now
              </a>

              <a
                href="mailto:info@scmeadcommunications.com"
                className="rounded-md border px-6 py-3 font-semibold hover:bg-slate-50"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
