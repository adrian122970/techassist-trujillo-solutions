import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/Services";
import ProjectGallery3D from "@/components/ProjectGallery3D";
import ServiceDemos from "@/components/ServiceDemos";
import UseCases from "@/components/UseCases";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <VideoShowcase />
      <Services />
      <ProjectGallery3D />
      <ServiceDemos />
      <UseCases />
      <Benefits />
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingButtons />
      <ChatBot />
    </div>
  );
};

export default Index;
