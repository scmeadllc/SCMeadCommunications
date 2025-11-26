import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageCarousel from "../../components/ImageCarousel";

export const metadata = {
  title: "Low Voltage Support | S. C. Mead Communications",
  description:
    "Low-voltage support in Reno, Sparks, and Carson City. Site walks, consulting, troubleshooting, and small LV projects.",
};

const lowVoltageImages = [
  "/low-voltage-support/kramers project.jpg",
  "/low-voltage-support/nvr.jpg",
  "/low-voltage-support/ups longley before after.png",
];

export default function LowVoltageSupportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 px-4">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Low Voltage Support
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-3xl">
            Not every project needs a full-blown install. Sometimes you just
            need a low-voltage tech to take a look, clean something up, or run
            a few lines to get things working the way they should.
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Support and small projects
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Site walks and basic low-voltage consulting</li>
                <li>• Troubleshooting non-working drops or devices</li>
                <li>• Small add-on cabling and cleanup work</li>
                <li>• Helping document what&apos;s already in place</li>
              </ul>

              <p className="mt-4 text-sm text-slate-600">
                If you&apos;re not sure exactly what you need yet, we can start
                with a quick visit, take a look at the existing cabling and
                equipment, and map out next steps.
              </p>

              <a
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Request low-voltage support
              </a>
            </div>

            <div className="text-xs text-slate-500 md:text-right">
              <p>Flexible for smaller jobs and punch list items.</p>
            </div>
          </div>

          <ImageCarousel
            images={lowVoltageImages}
            alt="Low-voltage support work by S. C. Mead Communications"
            intervalMs={5000}
            height={400}
          />

          <p className="mt-3 text-xs text-slate-500">
            Photos from small support and cleanup projects.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
