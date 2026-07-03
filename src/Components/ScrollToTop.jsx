import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scroll = () => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    };

    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(scroll);

      // cleanup correct
      return () => cancelAnimationFrame(id2);
    });

    return () => cancelAnimationFrame(id1);
  }, [pathname, hash]);

  return null;
}
