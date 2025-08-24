// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import page components
import Index from "./pages/Index";
import Features from "./pages/Features";
import Analysis from "./pages/Analysis";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import UserInput from "./components/UserInput"; // Assuming UserInput is a main page now

// --- CHANGE: Import the new ConfirmationPage ---
import ConfirmationPage from "./components/ConfirmationPage";
// --- END CHANGE ---

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
          <Route path="/user-input" element={<UserInput />} />

          {/* --- CHANGE: Add the new route for the confirmation page --- */}
          <Route path="/confirm-details" element={<ConfirmationPage />} />
          {/* --- END CHANGE --- */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;