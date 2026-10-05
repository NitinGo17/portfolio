"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname() || "/";
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        Nitin Goswami
      </Link>
      <nav className="site-nav" aria-label="Primary">
        {links.map((l) => {
          const active = pathname === l.href || pathname.startsWith(l.href + "/");
          return (
            <Link key={l.href} href={l.href} aria-current={active ? "page" : undefined}>
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
