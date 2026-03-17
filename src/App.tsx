import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resorts from "./pages/Resorts";
import ResortDetail from "./pages/ResortDetail";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import Activities from "./pages/Activities";
import Insurance from "./pages/Insurance";
import VideoBonus from "./pages/VideoBonus";
import QRActivation from "./pages/QRActivation";
import ResortComparison from "./pages/ResortComparison";
import Guides from "./pages/Guides";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/resort/:slug" element={<ResortDetail />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/video-bonus" element={<VideoBonus />} />
          <Route path="/redeem/:trip_id" element={<QRActivation />} />
          <Route path="/compare/resorts" element={<ResortComparison />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;