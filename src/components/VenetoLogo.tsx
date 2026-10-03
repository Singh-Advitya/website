import React from 'react';

export interface VenetoLogoProps {
  variant?: 'black' | 'white' | 'gold' | 'monochrome-dark';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  sizePx?: number;
  withLabel?: boolean;
  className?: string;
}

export const VenetoLogo: React.FC<VenetoLogoProps> = ({
  variant = 'black',
  size = 'md',
  sizePx,
  withLabel = false,
  className = '',
}) => {
  // Balanced, prestigious emblem sizes for clear brand recognition
  const sizeMap: Record<string, { className: string; px: number }> = {
    xs: { className: 'w-8 h-8', px: 32 },
    sm: { className: 'w-12 h-12 sm:w-14 sm:h-14', px: 52 },
    md: { className: 'w-16 h-16 sm:w-18 sm:h-18', px: 72 },
    lg: { className: 'w-20 h-20 sm:w-22 sm:h-22 lg:w-[86px] lg:h-[86px]', px: 86 },
    xl: { className: 'w-28 h-28 sm:w-32 sm:h-32', px: 128 },
    '2xl': { className: 'w-36 h-36 sm:w-44 sm:h-44', px: 168 },
  };

  const selectedSize = sizeMap[size] || sizeMap.md;
  const dimensionClass = sizePx ? '' : selectedSize.className;
  const inlineStyle = sizePx ? { width: `${sizePx}px`, height: `${sizePx}px` } : undefined;

  // Theme palettes
  const colorThemes = {
    black: {
      bg: '#0A0A09',
      frame: '#FFFFFF',
      text: '#FFFFFF',
      outerBorder: 'border border-black/20 shadow-md',
    },
    white: {
      bg: '#FFFFFF',
      frame: '#1A1816',
      text: '#1A1816',
      outerBorder: 'border border-[#DDD7CB] shadow-sm',
    },
    gold: {
      bg: '#141210',
      frame: '#D4AF37',
      text: '#FDFBF7',
      outerBorder: 'border border-[#D4AF37]/40 shadow-md',
    },
    'monochrome-dark': {
      bg: '#181614',
      frame: '#FFFFFF',
      text: '#FFFFFF',
      outerBorder: 'border border-white/20 shadow-md',
    },
  }[variant];

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Boxed Official Veneto Clinic Emblem */}
      <div
        className={`${dimensionClass} shrink-0 aspect-square select-none rounded-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${colorThemes.outerBorder} overflow-hidden`}
        style={inlineStyle}
        aria-label="Veneto Clinic Official Logo"
      >
        <svg
          viewBox="0 0 500 500"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          {/* Background Outer Box */}
          <rect width="500" height="500" fill={colorThemes.bg} />

          {/* Inset Inner Frame (High contrast, elegant geometric border) */}
          <rect
            x="52"
            y="52"
            width="396"
            height="396"
            fill="none"
            stroke={colorThemes.frame}
            strokeWidth="12"
          />

          {/* Signature Script Lettering with Enhanced Contrast & Weight */}
          <g
            fill={colorThemes.text}
            textAnchor="middle"
            style={{
              fontFamily: "'Caveat', 'Dancing Script', 'Marck Script', 'Brush Script MT', cursive",
              fontWeight: 700,
            }}
          >
            <text
              x="250"
              y="226"
              fontSize="96"
              letterSpacing="0.8"
              textLength="260"
              lengthAdjust="spacingAndGlyphs"
            >
              Veneto
            </text>
            <text
              x="250"
              y="336"
              fontSize="90"
              letterSpacing="0.8"
              textLength="230"
              lengthAdjust="spacingAndGlyphs"
            >
              Clinic
            </text>
          </g>
        </svg>
      </div>

      {/* Optional Typographic Lockup */}
      {withLabel && (
        <div className="flex flex-col text-left justify-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-serif tracking-[0.06em] font-semibold text-[#1A1816] leading-none">
              VENETO
            </span>
            <span className="text-xs sm:text-sm font-serif tracking-[0.16em] uppercase text-[#9E8058] font-medium">
              CLINIC
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-[#7A7365] uppercase font-semibold mt-1">
            Dubai · The Opus, Business Bay
          </span>
        </div>
      )}
    </div>
  );
};
