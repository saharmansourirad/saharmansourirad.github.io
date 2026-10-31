"use client";
import { useState } from "react";
import { experience, projects } from "../data/content";

const tabs = [
  { id: "all", label: "Everything" },
  { id: "engineering", label: "Engineering" },
  { id: "research", label: "Research" },
];

export default function Experience() {
  const [tab, setTab] = useState("all");
  const items = experience.filter((e) => tab === "all" || e.track === tab);
  return (
    <>
      <div role="tablist" aria-label="Filter experience" className="mb-8 inline-flex rounded-full border border-line p-1 text-sm">
        {tabs.map((t) => (
          <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-1.5 transition-colors ${tab === t.id ? "bg-accent text-paper" : "text-muted hover:text-ink"}`}>
            {t.label}
          </button>
        ))}
      </div>

      <ol className="ml-1 border-l border-line">
        {items.map((e) => (
          <li key={e.role + e.period} className="relative pb-9 pl-7 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper" aria-hidden />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl font-semibold">{e.role}</h3>
              <span className="text-sm text-muted">{e.period}</span>
            </div>
            <p className="text-accent">{e.org} <span className="text-muted">· {e.place}</span></p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-accent">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      {tab !== "research" && (
        <div className="mt-14">
          <h3 className="mb-4 text-xl font-semibold">Selected engineering projects at Sanay</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="rounded-lg border border-line bg-card p-5">
                <h4 className="font-serif text-lg font-semibold">{p.name}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
