"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* SECTION 1: HERO */}
      <section id="hero" className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-center">
            {/* Profile Section */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex flex-col items-center lg:items-start gap-6 lg:sticky lg:top-8">
                <div className="relative">
                  <div className="relative size-64 lg:size-72 rounded-full overflow-hidden">
                    <div className="absolute inset-0 border-2 rounded-full shadow-2xl ring-1 ring-primary/10 pointer-events-none z-10"></div>
                    <Image
                      src={DATA.avatarUrl}
                      alt="Joshio Rojas Moraga - Rechtsanwalt Hamburg"
                      fill
                      sizes="(max-width: 1024px) 256px, 288px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-wider">Hamburg</p>
                  </div>
                </div>
                <div className="text-center lg:text-left space-y-3 w-full">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">{t.lawyer}</p>
                  <p className="text-2xl font-bold text-foreground leading-tight">Joshio Rojas<br/>Moraga</p>
                  <div className="pt-4 border-t space-y-2 text-sm">
                    <p className="flex items-center gap-2 justify-center lg:justify-start">
                      <svg className="size-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:jrm@jrmlegal.de" className="text-foreground hover:text-primary transition-colors" aria-label="E-Mail an jrm@jrmlegal.de senden">
                        jrm@jrmlegal.de
                      </a>
                    </p>
                    <p className="flex items-center gap-2 justify-center lg:justify-start">
                      <svg className="size-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+491777983780" className="text-foreground hover:text-primary transition-colors" aria-label="Telefonnummer +49 177 7983780 anrufen">
                        +49 177 7983780
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Main Content */}
            <div className="flex-1 space-y-12">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                    {t.title.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                    {t.subtitle}
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex h-14 items-center justify-center rounded bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                  >
                    {t.contactButton}
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex h-14 items-center justify-center rounded border-2 border-input bg-background px-10 text-base font-semibold hover:bg-accent hover:border-primary/30 transition-all"
                  >
                    {t.learnMoreButton}
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t"></div>

      {/* SECTION 2: ÜBER MICH */}
      <section id="about" className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t.aboutTitle}</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t.aboutDescription}
              </p>
            </div>
          </BlurFade>

          {/* Tätigkeitsschwerpunkte */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div id="areas" className="space-y-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{t.areasTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.areas.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative p-6 rounded border-2 bg-card hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary/100 transition-all rounded-l"></div>
                    <p className="font-semibold text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="max-w-4xl p-10 bg-card border-l-4 border-primary shadow-sm">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90">
                {t.quote}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="border-t"></div>

      {/* SECTION 3: KONTAKT */}
      <section id="contact" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t.contactTitle}</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t.contactDescription}
              </p>
            </div>
          </BlurFade>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Kontaktformular */}
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold">Per E-Mail</h3>
                  <p className="text-base text-muted-foreground">Schildern Sie mir kurz Ihr Anliegen. Ich melde mich zeitnah zurück.</p>
                </div>
                <div className="p-8 bg-card border-2 rounded shadow-sm">
                  <ContactForm />
                </div>
              </div>
            </BlurFade>

            {/* Telefon & Kontaktdaten */}
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="space-y-8">
                {/* Telefon */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Telefonisch</h3>
                  <div className="p-8 bg-card border-2 rounded shadow-sm space-y-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-3">Rufen Sie mich direkt an</p>
                      <a
                        href="tel:+491777983780"
                        className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors block"
                      >
                        +49 177 7983780
                      </a>
                    </div>
                    <Link
                      href="mailto:jrm@jrmlegal.de?subject=Rückruf%20gewünscht"
                      className="inline-flex w-full h-14 items-center justify-center rounded border-2 border-primary bg-background px-6 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                    >
                      Rückruf anfordern
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sollte ich telefonisch nicht erreichbar sein, melde ich mich in der Regel innerhalb von 24 Stunden zurück.
                    </p>
                  </div>
                </div>

                {/* Kontaktdaten */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Kanzlei</h3>
                  <div className="p-8 bg-card border-2 rounded shadow-sm space-y-4">
                    <div>
                      <p className="text-lg font-bold">Joshio Rojas Moraga</p>
                      <p className="text-sm text-muted-foreground">Rechtsanwalt</p>
                    </div>
                    <div className="text-base text-muted-foreground space-y-1">
                      <p>Farnweg 3b</p>
                      <p>22459 Hamburg</p>
                    </div>
                    <div className="text-base space-y-2 pt-4 border-t">
                      <p className="flex items-center gap-2">
                        <svg className="size-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:jrm@jrmlegal.de" className="text-primary hover:underline font-medium" aria-label="E-Mail an jrm@jrmlegal.de senden">
                          jrm@jrmlegal.de
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="size-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+491777983780" className="text-primary hover:underline font-medium" aria-label="Telefonnummer +49 177 7983780 anrufen">
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
      <section id="next-steps" className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Wie geht es weiter</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Nach Ihrer Kontaktaufnahme erhalten Sie eine Rückmeldung mit einer <strong className="text-foreground">informellen Vorabbewertung</strong> Ihres Anliegens. Dabei erhalten Sie eine erste Einschätzung zu Vorgehen, Chancen und Risiken.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-card border-2 rounded shadow-sm space-y-6">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="size-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Kostenfreie Ersteinschätzung</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Diese Vorabbewertung dient der Orientierung und stellt noch keine Rechtsberatung dar. Kosten entstehen hierdurch nicht.
                </p>
              </div>

              <div className="p-10 bg-card border-2 rounded shadow-sm space-y-6">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="size-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Transparente Beauftragung</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Eine kostenpflichtige Beratung erfolgt erst nach ausdrücklicher Beauftragung.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="border-t"></div>

      {/* SECTION 5: FOOTER */}
      <footer className="py-12 md:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
              {/* Impressum */}
              <div className="space-y-6">
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground">Impressum</h3>
                <div className="text-base text-muted-foreground space-y-3">
                  <p className="text-lg font-bold text-foreground">Joshio Rojas Moraga</p>
                  <p className="font-medium">Rechtsanwalt</p>
                  <p className="pt-2">Farnweg 3b<br/>22459 Hamburg</p>
                  <div className="pt-4 space-y-2">
                    <p><a href="mailto:jrm@jrmlegal.de" className="text-primary hover:underline font-medium">jrm@jrmlegal.de</a></p>
                    <p><a href="tel:+491777983780" className="text-primary hover:underline font-medium">+49 177 7983780</a></p>
                  </div>
                </div>
              </div>

              {/* Berufsrechtliche Angaben */}
              <div className="space-y-6">
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground">Berufsrechtliche Angaben</h3>
                <div className="text-base text-muted-foreground space-y-3">
                  <p>Berufsbezeichnung: Rechtsanwalt</p>
                  <p>Verliehen in: Deutschland</p>
                  <p className="pt-4 font-bold text-foreground">Zuständige Kammer:</p>
                  <p>Hanseatische Rechtsanwaltskammer Hamburg</p>
                  <p className="pt-4">
                    <a
                      href="https://www.brak.de/fuer-anwaelte/berufsrecht/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Berufsrechtliche Regelungen →
                    </a>
                  </p>
                </div>
              </div>

              {/* Rechtliche Hinweise */}
              <div className="space-y-6">
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground">Rechtliche Hinweise</h3>
                <div className="text-base text-muted-foreground space-y-4">
                  <p>
                    <Link href="/datenschutz" className="text-primary hover:underline font-medium">
                      Datenschutzerklärung →
                    </Link>
                  </p>
                  <p className="text-sm leading-relaxed pt-2">
                    Die Inhalte dieser Website stellen keine Rechtsberatung dar. Eine individuelle Beratung erfolgt ausschließlich nach ausdrücklicher Mandatierung.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t text-center">
              <p className="text-base text-muted-foreground">© {new Date().getFullYear()} Joshio Rojas Moraga · Alle Rechte vorbehalten</p>
            </div>
          </BlurFade>
        </div>
      </footer>
    </main>
  );
}
