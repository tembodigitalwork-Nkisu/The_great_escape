"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/attractions", label: "Attractions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/parties", label: "Parties" },
  { href: "/food", label: "Food" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => { if (e.matches) setOpen(false); };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur border-b-2 border-ink-950">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center group" aria-label="The Great Escape — home">
          <Logo className="h-10 w-auto" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition relative ${
                  active ? "text-ink-950" : "text-ink-950/70 hover:text-ink-950"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-escape-yellow rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/book"
            className="rounded-full px-5 py-2 text-sm font-bold bg-escape-yellow text-ink-950 border-2 border-ink-950 shadow-popSm hover:translate-y-[2px] hover:shadow-none transition"
          >
            Book now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border-2 border-ink-950 bg-cream-50"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink-950 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink-950 transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink-950 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t-2 border-ink-950 bg-cream-50">
          <div className="px-4 py-4 flex flex-col gap-2">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-2.5 px-3 rounded-lg font-semibold ${
                    active ? "bg-escape-yellow text-ink-950" : "text-ink-950 hover:bg-ink-950/5"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/book"
              className="mt-2 text-center rounded-full px-5 py-3 font-bold bg-escape-yellow text-ink-950 border-2 border-ink-950"
            >
              Book now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
