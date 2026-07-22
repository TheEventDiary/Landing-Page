import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { EVENTS } from "../../data/content";
import { BranchBottomLeft } from "../Florals";

const EASE = [0.22, 1, 0.36, 1];

function Item({ label, i, fromRight }) {
  return (
    <motion.li
      data-testid={`event-item-${i}`}
      initial={{ opacity: 0, x: fromRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
      className="group flex items-center gap-4 border-b border-charcoal/10 py-4"
    >
      <Heart
        size={18}
        className="text-[color:var(--gold)] transition-transform duration-300 group-hover:scale-125"
        strokeWidth={1.6}
      />
      <span className="font-serif text-2xl text-charcoal transition-colors duration-300 group-hover:text-[color:var(--gold)] sm:text-3xl">
        {label}
      </span>
    </motion.li>
  );
}

export default function Events() {
  const left = EVENTS.slice(0, 4);
  const right = EVENTS.slice(4);

  return (
    <section
      id="events"
      data-testid="events-section"
      className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-24 lg:px-12 lg:py-32"
    >
      <BranchBottomLeft className="pointer-events-none absolute -left-6 bottom-0 w-[200px] opacity-50" stroke="#8a8377" />

      <div className="mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-display text-4xl font-medium leading-tight tracking-tight text-charcoal sm:text-5xl"
        >
          We Cover All Types of Events
        </motion.h2>
      </div>

      <div className="relative z-10 mx-auto grid max-w-3xl grid-cols-1 gap-x-16 sm:grid-cols-2">
        <ul>
          {left.map((e, i) => (
            <Item key={e} label={e} i={i} fromRight={false} />
          ))}
        </ul>
        <ul>
          {right.map((e, i) => (
            <Item key={e} label={e} i={i + 4} fromRight />
          ))}
        </ul>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 mt-14 text-center font-script text-4xl text-charcoal/80 sm:text-5xl"
      >
        ... and every moment worth celebrating!{" "}
        <Heart size={26} className="inline text-[color:var(--gold)]" />
      </motion.p>
    </section>
  );
}
