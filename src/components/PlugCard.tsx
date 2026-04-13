import type { PlugType } from "@/data/plugTypes";
import PlugIllustration from "./PlugIllustration";

const typeBadgeColors: Record<string, string> = {
  C: "bg-rw-blue text-white",
  E: "bg-rw-teal text-white",
  G: "bg-rw-gold text-white",
};

export default function PlugCard({ plug }: { plug: PlugType }) {
  return (
    <article className="relative group bg-warm-card rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Status pill — floating over illustration */}
      {plug.status === "official" ? (
        <span className="absolute top-3 right-3 z-10 px-2.5 py-1 text-xs font-semibold rounded-full bg-rw-teal/80 backdrop-blur-sm text-white shadow-sm whitespace-nowrap">
          Official Standard
        </span>
      ) : (
        <span className="absolute top-3 right-3 z-10 px-2.5 py-1 text-xs font-semibold rounded-full bg-stone-500/60 backdrop-blur-sm text-white shadow-sm whitespace-nowrap">
          Legacy
        </span>
      )}

      {/* Illustration area */}
      <div className="bg-stone-50 rounded-t-2xl border-b border-stone-100 p-4">
        <PlugIllustration
          type={plug.type as "C" | "E" | "G"}
          className="h-44"
        />
      </div>

      <div className="p-6">
        {/* Type badge and name */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-[family-name:var(--font-display)] font-bold text-lg ${typeBadgeColors[plug.type] || "bg-stone-200 text-stone-700"}`}
          >
            {plug.type}
          </span>
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl text-text-primary">
              Type {plug.type}
            </h3>
            <p className="text-sm text-text-muted">{plug.name}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {plug.description}
        </p>

        {/* Specs */}
        <dl className="space-y-2.5 text-sm border-t border-stone-100 pt-4">
          <div className="flex justify-between">
            <dt className="text-text-muted">Pins</dt>
            <dd className="text-text-primary text-right max-w-[60%]">
              {plug.pins}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-text-muted">Grounded</dt>
            <dd className="text-text-primary">
              {plug.grounded ? (
                <span className="text-rw-teal font-medium">Yes</span>
              ) : (
                <span className="text-text-muted">No</span>
              )}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-text-muted">Rated current</dt>
            <dd className="text-text-primary font-medium">
              {plug.ratedCurrent}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-text-muted">Compatibility</dt>
            <dd className="text-text-primary text-right max-w-[60%]">
              {plug.compatibility}
            </dd>
          </div>
        </dl>

        {/* Where found */}
        <div className="mt-5 p-3 bg-rw-teal/5 rounded-lg border border-rw-teal/10">
          <p className="text-xs font-medium text-rw-teal uppercase tracking-wider mb-1">
            Where found
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            {plug.whereFound}
          </p>
        </div>
      </div>
    </article>
  );
}
