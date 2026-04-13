const faqs = [
  {
    question: "What plug types are used in Rwanda?",
    answer:
      "Rwanda uses plug types C, E, and G. Type C (Europlug) is listed due to its compatibility with Type E sockets, and there are no dedicated Type C sockets installed. Type E (French) is the historical standard from Belgian colonial infrastructure. Type G (British) is the official East African Community standard, now required in all new construction.",
  },
  {
    question: "What voltage and frequency does Rwanda use?",
    answer:
      "Rwanda uses 230 V at 50 Hz, the same standard as most of Europe and Africa. No voltage converter is needed for devices rated for this standard.",
  },
  {
    question: "Why do some websites list Type J for Rwanda?",
    answer:
      "Some international databases, notably those derived from IEC data, incorrectly listed Rwanda as using plug types C and J. Type J is the Swiss plug, used exclusively in Switzerland and Liechtenstein. This was a data entry error that propagated across reference databases. It has since been corrected in authoritative sources, though a few secondary sites still show the old data.",
  },
  {
    question: "Do I need a travel adapter for Rwanda?",
    answer:
      "It depends on where you're from. European two-pin (Type C) plugs work directly in most Rwandan sockets. French (Type E) plugs work in the Type E sockets common in older buildings. Travellers from the UK, US, Australia, and other regions will need an adapter. A universal travel adapter is recommended for the best coverage across both older and newer buildings.",
  },
  {
    question: "What is the East African Community (EAC) plug standard?",
    answer:
      "The EAC has adopted Type G (British BS 1363) as its official plug standard. Rwanda, along with Kenya, Tanzania, and Uganda, now requires Type G sockets in all new electrical installations. This means Type G is becoming increasingly common, especially in Kigali and other urban centres.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-y border-stone-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight text-center mb-10">
            Frequently Asked Questions
          </h2>

          <dl className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-warm-bg rounded-xl border border-stone-200/80 p-5 sm:p-6"
              >
                <dt className="font-[family-name:var(--font-display)] font-semibold text-text-primary text-lg leading-snug">
                  {faq.question}
                </dt>
                <dd className="mt-2.5 text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
