export default function Header() {
  return (
    <header
      className="relative overflow-hidden hero-pattern"
      style={{ background: "linear-gradient(to bottom right, #0A3F32, #0B4F3E, #1A6B52)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rw-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rw-blue/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        {/* Accent line */}
        <div
          className="w-12 h-1 bg-rw-gold rounded-full mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        />

        <h1
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Electrical Plugs &<br />
          Sockets in Rwanda
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl text-white/90 font-medium max-w-2xl animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Rwanda electricity standard: 230&nbsp;V, 50&nbsp;Hz, with plug types C, E, G.
        </p>

        <p
          className="mt-5 text-base text-white/60 max-w-xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Rwanda&rsquo;s electrical system uses the same 230&nbsp;V / 50&nbsp;Hz standard found
          across most of Africa and Europe. French/Belgian Type&nbsp;E was the former standard, originally from Belgian
          colonial infrastructure, but Rwanda has now adopted Type&nbsp;G as part of East African Community
          harmonisation, required in all new construction.
        </p>

        {/* Plug type badges */}
        <div
          className="mt-10 flex gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {["C", "E", "G"].map((type) => (
            <a
              key={type}
              href="#plug-types"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-[family-name:var(--font-display)] font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              {type}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48h1440V16c-120 16-360 32-720 32S120 32 0 16v32z"
            fill="var(--color-warm-bg)"
          />
        </svg>
      </div>
    </header>
  );
}
