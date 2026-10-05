import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className={wide ? "card card-wide" : "card"}>
      <div className="label">{project.kind}</div>
      <h3>{project.title}</h3>
      <p className="one-liner">{project.oneLiner}</p>
      <div className="meta">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </Link>
  );
}
