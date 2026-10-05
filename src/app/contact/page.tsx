import type { Metadata } from "next";
import { site } from "@/content/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nitin Goswami — internships, freelance product work and AI collaborations."
};

export default function ContactPage() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="display" style={{ fontSize: "var(--text-3xl)" }}>Let&rsquo;s talk</h1>
        <p className="lede">
          I&rsquo;m open to internships, freelance product work and AI collaborations.
          Email is the fastest way to reach me.
        </p>
        <div className="actions">
          <a className="btn btn-signal" href={`mailto:${site.email}`}>Email {site.email}</a>
          <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Or send a message</h2>
        <ContactForm />
      </section>
    </div>
  );
}
