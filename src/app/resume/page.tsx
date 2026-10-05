import type { Metadata } from "next";
import { site, experience, education, awards, skills } from "@/content/site";
import { projects } from "@/content/projects";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Nitin Goswami — AI and web developer. Experience, education, skills and selected projects."
};

export default function ResumePage() {
  const selected = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="container">
      <section className="hero">
        <div className="label">Résumé</div>
        <h1 className="display" style={{ fontSize: "var(--text-3xl)" }}>{site.name}</h1>
        <p className="lede">
          {site.role} · {site.location}
        </p>
        <div className="actions">
          <PrintButton>Print / save as PDF</PrintButton>
          <a className="btn btn-signal" href={`mailto:${site.email}`}>Email me</a>
        </div>
        <p className="form-note" style={{ marginTop: "var(--space-4)" }}>
          {site.email} · <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a> ·{" "}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Profile</h2>
        <p>{site.intro}</p>
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
        <h2 className="h2">Selected projects</h2>
        <ul className="list">
          {selected.map((p) => (
            <li key={p.slug}>
              <span className="period">{p.stack.join(", ")}</span>
              <div>
                <strong>{p.title}</strong>
                <p className="muted" style={{ margin: "var(--space-2) 0 0" }}>{p.oneLiner}</p>
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
              <div><strong>{a.title}</strong></div>
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
    </div>
  );
}
