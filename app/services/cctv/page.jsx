import Link from "next/link";

export const metadata = {
  title: "CCTV & Camera Systems | S. C. Mead Communications",
  description:
    "Professional CCTV and security camera installation in Reno, Sparks, and Carson City. IP camera installs, upgrades, troubleshooting, NVR setup, and system cleanup.",
};

export default function CCTVPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold">CCTV & Camera Systems</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Reliable camera systems installed, configured, and aimed properly — so you get
            the footage you need when it matters.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-8">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Camera System Services</h2>
          <p className="text-sm text-slate-700">
            Whether upgrading an aging system or installing a brand-new setup, we make sure
            your cameras are positioned correctly and wired cleanly.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-slate-700">
          <li>• New camera system installation (residential & commercial)</li>
          <li>• Adding or replacing cameras on existing systems</li>
          <li>• Upgrading analog systems to HD-over-coax or modern IP cameras</li>
          <li>• NVR installation and local recording setup</li>
          <li>• Camera aiming, re-positioning, and optimization</li>
          <li>• Cleanup of sloppy or unsafe cabling</li>
          <li>• Troubleshooting cameras that are offline or producing poor image quality</li>
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
