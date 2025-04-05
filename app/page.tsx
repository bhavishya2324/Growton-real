
import HeroGrowton from "@/components/HeroGrowton"

import FeaturesSection from "@/components/feature";
import ContentSection1 from "@/components/blog1";
import StatsSection from "@/components/stats";

import CallToAction from "@/components/callus";
import WallOfLoveSection from "@/components/testimonials";
import Features from "@/components/services";
import ContentSection2 from "@/components/blog2";


export default function Home() {
  return (
    <>
    <div>
      
      <HeroGrowton />
      <FeaturesSection />
      <ContentSection2 />
      <StatsSection />
      <ContentSection1 />
      {/* <Pricing /> */}
      <Features />
      <WallOfLoveSection />
      <CallToAction />
     
      
      
    </div>
    </>
  );
}
