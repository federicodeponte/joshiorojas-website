"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  lang: "de" | "en";
  onLanguageChange: (lang: "de" | "en") => void;
}

const translations = {
  de: {
    about: "Über mich",
    areas: "Tätigkeitsschwerpunkte",
    contact: "Kontakt",
    impressum: "Impressum",
    privacy: "Datenschutz",
  },
  en: {
    about: "About Me",
    areas: "Practice Areas",
    contact: "Contact",
    impressum: "Imprint",
    privacy: "Privacy",
  },
};

export function Header({ lang, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            Joshio Rojas Moraga
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.areas}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.contact}
            </button>
            <a
              href="/datenschutz"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.privacy}
            </a>

            {/* Language Switch */}
            <div className="flex items-center gap-1 ml-4 border rounded-md">
              <button
                onClick={() => onLanguageChange("de")}
                className={`px-3 py-1.5 text-sm font-medium rounded-l transition-colors ${
                  lang === "de"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1.5 text-sm font-medium rounded-r transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("areas")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.areas}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.contact}
            </button>
            <a
              href="/datenschutz"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.privacy}
            </a>

            {/* Mobile Language Switch */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-sm text-muted-foreground">Sprache / Language:</span>
              <div className="flex items-center gap-1 border rounded-md">
                <button
                  onClick={() => onLanguageChange("de")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-l transition-colors ${
                    lang === "de"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => onLanguageChange("en")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-r transition-colors ${
                    lang === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
