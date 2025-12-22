import { motion } from "motion/react";
import { Logo } from "./Logo";

interface HeaderProps {
  evolutionText: string;
  payoffText: string;
}

export const Header = ({ evolutionText, payoffText }: HeaderProps) => {
  return (
    <header className="relative w-full min-h-[75vh] flex flex-col bg-white text-black border-b border-black/10">
      <div className="flex flex-1 w-full h-full">
        {/* Left Column - Text takes priority */}
        <div className="hidden md:flex flex-col md:w-[50%] lg:w-[45%] xl:w-[42%] border-r border-black/10 relative z-20 bg-white overflow-hidden">
          <div className="p-8 border-b border-black/10">
            <div className="w-24 md:w-36">
              <Logo className="w-full text-black" />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6 md:px-8 lg:px-10 relative overflow-hidden">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
               <h1 className="font-['Ivy_Presto_Display','Playfair_Display',serif] text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-[0.9] font-light tracking-tight">
                 {evolutionText.split('\n').map((line, i) => (
                   <span key={i} className="block break-keep hyphens-none">{line}</span>
                 ))}
               </h1>
            </motion.div>
          </div>
        </div>

        {/* Mobile Header Layout (Stacked) */}
        <div className="md:hidden w-full flex flex-col z-20 relative bg-white overflow-hidden">
           <div className="p-6 w-full overflow-hidden">
             <div className="w-24 mb-12">
                <Logo className="w-full text-black" />
              </div>
              <h1 className="font-['Ivy_Presto_Display','Playfair_Display',serif] text-7xl leading-[0.9] font-light tracking-tight mb-8">
                 {evolutionText.split('\n').map((line, i) => (
                   <span key={i} className="block break-keep hyphens-none">{line}</span>
                 ))}
               </h1>
           </div>

           {/* Mobile Video */}
           <div className="w-full aspect-video relative overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/be_shaping_morph.mp4" type="video/mp4" />
              </video>
           </div>
        </div>

        {/* Right Column - Video adapts to remaining space */}
        <div className="hidden md:flex flex-col md:w-[50%] lg:w-[55%] xl:w-[58%] relative bg-white overflow-hidden z-10">
           <div className="w-full h-full relative">
              {/* Video Element */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/be_shaping_morph.mp4" type="video/mp4" />
              </video>
           </div>
        </div>
      </div>
    </header>
  );
};
