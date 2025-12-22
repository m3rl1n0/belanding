import { motion } from "motion/react";
import fluidImage from "figma:asset/b88d35eee4dd375ffdfd65e4b8d73ef1272351ee.png";

export const FluidShape = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.img 
        src={fluidImage} 
        alt="Fluid Shape" 
        className="w-full h-full object-contain"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
};
