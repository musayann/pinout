const faqs = [
  {
    question: "What plug types are used in Rwanda?",
    answer:
      "Rwanda uses plug types C, E, and G. Type C (Europlug) fits directly into Type E sockets and is used for low-power devices like chargers and laptops. Dedicated Type C sockets are very rare. Type E (French/Belgian) was the former standard and remains the most common grounded socket in older buildings. Type G (British) is Rwanda's official standard, adopted as part of East African Community harmonisation, and now required in all new construction.",
  },
  {
    question: "What voltage and frequency does Rwanda use?",
    answer:
      "Rwanda uses 230 V at 50 Hz, the same standard as most of Europe and Africa. No voltage converter is needed for devices rated for this standard.",
  },
  {
    question: "Why do some websites list Type J for Rwanda?",
    answer:
      "Some international databases, notably those derived from IEC data, incorrectly listed Rwanda as using plug types C and J. Type J is the Swiss plug, used primarily in Switzerland and Liechtenstein. This was a data entry error that propagated across reference databases. It has since been corrected in IEC and other sources, though a few secondary sites still show the old data.",
  },
  {
    question: "Do I need a travel adapter for Rwanda?",
    answer:
      "It depends on where you're from. European two-pin (Type C) plugs work directly in Type E sockets, which are common in older buildings. US, Australian, and other non-European travellers will need an adapter. A universal travel adapter is recommended for the best coverage across both older and newer buildings.",
  },
  {
    question: "I'm from the UK — do I need an adapter for Rwanda?",
    answer:
      "Type G (British) is Rwanda's official standard, so many newer buildings, hotels, and commercial properties will have Type G sockets. However, older buildings may only have Type E (French/Belgian) sockets, which are not compatible with Type G plugs. It's always a good idea to carry an adapter just in case your accommodation doesn't have Type G sockets.",
  },
  {
    question: "What is the East African Community (EAC) plug standard?",
    answer:
      "Rwanda has adopted Type G (British BS 1363) as its official plug standard, as part of East African Community harmonisation. Along with Kenya, Tanzania, and Uganda, Rwanda now requires Type G sockets in all new electrical installations. This means Type G is becoming increasingly common, especially in Kigali and other urban centres.",
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
