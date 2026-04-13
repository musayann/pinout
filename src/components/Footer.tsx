export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-text-primary mb-2">
            About this page
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            This reference page was created to provide accurate information
            about electrical plug and socket types used in Rwanda, and to
            document the Type&nbsp;J database error found in some international
            references. All claims are cited in the{" "}
            <a
              href="#sources"
              className="underline underline-offset-2 hover:text-rw-teal transition-colors"
            >
              Sources &amp; Evidence
            </a>{" "}
            section above.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-6 pt-6 border-t border-stone-100">
          <h4 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-2">
            Photo credits
          </h4>
          <ul className="text-xs text-text-muted space-y-1 leading-relaxed">
            <li>
              Type C photo by SomnusDe &mdash; public domain
            </li>
            <li>
              Type E photo by Looxix, Etienne Rastoul, Hic et nunc &mdash;{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-rw-teal transition-colors"
              >
                CC BY-SA 3.0
              </a>
            </li>
            <li>
              Type G photo by Ukpluggerrr &mdash;{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-rw-teal transition-colors"
              >
                CC BY-SA 4.0
              </a>
            </li>
            <li>
              Type J photo by Filzstift &amp; ZH8000 &mdash;{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-rw-teal transition-colors"
              >
                CC BY-SA 4.0
              </a>
            </li>
          </ul>
          <p className="text-xs text-text-muted mt-1">
            All images from Wikimedia Commons under free licenses.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-6 pt-6 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">Last updated: April 2026</p>
          <p className="text-xs text-text-muted">
            Open source reference &middot; Not affiliated with IEC or any
            standards body
          </p>
        </div>
      </div>
    </footer>
  );
}
