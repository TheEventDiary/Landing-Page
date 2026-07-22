import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import Polaroid from "../Polaroid";
import { BranchTopRight, Sprig } from "../Florals";
import { useContact } from "../../context/ContactContext";
import { scrollToId } from "../SmoothScroll";
import { HERO_PHOTOS } from "../../data/content";

const EASE = [0.22, 1, 0.36, 1];

function MaskedLine({ children, delay = 0, className = "" }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const { openContact } = useContact();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPhotos = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yPhotos2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="hero"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden pt-28 pb-16 lg:pt-24"
    >
      {/* blush organic shapes */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#E7D3CC] opacity-50 blur-[10px]" />
      <div className="pointer-events-none absolute right-[-60px] top-[38%] h-[260px] w-[260px] rounded-full bg-[#EFE3DC] opacity-40 blur-[6px]" />

      <BranchTopRight className="pointer-events-none absolute right-0 top-16 w-[220px] opacity-70 lg:w-[300px]" stroke="#8a8377" />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        {/* LEFT — title block */}
        <motion.div style={{ y: yText }} className="relative z-10">
          <h1 className="font-display font-medium leading-[0.86] tracking-[-0.01em] text-charcoal">
            <MaskedLine delay={0.15} className="text-[19vw] sm:text-[15vw] lg:text-[9.5rem]">
              EVENT
            </MaskedLine>
            <MaskedLine delay={0.32} className="text-[19vw] sm:text-[15vw] lg:text-[9.5rem]">
              DIARY
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
            className="mt-2 font-script text-5xl text-charcoal/90 sm:text-6xl"
          >
            We Plan. <span className="text-[color:var(--gold)]">You Enjoy.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-6 h-px w-56 origin-left bg-charcoal/25"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25, ease: EASE }}
            className="mt-6"
          >
            <p className="font-body text-lg font-medium uppercase tracking-[0.32em] text-muted-ink sm:text-xl">
              Social Media Marketing
            </p>
            <p className="mt-1 flex items-center gap-3 font-serif text-3xl italic text-charcoal sm:text-4xl">
              For Every Celebration
              <Sparkles size={22} className="text-[color:var(--gold)]" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: EASE }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button
              data-testid="hero-cta-packages"
              onClick={() => scrollToId("packages")}
              className="btn-ink rounded-full px-8 py-4 font-body text-[12px] uppercase tracking-[0.2em]"
            >
              Explore Our Packages
            </button>
            <button
              data-testid="hero-cta-consultation"
              onClick={() => openContact("Consultation")}
              className="btn-outline-ink rounded-full px-8 py-4 font-body text-[12px] uppercase tracking-[0.2em]"
            >
              Book a Consultation
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT — polaroid collage + torn note */}
        <div className="relative h-[440px] sm:h-[520px] lg:h-[620px]">
          <motion.div style={{ y: yPhotos }} className="absolute left-[2%] top-4 w-[52%] max-w-[300px]">
            <Polaroid testId="hero-photo-1" src={HERO_PHOTOS[0].url} alt={HERO_PHOTOS[0].alt} rotate={-6} />
          </motion.div>

          <motion.div style={{ y: yPhotos2 }} className="absolute right-[4%] top-0 w-[46%] max-w-[260px]">
            <Polaroid testId="hero-photo-2" src={HERO_PHOTOS[1].url} alt={HERO_PHOTOS[1].alt} rotate={5} />
          </motion.div>

          <motion.div style={{ y: yPhotos }} className="absolute bottom-2 left-[20%] w-[50%] max-w-[280px]">
            <Polaroid testId="hero-photo-3" src={HERO_PHOTOS[2].url} alt={HERO_PHOTOS[2].alt} rotate={-2} />
          </motion.div>

          {/* torn-paper handwritten note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
            className="torn-note absolute bottom-6 right-0 z-30 w-[190px] px-6 py-7 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.4)] sm:w-[210px]"
          >
            <Sprig className="absolute right-3 top-2 w-12 opacity-60" stroke="var(--gold)" />
            <p className="font-script text-3xl leading-tight text-charcoal/85">
              capturing moments,
              <br /> creating memories
            </p>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-ink">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-charcoal/60" />
        </motion.span>
      </motion.div>
    </section>
  );
}
