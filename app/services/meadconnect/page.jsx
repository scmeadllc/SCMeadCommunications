import Header from "../../components/Header";
import Footer from "../../components/Footer";


export const metadata = {
  title: "MeadConnect Business Phone Systems | S. C. Mead Communications",
  description:
    "Managed business phone systems, cloud communications, office networking, and professional installation from S. C. Mead Communications.",
  robots: {
    index: false,
    follow: false,
  },
};

const plans = [
  {
    name: "MeadConnect Essentials",
    label: "Bring Your Network",
    description:
      "A streamlined hosted phone solution for businesses that already have a reliable internet connection, network, and compatible switch.",
    idealFor:
      "Established offices that want to replace or modernize their existing phone service.",
    included: [
      "Professionally provisioned business phones",
      "Hosted cloud phone system",
      "Business number porting assistance",
      "Extension and user configuration",
      "Remote system management",
      "Ongoing updates and support",
    ],
  },
  {
    name: "MeadConnect Professional",
    label: "Turnkey Phone Deployment",
    featured: true,
    description:
      "A complete managed business phone installation for offices that have internet service but still need the equipment and professional deployment.",
    idealFor:
      "Businesses that want a fully installed phone system without managing the hardware themselves.",
    included: [
      "Everything in MeadConnect Essentials",
      "Managed PoE network switch",
      "Professionally provisioned phones",
      "On-site installation and deployment",
      "Phone and extension placement",
      "System testing and user setup",
      "Basic staff orientation",
    ],
  },
  {
    name: "MeadConnect Complete",
    label: "Complete Office Infrastructure",
    description:
      "A full communications and low-voltage buildout for new offices, expansions, remodels, and businesses that need everything connected from the ground up.",
    idealFor:
      "New offices and growing businesses looking for one contractor to handle the complete infrastructure.",
    included: [
      "Everything in MeadConnect Professional",
      "Structured cabling installation",
      "Equipment rack and patch-panel installation",
      "Managed network switch deployment",
      "Business Wi-Fi installation",
      "Hosted business phone system",
      "Camera system installation",
      "Network labeling and documentation",
      "Future expansion planning",
    ],
  },
];

const features = [
  {
    title: "Work From Anywhere",
    text: "Use your business number from the office, home, or while traveling through supported desk, desktop, and mobile options.",
  },
  {
    title: "Professional Call Handling",
    text: "Route calls through extensions, call groups, auto attendants, voicemail, transfers, and customized business-hour rules.",
  },
  {
    title: "Built to Grow",
    text: "Add users, phones, departments, or locations without replacing a traditional on-site phone system.",
  },
  {
    title: "Managed Support",
    text: "Your system is provisioned, maintained, and supported through S. C. Mead Communications.",
  },
];

const includedFeatures = [
  "Business number porting assistance",
  "Local and toll-free number options",
  "Extension dialing",
  "Call forwarding and transfers",
  "Auto attendant menus",
  "Ring groups and department routing",
  "Voicemail and voicemail-to-email",
  "Business-hours and after-hours routing",
  "Remote phone provisioning",
  "Mobile and desktop calling options",
  "Multi-location support",
  "System updates and management",
];

const addOns = [
  "Additional desk phones",
  "Conference-room phones",
  "Overhead paging integration",
  "Call recording options",
  "UPS battery backup",
  "LTE or secondary-internet failover",
  "Network health inspections",
  "Additional Wi-Fi access points",
  "Structured cabling additions",
  "Camera and surveillance systems",
];

const faqs = [
  {
    question: "Can we keep our existing business phone numbers?",
    answer:
      "In most cases, yes. Existing numbers can generally be ported into the new system. Number availability and porting requirements are verified before the transition begins.",
  },
  {
    question: "Can employees answer calls outside the office?",
    answer:
      "Yes. Depending on the selected setup, employees can use supported desk phones, desktop applications, or mobile applications while presenting the company’s business number.",
  },
  {
    question: "Do we need new internet service?",
    answer:
      "Not necessarily. Existing internet service can often support MeadConnect, but connection quality, reliability, and available bandwidth should be evaluated before deployment.",
  },
  {
    question: "Can MeadConnect support multiple offices?",
    answer:
      "Yes. Users and extensions can be connected across multiple locations while operating under one managed business phone system.",
  },
  {
    question: "Who manages the phone system after installation?",
    answer:
      "S. C. Mead Communications handles provisioning, system configuration, updates, and ongoing support under the selected service agreement.",
  },
  {
    question: "Can you also install the network and cabling?",
    answer:
      "Yes. MeadConnect Complete is designed for businesses that need phones, structured cabling, racks, switches, Wi-Fi, cameras, and other office infrastructure installed together.",
  },
];

export default function MeadConnectPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 text-slate-900 pt-32">
        {/* Preview Notice */}
        <div className="border-b border-amber-200 bg-amber-50">
          <div className="mx-auto max-w-6xl px-4 py-3 text-center text-xs font-semibold text-amber-900">
            Private service preview — MeadConnect is not yet publicly launched.
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                Introducing MeadConnect
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Take Your Office
                <span className="block text-blue-300">With You.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                Managed business phone systems designed to keep your team
                connected from the office, from home, or wherever business takes
                you.
              </p>

              <p className="mt-4 text-sm font-semibold text-blue-200">
                Your business. Connected.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#plans"
                  className="rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 hover:bg-blue-400"
                >
                  Explore MeadConnect Plans
                </a>

                <a
                  href="/#contact"
                  className="rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Request a Consultation
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-300">
                <span>Hosted business phones</span>
                <span>Professional installation</span>
                <span>Managed support</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Powered by
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  S. C. Mead Communications
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "Professionally provisioned phones",
                    "Cloud-hosted communications",
                    "Remote and on-site support",
                    "Networking and infrastructure options",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold">
                        ✓
                      </div>
                      <p className="text-sm text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-blue-300/20 bg-blue-400/10 p-4">
                  <p className="text-sm font-semibold text-blue-100">
                    One provider. One installation. One point of contact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is MeadConnect */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  A Better Business Phone System
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  What is MeadConnect?
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  MeadConnect is a fully managed business communications service
                  that replaces outdated phone equipment with a flexible,
                  cloud-hosted system.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Instead of juggling a phone carrier, equipment vendor, cabling
                  contractor, and IT provider, businesses can work with one local
                  communications contractor from planning through deployment.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                      ✓
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {feature.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Switch */}
        <section className="border-y border-slate-200 bg-slate-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                Designed for Modern Business
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Why businesses move to managed cloud phones
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Traditional phone systems can be expensive to maintain,
                difficult to expand, and tied to one physical office.
                MeadConnect provides a more flexible foundation without forcing
                the customer to manage the technical side.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["No bulky on-site PBX", "Reduce dependence on aging phone-system hardware."],
                ["Easy expansion", "Add users, extensions, and locations as the business grows."],
                ["Flexible call routing", "Control how and where incoming business calls are answered."],
                ["Local technical support", "Work with someone who understands both the phones and the network."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                MeadConnect Service Plans
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Choose the level of support your office needs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Start with professionally managed phones, add the equipment and
                installation, or let us build the complete office
                communications infrastructure.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex h-full flex-col rounded-3xl border p-7 shadow-sm ${
                    plan.featured
                      ? "border-blue-500 bg-slate-950 text-white shadow-xl shadow-blue-950/15"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}

                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      plan.featured ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {plan.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">{plan.name}</h3>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      plan.featured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`mt-6 rounded-xl p-4 ${
                      plan.featured ? "bg-white/10" : "bg-slate-50"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        plan.featured ? "text-blue-200" : "text-slate-500"
                      }`}
                    >
                      Ideal for
                    </p>
                    <p
                      className={`mt-2 text-sm ${
                        plan.featured ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      {plan.idealFor}
                    </p>
                  </div>

                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.included.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 text-sm ${
                          plan.featured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            plan.featured
                              ? "bg-blue-500 text-white"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold ${
                      plan.featured
                        ? "bg-blue-500 text-white hover:bg-blue-400"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Discuss This Plan
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Included Features */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  Communications Features
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Professional tools without the traditional phone-room headache
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
                  Final features depend on the selected plan and system
                  configuration, but MeadConnect can support the functions
                  modern businesses expect from a professional phone system.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {includedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="mt-0.5 text-sm font-bold text-blue-600">
                      ✓
                    </span>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                From Consultation to Connection
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                How MeadConnect works
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                ["01", "Consultation", "We review your users, phone numbers, locations, call flow, and current network."],
                ["02", "System Design", "We recommend the appropriate phones, equipment, features, and service tier."],
                ["03", "Provisioning & Installation", "The system is configured, the phones are prepared, and the office is connected."],
                ["04", "Managed Support", "We remain your point of contact for changes, additions, and ongoing system support."],
              ].map(([number, title, text]) => (
                <article
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="text-3xl font-extrabold text-blue-200">
                    {number}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Optional Add-Ons
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Build the system around your business
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  MeadConnect can be expanded with additional communications,
                  networking, reliability, and low-voltage services.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {addOns.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                    Why S. C. Mead Communications?
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">
                    The phones are only as reliable as the network behind them.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    MeadConnect is supported by nearly two decades of low-voltage
                    and communications experience. We understand the cabling,
                    switching, Wi-Fi, racks, power protection, and field
                    conditions that affect how a business phone system performs.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Nearly 20 years", "Low-voltage and communications experience"],
                    ["425+", "Completed work orders since inception"],
                    ["5.0 rating", "Across multiple review platforms"],
                    ["Local support", "Based in Northern Nevada"],
                  ].map(([stat, label]) => (
                    <div
                      key={stat}
                      className="rounded-2xl border border-slate-200 bg-white p-6"
                    >
                      <div className="text-2xl font-extrabold text-blue-600">
                        {stat}
                      </div>
                      <div className="mt-2 text-sm text-slate-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                MeadConnect FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Common questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 group-open:bg-blue-50 group-open:text-blue-700">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              MeadConnect by S. C. Mead Communications
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to bring your business phones into the modern office?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 md:text-base">
              Whether you are replacing an outdated phone system or opening a
              brand-new office, MeadConnect can be designed around the way your
              business actually works.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/#contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-50"
              >
                Request a Free Consultation
              </a>

              <a
                href="tel:7753033269"
                className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call: (775) 303-3269
              </a>
            </div>
          </div>
        </section>

        {/* Prelaunch Note */}
        <section className="bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-400">
            MeadConnect service availability, supported features, number
            porting, hardware, and final pricing are subject to system
            qualification and service agreement.
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
