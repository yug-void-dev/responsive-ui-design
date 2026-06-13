import { useSyncExternalStore } from "react";

export default function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", callback);
      return () => mediaQueryList.removeEventListener("change", callback);
    },
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
    () => false
  );
}
