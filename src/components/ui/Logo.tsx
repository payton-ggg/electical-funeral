import React from 'react';
import { Flower } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-900';
  
  return (
    <div className="flex items-center">
      <Flower 
        size={32} 
        className={`mr-2 ${variant === 'light' ? 'text-white' : 'text-primary-600'}`} 
        strokeWidth={1.5}
      />
      <div className="flex flex-col">
        <span className={`text-xl font-heading font-semibold ${textColor} leading-tight`}>
          Riolit
        </span>
        <span className={`text-xs tracking-wider ${variant === 'light' ? 'text-gray-300' : 'text-gray-600'}`}>
          FUNERAL HOME
        </span>
      </div>
    </div>
  );
};

export default Logo;