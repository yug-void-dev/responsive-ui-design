import { useState, useEffect } from "react";

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    // Set initial value (in case it changed between render and effect)
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
