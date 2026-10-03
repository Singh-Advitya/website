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
  // Refined, balanced emblem sizes for crisp, elegant proportions
  const sizeMap: Record<string, { className: string; px: number }> = {
    xs: { className: 'w-8 h-8', px: 32 },
    sm: { className: 'w-12 h-12', px: 48 },
    md: { className: 'w-[52px] h-[52px] sm:w-[58px] sm:h-[58px]', px: 58 },
    lg: { className: 'w-20 h-20 sm:w-22 sm:h-22', px: 84 },
    xl: { className: 'w-28 h-28 sm:w-30 sm:h-30', px: 116 },
    '2xl': { className: 'w-36 h-36 sm:w-40 sm:h-40', px: 150 },
  };

  const selectedSize = sizeMap[size] || sizeMap.md;
  const dimensionClass = sizePx ? '' : selectedSize.className;
  const inlineStyle = sizePx ? { width: `${sizePx}px`, height: `${sizePx}px` } : undefined;

  // Theme palettes
  const colorThemes = {
    black: {
      bg: '#000000',
      frame: '#FFFFFF',
      text: '#FFFFFF',
      outerBorder: 'border border-black/10',
    },
    white: {
      bg: '#FFFFFF',
      frame: '#1A1816',
      text: '#1A1816',
      outerBorder: 'border border-[#DDD7CB]',
    },
    gold: {
      bg: '#141210',
      frame: '#C5A880',
      text: '#F5EDE2',
      outerBorder: 'border border-[#C5A880]/30',
    },
    'monochrome-dark': {
      bg: '#181614',
      frame: '#FFFFFF',
      text: '#FFFFFF',
      outerBorder: 'border border-white/10',
    },
  }[variant];

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Boxed Official Veneto Clinic Emblem */}
      <div
        className={`${dimensionClass} shrink-0 aspect-square select-none shadow-sm transition-transform duration-200 group-hover:scale-105 ${colorThemes.outerBorder} overflow-hidden`}
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

          {/* Inset Inner Frame (Generous Padding from Canvas Edges) */}
          <rect
            x="58"
            y="58"
            width="384"
            height="384"
            fill="none"
            stroke={colorThemes.frame}
            strokeWidth="11"
          />

          {/* Signature Script Lettering Strictly Inside the Frame with Ample Margins */}
          <g
            fill={colorThemes.text}
            textAnchor="middle"
            style={{
              fontFamily: "'Caveat', 'Dancing Script', 'Brush Script MT', 'Segoe Script', cursive",
              fontWeight: 600,
            }}
          >
            <text
              x="250"
              y="222"
              fontSize="84"
              letterSpacing="0.5"
              textLength="240"
              lengthAdjust="spacingAndGlyphs"
            >
              Veneto
            </text>
            <text
              x="250"
              y="324"
              fontSize="80"
              letterSpacing="0.5"
              textLength="210"
              lengthAdjust="spacingAndGlyphs"
            >
              Clinic
            </text>
          </g>
        </svg>
      </div>

      {/* Optional Typographic Lockup */}
      {withLabel && (
        <div className="flex flex-col text-left">
          <span className="text-base sm:text-lg font-serif tracking-[0.06em] font-medium text-[#1A1816] uppercase leading-tight">
            Veneto Dental Clinic
          </span>
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] text-[#7A7365] uppercase font-semibold">
            Dubai · The Opus, Business Bay
          </span>
        </div>
      )}
    </div>
  );
};
