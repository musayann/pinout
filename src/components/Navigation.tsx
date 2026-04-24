"use client";

import { useState } from "react";

const navLinks = [
  { href: "#plug-types", label: "Plug Types" },
  { href: "#type-j-error", label: "Type J Error" },
  { href: "#quick-facts", label: "Quick Facts" },
  { href: "#faq", label: "FAQ" },
  { href: "#sources", label: "Sources" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] font-semibold text-rw-teal text-lg tracking-tight"
        >
          Rwanda Plugs & Sockets Guide
        </a>

        <div className="hidden md:flex md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-rw-teal transition-colors px-2 py-1 rounded-md hover:bg-rw-teal/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-1.5 rounded-md text-rw-teal hover:bg-rw-teal/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-80 opacity-100 border-t border-stone-200/60" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-text-secondary hover:text-rw-teal hover:bg-rw-teal/5 px-3 py-2.5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
