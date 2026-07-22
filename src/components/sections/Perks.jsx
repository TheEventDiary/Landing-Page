import { motion } from "framer-motion";
import { Smartphone, Heart, Clock } from "lucide-react";
import { PERKS } from "../../data/content";

const ICONS = { Smartphone, Heart, Clock };
const EASE = [0.22, 1, 0.36, 1];

export default function Perks() {
  return (
    <section
      data-testid="perks-section"
      className="bg-charcoal py-24 text-paper lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center font-script text-4xl text-[color:var(--gold)]"
        >
          why work with us
        </motion.p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {PERKS.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <motion.div
                key={p.title}
                data-testid={`perk-card-${i}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
                className="flex flex-col items-center px-6 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/25 text-paper">
                  <Icon size={26} strokeWidth={1.4} />
                </span>
                <h3 className="mt-6 font-body text-base font-semibold uppercase tracking-[0.16em]">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-[220px] font-serif text-xl italic text-paper/70">
                  {p.desc}
                </p>
                {i < PERKS.length - 1 && (
                  <span className="mt-8 hidden h-10 w-px bg-paper/15 md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
