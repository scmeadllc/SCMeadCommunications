import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllReviews } from "../components/ReviewCarousel";

export const metadata = {
  title: "Testimonials | S. C. Mead Communications",
  description:
    "Read what customers in Reno, Sparks, and Carson City are saying about S. C. Mead Communications.",
};

export default function TestimonialsPage() {
  const reviews = getAllReviews();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 pt-32 px-4">
        <div className="mx-auto max-w-5xl py-10">
          <h1 className="text-3xl font-bold text-slate-900">Customer Testimonials</h1>
          <p className="mt-3 text-sm text-slate-600">
            A collection of feedback from homeowners and businesses across Northern Nevada.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="rounded-lg border bg-white p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-yellow-500 text-sm">{"★★★★★".slice(0, r.rating || 5)}</div>
                  <p className="mt-2 text-sm text-slate-800 italic">“{r.review}”</p>
                </div>
                <div className="mt-3 text-xs text-slate-700">
                  <div className="font-semibold">
                    {r.name}
                    {r.city ? ` • ${r.city}` : ""}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">
                    {r.source} Review
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
