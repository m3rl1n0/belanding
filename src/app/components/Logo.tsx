import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <img
      src="/assets/Be-Eng_Dark.svg"
      alt="Be Shaping the Future - An ENG Company"
      className={className}
    />
  );
};
