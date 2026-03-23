import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import { SummerCamp, Upskilling } from "@/components/EnquiryForms";
import Collaboration from "@/components/Collaboration";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <Hero />
    <About />
    <Achievements />
    <Programs />
    <Gallery />
    <SummerCamp />
    <Testimonials />
    <Upskilling />
    <Collaboration />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
