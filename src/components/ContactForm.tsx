"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    setStatus("sending");
    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      throw new Error("endpoint unavailable");
    } catch {
      // No backend on a static host — hand off to the visitor's mail client so
      // the message still reaches me. Never a dead end.
      const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("fallback");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button className="btn btn-signal" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {status === "sent" && "Thank you — your message is on its way."}
        {status === "fallback" && "Opening your email app so the message reaches me directly."}
        {status === "idle" && `Or email me directly at ${site.email}.`}
      </p>
    </form>
  );
}
