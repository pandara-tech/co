import React from "react";

interface IconProps {
  size?: number;
  dark?: boolean;
}

export const PandaraLogo: React.FC<IconProps> = ({ size = 32, dark = true }) => {
  return (
    <img
      src={dark ? "/logo-white.png" : "/logo-black.png"}
      alt="Pandara Tech"
      width={size}
      height={size}
      style={{ borderRadius: size * 0.25, objectFit: "cover" }}
    />
  );
};

// 1. PandaraWord: Sleek, high-contrast text processing document concept (teal theme)
export const PandaraWordLogo: React.FC<IconProps> = ({ size = 64, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="wordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2FB6A6" />
          <stop offset="100%" stopColor="#0D4F46" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#wordGrad)" />
      <rect x="25" y="20" width="50" height="60" rx="6" fill="#0B0F10" stroke="rgba(217, 179, 106, 0.4)" strokeWidth="2" />
      {/* Horizontal document lines */}
      <line x1="33" y1="32" x2="67" y2="32" stroke="#2FB6A6" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="42" x2="67" y2="42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="33" y1="52" x2="55" y2="52" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Giant Stylized 'W' indicator at bottom right */}
      <path d="M54 62 L59 74 L63 65 L67 74 L72 62" stroke="#D9B36A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// 2. PandaraExcel: Beautiful brass gold analytics grid with dynamic rising metrics (gold theme)
export const PandaraExcelLogo: React.FC<IconProps> = ({ size = 64, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="excelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D9B36A" />
          <stop offset="100%" stopColor="#785B23" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#excelGrad)" />
      <rect x="25" y="25" width="50" height="50" rx="6" fill="#0B0F10" stroke="rgba(47, 182, 166, 0.4)" strokeWidth="2" />
      {/* Grid structure */}
      <line x1="25" y1="42" x2="75" y2="42" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
      <line x1="25" y1="58" x2="75" y2="58" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
      <line x1="42" y1="25" x2="42" y2="75" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
      <line x1="58" y1="25" x2="58" y2="75" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
      {/* Stylized 'X' intersection highlight */}
      <path d="M30 30 L37 37 M37 30 L30 37" stroke="#D9B36A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Elegant rising trend chart layered over the cells */}
      <path d="M46 68 L53 52 L64 56 L71 34" stroke="#2FB6A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="71" cy="34" r="3" fill="#white" />
    </svg>
  );
};

// 3. Mentis: Intricate, expanding knowledge graph nodes (teal theme)
export const MentisLogo: React.FC<IconProps> = ({ size = 64, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="mentisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E6B61" />
          <stop offset="100%" stopColor="#2FB6A6" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#mentisGrad)" />
      {/* Infinite connection lines */}
      <path d="M50 50 L30 35 M50 50 L70 35 M50 50 L50 75 M30 35 L25 55 M70 35 L75 55" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" strokeLinecap="round" />
      {/* Node circles */}
      <circle cx="50" cy="50" r="10" fill="#0B0F10" stroke="#D9B36A" strokeWidth="2.5" />
      <circle cx="30" cy="35" r="7" fill="#0B0F10" stroke="#2FB6A6" strokeWidth="2" />
      <circle cx="70" cy="35" r="7" fill="#0B0F10" stroke="#2FB6A6" strokeWidth="2" />
      <circle cx="50" cy="75" r="8" fill="#0B0F10" stroke="#D9B36A" strokeWidth="2" />
      <circle cx="25" cy="55" r="5" fill="#2FB6A6" />
      <circle cx="75" cy="55" r="5" fill="#2FB6A6" />
      {/* Small accent pulses */}
      <circle cx="50" cy="50" r="3" fill="#D9B36A" />
    </svg>
  );
};

// 4. File2Img: Image-stack compiling from binary sheets (gold/brass theme)
export const File2ImgLogo: React.FC<IconProps> = ({ size = 64, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="f2iGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D9B36A" />
          <stop offset="100%" stopColor="#4A3B1C" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#f2iGrad)" />
      {/* File outline background card */}
      <rect x="25" y="22" width="42" height="50" rx="5" fill="#0B0F10" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
      <line x1="32" y1="32" x2="52" y2="32" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
      <line x1="32" y1="40" x2="46" y2="40" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
      {/* Transformed image card layering over */}
      <rect x="40" y="38" width="40" height="42" rx="6" fill="#0B0F10" stroke="#2FB6A6" strokeWidth="2.5" />
      {/* Sunrise/mountain inside the image card */}
      <circle cx="50" cy="50" r="4" fill="#D9B36A" />
      <path d="M44 74 L52 62 L60 70 L68 56 L76 74 Z" fill="#2FB6A6" opacity="0.8" />
    </svg>
  );
};

// 5. Murshid: Educational guide compass + open book structures (teal/gold blend theme)
export const MurshidLogo: React.FC<IconProps> = ({ size = 64, ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="murshidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2FB6A6" />
          <stop offset="100%" stopColor="#D9B36A" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#murshidGrad)" />
      {/* Book outline */}
      <path d="M25 65 C35 60 50 63 50 72 C50 63 65 60 75 65 L75 30 C65 25 50 28 50 37 C50 28 35 25 25 30 Z" fill="#0B0F10" stroke="white" strokeWidth="2" />
      {/* Compass Needle crossing book */}
      <path d="M50 20 L54 38 L50 42 L46 38 Z" fill="#D9B36A" />
      <path d="M50 54 L54 42 L50 38 L46 42 Z" fill="#2FB6A6" />
      <circle cx="50" cy="40" r="3" fill="white" />
      {/* Small guide sparkles */}
      <path d="M72 22 L73 25 L76 26 L73 27 L72 30 L71 27 L68 26 L71 25 Z" fill="#D9B36A" />
    </svg>
  );
};

const productImgMap: Record<string, string> = {
  word: "/pandaraword.png",
  pandaraword: "/pandaraword.png",
  excel: "/pandaraexcel.png",
  pandaraexcel: "/pandaraexcel.png",
  mentis: "/mentis.png",
  file2img: "/file2img.png",
  murshid: "/murshid.png",
};

export const ProductLogoRenderer: React.FC<{ name: string; size?: number }> = ({ name, size = 64 }) => {
  const key = name.toLowerCase();
  const src = productImgMap[key];
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: size * 0.2, objectFit: "cover" }}
      />
    );
  }
  return (
    <img
      src="/logo-white.png"
      alt={name}
      width={size}
      height={size}
      style={{ borderRadius: size * 0.2, objectFit: "cover" }}
    />
  );
};
