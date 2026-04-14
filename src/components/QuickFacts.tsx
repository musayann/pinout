const facts = [
  {
    label: "Voltage",
    value: "230 V",
    detail: "Same as most of Europe and Africa",
  },
  {
    label: "Frequency",
    value: "50 Hz",
    detail: "Standard AC frequency",
  },
  {
    label: "Plug types",
    value: "C, E, G",
    detail: "Type G is the official standard",
  },
];

export default function QuickFacts() {
  return (
    <section id="quick-facts" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight text-center mb-12">
            Quick Facts
          </h2>

          <div className="bg-warm-card rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
            {/* Facts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
              {facts.map((fact) => (
                <div key={fact.label} className="p-5 sm:p-6 text-center">
                  <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    {fact.label}
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-rw-teal">
                    {fact.value}
                  </p>
                  <p className="text-xs text-text-muted mt-1.5">
                    {fact.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Adapter advice */}
            <div className="border-t border-stone-100 p-5 sm:p-6 bg-rw-teal/[0.03]">
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-text-primary mb-3">
                Plug Compatibility
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">
                      ✓
                    </span>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        European 2-pin (Type C)
                      </strong>{" "}
                      plugs work in Type E sockets, common in older buildings.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">
                      ✓
                    </span>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        French/Belgian (Type E)
                      </strong>{" "}
                      plugs work in Type E sockets, common in older buildings.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">
                      ✓
                    </span>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        British (Type G)
                      </strong>{" "}
                      sockets are found in newer buildings and hotels. You may
                      also encounter them in some older buildings.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">
                      ⚠
                    </span>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">
                        US, Canadian, Chinese, Japanese, Australian, Indian
                      </strong>{" "}
                      and other non-European plug types will need an adapter.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rw-blue font-bold mt-0.5">
                      ℹ
                    </span>
                    <p className="text-text-secondary">
                      A{" "}
                      <strong className="text-text-primary">
                        universal travel adapter
                      </strong>{" "}
                      is recommended for the best coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
