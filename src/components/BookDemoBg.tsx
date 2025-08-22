"use client";
import { cn } from "@/hooks/cn";
import useInView from "@/hooks/useInView";
import { useEffect } from "react";

export default function BookDemoBg() {
    const { ref, inView } = useInView<HTMLVideoElement>({ threshold: 0.1, once:true });
  
    useEffect(() => {
    const element = ref.current;
    if (!element) return;
      if (!inView) {
        element.pause();
      } else {
        element.play();
      }
    }, [inView, ref])
    
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const change = () => {
      if (document.hidden) {
        element.pause();
      } else {
        element.play();
      }
    };
    document.addEventListener("visibilitychange", change);

    return () => {
      document.removeEventListener("visibilitychange", change);
    };
  }, [ref]);

  return (
    <video
      ref={ref}
      className={cn("absolute inset-0 w-full h-full object-cover")}
      src="/video/bookdemo.mp4"
      muted
      autoPlay
      loop
      playsInline
    />
  );
}
