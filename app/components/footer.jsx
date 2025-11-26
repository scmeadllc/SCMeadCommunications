export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Services */}
        <div>
          <h3 className="text-slate-200 font-semibold mb-3">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/services/structured-cabling" className="hover:text-white">
                Structured Cabling
              </a>
            </li>
            <li>
              <a href="/services/cctv" className="hover:text-white">
                CCTV / Camera Systems
              </a>
            </li>
            <li>
              <a href="/services/wifi-networking" className="hover:text-white">
                Wi-Fi & Networking
              </a>
            </li>
            <li>
              <a href="/services/audio-av" className="hover:text-white">
                Audio / A/V
              </a>
            </li>
            <li>
              <a href="/services/low-voltage-support" className="hover:text-white">
                Low Voltage Support
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h3 className="text-slate-200 font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - License */}
        <div>
          <h3 className="text-slate-200 font-semibold mb-3">License</h3>
          <ul className="space-y-1 text-sm">
            <li>NV Contractor License #0091593</li>
            <li>Bid Limit: $10,000</li>
            <li>© {new Date().getFullYear()} S. C. Mead Communications LLC</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
