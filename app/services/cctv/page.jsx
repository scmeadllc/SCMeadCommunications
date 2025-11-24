import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "CCTV & Camera Systems | S. C. Mead Communications",
  description:
    "Professional security camera installation, aiming, upgrades, NVR setup, and troubleshooting in Reno, Sparks, and Carson City.",
};

export default function CCTVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 px-4">

        <div className="mx-auto max-w-4xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">CCTV / Camera Systems</h1>
          <p className="mt-3 text-slate-600 text-sm">
            Clean, professional camera installs that give you the angle and clarity you need —
            not guesswork.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Services Offered</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Commercial and residential CCTV installation</li>
            <li>• NVR setup and configuration</li>
            <li>• Camera aiming and optimization</li>
            <li>• System upgrades and replacements</li>
            <li>• Troubleshooting existing systems</li>
          </ul>

          <a
            href="/#contact"
            className="inline-block mt-8 rounded-md bg-blue-600 px-5 py-2.5 text-white text-sm font-semibold hover:bg-blue-500"
          >
            Request a Free Estimate
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
}
