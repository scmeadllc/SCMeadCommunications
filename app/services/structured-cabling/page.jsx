import Link from "next/link";

export const metadata = {
  title: "Structured Cabling | S. C. Mead Communications",
  description:
    "Professional structured cabling services in Reno, Sparks, and Carson City. Cat6, coax, speaker wire, LV power runs, patch panels, racks, testing, and cleanup.",
};

export default function StructuredCablingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold">Structured Cabling</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Clean, reliable low-voltage cabling installed with care and built to last.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-8">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Our Cabling Services</h2>
          <p className="text-sm text-slate-700">
            Whether it’s a new build, remodel, or fixing someone else’s mess, we provide
            dependable cabling done right the first time.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Cat5e, Cat6, speaker, LV power, and coax runs</li>
          <li>• New construction and remodel low-voltage prewire</li>
          <li>• Patch panel installation and labeling</li>
          <li>• Rack and network closet build-outs</li>
          <li>• Cleanup and re-termination of messy existing cabling</li>
          <li>• Cable testing and troubleshooting</li>
          <li>• Add/move/change network and coax drops</li>
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
