import BlurFade from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20">
      {/* SECTION 1: HERO */}
      <section id="hero" className="relative">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profilbild mit Name */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex flex-col items-center gap-5">
                <Avatar className="size-52 border-4 border-primary/30 shadow-2xl ring-4 ring-primary/10">
                  <AvatarImage alt="Joshio Rojas Moraga" src={DATA.avatarUrl} />
                  <AvatarFallback className="text-3xl">JRM</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-2">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">Rechtsanwalt</p>
                  <p className="text-lg font-bold text-foreground">Joshio Rojas Moraga</p>
                </div>
              </div>
            </BlurFade>

            {/* Text */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Klar im Recht.<br/>Klar bei den Kosten.
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Individuelle Rechtsberatung mit klarem Fokus auf Ihr angestrebtes Ziel.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl"
                  >
                    Kontakt aufnehmen
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ÜBER MICH */}
      <section id="about" className="bg-muted/30 -mx-6 px-6 py-16 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-3xl font-bold text-center">Über mich</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                Langjährige Erfahrung in der außergerichtlichen und gerichtlichen Vertretung nationaler und internationaler Unternehmen sowie von Privatmandanten.
              </p>
            </BlurFade>

            {/* Tätigkeitsschwerpunkte als Cards */}
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Tätigkeitsschwerpunkte</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Vertragsrecht DE/EN", icon: "📄" },
                    { title: "Maritimes Wirtschaftsrecht", icon: "⚓" },
                    { title: "Versicherungsrecht", icon: "🛡️" },
                    { title: "Schiedsverfahren", icon: "⚖️" },
                    { title: "Erfahrung im Mietrecht", icon: "🏠" },
                    { title: "AGB-Prüfung und -Gestaltung", icon: "📋" },
                    { title: "Verwaltungsrecht", icon: "🏛️" }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-5 rounded-xl border bg-card shadow-sm hover:shadow-lg hover:scale-105 hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <span className="font-semibold text-sm leading-tight">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="text-center max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/20 shadow-lg">
                <p className="text-xl font-semibold text-foreground leading-relaxed">
                  Klare Einschätzung, transparente Kommunikation und konsequente Vertretung, wenn der Verfahrensweg sinnvoll ist.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* SECTION 3: KONTAKT */}
      <section id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">Kontakt aufnehmen</h2>
                <p className="text-lg text-muted-foreground">
                  Kontaktieren Sie mich jederzeit gerne. Wählen Sie den für Sie passenden Weg.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Kontaktformular */}
              <BlurFade delay={BLUR_FADE_DELAY * 10}>
                <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-md">
                      <span className="text-3xl">✉️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Per E-Mail</h3>
                  </div>
                  <ContactForm />
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800/30">
                    <p className="text-sm text-blue-900 dark:text-blue-100 flex items-start gap-2">
                      <span className="text-lg">💡</span>
                      <span>Bitte schildern Sie Ihr Anliegen kurz. Ich melde mich zeitnah zurück.</span>
                    </p>
                  </div>
                </div>
              </BlurFade>

              {/* Telefonischer Kontakt */}
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="size-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-md">
                      <span className="text-3xl">📞</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Telefonisch</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Rufen Sie mich direkt an:</p>
                      <a
                        href="tel:+491777983780"
                        className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors block"
                      >
                        +49 177 7983780
                      </a>
                    </div>
                    <div className="pt-2">
                      <Link
                        href="mailto:jrm@jrmlegal.de?subject=Rückruf%20gewünscht"
                        className="inline-flex w-full h-12 items-center justify-center rounded-xl border-2 border-primary bg-primary/5 px-6 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                      >
                        📧 Rückruf anfordern
                      </Link>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800/30">
                      <p className="text-sm text-blue-900 dark:text-blue-100 flex items-start gap-2">
                        <span className="text-lg">⏱️</span>
                        <span>Sollte ich telefonisch nicht erreichbar sein, melde ich mich in der Regel innerhalb von 24 Stunden zurück.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WIE GEHT ES WEITER */}
      <section id="next-steps" className="bg-primary/5 -mx-6 px-6 py-16 rounded-lg border border-primary/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-y-6 text-center">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <h2 className="text-3xl font-bold">Wie geht es weiter</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Nach Ihrer Kontaktaufnahme erhalten Sie eine Rückmeldung mit einer <strong className="text-foreground">informellen Vorabbewertung</strong> Ihres Anliegens. Dabei erhalten Sie eine erste Einschätzung zu Vorgehen, Chancen und Risiken.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-8 bg-card rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all">
                    <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4 shadow-md">
                      <span className="text-4xl">✓</span>
                    </div>
                    <p className="text-lg font-bold text-foreground mb-3">Kostenfreie Ersteinschätzung</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Diese Vorabbewertung dient der Orientierung und stellt noch keine Rechtsberatung dar. Kosten entstehen hierdurch nicht.</p>
                  </div>
                  <div className="p-8 bg-card rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all">
                    <div className="size-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4 shadow-md">
                      <span className="text-4xl">🤝</span>
                    </div>
                    <p className="text-lg font-bold text-foreground mb-3">Transparente Beauftragung</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Eine kostenpflichtige Beratung erfolgt erst nach ausdrücklicher Beauftragung.</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <footer className="border-t pt-12 pb-8 bg-muted/20">
        <div className="flex flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Impressum */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span>📍</span>
                  Impressum
                </h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Joshio Rojas Moraga</p>
                  <p>Rechtsanwalt</p>
                  <p>Farnweg 3b</p>
                  <p>22459 Hamburg</p>
                  <p className="mt-3">✉️ jrm@jrmlegal.de</p>
                  <p>📞 +49 177 7983780</p>
                </div>
              </div>

              {/* Berufsrechtliche Angaben */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span>⚖️</span>
                  Berufsrechtliche Angaben
                </h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Berufsbezeichnung: Rechtsanwalt</p>
                  <p>Verliehen in: Deutschland</p>
                  <p className="mt-3 font-medium text-foreground">Zuständige Kammer:</p>
                  <p>Hanseatische Rechtsanwaltskammer Hamburg</p>
                  <p className="mt-3">
                    <a
                      href="https://www.brak.de/fuer-anwaelte/berufsrecht/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Berufsrechtliche Regelungen →
                    </a>
                  </p>
                </div>
              </div>

              {/* Rechtliche Hinweise */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span>📋</span>
                  Rechtliche Hinweise
                </h3>
                <div className="text-sm text-muted-foreground space-y-3">
                  <p>
                    <Link href="/datenschutz" className="text-primary hover:underline inline-flex items-center gap-1">
                      Datenschutzerklärung →
                    </Link>
                  </p>
                  <div className="p-4 bg-muted rounded-lg border">
                    <p className="text-xs">
                      Die Inhalte dieser Website stellen keine Rechtsberatung dar. Eine individuelle Beratung erfolgt ausschließlich nach ausdrücklicher Mandatierung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="text-center text-sm text-muted-foreground pt-8 border-t">
              <p>© {new Date().getFullYear()} Joshio Rojas Moraga. Alle Rechte vorbehalten.</p>
            </div>
          </BlurFade>
        </div>
      </footer>
    </main>
  );
}
