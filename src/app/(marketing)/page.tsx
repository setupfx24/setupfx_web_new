import { Hero } from "@/components/home/Hero";
import { Leadership } from "@/components/home/Leadership";
import { PricingPanel } from "@/components/home/PricingPanel";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { System } from "@/components/home/System";
import { TechTicker } from "@/components/home/TechTicker";
import { VideoSection } from "@/components/home/VideoSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Stats />
      <TechTicker />
      <System />
      <Services />
      <Leadership />
      <PricingPanel />
    </>
  );
}
