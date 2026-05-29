import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GlowButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  showIcon?: boolean;
}

export default function GlowButton({ 
  href, 
  onClick, 
  className = "", 
  children,
  showIcon = true
}: GlowButtonProps) {
  const Component = href ? 'a' : 'button';
  const hasTextSize = className.split(' ').some(cls => cls.startsWith('text-') || cls.startsWith('xs:') || cls.startsWith('sm:') || cls.startsWith('md:') || cls.startsWith('lg:text-'));
  const defaultTextSize = hasTextSize ? "" : "text-xs md:text-[13px]";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center rounded-full
        font-sans font-semibold ${defaultTextSize} normal-case text-white
        bg-brand-green-500 hover:bg-brand-green-600
        shadow-[0_4px_14px_rgba(43,114,74,0.15)]
        hover:shadow-[0_10px_24px_rgba(43,114,74,0.3)]
        hover:-translate-y-0.5 active:translate-y-0
        transition-all duration-300 group overflow-hidden cursor-pointer select-none
        px-6 py-2.5
        ${className}
      `}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Styles for the premium GPU-accelerated path tracer motion */}
      <style>{`
        @keyframes stroke-sweep {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -320;
          }
        }
        .stroke-tracer {
          stroke-dasharray: 60 260;
          stroke-dashoffset: 0;
        }
        .group:hover .stroke-tracer {
          animation: stroke-sweep 2.5s linear infinite;
        }
      `}</style>

      {/* Subtle overlay color shift on hover */}
      <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Beautiful, ultra-fine 1.5px vector stroke contour tracer mapping to the brand's 'Ouro Quente' accent color */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          className="stroke-tracer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          x="0.75"
          y="0.75"
          width="calc(100% - 1.5px)"
          height="calc(100% - 1.5px)"
          rx="9999px"
          stroke="url(#button-glow-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="button-glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* Soft gold beam segment that gracefully loops around */}
            <stop offset="0%" stopColor="#DFB13C" />
            <stop offset="50%" stopColor="#EDCC78" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Precise center-aligned font & gold arrow representation */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-white/95 group-hover:text-white transition-colors duration-200">
        {children}
        {showIcon && (
          <ArrowRight className="w-3.5 h-3.5 text-brand-gold-200 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
        )}
      </span>
    </Component>
  );
}
