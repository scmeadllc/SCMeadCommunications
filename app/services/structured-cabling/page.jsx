import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Structured Cabling | S. C. Mead Communications",
  description:
    "Professional Cat6, coax, LV power, racks, labeling, cleanup, testing, and commercial/residential cabling in Reno, Sparks, and Carson City.",
};

export default function StructuredCablingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 px-4">

        <div className="mx-auto max-w-4xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">Structured Cabling</h1>
          <p className="mt-3 text-slate-600 text-sm">
            Reliable, clean cabling done right the first time. Serving Reno, Sparks,
            Carson City, and surrounding areas.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Services Offered</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Cat6, coax, speaker wire, and LV power runs</li>
            <li>• Patch panels, network racks, and wall-mount cabinets</li>
            <li>• Cable cleanup and organization</li>
            <li>• Testing, labeling, and documentation</li>
            <li>• Network room upgrades and rewires</li>
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
