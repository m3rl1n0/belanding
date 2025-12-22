import { Linkedin } from "lucide-react";

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
           <div>
              <h2 className="font-['Ivy_Presto_Display','Playfair_Display',serif] text-4xl font-light tracking-tight mb-2">
                Be
              </h2>
              <p className="font-['Inter_Tight',sans-serif] text-sm uppercase tracking-widest opacity-50">
                Shaping the Future
              </p>
           </div>
           
           <div className="mt-12 md:mt-0 flex flex-col gap-1 text-xs uppercase tracking-widest opacity-40 font-['Inter_Tight',sans-serif]">
              <span>© {new Date().getFullYear()} Be Group</span>
              <span>All rights reserved</span>
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
                <a href="https://x.com/betsegroup" target="_blank" rel="noopener noreferrer" className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all group">
                  {/* X Logo */}
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current group-hover:fill-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
