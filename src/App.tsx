import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resorts from "./pages/Resorts";
import ResortDetail from "./pages/ResortDetail";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import Activities from "./pages/Activities";
import Insurance from "./pages/Insurance";
import VideoBonus from "./pages/VideoBonus";
import Redeem from "./pages/Redeem";
import CompareResorts from "./pages/CompareResorts";
import Guides from "./pages/Guides";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/resort/:slug" element={<ResortDetail />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/video-bonus" element={<VideoBonus />} />
          <Route path="/redeem/:trip_id" element={<Redeem />} />
          <Route path="/compare/resorts" element={<CompareResorts />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;