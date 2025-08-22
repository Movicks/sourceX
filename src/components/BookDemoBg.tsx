"use client";

import { cn } from "@/hooks/cn";
import { useEffect, useRef, useState } from "react";

export default function BookDemoBg() {
  const forwardRef = useRef<HTMLVideoElement>(null);
  const reverseRef = useRef<HTMLVideoElement>(null);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const forward = forwardRef.current;
    const reverse = reverseRef.current;

    if (!forward || !reverse) return;

    forward.play();

    const handleEnd = () => {
      if (isForward) {
        forward.pause();
        reverse.currentTime = 0;
        reverse.play();
      } else {
        reverse.pause();
        forward.currentTime = 0;
        forward.play();
      }
      setIsForward((prev) => !prev);
    };

    forward.onended = handleEnd;
    reverse.onended = handleEnd;

    return () => {
      forward.onended = null;
      reverse.onended = null;
    };
  }, [isForward]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={forwardRef}
        className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          isForward ? "opacity-100 z-10" : "opacity-0 z-0")}
        src="/video/bookdemo.mp4"
        muted
        playsInline
      />
      <video
        ref={reverseRef}
        className={cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          !isForward ? "opacity-100 z-10" : "opacity-0 z-0")}
        src="/video/bookdemo-reversed.mp4"
        muted
        playsInline
      />
    </div>
  );
}
