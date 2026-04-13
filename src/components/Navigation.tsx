const navLinks = [
  { href: "#plug-types", label: "Plug Types" },
  { href: "#type-j-error", label: "Type J Error" },
  { href: "#quick-facts", label: "Quick Facts" },
  { href: "#faq", label: "FAQ" },
  { href: "#sources", label: "Sources" },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] font-semibold text-rw-teal text-lg tracking-tight"
        >
          Rwanda Plugs
        </a>
        <div className="flex gap-2 sm:gap-6">
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
      </div>
    </nav>
  );
}
