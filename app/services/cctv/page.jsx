import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageCarousel from "../../components/ImageCarousel";

export const metadata = {
  title: "CCTV & Camera Systems | S. C. Mead Communications",
  description:
    "CCTV and security camera installation in Reno, Sparks, and Carson City. Camera placement, aiming, NVR setup, and troubleshooting.",
};

const cctvImages = [
  "/cctv/cam row.jpg",
  "/cctv/door cam.jpg",
  "/cctv/exterior cam arm.jpg",
  "/cctv/exterior cam mount.jpg",
  "/cctv/exterior entrance cam.jpg",
  "/cctv/monitor.jpg",
  "/cctv/pos cams.jpg",
  "/cctv/pvm.jpg",
  "/cctv/reg cam.jpg",
  "/cctv/wall mount pvm.jpg",
];

export default function CCTVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 px-4">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">
            CCTV & Camera Systems
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-3xl">
            Camera systems installed and aimed so they actually capture what
            matters. Whether it&apos;s a small shop, a home, or a larger
            commercial space, the goal is clear coverage and easy playback when
            you need it.
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Camera services
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• New camera installs for homes and small businesses</li>
                <li>• Re-aiming and repositioning existing cameras</li>
                <li>• NVR setup and basic configuration</li>
                <li>• System cleanups and cable management</li>
                <li>• Upgrades to existing legacy systems</li>
              </ul>

              <p className="mt-4 text-sm text-slate-600">
                Good camera work starts with placement. We focus on mounting,
                angles, and avoiding glare so you get clear, usable footage
                instead of guessing what happened.
              </p>

              <a
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Request a camera system estimate
              </a>
            </div>

            <div className="text-xs text-slate-500 md:text-right">
              <p>Commercial and residential CCTV.</p>
              <p className="mt-1">
                Serving Reno, Sparks, and Carson City.
              </p>
            </div>
          </div>

          <ImageCarousel
            images={cctvImages}
            alt="CCTV and camera installation by S. C. Mead Communications"
            intervalMs={5000}
            height={400}
          />

          <p className="mt-3 text-xs text-slate-500">
            Photos from real camera installs, both interior and exterior.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
