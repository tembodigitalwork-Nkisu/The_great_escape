import Link from "next/link";
import Logo from "./Logo";

const sections = {
  Visit: [
    { label: "Attractions", href: "/attractions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Food & Drinks", href: "/food" },
    { label: "Find us", href: "/contact" },
  ],
  Plan: [
    { label: "Parties & Events", href: "/parties" },
    { label: "School trips", href: "/parties#schools" },
    { label: "Corporate", href: "/parties#corporate" },
    { label: "Book a session", href: "/book" },
  ],
  Brand: [
    { label: "About / Our Tech", href: "/about" },
    { label: "Linktree", href: "https://linktr.ee/thegesczm", external: true },
  ],
};

const socials = [
  { label: "Instagram", handle: "@greatescapezm", href: "https://www.instagram.com/greatescapezm/", icon: <InstagramIcon /> },
  { label: "TikTok",    handle: "@greatescapezm", href: "https://www.tiktok.com/@greatescapezm",    icon: <TikTokIcon /> },
  { label: "Facebook",  handle: "Great Escape ZM", href: "https://www.facebook.com/greatescapezm",  icon: <FacebookIcon /> },
  { label: "X",         handle: "@greatescapezm", href: "https://x.com/greatescapezm",              icon: <XIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-50 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="bg-cream-50 inline-block rounded-xl px-4 py-3">
            <Logo className="h-14 w-auto" />
          </div>
          <p className="mt-5 text-cream-50/75 max-w-sm">
            Where reality takes a break. Zambia's most advanced indoor gaming arena —
            VR, golf simulator, bowling, and more, at Longacres Mall, Lusaka.
          </p>

          <h4 className="mt-7 font-display font-bold text-escape-yellow uppercase tracking-wide text-sm">
            Follow us
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 max-w-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-cream-50/5 border border-cream-50/10 hover:border-escape-yellow/60 hover:bg-cream-50/10 transition group"
                >
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-cream-50/10 text-cream-50 group-hover:bg-escape-yellow group-hover:text-ink-950 transition shrink-0">
                    {s.icon}
                  </span>
                  <span className="min-w-0 flex-1 leading-tight">
                    <span className="block text-sm font-bold text-cream-50">{s.label}</span>
                    <span className="block text-[11px] text-cream-50/55 truncate">{s.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {Object.entries(sections).map(([heading, items]) => (
          <div key={heading}>
            <h4 className="font-display font-bold text-escape-yellow uppercase tracking-wide text-sm">
              {heading}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {items.map((i) =>
                i.external ? (
                  <li key={i.label}>
                    <a href={i.href} target="_blank" rel="noreferrer" className="text-cream-50/80 hover:text-escape-yellow">
                      {i.label} →
                    </a>
                  </li>
                ) : (
                  <li key={i.label}>
                    <Link href={i.href} className="text-cream-50/80 hover:text-escape-yellow">
                      {i.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-cream-50/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream-50/55">
          <p>© {new Date().getFullYear()} The Great Escape · Powered by Microgravity. All trademarks belong to their owners.</p>
          <p>
            <a href="tel:+260973572871" className="hover:text-escape-yellow">+260 97 357 2871</a>
            <span className="mx-2">·</span>
            <a href="tel:+260968878592" className="hover:text-escape-yellow">+260 96 887 8592 (school groups)</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.07A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.09 5.66 21.25 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.25 22 17.09 22 12.07z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}
