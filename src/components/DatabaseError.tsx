import PlugIllustration from "./PlugIllustration";

export default function DatabaseError() {
  return (
    <section
      id="type-j-error"
      className="py-16 sm:py-20 bg-amber-bg border-y border-amber-border/20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-border/15 flex items-center justify-center mt-0.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-amber-border"
              >
                <path
                  d="M10 6v4m0 4h.01M3.172 17h13.656a2 2 0 001.732-3L11.732 3a2 2 0 00-3.464 0L1.44 14a2 2 0 001.732 3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight">
                The Type J Database Error
              </h2>
              <p className="mt-2 text-text-secondary">
                Why some sources incorrectly list Rwanda as using the Swiss Type J plug
              </p>
            </div>
          </div>

          {/* Error explanation card */}
          <div className="bg-white rounded-xl border border-amber-border/20 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              {/* Before/After comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-lg bg-red-50 border border-red-200/60">
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
                    Incorrect (old data)
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-red-700">
                    C / J
                  </p>
                  <p className="text-sm text-red-600/80 mt-1">
                    Listed Rwanda with the Swiss Type J plug
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200/60">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                    Correct (current)
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-emerald-700">
                    C / E / G
                  </p>
                  <p className="text-sm text-emerald-600/80 mt-1">
                    The actual plug types used in Rwanda
                  </p>
                </div>
              </div>

              {/* Detailed explanation */}
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Some international databases, notably those derived from IEC
                  (International Electrotechnical Commission) data, incorrectly
                  listed Rwanda as using{" "}
                  <strong className="text-text-primary">
                    plug types C and J
                  </strong>
                  . The Type&nbsp;J plug is a three-pin design used primarily
                  in{" "}
                  <strong className="text-text-primary">
                    Switzerland and Liechtenstein
                  </strong>{" "}
                  and it has never been part of Rwanda&rsquo;s electrical
                  infrastructure.
                </p>
                <p>
                  This error likely originated from a data entry mistake that was
                  then propagated across multiple reference databases and travel
                  websites that sourced their information from the same upstream
                  data. Because many sites copy from the same authoritative
                  sources without independent verification, the incorrect C/J
                  listing became widely repeated.
                </p>
                <p>
                  IEC and other sources have since corrected the specific
                  mistake: the corrected IEC listing is plug types C, E, F, and
                  G, not C and J. The important correction is the removal of
                  Type&nbsp;J. Type&nbsp;F appears in some databases because
                  Type&nbsp;E and Type&nbsp;F are often grouped together in
                  European plug-compatibility data.
                </p>
              </div>

              {/* Type J illustration */}
              <div className="mt-8 p-5 bg-stone-50 rounded-lg border border-stone-200/60">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <PlugIllustration type="J" className="w-40 flex-shrink-0" />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-text-primary">
                      Type J: Swiss Plug
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      Three round pins in an offset triangular pattern. Used
                      mainly in Switzerland and Liechtenstein. This plug type is
                      not used in Rwanda and has no historical or practical
                      connection to Rwanda&rsquo;s electrical system.
                    </p>
                  </div>
                </div>
              </div>

              {/* Correction timeline */}
              <div className="mt-8">
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-text-primary mb-4">
                  Correction Timeline
                </h3>
                <div className="relative pl-6 border-l-2 border-stone-200 space-y-6">
                  {[
                    {
                      period: (<>Pre-2020<span className="normal-case">s</span></>),
                      title: "Error enters IEC-derived databases",
                      description:
                        "IEC-sourced data lists Rwanda as using plug types C and J. The origin is likely a data entry mistake. Type J (Swiss) was associated with Rwanda without basis.",
                    },
                    {
                      period: "Years following",
                      title: "Propagation across the web",
                      description:
                        "Travel sites, adapter retailers, and reference databases copy the C/J listing from upstream sources without independent verification. The error becomes widely repeated.",
                    },
                    {
                      period: "2025",
                      title: "IEC World Plugs corrected",
                      description:
                        "The IEC World Plugs database removes Type J from Rwanda's listing and updates it to C, E, F, and G. Some databases list Type F because Type E and Type F are often grouped together in European plug-compatibility data; that does not mean Rwanda commonly has Type F Schuko wall sockets.",
                    },
                    {
                      period: "Present",
                      title: "Most sources corrected, some lag behind",
                      description:
                        "The majority of authoritative sources no longer list Type J for Rwanda. A few secondary sites still display the old, incorrect C/J data.",
                    },
                  ].map((event, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-amber-border/60 border-2 border-white" />
                      <p className="text-xs font-semibold text-amber-border uppercase tracking-wider">
                        {event.period}
                      </p>
                      <p className="font-medium text-text-primary text-sm mt-0.5">
                        {event.title}
                      </p>
                      <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-muted italic">
                  Note: The IEC correction occurred in 2025. Earlier timeline
                  periods are approximate, based on observable changes across
                  reference sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
