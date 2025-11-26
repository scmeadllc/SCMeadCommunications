import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageCarousel from "../../components/ImageCarousel";

export const metadata = {
  title: "Audio / A-V | S. C. Mead Communications",
  description:
    "Audio and A-V wiring in Reno, Sparks, and Carson City. Speaker runs, TV location cabling, and rack cleanup.",
};

const audioImages = [
  "/audio-av/boss speaker.jpg",
  "/audio-av/speakers.jpg",
];

export default function AudioAVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 px-4">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">Audio / A-V</h1>
          <p className="mt-3 text-sm text-slate-600 max-w-3xl">
            Audio and A-V cabling for TVs, speakers, and equipment racks. Clean
            wiring behind the scenes so the finished room looks intentional,
            not like an afterthought.
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Audio / A-V services
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Speaker wire runs for in-room or wall-mounted speakers</li>
                <li>• Cabling for TV locations and equipment racks</li>
                <li>• Cleanup of visible cabling where possible</li>
                <li>• Coordination with your A-V or IT provider as needed</li>
              </ul>

              <p className="mt-4 text-sm text-slate-600">
                If you already have the gear but need someone to handle the
                cabling and low-voltage side, we can get everything wired up and
                ready for configuration.
              </p>

              <a
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Request an audio / A-V estimate
              </a>
            </div>

            <div className="text-xs text-slate-500 md:text-right">
              <p>Ideal for living rooms, bonus rooms, and small commercial A-V.</p>
            </div>
          </div>

          <ImageCarousel
            images={audioImages}
            alt="Audio and A-V work by S. C. Mead Communications"
            intervalMs={5000}
            height={400}
          />

          <p className="mt-3 text-xs text-slate-500">
            Photos from recent speaker and A-V cabling installs.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
