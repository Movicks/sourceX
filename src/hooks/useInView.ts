import { useEffect, useRef, useState } from "react";

interface InViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export default function useInView<T extends HTMLElement>({ once = false, ...options }: InViewOptions) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const hasEnteredView = useRef(false); // tracks if it was ever in view

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        hasEnteredView.current = true;

        if (once) {
          observer.disconnect();
        }
      } else {
        if (!once) {
          setInView(false);
        } else if (!hasEnteredView.current) {
          setInView(false);
        }
      }
    }, options);

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [once, options]);

  return { ref, inView };
}
