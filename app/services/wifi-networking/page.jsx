import Link from "next/link";

export const metadata = {
  title: "Wi-Fi & Networking | S. C. Mead Communications",
  description:
    "Professional Wi-Fi and networking services in Reno, Sparks, and Carson City. Access points, mesh systems, router/switch installs, wired drops, and troubleshooting.",
};

export default function WifiNetworkingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h1 className="text-4xl font-extrabold">Wi-Fi & Networking</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Reliable wired and wireless networking solutions for small businesses and homes
            across Northern Nevada.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-8">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">Networking Services</h2>
          <p className="text-sm text-slate-700">
            From improving slow networks to installing clean, hard-wired Ethernet drops,
            we help keep your network simple, stable, and fast.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Wi-Fi access point cabling and installation</li>
          <li>• Small business and home Wi-Fi upgrades & mesh systems</li>
          <li>• Router and switch installation & basic configuration</li>
          <li>• Hard-wired Ethernet drops (PCs, printers, TVs, POS systems)</li>
          <li>• Network closet cleanup and re-patching</li>
          <li>• Network troubleshooting (slow or intermittent issues)</li>
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
