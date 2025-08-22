import { cn } from "@/hooks/cn";

export default function BookDemoBg() {
  return (
    <video
        className={cn(
          "absolute inset-0 w-full h-full object-cover"
        )}
        src="/video/bookdemo.mp4"
        muted
        autoPlay
        loop
        playsInline
      />
  );
}
