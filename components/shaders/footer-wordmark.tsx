"use client";

import { GrainGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const textMask = {
  maskImage: "url(/wordmark.svg)",
  WebkitMaskImage: "url(/wordmark.svg)",
  maskSize: "contain",
  WebkitMaskSize: "contain",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskPosition: "center",
} as const;

/**
 * Oversized "Taylor Labs" wordmark filled with a slow, grainy iridescent
 * gradient (Paper's GrainGradient), clipped to the condensed letterforms via
 * the wordmark SVG mask. Gently brightens on hover — no spotlight.
 */
export function FooterWordmark() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-label="Taylor Labs"
      className="group relative mx-auto aspect-[1000/200] w-full select-none"
      role="img"
    >
      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-[900ms] ease-out group-hover:opacity-100"
        style={textMask}
      >
        <GrainGradient
          colorBack="#0a0f24"
          colors={["#1e3a8a", "#2563eb", "#22d3ee", "#a5f3fc"]}
          intensity={0.45}
          noise={0.4}
          shape="wave"
          softness={0.85}
          speed={reduced ? 0 : 0.18}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
