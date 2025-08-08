import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout/layout";
import PawTrail from "./components/PawTrail";
import ScrollAnimation from "./components/ScrollAnimation";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Trainer from "./pages/Trainer";
import Schedules from "./pages/Schedules";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import SocietyFood from "./pages/SocietyFood";
import FAQ from "./pages/FAQ";
import PottyTraining from "./pages/PottyTraining";
import LooseLeash from "./pages/LooseLeash";
import Map from "./pages/Map";

// Placeholder pages (you can create these later)
const HandFeeding = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Hand Feeding Guide - Coming Soon</h1></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="family-dog-training-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trainer" element={<Trainer />} />
              <Route path="/society-food" element={<SocietyFood />} />
              <Route path="/map" element={<Map />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schedules" element={<Schedules />} />
              <Route path="/potty-training" element={<PottyTraining />} />
              <Route path="/loose-leash" element={<LooseLeash />} />
              <Route path="/hand-feeding" element={<HandFeeding />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <PawTrail />
          <ScrollAnimation />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
