import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeatureSection from "@/components/Features/Features";
import AboutSection from "@/components/AboutSection/AboutSection";
import RevealSection from "@/components/RevealSection/RevealSection";
import VideoSection from "@/components/VideoSection/VideoSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <AboutSection />
      <RevealSection />
      <VideoSection/>
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <Footer/>

    </>
  );
}
