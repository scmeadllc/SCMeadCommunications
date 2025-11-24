import Link from "next/link";

export const metadata = {
  title: "Audio / A/V Services | S. C. Mead Communications",
  description:
    "Professional audio and A/V services in Reno, Sparks, and Carson City. Speaker installs, cabling, TV location wiring, and A/V rack cleanup.",
};

export default function AudioAVPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold">Audio / A/V Services</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Clean, professional installations for speakers, A/V wiring, and media equipment
            in homes and businesses.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-8">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">A/V Services</h2>
          <p className="text-sm text-slate-700">
            Whether you're wiring a new space or improving an existing setup, we ensure your
            audio and video systems are neat, reliable, and easy to use.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Speaker wire runs and terminations</li>
          <li>• In-ceiling and wall-mount speaker installations</li>
          <li>• TV location cabling (HDMI, Cat6, coax)</li>
          <li>• A/V rack wiring and cleanup</li>
        </ul>

        <div className="mt-10">
          <a
            href="/#contact"
            className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Request a Free Estimate
          </a>
        </div>

        <div className="pt-8 text-xs text-slate-500">
          Serving Reno, Sparks, and Carson City, Nevada.
        </div>

      </section>

    </main>
  );
}
