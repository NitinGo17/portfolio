// Real projects, described from the repositories. Outcomes are stated only where true.

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  kind: string;
  year: string;
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
  link?: string;
  featured?: boolean;
  lab?: boolean;
};

export const projects: Project[] = [
  {
    slug: "manakai",
    title: "ManakAI",
    oneLiner:
      "An AI guide that turns a product consultation into a compliance checklist Indian manufacturers can actually work through.",
    kind: "GovTech · AI",
    year: "2025",
    stack: ["Node.js", "PostgreSQL", "pgvector", "Docker", "CI"],
    problem:
      "Small manufacturers, importers and startups in India have to meet BIS standards to sell legally, but the rules are scattered, technical and hard to act on. Most of them don't know which requirements apply to them, or where the information even comes from.",
    approach:
      "I built ManakAI as a guided journey rather than a chatbot. A consultation about your product becomes a structured analysis — with Confirmed, Likely and Unknown states — and then a persistent checklist: what applies to you, what you've done, what's next, what evidence each step needs, and where the information came from. The AI reasons in the background against a retrieved knowledge base; every compliance-critical result carries a verification state and a source drawer, and anything unverified is labelled as such. It never claims to be government-approved.",
    outcome:
      "Shipped a working system, not a mock-up: a RAG pipeline with a swappable LLM provider, Postgres with pgvector, Docker, CI running lint, tests and migrations, and full product, architecture, database and API documentation. The demo vertical is LED lighting, grounded in the BIS CRS Scheme II list and IS 16102.",
    link: "https://github.com/NitinGo17/SIH",
    featured: true
  },
  {
    slug: "gramsetu",
    title: "GramSetu",
    oneLiner:
      "A multilingual platform that helps rural citizens find the government schemes they're entitled to and track their applications.",
    kind: "GovTech · Civic",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript"],
    problem:
      "Millions of eligible Indians, especially in rural areas, never claim the welfare they qualify for — because of awareness gaps, complex forms, language barriers, document checks and no way to track an application once it's submitted.",
    approach:
      "GramSetu puts discovery, eligibility, verification and tracking in one place. A short profile drives personalised scheme recommendations; a simulated DigiLocker flow verifies Aadhaar, income and farmer documents without manual uploads; applications move through a visible Submitted → Under Review → Approved tracker; and the whole interface runs in nine Indian languages through a custom translation engine.",
    outcome:
      "Won 2nd prize at the Innovate X Hackathon, Shyam Lal College, University of Delhi.",
    link: "https://github.com/NitinGo17/gramsetu",
    featured: true
  },
  {
    slug: "scamlens",
    title: "ScamLens",
    oneLiner:
      "Paste a suspicious investment message and see the evidence — including whether the SEBI registration it claims actually exists.",
    kind: "Fintech · Safety",
    year: "2025",
    stack: ["JavaScript"],
    problem:
      "Investment fraud in India runs on messages that look official. The claimed SEBI registration is the tell, but almost nobody checks it — and the regulator's own list is not somewhere a worried person knows to look.",
    approach:
      "ScamLens takes the message you were sent, surfaces the signals in it, and checks any SEBI registration claim against the regulator's own list, so the decision is backed by evidence rather than a hunch.",
    outcome:
      "Built as an investor-protection tool for the Indian market.",
    featured: true
  },
  {
    slug: "mindshift",
    title: "MindShift",
    oneLiner:
      "A cognitive tool for critical thinking: work a scenario, take it apart, and watch your reasoning shift.",
    kind: "AI · Thinking",
    year: "2025",
    stack: ["HTML", "JavaScript"],
    problem:
      "Most productivity software organises your tasks. Almost none of it improves how you think about a decision before you make it.",
    approach:
      "MindShift OS runs you through a structured scenario — such as 'The Pricing Paradox' — with deconstruction, an AI analysis of the reasoning you brought, a focus mode and streaks to keep the practice going.",
    outcome:
      "Built and shipped as an interactive tool.",
    link: "https://github.com/NitinGo17/MindShift"
  },
  {
    slug: "nestlegal",
    title: "NestLegal",
    oneLiner:
      "A law-firm website with a built-in blog CMS — editorial in tone, practical underneath.",
    kind: "Web · Client",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript"],
    problem:
      "A modern law firm needs to look authoritative online and still be able to publish articles without a developer in the loop.",
    approach:
      "Six public pages, twenty-one practice areas rendered from data, a court-hierarchy diagram, and an admin CMS for writing, drafting, featuring and publishing articles.",
    outcome:
      "Built as a production-oriented site with the CMS working end to end.",
    link: "https://github.com/NitinGo17/NestLeagal"
  },
  {
    slug: "ipp-event-management",
    title: "IPP Event Management",
    oneLiner:
      "An events platform built during my internship at Indian Printer & Publisher.",
    kind: "Web · Events",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript"],
    problem:
      "The team needed a responsive home for its exhibition and event programme, with a simple way to manage listings.",
    approach:
      "A responsive public site plus a lightweight admin and login for managing event content.",
    outcome:
      "Built and used during the internship."
  },
  {
    slug: "kimi-grido1",
    title: "KIMI — GRIDO1",
    oneLiner:
      "A one-page racing-driver site built as a motion study: hand-written springs, a halftone circuit map, a depth-parallax hero.",
    kind: "Lab · Motion",
    year: "2025",
    stack: ["Three.js", "Lenis"],
    problem:
      "A self-set brief: how far can a single page be pushed with type, motion and WebGL, without a framework and without losing the reader?",
    approach:
      "One self-contained page. The spring solver, the shared ticker, the scroll triggers, the text reveals, the sticky stack, the circuit trace and the halftone are all written by hand; Three.js and Lenis are the only external code.",
    outcome:
      "A design and motion study — the piece I point to when I talk about craft.",
    link: "https://nitingo17.github.io/kimi-grido1/",
    lab: true
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
