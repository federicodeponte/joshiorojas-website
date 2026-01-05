import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
        <p className="text-muted-foreground">Stand: Januar 2025</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
        {/* 1. Verantwortlicher */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className="bg-muted/50 p-4 rounded-lg my-4">
            <p className="font-medium">Joshio Rojas Moraga</p>
            <p>Rechtsanwalt</p>
            <p>Farnweg 3b</p>
            <p>22459 Hamburg</p>
            <p className="mt-2">
              E-Mail: <a href="mailto:jrm@jrmlegal.de" className="text-primary hover:underline">jrm@jrmlegal.de</a>
            </p>
            <p>Telefon: <a href="tel:+491777983780" className="text-primary hover:underline">+49 177 7983780</a></p>
          </div>
        </section>

        {/* 2. Allgemeine Hinweise */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
          </p>
        </section>

        {/* 3. Kontaktformular */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Kontaktformular und E-Mail-Kontakt</h2>
          <p>
            Wenn Sie mich per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Nachrichtentext) von mir gespeichert, um Ihre Anfrage zu bearbeiten.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4 border border-blue-200 dark:border-blue-800">
            <p className="font-medium mb-2">FormSubmit.co Integration:</p>
            <p className="text-sm">
              Das Kontaktformular nutzt FormSubmit.co ausschließlich zur E-Mail-Weiterleitung. FormSubmit.co speichert Ihre Daten NICHT. Die E-Mail wird direkt an mich weitergeleitet und anschließend von mir gemäß dieser Datenschutzerklärung verarbeitet.
            </p>
          </div>
          <p className="mt-4">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a) DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. b) DSGVO (Vertragsanbahnung)
          </p>
          <p className="mt-2">
            <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen.
          </p>
        </section>

        {/* 4. Hosting */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet.
          </p>
          <p className="mt-2">
            Beim Besuch dieser Website werden automatisch Informationen in Server-Log-Dateien gespeichert, die Ihr Browser automatisch übermittelt:
          </p>
          <ul className="list-disc list-inside space-y-1 my-4">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f) DSGVO (berechtigtes Interesse an der Bereitstellung einer funktionsfähigen Website)
          </p>
        </section>

        {/* 5. Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p>
            Diese Website verwendet derzeit keine Cookies.
          </p>
        </section>

        {/* 6. Ihre Rechte */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Ihre Rechte</h2>
          <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.</p>
          <p className="mt-4">
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren:
          </p>
          <div className="bg-muted/50 p-4 rounded-lg my-4">
            <p className="font-medium">Hamburgischer Beauftragter für Datenschutz und Informationsfreiheit</p>
            <p>Ludwig-Erhard-Str. 22</p>
            <p>20459 Hamburg</p>
            <p className="mt-2">
              Website: <a href="https://datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">datenschutz-hamburg.de</a>
            </p>
          </div>
        </section>

        {/* 7. Kontakt */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Kontakt</h2>
          <p>
            Bei Fragen zur Verarbeitung Ihrer persönlichen Daten oder zu Ihren Rechten können Sie sich jederzeit an mich wenden:
          </p>
          <p className="mt-2">
            E-Mail: <a href="mailto:jrm@jrmlegal.de" className="text-primary hover:underline">jrm@jrmlegal.de</a><br />
            Telefon: <a href="tel:+491777983780" className="text-primary hover:underline">+49 177 7983780</a>
          </p>
        </section>
      </div>

      <div className="pt-8 border-t">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
