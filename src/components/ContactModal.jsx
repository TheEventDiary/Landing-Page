import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Mail, Instagram, Phone } from "lucide-react";
import { useContact } from "../context/ContactContext";
import { CONTACT } from "../data/content";
import { Sprig } from "./Florals";

export default function ContactModal() {
  const { open, setOpen, context } = useContact();

  const subject = encodeURIComponent(
    context ? `Event Diary — ${context} enquiry` : "Event Diary — Enquiry",
  );
  const body = encodeURIComponent(
    `Hi Event Diary,\n\nI'd love to know more${
      context ? ` about the ${context}` : ""
    }. Here are my details:\n\nName:\nEvent Type:\nEvent Date:\nMessage:\n`,
  );

  const options = [
    {
      key: "email",
      icon: Mail,
      label: "Email us",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}?subject=${subject}&body=${body}`,
      external: false,
    },
    {
      key: "instagram",
      icon: Instagram,
      label: "Message on Instagram",
      value: CONTACT.instagramHandle,
      href: CONTACT.instagramUrl,
      external: true,
    },
    {
      key: "call",
      icon: Phone,
      label: "Call / WhatsApp",
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phone}`,
      external: false,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-testid="contact-modal"
        className="border-0 bg-[#F5F1E8] p-0 overflow-hidden max-w-md sm:rounded-none shadow-[0_40px_90px_-30px_rgba(0,0,0,0.55)]"
      >
        <div className="relative p-8 sm:p-10">
          <Sprig className="absolute right-5 top-5 w-16 opacity-70" stroke="var(--gold)" />
          <DialogHeader className="items-start text-left space-y-1">
            <span className="font-script text-3xl text-[color:var(--gold)] leading-none">
              Let&apos;s talk
            </span>
            <DialogTitle className="font-display text-3xl font-medium tracking-tight text-charcoal">
              {context ? context : "Get in touch"}
            </DialogTitle>
            <p className="font-body text-sm text-muted-ink pt-1">
              Pick whatever&apos;s easiest — we usually reply within a few hours.
            </p>
            <DialogDescription className="sr-only">
              Contact Event Diary by email, Instagram or phone.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-7 space-y-3">
            {options.map(({ key, icon: Icon, label, value, href, external }) => (
              <a
                key={key}
                data-testid={`contact-${key}`}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 border border-charcoal/15 bg-white/60 px-5 py-4 transition-colors duration-300 hover:border-[color:var(--gold)] hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EADAD5] text-charcoal transition-colors duration-300 group-hover:bg-[color:var(--gold)] group-hover:text-white">
                  <Icon size={19} strokeWidth={1.6} />
                </span>
                <span className="flex flex-col">
                  <span className="font-body text-[11px] uppercase tracking-[0.18em] text-muted-ink">
                    {label}
                  </span>
                  <span className="font-body text-[15px] font-medium text-charcoal">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-7 text-center font-script text-2xl text-charcoal/70">
            We Plan. You Enjoy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
