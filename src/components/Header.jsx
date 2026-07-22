import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToId } from "./SmoothScroll";
import { useContact } from "../context/ContactContext";

const LINKS = [
  { label: "Services", id: "services" },
  { label: "Packages", id: "packages" },
  { label: "Events Covered", id: "events" },
  { label: "Connect", id: "connect" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openContact } = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#F5F1E8]/80 border-b border-charcoal/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
        <button
          data-testid="nav-logo"
          onClick={() => scrollToId("hero")}
          className="font-display text-xl font-medium tracking-[0.25em] text-charcoal"
        >
          EVENT DIARY
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className="nav-link font-body text-[13px] uppercase tracking-[0.16em] text-charcoal/80 hover:text-charcoal"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-book-now"
            onClick={() => openContact("Booking")}
            className="btn-ink rounded-full px-6 py-2.5 font-body text-[12px] uppercase tracking-[0.18em]"
          >
            Book Now
          </button>
        </div>

        <button
          data-testid="nav-menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-charcoal md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-charcoal/10 bg-[#F5F1E8]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`mobile-nav-${l.id}`}
                  onClick={() => go(l.id)}
                  className="py-3 text-left font-body text-sm uppercase tracking-[0.16em] text-charcoal/80"
                >
                  {l.label}
                </button>
              ))}
              <button
                data-testid="mobile-nav-book-now"
                onClick={() => {
                  setMenuOpen(false);
                  openContact("Booking");
                }}
                className="btn-ink mt-2 rounded-full px-6 py-3 font-body text-xs uppercase tracking-[0.18em]"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
