import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div>© {new Date().getFullYear()} {site.name}</div>
        <div>{site.location}</div>
      </div>
      <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
        <a href={`mailto:${site.email}`}>Email</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
