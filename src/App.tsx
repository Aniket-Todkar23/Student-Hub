import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import StudentsList from "./pages/StudentsList";
import Courses from "./pages/Courses";
import AddStudent from "./pages/AddStudent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="quorium-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentsList />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
