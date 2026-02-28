import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "FAQ | S. C. Mead Communications",
  description:
    "Frequently asked questions about low-voltage services including structured cabling, CCTV, Wi-Fi networking, and general project details across Northern Nevada.",
};

const faqs = [
  {
    q: "What areas do you service?",
    a: "We’re based in Reno, Nevada and commonly work in Reno, Sparks, Carson City, and surrounding areas. If you’re a little outside that range, reach out—depending on the job we can often make it work.",
  },
  {
    q: "Do you do residential and commercial work?",
    a: "Yes. We handle both residential and commercial low-voltage projects—everything from a few clean cable runs to full network room cleanup and camera installs.",
  },
  {
    q: "Can you help even if my wiring is a mess or I’m not sure what I need?",
    a: "Absolutely. A big part of what we do is troubleshooting and cleanup—finding what’s there, labeling, organizing, and getting it into a reliable, serviceable state. We can also do a site walk to help you plan the right solution.",
  },
  {
    q: "What should I expect during an install?",
    a: "We’ll confirm the scope, walk the route(s), protect surfaces as needed, and keep the job clean. We focus on neat cable paths, good support/strain relief, proper terminations, and labeling so it looks professional and is easy to service later.",
  },
  {
    q: "Do you provide testing and labeling?",
    a: "Yes. When applicable, we test and verify cabling, label both ends, and can provide basic documentation so you know what goes where.",
  },
  {
    q: "Do you install Wi-Fi access points and networking gear?",
    a: "Yes. We can run the cabling for access points, mount them cleanly, and help with basic networking hardware installs like switches and patching. (If you ever want advanced configuration, we can talk through options.)",
  },
  {
    q: "Do you sell cameras and equipment, or can you install customer-supplied gear?",
    a: "Either works. Many clients already have equipment picked out—others want recommendations. We can install customer-supplied cameras/recorders, or help you choose solid options that fit your needs and budget.",
  },
  {
    q: "How soon can you start?",
    a: "Scheduling depends on current workload and project size. For smaller jobs we can often get you on the calendar quickly. The best way is to contact us with details and we’ll give you realistic timing.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes—most projects start with a quick call or message and, if needed, a site walk. We’ll help scope the work and provide an estimate based on what you need.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We’re licensed and insured in Nevada. If you need documentation for a commercial job, just let us know.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Help Center
            </p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">FAQ</h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-200">
              Answers to the most common questions about our low-voltage services across Northern Nevada.
              If you don’t see your question here, reach out anytime.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-400"
              >
                Request a Free Estimate
              </a>
              <a
                href="tel:7753033269"
                className="rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
              >
                Call: (775) 303-3269
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left intro */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold">Common questions</h2>
              <p className="mt-2 text-sm text-slate-600">
                Clean installs, reliable performance, and work that’s easy to service later.
                Here are quick answers to what we get asked most often.
              </p>

              <div className="mt-6 rounded-lg border bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Still unsure what you need?</div>
                <p className="mt-2 text-sm text-slate-600">
                  Send a quick message with your location, the type of building, and what you’re trying to accomplish.
                  We’ll point you in the right direction.
                </p>
                <a
                  href="/#contact"
                  className="mt-4 inline-flex w-fit rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
                >
                  Contact Shane
                </a>
              </div>
            </div>

            {/* Accordion list */}
            <div className="lg:col-span-2">
              <div className="space-y-3">
                {faqs.map((item, idx) => (
                  <details
                    key={idx}
                    className="group rounded-lg border bg-white p-5 shadow-sm open:shadow-md transition"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-900">
                        {item.q}
                      </span>
                      <span className="select-none rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 group-open:bg-blue-50 group-open:text-blue-700">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Ready to get a quote?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Tell us what you’re working on and where it’s located—commercial or residential. We’ll respond with next steps.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/#contact"
                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Request a Free Estimate
                  </a>
                  <a
                    href="tel:7753033269"
                    className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Call: (775) 303-3269
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Note: For larger commercial projects, a site walk may be recommended to confirm routing, access, and scope.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
