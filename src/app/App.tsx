import { useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { content } from "./data/content";

export default function App() {
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative">
      <Header 
        evolutionText={t.header.evolution}
        payoffText={t.header.payoff}
      />

      <main className="w-full relative z-0">
        {t.sections.map((section, index) => (
          <Section 
            key={section.id}
            id={section.id}
            text={section.text}
            index={index}
            theme={index % 2 === 0 ? 'dark' : 'light'}
          />
        ))}
      </main>

      <Footer links={t.footer} />
      
      {/* Menu placed last to ensure highest stacking order */}
      <Menu lang={lang} setLang={setLang} />
    </div>
  );
}
