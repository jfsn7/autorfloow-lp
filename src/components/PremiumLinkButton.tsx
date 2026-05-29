import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PremiumLinkButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  lightTheme?: boolean;
  className?: string;
}

export default function PremiumLinkButton({
  href,
  onClick,
  children,
  lightTheme = false,
  className = ""
}: PremiumLinkButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        relative inline-flex items-center gap-3.5 group cursor-pointer py-2.5 px-1 select-none transition-all duration-300
        ${className}
      `}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* 1. Flat filled 'Ouro Quente' amber circle matching the brandbook perfectly */}
      <span className="w-2 h-2 rounded-full bg-[#DFB13C] shrink-0 shadow-[0_0_8px_rgba(223,177,60,0.5)] transition-transform duration-300 group-hover:scale-125" />

      {/* 2. Text styled in Plus Jakarta Sans tracking-wider uppercase format to convey elite premium feeling */}
      <span className={`
        font-sans font-bold text-xs uppercase tracking-widest transition-colors duration-300 relative
        ${lightTheme ? 'text-brand-neutral-800' : 'text-white/90 group-hover:text-white'}
      `}>
        {children}

        {/* 3. High quality motion underline appearing on pass over the text */}
        <span className={`
          absolute bottom-[-6px] left-0 right-0 h-[2px] rounded-full scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100
          ${lightTheme ? 'bg-brand-green-500' : 'bg-white'}
        `} />
      </span>

      {/* 4. Thin delicate refined right arrow representation */}
      <ArrowRight className={`
        w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0
        ${lightTheme ? 'text-[#9E7200]' : 'text-[#DFB13C]'}
      `} />
    </Component>
  );
}
