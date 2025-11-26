import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageCarousel from "../../components/ImageCarousel";

export const metadata = {
  title: "Structured Cabling | S. C. Mead Communications",
  description:
    "Structured cabling services in Reno, Sparks, and Carson City. Cat6, coax, speaker wire, LV power, racks, cleanup, testing, and more.",
};

const structuredCablingImages = [
  "/structured cable/punch block.jpg",
  "/structured cable/structured cable box.jpg",
  "/structured cable/structured cable pull.jpg",
  "/structured cable/structured cable w hat.jpg",
];

export default function StructuredCablingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 px-4">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Structured Cabling
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-3xl">
            Clean, organized low-voltage cabling for homes and businesses in
            Northern Nevada. From new runs to cleanup work, everything is
            labeled, tested, and ready for the next person who opens the rack.
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                What we do
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Cat5e, Cat6, speaker, LV power, and coax runs</li>
                <li>• Patch panels, keystones, racks, and terminations</li>
                <li>• Rack cleanup, cable management, and re-labeling</li>
                <li>• Testing and documentation for new and existing drops</li>
                <li>• Residential and commercial small to mid-size projects</li>
              </ul>

              <p className="mt-4 text-sm text-slate-600">
                If you&apos;ve got a bundle of mystery cables or a rack that&apos;s
                grown wild over the years, we can get it back under control and
                make it easy to service going forward.
              </p>

              <a
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Request a structured cabling estimate
              </a>
            </div>

            <div className="text-xs text-slate-500 md:text-right">
              <p>Serving Reno, Sparks, and Carson City.</p>
              <p className="mt-1">
                Licensed & Insured • NV Contractor License #0091593
              </p>
            </div>
          </div>

          <ImageCarousel
            images={structuredCablingImages}
            alt="Structured cabling work by S. C. Mead Communications"
            intervalMs={5000}
            height={400}
          />

          <p className="mt-3 text-xs text-slate-500">
            Photos from real structured cabling projects completed in Northern
            Nevada.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
