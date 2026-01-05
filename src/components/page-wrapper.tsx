"use client";

import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { ReactNode } from "react";

function PageContent({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLanguage();

  return (
    <>
      <Header lang={lang} onLanguageChange={setLang} />
      {children}
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
