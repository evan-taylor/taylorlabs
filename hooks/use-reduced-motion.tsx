import * as React from "react";

/**
 * Tracks the user's `prefers-reduced-motion` setting.
 *
 * Returns `true` when the user has asked the system to minimize motion. Starts
 * as `false` on the server and first client paint so animated visuals mount,
 * then corrects on the client — keeping shaders visible while letting us pause
 * them (`speed={0}`) for motion-sensitive users.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
