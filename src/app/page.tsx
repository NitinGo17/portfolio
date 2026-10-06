import Link from "next/link";
import { site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import HeroClaim from "@/components/HeroClaim";
import Marquee from "@/components/Marquee";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <HeroClaim />
        <p className="lede">{site.intro}</p>
        <div className="actions">
          <Link className="btn" href="/work">See the work</Link>
          <Link className="btn btn-ghost" href="/contact">Get in touch</Link>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="section-head">
          <h2 className="h2">Selected work</h2>
          <Link className="link-underline" href="/work">All projects →</Link>
        </div>
        <div className="work-grid">
          {featuredProjects.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="two-col">
          <h2 className="h2">About</h2>
          <div>
            <p>
              I&rsquo;m a final-year BCA student in Noida. Five years of freelance
              writing and design came first; the engineering came next, and the two
              now feed each other. I build with React, Next.js and Node, work with
              Postgres and AI APIs, and care most about problems that help someone.
            </p>
            <Link className="link-underline" href="/about">More about me →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Let&rsquo;s talk</h2>
        <p className="lede">
          I&rsquo;m open to internships, freelance product work and AI collaborations.
        </p>
        <div className="actions">
          <a className="btn btn-signal" href={`mailto:${site.email}`}>Email me</a>
          <Link className="btn btn-ghost" href="/contact">Contact form</Link>
        </div>
      </section>
    </div>
  );
}
