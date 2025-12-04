import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
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
                and Carson City. From clean, reliable cabling to CCTV systems that actually
                work when you need them.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
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
                Need work slightly outside these areas? Reach out and we&apos;ll see what we can do.
              </p>
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

        {/* About */}
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-bold text-slate-900">
              About S. C. Mead Communications
            </h2>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Shane has spent nearly 20 years working in the low-voltage field, traveling from
              California&apos;s Bay Area to the Florida coast and everywhere in between. Along the way,
              he has helped launch contracting operations, trained new technicians, and completed
              thousands of installations for companies such as Xfinity/Comcast, Suddenlink, Charter
              Spectrum, APS, CPT, and Pivital.
            </p>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              After gaining experience nationwide, Shane decided it was time to build something of
              his own—right here in Northern Nevada. S. C. Mead Communications was founded with a
              clear mission: provide clean, dependable, and honest low-voltage work without the
              upsells, shortcuts, or &quot;band-aid fixes&quot; common in the contracting world.
            </p>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Shane takes pride in treating every project like it matters—because to him, it does.
              From structured cabling to CCTV systems, he brings a personal commitment to quality,
              communication, and a finished product that reflects true craftsmanship.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-bold">Request a Free Estimate</h2>
            <p className="mt-2 text-sm text-slate-200">
              Tell us a bit about your project and we&apos;ll follow up to schedule a time to talk.
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
                <a
                  href="mailto:scmeadllc@gmail.com"
                  className="text-blue-300 hover:underline"
                >
                  scmeadllc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} S. C. Mead Communications LLC. All rights reserved.
            </div>
            <div className="space-y-1 md:text-right">
              <div>Reno, NV • Structured Cabling & CCTV</div>
              <div>NV Contractor License #0091593 • Bid Limit: $10,000</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
