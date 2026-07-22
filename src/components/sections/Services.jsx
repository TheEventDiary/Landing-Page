import { motion } from "framer-motion";
import {
  Smartphone,
  Camera,
  Sparkles,
  Megaphone,
  Users,
} from "lucide-react";
import { SERVICES } from "../../data/content";

const ICONS = { Smartphone, Camera, Sparkles, Megaphone, Users };
const EASE = [0.22, 1, 0.36, 1];

function SectionLabel({ children }) {
  return (
    <span className="inline-block rounded-full bg-[#EADAD5] px-5 py-1.5 font-body text-[11px] uppercase tracking-[0.28em] text-charcoal/70">
      {children}
    </span>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mb-16 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>What we do</SectionLabel>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-5 font-display text-5xl font-medium tracking-tight text-charcoal sm:text-6xl"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 font-serif text-2xl italic text-muted-ink"
        >
          Everything your celebration needs to shine online.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          const wide = i === 0 || i === 4;
          return (
            <motion.article
              key={s.title}
              data-testid={`service-card-${i}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.09, ease: EASE }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden border border-charcoal/10 bg-white/50 p-8 transition-colors duration-500 hover:border-[color:var(--gold)] hover:bg-white ${
                wide ? "lg:col-span-1" : ""
              }`}
            >
              <span className="absolute right-6 top-5 font-display text-5xl text-charcoal/10 transition-colors duration-500 group-hover:text-[color:var(--gold)]/25">
                0{i + 1}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EADAD5] text-charcoal transition-all duration-500 group-hover:scale-110 group-hover:bg-[color:var(--gold)] group-hover:text-white">
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-body text-lg font-semibold uppercase tracking-[0.1em] text-charcoal">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-ink">
                {s.points.join("  |  ")}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
