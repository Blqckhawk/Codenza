"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { RegionToggle } from "./region-toggle";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-lg font-semibold text-white shadow-lg shadow-blue-600/20">
            C
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Codenza</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Engineering excellence
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <RegionToggle />
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-slate-800"
          >
            Book a consultation
          </Link>
        </div>

        <button
          className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
           <div className="flex gap-2 pt-2">
              <RegionToggle />
              <ThemeToggle />
            </div>
            <Link href="/contact" className="font-semibold text-blue-600" onClick={() => setOpen(false)}>
              Book a consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
