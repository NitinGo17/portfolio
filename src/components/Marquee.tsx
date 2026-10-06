const ITEMS = [
  "Government schemes",
  "BIS compliance",
  "Investor protection",
  "Cognitive tools",
  "Multilingual access",
  "Content strategy",
  "RAG pipelines",
  "Motion & type"
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
