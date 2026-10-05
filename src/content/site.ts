// Site-level facts. Everything here is true and verified; nothing invented.

export const site = {
  name: "Nitin Goswami",
  role: "AI & Web Developer",
  location: "Noida, India",

  claim:
    "I build useful digital products for real Indian problems — with a strategist's clarity and an engineer's hands.",

  // DRAFT copy, assembled only from verified facts. Approve or rewrite in your own voice.
  intro:
    "I'm a final-year BCA student in Noida. For five years I've written for a living — technical articles, SEO copy, scripts, news — and more recently I've been building software. What ties the work together is a bias toward problems that matter: helping rural citizens find government schemes, helping small manufacturers navigate compliance, helping investors recognise a scam. I'd rather ship something useful than something that merely looks good.",

  email: "nitin.goswami.office@gmail.com",
  github: "https://github.com/NitinGo17",
  linkedin: "https://www.linkedin.com/in/nitin-goswami-7a229326b/"
} as const;

export const experience = [
  {
    period: "2021 — present",
    title: "Freelance writer & designer",
    detail:
      "Content writing (the bulk of it), technical and news writing, YouTube scripts, copywriting, transcription and graphic design. Five years of shipping words for other people's products."
  },
  {
    period: "2 months",
    title: "Web internship",
    detail:
      "Built and edited on WordPress and designed in Affinity by Canva."
  },
  {
    period: "Current",
    title: "NEC — LinkedIn",
    detail:
      "Manage a LinkedIn profile through writing blogs and articles: 47,815 impressions and 690 social engagements to date."
  }
] as const;

export const education = [
  {
    period: "2024 — 2027",
    title: "Bachelor of Computer Applications (BCA)",
    detail: "Asian School of Business, Noida. Currently in the final year."
  }
] as const;

export const awards = [
  {
    year: "—",
    title: "2nd prize — Innovate X Hackathon",
    detail: "Shyam Lal College, University of Delhi. Won with GramSetu."
  }
] as const;

export const skills = [
  { group: "Languages", items: ["HTML", "CSS", "JavaScript", "Python", "C#", "C++"] },
  { group: "Front-end", items: ["React", "Next.js", "GSAP", "Three.js"] },
  { group: "Back-end & data", items: ["Node.js", "PostgreSQL", "Firebase", "REST APIs"] },
  { group: "AI", items: ["Gemini API", "Prompt engineering", "RAG", "AI automation"] },
  { group: "Design & content", items: ["Affinity Designer", "Canva", "Figma", "SEO & copywriting"] }
] as const;
