import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects by Nitin Goswami — compliance tooling for Indian manufacturers, multilingual access to government schemes, an investor-protection tool, and more."
};

export default function WorkPage() {
  const main = projects.filter((p) => !p.lab);
  const lab = projects.filter((p) => p.lab);

  return (
    <div className="container">
      <section className="hero">
        <h1 className="display" style={{ fontSize: "var(--text-3xl)" }}>Work</h1>
        <p className="lede">
          Products built around real problems — most of them for people the software
          industry usually ignores.
        </p>
      </section>

      <section className="section">
        <div className="work-grid">
          {main.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {lab.length > 0 && (
        <section className="section">
          <div className="section-head">
            <h2 className="h2">Lab</h2>
            <p className="muted">Experiments in type, motion and WebGL.</p>
          </div>
          <div className="work-grid">
            {lab.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
