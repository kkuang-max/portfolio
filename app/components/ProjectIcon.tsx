import type { Surface } from "../content";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 120 90",
  "aria-hidden": true,
};

export default function ProjectIcon({ icon }: { icon: Surface }) {
  switch (icon) {
    case "kiosk":
      return (
        <svg width="50%" {...common}>
          <rect x="38" y="8" width="44" height="52" rx="5" />
          <rect x="45" y="15" width="30" height="24" rx="2" fill="var(--glow)" />
          <path d="M50 48h20M60 60v18M42 80h36" />
        </svg>
      );
    case "car":
      return (
        <svg width="56%" {...common}>
          <path d="M14 58v-10l10-4 12-16h40l16 16 14 4v10z" />
          <circle cx="36" cy="60" r="8" fill="var(--tile)" />
          <circle cx="86" cy="60" r="8" fill="var(--tile)" />
          <path d="M44 30v14M60 44h-20" />
        </svg>
      );
    case "pin":
      return (
        <svg width="50%" {...common}>
          <rect x="34" y="6" width="52" height="80" rx="8" />
          <path d="M60 58s-12-12-12-21a12 12 0 0 1 24 0c0 9-12 21-12 21z" fill="var(--glow)" />
          <circle cx="60" cy="37" r="4" fill="var(--card)" />
        </svg>
      );
    case "web":
      return (
        <svg width="56%" {...common}>
          <rect x="10" y="12" width="74" height="54" rx="5" />
          <path d="M10 24h74M20 36h30M20 46h44" />
          <rect x="88" y="34" width="22" height="40" rx="4" />
        </svg>
      );
  }
}
