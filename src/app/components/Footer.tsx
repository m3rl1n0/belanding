import { Linkedin } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  links: {
    investors: string;
    whistleblowing: string;
    privacy: string;
  };
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="w-full bg-white text-black border-t border-black/10">
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Left Column (30%) - Branding / Copyright */}
        <div className="w-full md:w-[30%] border-r border-black/10 p-8 md:p-12 flex flex-col justify-between min-h-[300px]">
           <div className="w-40">
              <Logo className="w-full" />
           </div>

           <div className="mt-12 md:mt-0 text-xs uppercase tracking-widest opacity-40 font-['Inter_Tight',sans-serif]">
              <span>© {new Date().getFullYear()} All rights reserved</span>
           </div>
        </div>

        {/* Right Column (70%) - Content */}
        <div className="w-full md:w-[70%] p-8 md:p-12 flex flex-col justify-between">
           
           {/* Big CTA / Title */}
           <div className="mb-16">
             <h2 className="font-['Ivy_Presto_Display','Playfair_Display',serif] text-5xl md:text-7xl font-light tracking-tight">
                Shaping the Future
             </h2>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              {/* Links */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 font-['Inter_Tight',sans-serif] text-lg font-light">
                <a href="https://www.be-tse.it/it/investors/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                  {links.investors}
                </a>
                <a href="https://www.be-tse.it/wp-content/uploads/2024/11/Procedura-Gestione-Segnalazioni-anche-anonime-Whistleblowing.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                  {links.whistleblowing}
                </a>
                <a href="https://www.be-tse.it/wp-content/uploads/2016/01/Privacy-Policy-del-sito-web-di-Be.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                  {links.privacy}
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-4">
                <a href="https://www.instagram.com/be_shapingthefuture" target="_blank" rel="noopener noreferrer" className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all group">
                  {/* Instagram Logo */}
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current group-hover:fill-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/be-think-solve-execute-spa" target="_blank" rel="noopener noreferrer" className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all group">
                  {/* LinkedIn Filled Logo */}
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current group-hover:fill-white">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};
