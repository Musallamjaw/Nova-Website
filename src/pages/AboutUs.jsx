import AboutUsSection from '../components/organism/AboutUsSection';
import HowWeWork from '../components/organism/HowWeWorkSection';
import HeroSection from '../components/organism/HeroSection';
import CoreValues from '../components/organism/CoreValues';

function AboutUs() {
  return (
    <div className="pt-24">
      <HeroSection />
      <AboutUsSection />
      <CoreValues />
      <HowWeWork />
    </div>
  );
}

export default AboutUs;
