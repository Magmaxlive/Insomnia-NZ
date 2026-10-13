import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import EventSection from "@/components/EventSection";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Marquee/>
      <AboutSection/>
      <EventSection/>
      <SocialSection/>
      <CTASection/>
    </div>
  );
}
