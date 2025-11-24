import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Audio / A/V | S. C. Mead Communications",
  description:
    "Professional speaker installation, A/V wiring, TV location cabling, rack cleanup, and low-voltage audio services.",
};

export default function AudioAVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 px-4">

        <div className="mx-auto max-w-4xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">Audio / A/V</h1>
          <p className="mt-3 text-slate-600 text-sm">
            Clean, reliable A/V wiring and speaker installs for homes and businesses.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Services Offered</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Speaker installation (ceiling, wall, indoor/outdoor)</li>
            <li>• A/V wiring and low-voltage routing</li>
            <li>• TV mounting cabling (wire-behind-wall)</li>
            <li>• AV rack cleanup and rewiring</li>
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
