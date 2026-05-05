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
  { label: "Instagram", href: "https://www.instagram.com/greatescapezm/" },
  { label: "TikTok", href: "https://www.tiktok.com/@greatescapezm" },
  { label: "Facebook", href: "https://www.facebook.com/greatescapezm" },
  { label: "X", href: "https://x.com/greatescapezm" },
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
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3 py-1.5 text-xs font-semibold bg-cream-50/10 hover:bg-escape-yellow hover:text-ink-950 transition"
              >
                {s.label}
              </a>
            ))}
          </div>
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
