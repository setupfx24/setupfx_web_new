"use client";

import { useEffect, useRef, useState } from "react";

import { SlotLabel } from "@/components/ui/SlotLabel";
import { video } from "@/content/home";
import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  /** False until the media file is dropped into `public/`. */
  hasVideo: boolean;
  hasPoster: boolean;
};

/**
 * The video card below the hero. It starts paused behind a large play button; clicking
 * anywhere on the frame toggles play and pause. A mute control sits top left and a thin
 * progress bar runs along the bottom. Without the media file it stays a labelled dark
 * block of the same 16:9 shape and the controls are disabled.
 */
export function VideoPlayer({ hasVideo, hasPoster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const onTimeUpdate = () => {
      if (element.duration > 0) setProgress((element.currentTime / element.duration) * 100);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    element.addEventListener("timeupdate", onTimeUpdate);
    element.addEventListener("play", onPlay);
    element.addEventListener("pause", onPause);

    return () => {
      element.removeEventListener("timeupdate", onTimeUpdate);
      element.removeEventListener("play", onPlay);
      element.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    const element = videoRef.current;
    if (!element) return;

    if (element.paused) void element.play();
    else element.pause();
  };

  const toggleMute = () => {
    const element = videoRef.current;
    if (!element) return;

    element.muted = !element.muted;
    setMuted(element.muted);
  };

  return (
    <div
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,#141414_0%,#070707_60%,#0d0d0d_100%)]",
        hasVideo ? "border border-border" : "border border-dashed border-white/10",
      )}
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          className="size-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster={hasPoster ? video.poster : undefined}
          aria-label={video.label}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <SlotLabel src={video.src} />
        </div>
      )}

      {/*
       * The whole frame is the play target. While paused it carries a scrim and the
       * button; once playing both fade back so they do not sit over the picture, and
       * return on hover or keyboard focus so pausing is always one click away.
       */}
      {hasVideo ? (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? video.pause : video.play}
          className="absolute inset-0 z-10 grid cursor-pointer place-items-center"
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-black/30 transition-opacity duration-300",
              playing && "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "relative grid size-16 place-items-center rounded-full sm:size-20",
              "border border-white/25 bg-black/45 text-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.9)] backdrop-blur-md",
              "transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60",
              playing &&
                "scale-90 opacity-0 group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:scale-100 group-hover:opacity-100",
            )}
          >
            {playing ? <PauseIcon className="size-7" /> : <PlayIcon className="ml-0.5 size-7" />}
          </span>
        </button>
      ) : null}

      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <ControlButton
          onClick={toggleMute}
          disabled={!hasVideo}
          label={muted ? video.muteOn : video.muteOff}
        >
          {muted ? <MutedIcon /> : <SoundIcon />}
        </ControlButton>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/10"
        role="progressbar"
        aria-label={video.label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="h-full bg-accent shadow-[0_0_12px_rgba(124,188,240,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function ControlButton({
  onClick,
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        "grid size-9 place-items-center rounded-xl border border-white/10 bg-black/55 text-white",
        "backdrop-blur-md transition-colors hover:bg-black/75 disabled:opacity-40",
      )}
    >
      {children}
    </button>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "size-4",
  "aria-hidden": true,
};

function MutedIcon() {
  return (
    <svg {...iconProps}>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="m16 9 5 6m0-6-5 6" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg {...iconProps}>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      {...iconProps}
      fill="currentColor"
      stroke="none"
      className={className ?? iconProps.className}
    >
      <path d="M8 5.1c0-.8.9-1.3 1.5-.9l9 6.9c.6.4.6 1.4 0 1.8l-9 6.9c-.6.5-1.5 0-1.5-.8V5.1Z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg
      {...iconProps}
      fill="currentColor"
      stroke="none"
      className={className ?? iconProps.className}
    >
      <rect x="7" y="5" width="3.5" height="14" rx="1.2" />
      <rect x="13.5" y="5" width="3.5" height="14" rx="1.2" />
    </svg>
  );
}
