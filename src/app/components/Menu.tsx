import { motion } from "motion/react";

interface MenuProps {
  lang: 'it' | 'en';
  setLang: (lang: 'it' | 'en') => void;
}

export const Menu = ({ lang, setLang }: MenuProps) => {
  return (
    <div className="fixed top-8 right-8 z-[100] flex gap-4 mix-blend-difference text-white pointer-events-auto">
      <button 
        onClick={() => setLang('it')}
        className={`text-sm font-['Inter_Tight',sans-serif] font-medium transition-opacity ${lang === 'it' ? 'opacity-100 underline underline-offset-4' : 'opacity-50 hover:opacity-100'}`}
      >
        IT
      </button>
      <button 
        onClick={() => setLang('en')}
        className={`text-sm font-['Inter_Tight',sans-serif] font-medium transition-opacity ${lang === 'en' ? 'opacity-100 underline underline-offset-4' : 'opacity-50 hover:opacity-100'}`}
      >
        EN
      </button>
    </div>
  );
};
