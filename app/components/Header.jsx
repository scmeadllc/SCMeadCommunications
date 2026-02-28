"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Structured Cabling", href: "/services/structured-cabling" },
  { label: "CCTV / Camera Systems", href: "/services/cctv" },
  { label: "Wi-Fi & Networking", href: "/services/wifi-networking" },
  { label: "Audio / A/V", href: "/services/audio-av" },
  { label: "Low Voltage Support", href: "/services/low-voltage-support" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (!mobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  // Close mobile drawer on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close drawer if you click outside the panel (on the dark overlay)
  const onOverlayMouseDown = (e) => {
    if (!panelRef.current) return;
    if (panelRef.current.contains(e.target)) return;
    closeMobile();
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo + Company Name (Logo is Home link) */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/FullLogo_Transparent (1).png"
              alt="S. C. Mead Communications logo"
              width={180}
              height={180}
              className="h-20 w-auto md:h-28"
              priority
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="hover:text-blue-600"
                aria-haspopup="menu"
              >
                Services ▾
              </button>

              <div className="absolute left-0 top-full hidden w-64 flex-col rounded-md border bg-white py-2 shadow-lg group-hover:flex">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="px-4 py-2 text-sm hover:bg-slate-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/#about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/#contact" className="hover:text-blue-600">
              Contact
            </Link>
            <Link href="/testimonials" className="hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="/faq" className="hover:text-blue-600">
              FAQ
            </Link>

            <a
              href="tel:7753033269"
              className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
            >
              Call: (775) 303-3269
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm hover:bg-slate-50 md:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            {/* simple hamburger icon */}
            <span className="mr-2 h-4 w-5">
              <span className="block h-0.5 w-5 bg-slate-800" />
              <span className="mt-1 block h-0.5 w-5 bg-slate-800" />
              <span className="mt-1 block h-0.5 w-5 bg-slate-800" />
            </span>
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60]"
          onMouseDown={onOverlayMouseDown}
          aria-hidden={!mobileOpen}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Slide-in panel */}
          <div
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b px-4 py-4">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={closeMobile}
              >
                <Image
                  src="/FullLogo_Transparent (1).png"
                  alt="S. C. Mead Communications logo"
                  width={120}
                  height={120}
                  className="h-12 w-auto"
                />
                <div className="text-xs font-semibold text-slate-800">
                  S. C. Mead Communications
                </div>
              </Link>

              <button
                type="button"
                className="rounded-md border border-slate-200 bg-white p-2 text-slate-800 hover:bg-slate-50"
                aria-label="Close menu"
                onClick={closeMobile}
              >
                ✕
              </button>
            </div>

            <div className="px-4 py-4">
              {/* Services accordion */}
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                Services
                <span className="text-slate-500">{servicesOpen ? "–" : "+"}</span>
              </button>

              {servicesOpen && (
                <div className="mt-2 overflow-hidden rounded-md border border-slate-200 bg-white">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeMobile}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-4 space-y-2">
                <Link
                  href="/#about"
                  onClick={closeMobile}
                  className="block rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  About
                </Link>

                <Link
                  href="/#contact"
                  onClick={closeMobile}
                  className="block rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Contact
                </Link>

                <Link
                  href="/testimonials"
                  onClick={closeMobile}
                  className="block rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Testimonials
                </Link>

                <Link
                  href="/faq"
                  onClick={closeMobile}
                  className="block rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  FAQ
                </Link>

                <a
                  href="tel:7753033269"
                  className="mt-2 block rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500"
                  onClick={closeMobile}
                >
                  Call: (775) 303-3269
                </a>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Reno, NV • Structured Cabling & CCTV
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
