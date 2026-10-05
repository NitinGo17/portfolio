import type { Metadata } from "next";
import Link from "next/link";
import { site, experience, education, awards, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nitin Goswami — AI and web developer in Noida. Five years of writing and design, now building software for real problems."
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="display" style={{ fontSize: "var(--text-3xl)" }}>About</h1>
        <p className="lede">{site.intro}</p>
      </section>

      <section className="section">
        <h2 className="h2">Experience</h2>
        <ul className="list">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="period">{e.period}</span>
              <div>
                <strong>{e.title}</strong>
                <p className="muted" style={{ margin: "var(--space-2) 0 0" }}>{e.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="h2">Education</h2>
        <ul className="list">
          {education.map((e) => (
            <li key={e.title}>
              <span className="period">{e.period}</span>
              <div>
                <strong>{e.title}</strong>
                <p className="muted" style={{ margin: "var(--space-2) 0 0" }}>{e.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="h2">Awards</h2>
        <ul className="list">
          {awards.map((a) => (
            <li key={a.title}>
              <span className="period">{a.year}</span>
              <div>
                <strong>{a.title}</strong>
                <p className="muted" style={{ margin: "var(--space-2) 0 0" }}>{a.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="h2">Skills</h2>
        <div className="skill-groups">
          {skills.map((g) => (
            <div className="skill-group" key={g.group}>
              <h3>{g.group}</h3>
              <div className="tag-row">
                {g.items.map((i) => (
                  <span className="tag" key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="actions">
          <Link className="btn" href="/work">See the work</Link>
          <Link className="btn btn-ghost" href="/resume">Résumé</Link>
        </div>
      </section>
    </div>
  );
}
