"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

// The signature device: the claim assembles word by word on load, and a single
// phrase cycles through the problems the work actually addresses.
const domains = [
  "compliance tooling",
  "scheme access",
  "investor protection",
  "cognitive tools"
];

export default function HeroClaim() {
  const words = site.claim.split(" ");
  const [i, setI] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setAnimated(true);
    const id = window.setInterval(() => setI((v) => (v + 1) % domains.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      <h1 className={animated ? "display hero-claim" : "display"}>
        {animated
          ? words.map((w, idx) => (
              <span className="word" key={idx}>
                <span style={{ animationDelay: `${idx * 42}ms` }}>{w}&nbsp;</span>
              </span>
            ))
          : site.claim}
      </h1>

      <p className="rotator">
        <span className="rotator-label">Currently building</span>
        <span className="rotator-word" key={i}>
          {domains[i]}
        </span>
      </p>
    </div>
  );
}
