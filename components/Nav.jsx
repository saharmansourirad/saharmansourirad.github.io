"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Skills", "Experience", "Education", "Publications", "Teaching", "Contact"];

export default function Nav({ name }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-lg font-semibold">{name}</a>
        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l}><a className="hover:text-accent" href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line px-5 py-3 text-sm md:hidden">
          {links.map((l) => (
            <li key={l}><a className="block py-2 text-muted hover:text-accent" href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
