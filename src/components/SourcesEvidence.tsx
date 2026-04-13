const sources = [
  {
    name: "IEC World Plugs",
    org: "International Electrotechnical Commission",
    url: "https://www.iec.ch/world-plugs",
    lists: "C, E, F, G",
    note: "The official IEC database corrected Rwanda's listing in 2025 to types C, E, F, and G, removing the erroneous Type J. Type F (Schuko) is included but is uncommon in practice.",
    accessed: "April 2026",
  },
  {
    name: "worldstandards.eu",
    org: "World Standards",
    url: "https://www.worldstandards.eu/electricity/plug-voltage-by-country/rwanda/",
    lists: "C, E, F, G",
    note: 'Lists four types including F (Schuko). Explains that C and E are from Belgian colonial history, while G was introduced through East African Community trade. Notes that "Rwanda takes a mix-and-match approach to electrical plugs."',
    accessed: "April 2026",
  },
  {
    name: "Energy in Rwanda",
    org: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Energy_in_Rwanda",
    lists: "C, E, G",
    note: "Confirms the historical use of C and E from Belgian colonial influence, and that Type G (BS 1363) has been adopted as the official EAC standard for new installations.",
    accessed: "April 2026",
  },
  {
    name: "Travel guide for Rwanda",
    org: "Wikivoyage",
    url: "https://en.wikivoyage.org/wiki/Rwanda",
    lists: "C, E, G",
    note: 'States that "Type C or E plug will work in most places" and that Type G is the official East African Community standard found in modern construction.',
    accessed: "April 2026",
  },
  {
    name: "Plug types in Rwanda",
    org: "Wise",
    url: "https://wise.com/gb/plug-types/rwanda",
    lists: "C, E, F, G",
    note: "Correctly identifies all four associated plug types for Rwanda at 230V / 50Hz, with details on each plug's pin configuration.",
    accessed: "April 2026",
  },
  {
    name: "Power plugs and sockets in Rwanda",
    org: "Power Plugs & Sockets World",
    url: "https://powerplugsockets.world/country/rwanda/",
    lists: "C, E, F, G",
    note: "Lists Type C as the primary plug alongside E, F, and G. Includes a compatibility checker for travelers and confirms 230V / 50Hz standard.",
    accessed: "April 2026",
  },
  {
    name: "Power plugs in Rwanda",
    org: "World Power Plugs",
    url: "https://world-power-plugs.com/rwanda",
    lists: "C, E, F, G",
    note: "Lists all four outlet types at 230V / 50Hz. Notes Type C compatibility with E and F sockets, and that Type G outlets only accept Type G plugs.",
    accessed: "April 2026",
  },
];

const uncorrectedSources = [
  {
    name: "power-plugs-sockets.com",
    url: "https://www.power-plugs-sockets.com/rwanda/",
    lists: "C, J",
    note: "Still displays the old, incorrect C/J listing as of April 2026. An example of the error persisting in secondary sources.",
  },
  {
    name: "Electrical Safety First",
    url: "https://www.electricalsafetyfirst.org.uk/guidance/advice-for-you/when-travelling/travel-adaptor-for-rwanda/",
    lists: "C, J",
    note: "A UK charity's travel adaptor guide still lists the incorrect C/J combination for Rwanda as of April 2026, likely sourced from the old IEC data.",
  },
];

export default function SourcesEvidence() {
  return (
    <section id="sources" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight text-center mb-4">
            Sources &amp; Evidence
          </h2>
          <p className="text-text-secondary text-center mb-10">
            Primary and secondary references confirming Rwanda&rsquo;s plug
            types. Each source was independently checked.
          </p>

          {/* Corrected sources */}
          <div className="bg-warm-card rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
            <div className="p-5 sm:p-6 border-b border-stone-100 bg-emerald-50/50">
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-text-primary">
                Sources listing corrected data
              </h3>
            </div>
            <div className="divide-y divide-stone-100">
              {sources.map((source) => (
                <div key={source.name} className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-text-primary underline underline-offset-2 hover:text-rw-teal transition-colors"
                      >
                        {source.name}
                      </a>
                      <span className="text-text-muted text-sm ml-2">
                        &middot; {source.org}
                      </span>
                    </div>
                    <span className="text-sm font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200/60 whitespace-nowrap">
                      Lists: {source.lists}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {source.note}
                  </p>
                  <p className="text-xs text-text-muted mt-1.5">
                    Accessed: {source.accessed}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Uncorrected sources */}
          <div className="mt-6 bg-warm-card rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
            <div className="p-5 sm:p-6 border-b border-stone-100 bg-red-50/50">
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-text-primary">
                Sources still showing incorrect data
              </h3>
            </div>
            <div className="divide-y divide-stone-100">
              {uncorrectedSources.map((source) => (
                <div key={source.name} className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-text-primary underline underline-offset-2 hover:text-rw-teal transition-colors"
                    >
                      {source.name}
                    </a>
                    <span className="text-sm font-mono bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-200/60 whitespace-nowrap">
                      Lists: {source.lists}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {source.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
