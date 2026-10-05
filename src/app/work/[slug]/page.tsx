import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, bySlug } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = bySlug(slug);
  if (!project) return { title: "Not found" };
  return { title: project.title, description: project.oneLiner };
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = bySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="container">
      <header className="case-head">
        <div className="label">{project.kind}</div>
        <h1>{project.title}</h1>
        <p className="lede">{project.oneLiner}</p>
      </header>

      <dl className="case-facts">
        <div>
          <dt>Stack</dt>
          <dd>{project.stack.join(", ")}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt>Link</dt>
          <dd>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">View project</a>
            ) : (
              "—"
            )}
          </dd>
        </div>
      </dl>

      <div className="case-body">
        <h2>The problem</h2>
        <p>{project.problem}</p>

        <h2>What I did</h2>
        <p>{project.approach}</p>

        <h2>Outcome</h2>
        <p>{project.outcome}</p>
      </div>

      <nav className="pager" aria-label="More projects">
        <Link href={`/work/${prev.slug}`}>← {prev.title}</Link>
        <Link href="/work">All work</Link>
        <Link href={`/work/${next.slug}`}>{next.title} →</Link>
      </nav>
    </div>
  );
}
