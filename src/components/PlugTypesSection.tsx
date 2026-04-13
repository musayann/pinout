import { plugTypes } from "@/data/plugTypes";
import PlugCard from "./PlugCard";

export default function PlugTypesSection() {
  return (
    <section id="plug-types" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight">
            Plug &amp; Socket Types
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Rwanda&rsquo;s sockets are Types&nbsp;E and&nbsp;G. Type&nbsp;C is
            also listed in international references because the Europlug fits
            directly into Type&nbsp;E sockets, making it the most common plug
            in everyday use, even though dedicated Type&nbsp;C sockets are rare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plugTypes.map((plug) => (
            <PlugCard key={plug.type} plug={plug} />
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-stone-50 border border-stone-200/60 max-w-2xl mx-auto">
          <p className="text-sm text-text-secondary">
            <strong className="text-text-primary">Note on Type&nbsp;F (Schuko):</strong>{" "}
            Type&nbsp;F is listed by the IEC for Rwanda but is uncommon in
            practice, mostly encountered through imported European appliances
            rather than as a widespread wiring standard.
          </p>
        </div>
      </div>
    </section>
  );
}
