import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageCarousel from "../../components/ImageCarousel";

export const metadata = {
  title: "Wi-Fi & Networking | S. C. Mead Communications",
  description:
    "Wi-Fi and networking cabling in Reno, Sparks, and Carson City. Access points, bridges, Ethernet runs, and small network upgrades.",
};

const wifiImages = [
  "/wifi-networking/AP Cam.jpg",
  "/wifi-networking/Screenshot_20250427_141330_Gallery (1).jpg",
  "/wifi-networking/pos systems.jpg",
  "/wifi-networking/ups longley before after.png",
  "/wifi-networking/wifi bridge&cam.jpg",
];

export default function WifiNetworkingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 px-4">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Wi-Fi & Networking
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-3xl">
            Wi-Fi and network cabling for homes and small businesses. From
            access points and bridges to Ethernet drops for POS and work areas,
            the goal is stable, reliable coverage instead of &quot;dead
            spots.&quot;
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Wi-Fi & network services
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Ethernet drops for workstations and POS systems</li>
                <li>• Cabling for access points and small mesh systems</li>
                <li>• Line-of-sight bridges between nearby buildings</li>
                <li>• Cleanup and labeling of existing network drops</li>
                <li>• Basic small network equipment swaps (low-voltage side)</li>
              </ul>

              <p className="mt-4 text-sm text-slate-600">
                If you&apos;re fighting with Wi-Fi coverage or have gear
                installed with no labeling, we can help get things cabled and
                organized so your IT provider has a clean starting point.
              </p>

              <a
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Request a Wi-Fi / networking estimate
              </a>
            </div>

            <div className="text-xs text-slate-500 md:text-right">
              <p>Support on the low-voltage side of your network.</p>
              <p className="mt-1">
                Ideal for homes, small offices, and retail locations.
              </p>
            </div>
          </div>

          <ImageCarousel
            images={wifiImages}
            alt="Wi-Fi and networking projects by S. C. Mead Communications"
            intervalMs={5000}
            height={400}
          />

          <p className="mt-3 text-xs text-slate-500">
            Photos from Wi-Fi, POS, and small networking projects.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
