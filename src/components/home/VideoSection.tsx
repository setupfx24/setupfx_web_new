import { VideoPlayer } from "@/components/home/VideoPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { video } from "@/content/home";
import { hasAsset } from "@/lib/assets";

/**
 * Sits directly under the hero panel, so the two read as one opening block. Runs wider
 * than the 1200px shell, so the player reads as full bleed like the panel above it.
 */
export function VideoSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pt-5 sm:px-6 sm:pt-6">
      <Reveal delay={0.1}>
        <VideoPlayer hasVideo={hasAsset(video.src)} hasPoster={hasAsset(video.poster)} />
      </Reveal>
    </section>
  );
}
