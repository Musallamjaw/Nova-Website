import Footer from "../components/molecule/Footer";
import HeroContact from "../components/molecule/HeroContact";
import ContactForm from "../components/organism/ContactForm";

export default function Contact() {
  return (
    <div className="pt-24">
      <HeroContact/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
