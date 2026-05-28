"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Full-bleed animated mesh-gradient that fills its positioned parent.
 *
 * Deep evergreen → emerald → teal so the motion reads as the brand color
 * rather than a generic gradient. Render this inside a relatively/absolutely
 * positioned container that supplies the dark fallback background.
 */
export function HeroBackdrop() {
  const reduced = useReducedMotion();

  return (
    <MeshGradient
      colors={["#09090b", "#1e3a8a", "#2563eb", "#22d3ee", "#7c3aed"]}
      distortion={0.95}
      grainOverlay={0.1}
      speed={reduced ? 0 : 0.36}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
      swirl={0.7}
    />
  );
}
