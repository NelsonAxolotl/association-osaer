import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const timeout = setTimeout(() => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}
