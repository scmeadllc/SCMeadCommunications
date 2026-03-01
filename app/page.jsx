"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReviewCarousel from "./components/ReviewCarousel";
import { reviews } from "./data/reviews";

/** ---------- Helpers ---------- **/
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function formatOneDecimal(n) {
  return (Math.round(n * 10) / 10).toFixed(1);
}

function Stars({ rating = 5 }) {
  const r = clamp(Number(rating) || 0, 0, 5);
  return (
    <div className="flex items-center gap-1" aria-label={`${r} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(r);
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`h-5 w-5 ${filled ? "text-amber-400" : "text-slate-200"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.374-2.452a1 1 0 00-1.176 0l-3.374 2.452c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.966z" />
          </svg>
        );
      })}
    </div>
  );
}

function useCountUp({ from = 0, to = 100, durationMs = 1100, decimals = 0 }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let raf = null;
    const start = performance.now();

    const tick = (now) => {
      const t = clamp((now - start) / durationMs, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = from + (to - from) * eased;

      if (decimals > 0) {
        const factor = Math.pow(10, decimals);
        setValue(Math.round(current * factor) / factor);
      } else {
        setValue(Math.round(current));
      }

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [from, to, durationMs, decimals]);

  return value;
}

/** ---------- Page ---------- **/
export default function Home() {
  // Your real-world ratings (from screenshots)
  const ratingAvg = 5.0;
  const totalReviews = 51;

  const platformBreakdown = useMemo(
    () => [
      { label: "Field Nation", rating: 5.0, count: 33 },
      { label: "Yelp", rating: 5.0, count: 2 },
      { label: "Google", rating: 5.0, count: 3 },
      { label: "Angi", rating: 5.0, count: 13 },
    ],
    []
  );

  const animatedRating = useCountUp({ from: 4.6, to: ratingAvg, durationMs: 1200, decimals: 1 });
  const animatedTotal = useCountUp({ from: 0, to: totalReviews, durationMs: 1200, decimals: 0 });

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Northern Nevada Low Voltage Contractor
              </p>
              <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Structured Cabling & CCTV You Can Depend On.
              </h1>
              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200">
                Professional low-voltage services for businesses and homeowners in Reno, Sparks,
                and Carson City. From clean, reliable cabling to CCTV systems that actually work
                when you need them.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-400"
                >
                  Request a Free Estimate
                </a>
                <div className="text-xs text-slate-300 md:text-sm">
                  In the industry since 2008 • Licensed & Insured
                </div>
              </div>
            </div>

            <div className="flex-1 rounded-lg border border-slate-700 bg-slate-900/50 p-5 text-sm text-slate-200">
              <h2 className="text-sm font-semibold text-blue-200">Service Area</h2>
              <p className="mt-2">Based in Reno, Nevada and serving nearby communities.</p>
              <ul className="mt-3 space-y-1 text-xs">
                <li>• Reno</li>
                <li>• Sparks</li>
                <li>• Carson City</li>
              </ul>
              <p className="mt-4 text-xs text-slate-300">
                Need work slightly outside these areas? Reach out and we’ll see what we can do.
              </p>
            </div>
          </div>
        </section>

        {/* Premium Ratings / Trust Section (Animated) */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              {/* Left */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Trusted Across Multiple Platforms
                </p>

                <div className="mt-3 flex flex-wrap items-end gap-3">
                  <div className="text-5xl font-extrabold tracking-tight text-slate-900">
                    {formatOneDecimal(animatedRating)}
                  </div>
                  <div className="pb-2 text-lg font-semibold text-slate-700">/ 5.0</div>
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <Stars rating={5} />
                  <span className="text-sm text-slate-600">
                    Average rating across {animatedTotal} verified reviews
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-sm text-slate-600">
                  Homeowners and businesses choose S. C. Mead Communications for clean installs,
                  clear communication, and results that last.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/testimonials"
                    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Read Testimonials
                  </a>
                  <a
                    href="tel:7753033269"
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Call: (775) 303-3269
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">Ratings Breakdown</h3>
                  <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    Updated
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {platformBreakdown.map((p) => (
                    <div
                      key={p.label}
                      className="rounded-xl bg-white p-4 ring-1 ring-slate-200 hover:shadow-sm transition"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-slate-900">{p.label}</div>
                        <div className="text-xs text-slate-500">{p.count} reviews</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <Stars rating={p.rating} />
                        <span className="text-sm font-semibold text-slate-900">
                          {p.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                        <div className="h-2 w-full rounded-full bg-blue-500" />
                      </div>
                    </div>
                  ))}
                </div>

               <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-slate-200">
  <p className="text-sm text-slate-700">
    <span className="font-semibold text-slate-900">Consistent 5-star feedback</span> across multiple platforms — the
    same focus on clean installs, communication, and reliability every time.
  </p>
</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Services</h2>
          <p className="mt-2 text-sm text-slate-600">
            Professional low-voltage services for homes and businesses across Northern Nevada.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/services/structured-cabling"
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">Structured Cabling</h3>
              <p className="mt-2 text-sm text-slate-600">
                Cat6, coax, speaker wire, LV power, racks, cleanup, testing, and more.
              </p>
            </a>

            <a
              href="/services/cctv"
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">CCTV / Camera Systems</h3>
              <p className="mt-2 text-sm text-slate-600">
                Camera installs, upgrades, NVR setup, aiming, and troubleshooting.
              </p>
            </a>

            <a
              href="/services/wifi-networking"
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">Wi-Fi & Networking</h3>
              <p className="mt-2 text-sm text-slate-600">
                Access points, mesh Wi-Fi, Ethernet drops, switches, and router installs.
              </p>
            </a>

            <a
              href="/services/audio-av"
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">Audio / A/V</h3>
              <p className="mt-2 text-sm text-slate-600">
                Speaker installs, A/V wiring, TV location cabling, and rack cleanup.
              </p>
            </a>

            <a
              href="/services/low-voltage-support"
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">Low Voltage Support</h3>
              <p className="mt-2 text-sm text-slate-600">
                Site walks, consulting, troubleshooting, and small LV projects.
              </p>
            </a>
          </div>
        </section>

        {/* What Clients Are Saying (Carousel) */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">What Clients Are Saying</h2>
                <p className="mt-2 text-sm text-slate-600">
                  A few words from homeowners and businesses we’ve worked with in Northern Nevada.
                </p>
              </div>
              <a
                href="/testimonials"
                className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 hover:underline md:mt-0"
              >
                Read more reviews <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-8">
              <ReviewCarousel reviews={reviews} intervalMs={3000} />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-bold text-slate-900">About S. C. Mead Communications</h2>
           <p className="mt-2 text-sm text-slate-600">
  With close to two decades of low voltage experience, Shane has worked coast-to-coast — from the Bay Area of
  California to the Florida coast — supporting everything from residential networks to large-scale commercial
  deployments.
</p>
<p className="mt-2 text-sm text-slate-600">
  Over the years he’s partnered with major providers and platforms including Xfinity/Comcast, Suddenlink,
  Charter Spectrum, APS, CPT, Pivital, and more — plus he’s helped teams get up and running in multiple markets.
</p>
<p className="mt-2 text-sm text-slate-600">
  Today, S. C. Mead Communications is focused on Northern Nevada with a simple standard: show up on time,
  communicate clearly, and deliver work that looks as good as it performs. From the first walkthrough to the
  final cleanup, every project gets the same attention to efficiency, quality, and clean aesthetics — built to
  last and easy to service later.
</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-bold">Request a Free Estimate</h2>
            <p className="mt-2 text-sm text-slate-200">
              Tell us a bit about your project and we’ll follow up to schedule a time to talk.
            </p>

            <form
              className="mt-6 grid gap-4 md:max-w-xl"
              action="https://formspree.io/f/xgvqggod"
              method="POST"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:border-blue-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:border-blue-400"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:border-blue-400"
              />

              <textarea
                name="message"
                placeholder="Project details, location, and any timelines."
                rows={4}
                className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm outline-none focus:border-blue-400"
                required
              />

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400"
              >
                Submit
              </button>

              <p className="mt-1 text-xs text-slate-300">
                We typically respond within one business day.
              </p>
            </form>

            <div className="mt-8 space-y-1 text-xs text-slate-300">
              <div>Based in Reno, NV • Serving Reno, Sparks, and Carson City</div>
              <div>
                Phone:{" "}
                <a href="tel:7753033269" className="text-blue-300 hover:underline">
                  (775) 303-3269
                </a>
              </div>
              <div>
                Email:{" "}
                <a href="mailto:scmeadllc@gmail.com" className="text-blue-300 hover:underline">
                  scmeadllc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
