import Link from "next/link";

export const metadata = {
  title: "Low Voltage Support | S. C. Mead Communications",
  description:
    "Low voltage support services in Reno, Sparks, and Carson City. Troubleshooting, consulting, cleanup, and small add-on projects.",
};

export default function LowVoltageSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold">General Low Voltage Support</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Troubleshooting, cleanup, and support for all types of low-voltage systems in
            homes and businesses across Northern Nevada.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-8">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Low Voltage Services</h2>
          <p className="text-sm text-slate-700">
            When something isn’t working right — or when you just need a small project handled
            without the hassle — we’ve got you covered.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Low-voltage site walks and consulting</li>
          <li>• Identifying & cleaning up mystery cabling</li>
          <li>• Small add-on projects (single or multiple drops)</li>
          <li>• Troubleshooting existing low-voltage systems</li>
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
