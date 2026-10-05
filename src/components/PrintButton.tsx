"use client";

export default function PrintButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="btn btn-ghost" type="button" onClick={() => window.print()}>
      {children}
    </button>
  );
}
