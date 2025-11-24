import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Wi-Fi & Networking | S. C. Mead Communications",
  description:
    "Professional access point installation, mesh Wi-Fi, Ethernet drops, switches, and home/business networking.",
};

export default function WifiNetworkingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24 px-4">

        <div className="mx-auto max-w-4xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">Wi-Fi & Networking</h1>
          <p className="mt-3 text-slate-600 text-sm">
            Strong, stable Wi-Fi and reliable wired networking for homes and businesses.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Services Offered</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Access point installations</li>
            <li>• Mesh Wi-Fi systems</li>
            <li>• Ethernet drops and cabling</li>
            <li>• Switch installation and cleanup</li>
            <li>• Router installation and optimization</li>
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
