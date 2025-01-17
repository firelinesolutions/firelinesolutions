import React from 'react';

interface LogoProps {
  inverted?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ inverted = false, className = "h-12" }) => {
  const logoUrl = new URL('/fireline-logo.png', window.location.origin).href;
  
  return (
    <div className={`flex items-center ${className}`}>
      {inverted ? (
        <span className="text-lg font-semibold gradient-text">
          FIRELINE SOLUTIONS
        </span>
      ) : (
        <img 
          src={logoUrl}
          alt="Fireline Solutions"
          className="h-20 w-auto"
          style={{ 
            objectFit: 'contain'
          }}
          onError={(e) => {
            console.error('Logo failed to load:', e);
          }}
        />
      )}
    </div>
  );
}; 