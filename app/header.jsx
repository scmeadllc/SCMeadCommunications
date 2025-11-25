"use client";
import { useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/FullLogo_Transparent (1).png"
            alt="S. C. Mead Communications logo"
            width={180}
            height={180}
            className="h-20 w-auto md:h-32"
          />
          <div className="flex flex-col">
            <div className="text-sm font-semibold tracking-wide text-slate-800">
              S. C. Mead Communications LLC
            </div>
            <div className="text-xs text-slate-500">
              Structured Cabling & CCTV • Northern Nevada
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">

          {/* Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600">Services ▾</button>
            <div className="absolute left-0 top-full hidden w-56 flex-col rounded-md border bg-white py-2 shadow-lg group-hover:flex">
              <a href="/services/structured-cabling" className="px-4 py-2 text-sm hover:bg-slate-100">Structured Cabling</a>
              <a href="/services/cctv" className="px-4 py-2 text-sm hover:bg-slate-100">CCTV / Camera Systems</a>
              <a href="/services/wifi-networking" className="px-4 py-2 text-sm hover:bg-slate-100">Wi-Fi & Networking</a>
              <a href="/services/audio-av" className="px-4 py-2 text-sm hover:bg-slate-100">Audio / A/V</a>
              <a href="/services/low-voltage-support" className="px-4 py-2 text-sm hover:bg-slate-100">Low Voltage Support</a>
            </div>
          </div>

          <a href="/#about" className="hover:text-blue-600">About</a>
          <a href="/#contact" className="hover:text-blue-600">Contact</a>

          <a
            href="tel:7753033269"
            className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
          >
            Call: (775) 303-3269
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Right-Side Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-slate-800">Menu</span>
          <button onClick={() => setMobileOpen(false)}><X size={28} /></button>
        </div>

        <nav className="flex flex-col p-4 space-y-4 text-slate-700">

          <a href="/" className="hover:text-blue-600">Home</a>

          <div>
            <div className="text-xs font-bold text-slate-500 uppercase mb-2">Services</div>
            <div className="flex flex-col space-y-2">
              <a href="/services/structured-cabling" className="hover:text-blue-600">Structured Cabling</a>
              <a href="/services/cctv" className="hover:text-blue-600">CCTV / Camera Systems</a>
              <a href="/services/wifi-networking" className="hover:text-blue-600">Wi-Fi & Networking</a>
              <a href="/services/audio-av" className="hover:text-blue-600">Audio / A/V</a>
              <a href="/services/low-voltage-support" className="hover:text-blue-600">Low Voltage Support</a>
            </div>
          </div>

          <a href="/#about" className="hover:text-blue-600">About</a>
          <a href="/#contact" className="hover:text-blue-600">Contact</a>

          <a
            href="tel:7753033269"
            className="mt-6 inline-block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-500"
          >
            Call: (775) 303-3269
          </a>

        </nav>
      </div>

      {/* Overlay when menu is open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
