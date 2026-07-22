import "@/App.css";
import { ContactProvider } from "@/context/ContactContext";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Ribbon from "@/components/sections/Ribbon";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import Events from "@/components/sections/Events";
import Perks from "@/components/sections/Perks";
import Footer from "@/components/sections/Footer";
import ContactModal from "@/components/ContactModal";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <ContactProvider>
      <SmoothScroll>
        <div className="grain-overlay" />
        <Header />
        <main data-testid="app-main" className="relative">
          <Hero />
          <Ribbon />
          <Services />
          <Packages />
          <Events />
          <Perks />
          <Footer />
        </main>
        <ContactModal />
        <Toaster />
      </SmoothScroll>
    </ContactProvider>
  );
}

export default App;
