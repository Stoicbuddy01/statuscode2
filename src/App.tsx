
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import page components - correct paths based on your file structure
import Index from "./pages/Index";
import Features from "./pages/Features";
import Analysis from "./pages/Analysis";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-route" element={<div>Test Route Working!</div>} />
          Catch-all route for 404 pages
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
  </BrowserRouter>
);

export default App;