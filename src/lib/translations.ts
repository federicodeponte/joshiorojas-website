export const translations = {
  de: {
    // Hero Section
    title: "Klar im Recht.\nKlar bei den Kosten.",
    subtitle: "Individuelle Rechtsberatung mit klarem Fokus auf Ihr angestrebtes Ziel.",
    contactButton: "Kontakt aufnehmen",
    learnMoreButton: "Mehr erfahren",

    // About Section
    aboutTitle: "Über mich",
    aboutDescription: "Langjährige Erfahrung in der außergerichtlichen und gerichtlichen Vertretung nationaler und internationaler Unternehmen sowie von Privatmandanten.",
    areasTitle: "Tätigkeitsschwerpunkte",
    areas: [
      "Vertragsrecht DE/EN",
      "Maritimes Wirtschaftsrecht",
      "Versicherungsrecht",
      "Schiedsverfahren",
      "Mietrecht",
      "AGB-Prüfung und -Gestaltung",
      "Verwaltungsrecht"
    ],
    quote: "Klare Einschätzung, transparente Kommunikation und konsequente Vertretung, wenn der Verfahrensweg sinnvoll ist.",

    // Contact Section
    contactTitle: "Kontakt",
    contactDescription: "Kontaktieren Sie mich jederzeit gerne. Wählen Sie den für Sie passenden Weg.",
    email: "E-Mail",
    phone: "Telefon",
    address: "Adresse",
    formTitle: "Nachricht senden",
    formName: "Name",
    formEmail: "E-Mail",
    formMessage: "Ihre Nachricht",
    formSubmit: "Nachricht senden",
    formSuccess: "Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Ich melde mich in Kürze bei Ihnen.",
    formError: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.",

    // Next Steps Section
    nextStepsTitle: "Wie geht es weiter?",
    nextSteps: [
      {
        step: "1",
        title: "Erstgespräch",
        description: "Kostenlose Ersteinschätzung Ihres Anliegens per Telefon oder E-Mail."
      },
      {
        step: "2",
        title: "Analyse",
        description: "Detaillierte Prüfung Ihrer Unterlagen und rechtliche Bewertung."
      },
      {
        step: "3",
        title: "Strategie",
        description: "Entwicklung einer klaren Strategie mit transparenter Kostenaufstellung."
      },
      {
        step: "4",
        title: "Umsetzung",
        description: "Konsequente Vertretung Ihrer Interessen bis zur Zielerreichung."
      }
    ],

    // Footer
    footerText: "Joshio Rojas Moraga - Rechtsanwalt",
    impressum: "Impressum",
    privacy: "Datenschutz",
    lawyer: "Rechtsanwalt"
  },
  en: {
    // Hero Section
    title: "Clear on the Law.\nClear on the Costs.",
    subtitle: "Individual legal advice with a clear focus on your intended goal.",
    contactButton: "Get in Touch",
    learnMoreButton: "Learn More",

    // About Section
    aboutTitle: "About Me",
    aboutDescription: "Extensive experience in out-of-court and court representation of national and international companies as well as private clients.",
    areasTitle: "Practice Areas",
    areas: [
      "Contract Law DE/EN",
      "Maritime Commercial Law",
      "Insurance Law",
      "Arbitration Proceedings",
      "Tenancy Law",
      "Review and Drafting of T&Cs",
      "Administrative Law"
    ],
    quote: "Clear assessment, transparent communication and consistent representation when legal proceedings are appropriate.",

    // Contact Section
    contactTitle: "Contact",
    contactDescription: "Feel free to contact me at any time. Choose the way that suits you best.",
    email: "Email",
    phone: "Phone",
    address: "Address",
    formTitle: "Send Message",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formSuccess: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
    formError: "An error occurred. Please try again or contact me directly by email.",

    // Next Steps Section
    nextStepsTitle: "What Happens Next?",
    nextSteps: [
      {
        step: "1",
        title: "Initial Consultation",
        description: "Free initial assessment of your concern by phone or email."
      },
      {
        step: "2",
        title: "Analysis",
        description: "Detailed review of your documents and legal assessment."
      },
      {
        step: "3",
        title: "Strategy",
        description: "Development of a clear strategy with transparent cost breakdown."
      },
      {
        step: "4",
        title: "Implementation",
        description: "Consistent representation of your interests until the goal is achieved."
      }
    ],

    // Footer
    footerText: "Joshio Rojas Moraga - Attorney at Law",
    impressum: "Imprint",
    privacy: "Privacy Policy",
    lawyer: "Attorney at Law"
  }
};

export type Language = keyof typeof translations;
