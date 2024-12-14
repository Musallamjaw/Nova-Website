import AboutUsSection from '../components/organism/AboutUsSection';
import HowWeWork from '../components/organism/HowWeWorkSection';
import HeroSection from '../components/organism/HeroSection';
import CoreValues from '../components/organism/CoreValues';
import Footer from '../components/molecule/Footer';

function AboutUs() {
  return (
    <div className="pt-24">
      <HeroSection />
      <AboutUsSection />
      <CoreValues />
      <HowWeWork />
      <Footer/>
    </div>
  );
}

export default AboutUs;
