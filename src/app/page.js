import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import EventSection from "@/components/EventSection";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Marquee/>
      <AboutSection/>
      <EventSection/>
      <CTASection/>
    </div>
  );
}
