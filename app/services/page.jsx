import Image from "next/image";

export const metadata = {
  title: "Our Services | S. C. Mead Communications",
  description:
    "Explore all low-voltage services offered by S. C. Mead Communications, including structured cabling, CCTV, Wi-Fi networking, audio/AV, and more in Reno, Sparks, and Carson City.",
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold">Our Services</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Professional low-voltage solutions for homes and businesses across Northern Nevada.
          </p>
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


    </main>
  );
}
