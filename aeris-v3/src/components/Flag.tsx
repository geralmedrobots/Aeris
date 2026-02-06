import React from 'react';

type CountryCode = 'Portugal' | 'Brasil' | 'Espanha' | 'França' | 'Itália' | 'Reino Unido' | 'Alemanha' | 'Estados Unidos';

const FlagSvgs: Record<string, React.ReactNode> = {
  'Portugal': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="red" d="M220 0H640V480H220z"/>
        <path fill="green" d="M0 0H220V480H0z"/>
        <path fill="#ff0" d="M220 120a120 120 0 0 1 0 240 120 120 0 0 1 0-240"/>
        <path fill="none" stroke="#ff0" strokeWidth="20" d="M220 120a120 120 0 0 1 0 240 120 120 0 0 1 0-240z"/>
        <path fill="#fff" d="M220 160a80 80 0 1 1 0 160 80 80 0 0 1 0-160"/>
        <path fill="#027" d="M200 180h40v40h-40zM190 220h20v20h-20zM230 220h20v20h-20zM200 240h40v40h-40z"/>
        <circle cx="220" cy="230" r="30" fill="none" stroke="#fff" strokeWidth="10"/>
      </g>
      <circle cx="220" cy="240" r="60" fill="none" stroke="#f00" strokeWidth="10"/>
      <path fill="#f00" d="M170 190h100v100H170z" opacity=".2"/>
        <path fill="red" d="M220 0h420v480H220z"/>
        <path fill="green" d="M0 0h220v480H0z"/>
        <g transform="translate(220 240) scale(0.6)">
             <path fill="#ffd600" d="M-50 -60h100v100h-100z" opacity="0" />
              <circle r="100" fill="#ffd600" stroke="#ffd600" />
              <path fill="#fff" d="M-60 -40 h120 v80 h-120 z" />
               <path fill="none" d="M-35 -50 h70 v70 h-70 z M0 -60 v40 M-20 -20 h40" stroke="#fff" strokeWidth="5"/>
               {/* Simplified coat of arms */}
               <path fill="#ff0000" d="M-45 -40 h90 v60 c0 30 -20 50 -45 50 c-25 0 -45 -20 -45 -50 v-60" />
               <path fill="#ffffff" d="M-30 -25 h60 v40 c0 20 -10 30 -30 30 c-20 0 -30 -10 -30 -30 v-40" />
               <path fill="#003399" d="M-12 -25 v40 m12 -20 h-24 m36 0 h-24 m0 -20 v40 m-24 -20 h24" stroke="#003399" strokeWidth="8"/>
        </g>
    </svg>
  ),
  'Brasil': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <path fill="#00923E" d="M0 0h640v480H0z"/>
      <path fill="#F8C100" d="M320 62L588 240 320 418 52 240z"/>
      <circle fill="#28166F" cx="320" cy="240" r="106"/>
      <path fill="#FFF" d="M320 240h20v20h-20z" opacity="0.1"/> {/* Simplified stars/band */}
      <path fill="none" stroke="#FFF" strokeWidth="12" d="M220 280c40-40 120-40 180-10"/>
    </svg>
  ),
  'Espanha': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <path fill="#AD1519" d="M0 0h640v480H0z"/>
      <path fill="#FABD00" d="M0 120h640v240H0z"/>
    </svg>
  ),
  'França': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <path fill="#002395" d="M0 0h213.3v480H0z"/>
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
      <path fill="#ED2939" d="M426.7 0h213.3v480H426.7z"/>
    </svg>
  ),
  'Itália': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <path fill="#009246" d="M0 0h213.3v480H0z"/>
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
      <path fill="#CE2B37" d="M426.7 0h213.3v480H426.7z"/>
    </svg>
  ),
  'Reino Unido': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <path fill="#012169" d="M0 0h640v480H0z"/>
      <path fill="#FFF" d="M75 0l125 100L440 0h110l-200 160 290 230v90H520L320 280 120 480H0v-90l290-230L0 70V0h75z"/>
      <path fill="#C8102E" d="M0 0l210 170L0 340v140h110l210-170 210 170h110V340L430 170 640 0H530L320 170 110 0H0z"/>
      <path fill="#FFF" d="M250 0h140v480H250zM0 170h640v140H0z"/>
      <path fill="#C8102E" d="M280 0h80v480h-80zM0 200h640v80H0z"/>
    </svg>
  ),
  'Alemanha': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <path fill="#000" d="M0 0h640v160H0z"/>
      <path fill="#D00" d="M0 160h640v160H0z"/>
      <path fill="#FFCE00" d="M0 320h640v160H0z"/>
    </svg>
  ),
  'Estados Unidos': (
    <svg viewBox="0 0 640 480" width="100%" height="100%">
      <path fill="#bd3d44" d="M0 0h640v480H0"/>
      <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
      <path fill="#192f5d" d="M0 0h247v258.5H0"/>
      <g fill="#fff">
        <circle cx="17.9" cy="18.5" r="8"/> {/* Simplified stars */}
        <circle cx="53.8" cy="18.5" r="8"/>
        {/* ... many stars skipped for brevity ... */}
        <text x="10" y="50" fill="white" fontSize="20">★</text> 
      </g>
    </svg>
  )
};

// Fallback flag
const FallbackFlag = (
  <svg viewBox="0 0 640 480" width="100%" height="100%">
    <rect width="640" height="480" fill="#f0f0f0"/>
    <rect width="640" height="480" fill="none" stroke="#ccc" strokeWidth="20"/>
  </svg>
);

export function Flag({ country, className }: { country?: string; className?: string }) {
  const SvgContent = (country && FlagSvgs[country]) || FallbackFlag;
  
  return (
    <span className={`flag ${className || ''}`} style={{ display: 'inline-block', width: '24px', height: '18px', overflow: 'hidden', borderRadius: '4px' }}>
      {SvgContent}
    </span>
  );
}

