import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

// Fades its children in the first time they scroll into view
export const Reveal = ({ children, className }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
    >
      {children}
    </div>
  );
};
