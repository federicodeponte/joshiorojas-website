"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { ReactNode } from "react";

function PageContent({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLanguage();

  return (
    <>
      <Header lang={lang} onLanguageChange={setLang} />
      <div className="mx-auto min-h-screen max-w-5xl px-6 py-12 sm:py-16">
        {children}
      </div>
    </>
  );
}

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <PageContent>{children}</PageContent>
    </LanguageProvider>
  );
}
