import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nitin Goswami — AI & Web Developer",
    template: "%s · Nitin Goswami"
  },
  description:
    "Nitin Goswami builds useful digital products for real Indian problems — with a strategist's clarity and an engineer's hands.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nitin Goswami"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link className="wordmark" href="/">
            Nitin Goswami
          </Link>
          <a className="header-cta" href="mailto:nitin.goswami.office@gmail.com">
            Email me
          </a>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Nitin Goswami</span>
          <span>Noida, India</span>
        </footer>
      </body>
    </html>
  );
}
