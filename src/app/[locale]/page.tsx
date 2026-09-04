import { setRequestLocale } from "next-intl/server";
import { About } from "@/features/About";
import { Clients } from "@/features/Clients";
import { Contact } from "@/features/Contact";
import { Experience } from "@/features/Experience";
import { Hero } from "@/features/Hero";
import { Projects } from "@/features/Projects";
import { Recommendations } from "@/features/Recommendations";
import { Skills } from "@/features/Skills";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Hero />
      <About />
      <Clients />
      <Experience />
      <Projects />
      <Skills />
      <Recommendations />
      <Contact />
    </>
  );
}
