import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Low Voltage Support | S. C. Mead Communications",
  description:
    "Troubleshooting, consulting, site walks, small projects, and low-voltage support services.",
};

export default function LowVoltageSupportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 px-4">

        <div className="mx-auto max-w-4xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">Low Voltage Support</h1>
          <p className="mt-3 text-slate-600 text-sm">
            Need help with a small project, system cleanup, or troubleshooting? We can help.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Services Offered</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• On-site troubleshooting</li>
            <li>• Consulting and system design</li>
            <li>• Site walks for upcoming projects</li>
            <li>• Cleanup of small LV systems</li>
            <li>• Assistance with residential or commercial upgrades</li>
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
