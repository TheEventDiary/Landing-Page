import Marquee from "react-fast-marquee";
import { MARQUEE_WORDS } from "../../data/content";

export default function Ribbon() {
  return (
    <section
      data-testid="marquee-section"
      className="relative border-y border-charcoal/10 bg-[#EFE9DC] py-6 overflow-hidden"
    >
      <Marquee speed={38} gradient={false} autoFill>
        {MARQUEE_WORDS.map((w, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span className="stroke-text-gold font-display text-5xl font-semibold uppercase tracking-tight sm:text-6xl">
              {w}
            </span>
            <span className="font-serif text-4xl text-charcoal/40">&#10022;</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
