"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* LOGO + TEXT */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/FullLogo_Transparent (1).png"
            alt="S. C. Mead Communications logo"
            width={160}
            height={160}
            className="h-16 w-auto md:h-20"
          />
          <div className="flex flex-col">
            <div className="text-sm font-semibold tracking-wide text-slate-800">
              S. C. Mead Communications LLC
            </div>
            <div className="text-xs text-slate-500">
              Structured Cabling & CCTV • Northern Nevada
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">

          {/* Dropdown Container */}
          <div className="relative group">
            <button className="hover:text-blue-600">Services ▾</button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full hidden w-56 flex-col rounded-md border bg-white py-2 shadow-lg group-hover:flex">
              <Link href="/services/structured-cabling" className="px-4 py-2 text-sm hover:bg-slate-100">
                Structured Cabling
              </Link>
              <Link href="/services/cctv" className="px-4 py-2 text-sm hover:bg-slate-100">
                CCTV / Camera Systems
              </Link>
              <Link href="/services/wifi-networking" className="px-4 py-2 text-sm hover:bg-slate-100">
                Wi-Fi & Networking
              </Link>
              <Link href="/services/audio-av" className="px-4 py-2 text-sm hover:bg-slate-100">
                Audio / A/V
              </Link>
              <Link href="/services/low-voltage-support" className="px-4 py-2 text-sm hover:bg-slate-100">
                Low Voltage Support
              </Link>
            </div>
          </div>

          <Link href="/#about" className="hover:text-blue-600">About</Link>
          <Link href="/#contact" className="hover:text-blue-600">Contact</Link>

          <a
            href="tel:7753033269"
            className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
          >
            Call: (775) 303-3269
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-slate-800"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* DARK OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col p-6 space-y-6 text-slate-800">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMobileOpen(false)}
            className="self-end text-3xl text-slate-700"
          >
            ×
          </button>

          <Link href="/services/structured-cabling" onClick={() => setMobileOpen(false)}>
            Structured Cabling
          </Link>

          <Link href="/services/cctv" onClick={() => setMobileOpen(false)}>
            CCTV / Camera Systems
          </Link>

          <Link href="/services/wifi-networking" onClick={() => setMobileOpen(false)}>
            Wi-Fi & Networking
          </Link>

          <Link href="/services/audio-av" onClick={() => setMobileOpen(false)}>
            Audio / A/V
          </Link>

          <Link href="/services/low-voltage-support" onClick={() => setMobileOpen(false)}>
            Low Voltage Support
          </Link>

          <hr className="border-slate-300" />

          <Link href="/#about" onClick={() => setMobileOpen(false)}>About</Link>

          <Link href="/#contact" onClick={() => setMobileOpen(false)}>Contact</Link>

          <a
            href="tel:7753033269"
            className="font-semibold text-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            Call: (775) 303-3269
          </a>
        </div>
      </div>
    </header>
  );
}
