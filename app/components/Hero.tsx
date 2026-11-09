"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects, site } from "../content";
import ProjectIcon from "./ProjectIcon";

const SLOTS = [
  { left: "4%", top: "0%", transform: "rotate(-5deg) scale(1)", zIndex: 4, opacity: 1 },
  { left: "72%", top: "4%", transform: "rotate(7deg) scale(0.94)", zIndex: 3, opacity: 1 },
  { left: "70%", top: "56%", transform: "rotate(-6deg) scale(0.94)", zIndex: 3, opacity: 1 },
  { left: "40%", top: "64%", transform: "rotate(4deg) scale(0.9)", zIndex: 3, opacity: 1 },
];

/** How long each case study stays in front before the hand presses again. */
const AUTO_PRESS_MS = 2000;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  /** Bumped on a manual press so the auto timer restarts from zero. */
  const [manualPresses, setManualPresses] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Pause while the tab is in the background or the visitor prefers less motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setHidden(document.hidden);
      setReducedMotion(mq.matches);
    };
    update();
    document.addEventListener("visibilitychange", update);
    mq.addEventListener("change", update);
    return () => {
      document.removeEventListener("visibilitychange", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  const n = projects.length;
  const active = projects[(n - (idx % n)) % n];

  const advance = () => {
    if (timer.current) clearTimeout(timer.current);
    setIdx((i) => i + 1);
    setPressed(true);
    timer.current = setTimeout(() => setPressed(false), 280);
  };

  const press = () => {
    advance();
    setManualPresses((c) => c + 1);
  };

  const paused = hovered || focused || hidden || reducedMotion;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, AUTO_PRESS_MS);
    return () => clearInterval(id);
  }, [paused, manualPresses]);

  return (
    <section id="top" className="hero wrap">
      <div className="hero-row">
        <div className="hero-copy">
          <h1 className="hero-title">
            I make <Selected>your</Selected> problems <Selected>my</Selected> problem.
          </h1>
          <p className="hero-intro">{site.intro}</p>
        </div>

        <div className="hero-visual">
          <div
            className="stage"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={(e) => {
              // Only keyboard focus pauses; a mouse click on the puck shouldn't stop autoplay.
              if (e.target.matches(":focus-visible")) setFocused(true);
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
            }}
          >
            <svg viewBox="0 0 1000 820" className="stage-arrows" aria-hidden="true">
              <defs>
                <marker id="ah4" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M1 1L8 5L1 9" fill="none" stroke="var(--ink)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <g fill="none" stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round">
                <path d="M330 80 Q 520 0 700 60" markerEnd="url(#ah4)" />
                <path d="M930 360 Q 950 420 900 460" markerEnd="url(#ah4)" />
                <path d="M700 760 Q 680 790 655 775" markerEnd="url(#ah4)" />
                <path d="M400 250 Q 340 250 300 280" markerEnd="url(#ah4)" />
              </g>
            </svg>

            {projects.map((p, i) => {
              const slot = SLOTS[(i + idx) % SLOTS.length];
              return (
                <Link
                  key={p.num}
                  href={p.href}
                  className="float-card"
                  style={slot}
                >
                  <div className="card-tile">
                    <ProjectIcon icon={p.icon} />
                  </div>
                  <div className="card-label">
                    <span className="mono">
                      {p.num} — {p.surface}
                    </span>
                    <span className="card-title">{p.title}</span>
                  </div>
                </Link>
              );
            })}

            <div className="hand">
              <svg viewBox="0 -70 1200 1030" className="hand-svg" aria-hidden="true">
                <defs>
                  <linearGradient id="hfD" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0.6" stopColor="#FFFFFF" />
                    <stop offset="0.9" stopColor="#000000" />
                  </linearGradient>
                  <mask id="hmD" maskUnits="userSpaceOnUse" x="0" y="-70" width="1200" height="1030">
                    <rect x="0" y="-70" width="1200" height="1030" fill="url(#hfD)" />
                  </mask>
                  <filter id="glD" x="-40%" y="-60%" width="180%" height="220%">
                    <feGaussianBlur stdDeviation="16" />
                  </filter>
                </defs>
                <path d="M812 -18L798 -54M905 -26L905 -66M996 -18L1012 -54" fill="none" stroke="var(--glow)" strokeWidth="5" strokeLinecap="round" className={pressed ? "puck-signal is-pressed" : "puck-signal"} />
                <g transform="rotate(-8 905 160)">
                  <ellipse cx="905" cy="140" rx="262" ry="132" fill="none" stroke="var(--ink)" strokeWidth="2.4" />
                  <path d="M670 140L670 190A235 115 0 0 0 1140 190L1140 140Z" fill="var(--ink)" />
                  <g className={pressed ? "puck-face is-pressed" : "puck-face"}>
                    <ellipse cx="905" cy="140" rx="235" ry="115" fill="#2A2A28" stroke="var(--ink)" strokeWidth="4" />
                    <ellipse cx="905" cy="140" rx="140" ry="66" fill="none" stroke="var(--glow)" strokeWidth="12" filter="url(#glD)" opacity={pressed ? 1 : 0.4} className="puck-glow" />
                    <ellipse cx="905" cy="140" rx="140" ry="66" fill="none" stroke="var(--glow)" strokeWidth="3.5" />
                    <circle cx="905" cy="140" r="9" fill="var(--glow)" />
                    {idx > 0 && (
                      <ellipse key={idx} cx="905" cy="140" rx="140" ry="66" fill="none" stroke="var(--glow)" strokeWidth="6" className="puck-ripple" />
                    )}
                  </g>
                </g>
                <g className={pressed ? "hand-press is-pressed" : "hand-press"}>
                  <g mask="url(#hmD)" fill="none" stroke="var(--ink)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 780L35 770C90 745 125 720 140 690C170 610 230 440 300 282C330 255 360 240 400 210C440 196 500 188 540 182C600 130 680 62 740 50C790 42 840 38 866 46C894 54 894 90 868 100C830 108 790 104 760 114C720 130 690 170 664 236C640 250 606 290 594 320C580 380 572 430 572 462C640 430 760 350 835 328C856 334 862 356 852 378C842 398 822 410 805 414C780 440 750 470 708 500C650 560 530 700 476 752C430 772 400 780 392 790C370 815 356 860 346 960L0 960Z" fill="var(--paper)" stroke="none" />
                    <path d="M35 770C90 745 125 720 140 690C170 610 230 440 300 282C320 262 340 250 362 244" />
                    <path d="M360 284C372 248 384 218 405 208C440 196 500 188 536 184" />
                    <path d="M496 244C540 196 600 130 650 92C686 66 720 50 760 46C800 42 840 40 866 46C894 54 894 90 868 100C836 106 800 104 770 110" />
                    <path d="M822 60C840 54 862 56 872 64" />
                    <path d="M770 110C740 118 718 134 702 158C688 180 676 204 668 228" />
                    <path d="M638 248C655 285 668 330 666 372C664 392 640 398 624 388C608 376 600 350 596 318" />
                    <path d="M630 250C610 280 596 300 590 330C580 380 572 430 572 462C585 466 600 464 612 458" />
                    <path d="M612 458C660 430 720 395 770 360C795 342 815 330 835 328C856 334 862 356 852 378C842 398 822 410 805 414" />
                    <path d="M796 360C806 340 838 334 850 344C858 356 848 390 826 404C808 412 790 398 796 360Z" />
                    <path d="M805 414C780 440 750 470 708 500C680 520 650 560 610 600C570 645 530 700 476 752C440 770 410 775 392 790C370 815 356 860 346 920" />
                  </g>
                </g>
              </svg>
              <button type="button" aria-label="Press to show the next case study" onClick={press} className="puck-button" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-row hero-foot">
        <div className="hero-foot-left">
          <a href="#work" className="pill">
            Scroll to explore
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </a>
        </div>
        <div className="hero-foot-right">
          <span className="now-showing" aria-live="polite">
            <span className="dot" />
            <span className="mono">
              {active.num}
            </span>
            <span className="now-title">{active.title}</span>
            <span>— {active.short}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/** A word wrapped in a design-tool style selection box with corner handles. */
function Selected({ children }: { children: React.ReactNode }) {
  return (
    <span className="selection">
      <em>{children}</em>
      <span className="handle tl" />
      <span className="handle tr" />
      <span className="handle bl" />
      <span className="handle br" />
    </span>
  );
}
