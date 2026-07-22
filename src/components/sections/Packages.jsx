import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PACKAGES } from "../../data/content";
import { useContact } from "../../context/ContactContext";

const EASE = [0.22, 1, 0.36, 1];

export default function Packages() {
  const { openContact } = useContact();

  return (
    <section
      id="packages"
      data-testid="packages-section"
      className="relative bg-[#EFE9DC] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block rounded-full bg-white px-5 py-1.5 font-body text-[11px] uppercase tracking-[0.28em] text-charcoal/70"
          >
            Simple, honest pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mt-5 font-display text-5xl font-medium tracking-tight text-charcoal sm:text-6xl"
          >
            Packages
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              data-testid={`package-card-${p.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className={`relative flex flex-col p-8 transition-transform duration-500 hover:-translate-y-2 ${
                p.highlight
                  ? "bg-charcoal text-paper shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]"
                  : "border border-charcoal/10 bg-[#F5F1E8]"
              }`}
            >
              {p.highlight && (
                <span className="absolute right-6 top-6 rounded-full bg-[color:var(--gold)] px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-white">
                  Popular
                </span>
              )}
              <div
                className={`mb-1 inline-flex w-fit rounded-full px-4 py-1 font-body text-[12px] uppercase tracking-[0.2em] ${
                  p.highlight ? "bg-white/15 text-paper" : "bg-[#EADAD5] text-charcoal/80"
                }`}
              >
                {p.name}
              </div>

              {p.price ? (
                <div className="mt-5 flex items-end gap-1">
                  <span
                    className={`font-serif text-2xl ${p.highlight ? "text-paper/70" : "text-muted-ink"}`}
                  >
                    &#8377;
                  </span>
                  <span className="font-display text-5xl font-medium italic text-[color:var(--gold)]">
                    {p.price}
                  </span>
                </div>
              ) : (
                <p className="mt-5 font-serif text-2xl italic leading-snug text-charcoal">
                  Tailor-made plans
                </p>
              )}

              <p
                className={`mt-2 font-body text-xs uppercase tracking-[0.14em] ${
                  p.highlight ? "text-paper/60" : "text-muted-ink"
                }`}
              >
                {p.tagline}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        p.highlight ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"
                      }`}
                    />
                    <span className={p.highlight ? "text-paper/90" : "text-charcoal/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                data-testid={`package-cta-${p.name.toLowerCase()}`}
                onClick={() =>
                  openContact(
                    p.name === "CUSTOM" ? "Custom Quote" : `${p.name} Package`,
                  )
                }
                className={`mt-8 rounded-full px-6 py-3.5 font-body text-[11px] uppercase tracking-[0.18em] transition-all duration-400 ${
                  p.highlight
                    ? "bg-[color:var(--gold)] text-white hover:bg-white hover:text-charcoal"
                    : "btn-outline-ink"
                }`}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
