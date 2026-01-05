import BlurFade from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* SECTION 1: HERO */}
      <section id="hero" className="py-20 md:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid md:grid-cols-[240px_1fr] gap-12 md:gap-16 items-start">
            {/* Profile Section */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex flex-col items-center md:items-start gap-6">
                <Avatar className="size-56 border shadow-xl">
                  <AvatarImage alt="Joshio Rojas Moraga" src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback className="text-4xl font-bold">JRM</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Rechtsanwalt</p>
                  <p className="text-xl font-bold text-foreground leading-tight">Joshio Rojas<br/>Moraga</p>
                  <p className="text-sm text-muted-foreground">Hamburg</p>
                </div>
              </div>
            </BlurFade>

            {/* Main Content */}
            <div className="flex-1 space-y-10">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                    Klar im Recht.<br/>
                    Klar bei den Kosten.
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Individuelle Rechtsberatung mit klarem Fokus auf Ihr angestrebtes Ziel.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Kontakt aufnehmen
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex h-12 items-center justify-center rounded border border-input bg-background px-8 text-base font-semibold hover:bg-accent transition-colors"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t"></div>

      {/* SECTION 2: ÜBER MICH */}
      <section id="about" className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-16">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold">Über mich</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Langjährige Erfahrung in der außergerichtlichen und gerichtlichen Vertretung nationaler und internationaler Unternehmen sowie von Privatmandanten.
              </p>
            </div>
          </BlurFade>

          {/* Tätigkeitsschwerpunkte */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Tätigkeitsschwerpunkte</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Vertragsrecht DE/EN",
                  "Maritimes Wirtschaftsrecht",
                  "Versicherungsrecht",
                  "Schiedsverfahren",
                  "Mietrecht",
                  "AGB-Prüfung und -Gestaltung",
                  "Verwaltungsrecht"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded border bg-card hover:border-primary/40 transition-colors"
                  >
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="max-w-3xl p-8 bg-card border-l-4 border-primary">
              <p className="text-lg font-medium leading-relaxed">
                Klare Einschätzung, transparente Kommunikation und konsequente Vertretung, wenn der Verfahrensweg sinnvoll ist.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="border-t"></div>

      {/* SECTION 3: KONTAKT */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-16">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold">Kontakt</h2>
              <p className="text-lg text-muted-foreground">
                Kontaktieren Sie mich jederzeit gerne. Wählen Sie den für Sie passenden Weg.
              </p>
            </div>
          </BlurFade>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kontaktformular */}
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Per E-Mail</h3>
                  <p className="text-sm text-muted-foreground">Schildern Sie mir kurz Ihr Anliegen. Ich melde mich zeitnah zurück.</p>
                </div>
                <div className="p-6 bg-card border rounded">
                  <ContactForm />
                </div>
              </div>
            </BlurFade>

            {/* Telefon & Kontaktdaten */}
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="space-y-8">
                {/* Telefon */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Telefonisch</h3>
                  <div className="p-6 bg-card border rounded space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Rufen Sie mich direkt an</p>
                      <a
                        href="tel:+491777983780"
                        className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        +49 177 7983780
                      </a>
                    </div>
                    <Link
                      href="mailto:jrm@jrmlegal.de?subject=Rückruf%20gewünscht"
                      className="inline-flex w-full h-11 items-center justify-center rounded border-2 border-primary bg-background px-6 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Rückruf anfordern
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      Sollte ich telefonisch nicht erreichbar sein, melde ich mich in der Regel innerhalb von 24 Stunden zurück.
                    </p>
                  </div>
                </div>

                {/* Kontaktdaten */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Kanzlei</h3>
                  <div className="p-6 bg-card border rounded space-y-3">
                    <div>
                      <p className="font-semibold">Joshio Rojas Moraga</p>
                      <p className="text-sm text-muted-foreground">Rechtsanwalt</p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Farnweg 3b</p>
                      <p>22459 Hamburg</p>
                    </div>
                    <div className="text-sm space-y-1 pt-2 border-t">
                      <p>
                        <a href="mailto:jrm@jrmlegal.de" className="text-primary hover:underline">
                          jrm@jrmlegal.de
                        </a>
                      </p>
                      <p>
                        <a href="tel:+491777983780" className="text-primary hover:underline">
                          +49 177 7983780
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <div className="border-t"></div>

      {/* SECTION 4: WIE GEHT ES WEITER */}
      <section id="next-steps" className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Wie geht es weiter</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nach Ihrer Kontaktaufnahme erhalten Sie eine Rückmeldung mit einer <strong className="text-foreground">informellen Vorabbewertung</strong> Ihres Anliegens. Dabei erhalten Sie eine erste Einschätzung zu Vorgehen, Chancen und Risiken.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-card border rounded space-y-4">
                <div className="size-12 rounded bg-primary/10 flex items-center justify-center">
                  <svg className="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Kostenfreie Ersteinschätzung</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Diese Vorabbewertung dient der Orientierung und stellt noch keine Rechtsberatung dar. Kosten entstehen hierdurch nicht.
                </p>
              </div>

              <div className="p-8 bg-card border rounded space-y-4">
                <div className="size-12 rounded bg-primary/10 flex items-center justify-center">
                  <svg className="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Transparente Beauftragung</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Eine kostenpflichtige Beratung erfolgt erst nach ausdrücklicher Beauftragung.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="border-t"></div>

      {/* SECTION 5: FOOTER */}
      <footer className="py-16 bg-card">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Impressum */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">Impressum</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="font-semibold text-foreground">Joshio Rojas Moraga</p>
                  <p>Rechtsanwalt</p>
                  <p>Farnweg 3b<br/>22459 Hamburg</p>
                  <div className="pt-2 space-y-1">
                    <p><a href="mailto:jrm@jrmlegal.de" className="hover:text-primary transition-colors">jrm@jrmlegal.de</a></p>
                    <p><a href="tel:+491777983780" className="hover:text-primary transition-colors">+49 177 7983780</a></p>
                  </div>
                </div>
              </div>

              {/* Berufsrechtliche Angaben */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">Berufsrechtliche Angaben</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Berufsbezeichnung: Rechtsanwalt</p>
                  <p>Verliehen in: Deutschland</p>
                  <p className="pt-2 font-semibold text-foreground">Zuständige Kammer:</p>
                  <p>Hanseatische Rechtsanwaltskammer Hamburg</p>
                  <p className="pt-2">
                    <a
                      href="https://www.brak.de/fuer-anwaelte/berufsrecht/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Berufsrechtliche Regelungen
                    </a>
                  </p>
                </div>
              </div>

              {/* Rechtliche Hinweise */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">Rechtliche Hinweise</h3>
                <div className="text-sm text-muted-foreground space-y-3">
                  <p>
                    <Link href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>
                  </p>
                  <p className="text-xs leading-relaxed">
                    Die Inhalte dieser Website stellen keine Rechtsberatung dar. Eine individuelle Beratung erfolgt ausschließlich nach ausdrücklicher Mandatierung.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Joshio Rojas Moraga · Alle Rechte vorbehalten</p>
            </div>
          </BlurFade>
        </div>
      </footer>
    </main>
  );
}
