import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const trigger = document.querySelector(".sparkle-trigger");

    if (trigger) {
      const sparkle = (e: MouseEvent) => {
        const star = document.createElement("div");
        star.className = "invisible-star active sparkle-cluster";

        const shapes = ["✦", "❂", "✧", "❉", "❖"];
        const colors = ["#0ff", "#f0f", "#ff0", "#0f0", "#f60"]; // cyan, magenta, yellow, green, orange

        star.innerText = shapes[Math.floor(Math.random() * shapes.length)];
        star.style.fontSize = `${Math.random() * 8 + 10}px`; // 10px–18px
        star.style.color = colors[Math.floor(Math.random() * colors.length)];
        star.style.left = `${e.clientX}px`;
        star.style.top = `${e.clientY}px`;

        document.querySelector(".invisible-star-field")?.appendChild(star);
        setTimeout(() => star.remove(), 1200);
      };

      trigger.addEventListener("mousemove", sparkle);
      return () => trigger.removeEventListener("mousemove", sparkle);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="sparkle-trigger relative">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          {hydrated && (
            <div className="invisible-star-field pointer-events-none fixed top-0 left-0 w-full h-full z-50 overflow-hidden" />
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
