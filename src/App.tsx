import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import VideoShowcase from "./components/VideoShowcase";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Hero />
      <ProblemSolution />
      <VideoShowcase />
      <Benefits />
      <UseCases />
      <Testimonials />
      <ContactForm />
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
