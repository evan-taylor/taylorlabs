"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * The Taylor Labs "TL" mark, brought to life by clipping an animated emerald
 * mesh-gradient to the logo's dithered-grid shape (`public/logo-mark.svg`).
 *
 * The SVG's per-square opacity falloff becomes the mask alpha, so the grid
 * keeps its signature fade while the color drifts inside it.
 */
export function LogoMark({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  const mask = {
    maskImage: "url(/logo-mark.svg)",
    WebkitMaskImage: "url(/logo-mark.svg)",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
  } as const;

  return (
    <span
      aria-hidden
      className={cn("relative inline-block shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <MeshGradient
        colors={["#2563eb", "#22d3ee", "#818cf8", "#a5f3fc"]}
        distortion={0.8}
        speed={reduced ? 0 : 0.6}
        style={{ width: size, height: size, ...mask }}
        swirl={0.9}
      />
    </span>
  );
}
