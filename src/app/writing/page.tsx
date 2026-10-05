import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles and notes by Nitin Goswami."
};

export default function WritingPage() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="display" style={{ fontSize: "var(--text-3xl)" }}>Writing</h1>
        <p className="lede">
          I&rsquo;ve been writing for five years — technical articles, SEO copy,
          scripts, news. This is where the longer pieces will live.
        </p>
      </section>

      <section className="section">
        <div className="empty">
          <p>
            The first articles are being written. In the meantime, I write regularly
            on LinkedIn, and you can reach me at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
