import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";
import { CONTACT } from "../../data/content";
import { useContact } from "../../context/ContactContext";
import { BranchBottomLeft, BranchTopRight, Sprig } from "../Florals";

const EASE = [0.22, 1, 0.36, 1];

export default function Footer() {
  const { openContact } = useContact();

  return (
    <footer
      id="connect"
      data-testid="footer-section"
      className="relative overflow-hidden bg-[#F5F1E8] pt-24 pb-12 lg:pt-32"
    >
      <BranchTopRight className="pointer-events-none absolute right-0 top-6 w-[180px] opacity-50" stroke="#8a8377" />
      <BranchBottomLeft className="pointer-events-none absolute left-0 bottom-0 w-[200px] opacity-50" stroke="#8a8377" />

      <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-script text-5xl text-charcoal/85 sm:text-6xl"
        >
          Let&apos;s make your moments unforgettable!
        </motion.p>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="mt-10"
        >
          <button
            data-testid="footer-cta"
            onClick={() => openContact("Booking")}
            className="btn-ink rounded-full px-10 py-5 font-body text-[13px] uppercase tracking-[0.22em]"
          >
            Ready to make your event unforgettable?
          </button>
        </motion.div>

        {/* Contact row */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          <a
            data-testid="footer-phone"
            href={`tel:${CONTACT.phone}`}
            className="group flex items-center gap-3 font-body text-lg text-charcoal transition-colors duration-300 hover:text-[color:var(--gold)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EADAD5] transition-colors duration-300 group-hover:bg-[color:var(--gold)] group-hover:text-white">
              <Phone size={18} strokeWidth={1.6} />
            </span>
            {CONTACT.phoneDisplay}
          </a>
          <a
            data-testid="footer-instagram"
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-body text-lg text-charcoal transition-colors duration-300 hover:text-[color:var(--gold)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EADAD5] transition-colors duration-300 group-hover:bg-[color:var(--gold)] group-hover:text-white">
              <Instagram size={18} strokeWidth={1.6} />
            </span>
            {CONTACT.instagramHandle}
          </a>
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="mt-20 flex flex-col items-center"
        >
          <Sprig className="w-20 opacity-70" stroke="var(--gold)" />
          <h3 className="mt-3 font-display text-4xl font-medium tracking-[0.28em] text-charcoal">
            EVENT DIARY
          </h3>
          <p className="mt-1 font-script text-3xl text-charcoal/70">We Plan. You Enjoy.</p>
        </motion.div>

        <div className="mt-14 border-t border-charcoal/10 pt-6">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-ink">
            © {new Date().getFullYear()} Event Diary · Social Media Marketing for Every Celebration
          </p>
        </div>
      </div>
    </footer>
  );
}
