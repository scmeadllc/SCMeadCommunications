"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py=4">

        {/* Logo + Company Name */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/FullLogo_Transparent (1).png"
            alt="S. C. Mead Communications logo"
            width={160}
            height={160}
            className="h-16 w-auto md:h-24"
          />
          <div className="flex flex-col">
            <div className="text-sm font-semibold tracking-wide text-slate-800">
              S. C. Mead Communications LLC
            </div>
            <div className="text-xs text-slate-500">
              Structured Cabling & CCTV • Northern Nevada
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">

          {/* Desktop Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600">Services ▾</button>
            <div className="absolute left-0 top-full hidden w-56 flex-col rounded-md border bg-white py-2 shadow-lg group-hover:flex">
              <a href="/services/structured-cabling" className="px-4 py-2 text-sm hover:bg-slate-100">
                Structured Cabling
              </a>
              <a href="/services/cctv" className="px-4 py-2 text-sm hover:bg-slate-100">
                CCTV / Camera Systems
              </a>
              <a href="/services/wifi-networking" className="px-4 py-2 text-sm hover:bg-slate-100">
                Wi-Fi & Networking
              </a>
              <a href="/services/audio-av" className="px-4 py-2 text-sm hover:bg-slate-100">
                Audio / A/V
              </a>
              <a href="/services/low-voltage-support" className="px-4 py-2 text-sm hover:bg-slate-100">
                Low Voltage Support
              </a>
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

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden text-3xl text-slate-700"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`fixed inset-y-0 right-0 w-64 transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 bg-white shadow-xl z-50 border-l border-slate-200`}
      >
        <div className="flex flex-col p-6 space-y-4 text-slate-800 text-base">

          {/* Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="self-end text-slate-500 hover:text-slate-700 text-xl"
          >
            ✕
          </button>

          <a href="/" className="hover:text-blue-600" onClick={() => setMobileOpen(false)}>
            Home
          </a>

          <div>
            <p className="font-semibold mb-1 text-slate-900">Services</p>
            <div className="ml-3 flex flex-col space-y-2 text-slate-700">
              <a href="/services/structured-cabling" onClick={() => setMobileOpen(false)}>Structured Cabling</a>
              <a href="/services/cctv" onClick={() => setMobileOpen(false)}>CCTV / Camera Systems</a>
              <a href="/services/wifi-networking" onClick={() => setMobileOpen(false)}>Wi-Fi & Networking</a>
              <a href="/services/audio-av" onClick={() => setMobileOpen(false)}>Audio / A/V</a>
              <a href="/services/low-voltage-support" onClick={() => setMobileOpen(false)}>Low Voltage Support</a>
            </div>
          </div>

          <a href="/#about" className="hover:text-blue-600" onClick={() => setMobileOpen(false)}>
            About
          </a>

          <a href="/#contact" className="hover:text-blue-600" onClick={() => setMobileOpen(false)}>
            Contact
          </a>

          <a
            href="tel:7753033269"
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 text-center"
            onClick={() => setMobileOpen(false)}
          >
            Call: (775) 303-3269
          </a>

        </div>
      </div>
    </header>
  );
}
