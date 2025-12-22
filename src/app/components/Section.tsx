import { motion, useInView } from "motion/react";
import clsx from "clsx";
import { useRef } from "react";

interface SectionProps {
  id: string;
  text: string;
  index: number;
  theme: 'dark' | 'light';
}

const FadeText = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="font-['Inter_Tight',sans-serif] text-2xl md:text-4xl lg:text-5xl leading-[1.15] font-light tracking-tight max-w-4xl whitespace-pre-line"
    >
      {text}
    </motion.p>
  );
};

export const Section = ({ id, text, index, theme }: SectionProps) => {
  const isDark = theme === 'dark';
  
  return (
    <section 
      className={clsx(
        "w-full py-24 border-b transition-colors duration-500",
        isDark ? "bg-[#111] text-white border-white/10" : "bg-white text-black border-black/10"
      )}
    >
      <div className="w-full h-full flex flex-col md:flex-row">
        
        {/* Left Column (30%) - Number */}
        <div className={clsx(
          "w-full md:w-[30%] flex flex-col justify-start md:items-end px-6 md:px-8 border-b md:border-b-0 md:border-r pb-8 md:pb-0 relative",
          isDark ? "border-white/20" : "border-black/20"
        )}>
           {/* Mobile Line */}
           <div className={clsx("absolute bottom-0 left-0 w-full h-px md:hidden", isDark ? "bg-white/20" : "bg-black/20")} />

          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Ivy_Presto_Display','Playfair_Display',serif] text-8xl md:text-9xl lg:text-[10rem] font-light leading-none opacity-50 block"
          >
            {id}
          </motion.span>
        </div>

        {/* Right Column (70%) - Content */}
        <div className="w-full md:w-[70%] px-6 md:px-16 pt-8 md:pt-4 flex flex-col justify-center">
            <FadeText text={text} />
        </div>

      </div>
    </section>
  );
};
