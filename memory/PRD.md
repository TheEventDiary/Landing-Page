# Event Diary — Landing Page PRD

## Original Problem Statement
Premium, custom-designed single-page landing page for **Event Diary**, a social media
marketing & content creation business for celebrations (weddings, engagements, mehndi/haldi,
birthdays, corporate events, baby showers, product launches, festivals). Goal: convert visitors
into clients. Aesthetic strictly based on a warm cream/paper flyer reference (charcoal elegant
serif title, script calligraphy, blush pink + gold accents, polaroid photo collages with
torn-paper edges, dried floral branches). Awwwards-level motion and craft.

## Tech Stack
- React 19 (CRA + craco), Tailwind, shadcn/ui
- framer-motion (scroll reveals, masked hero reveal, parallax, micro-interactions)
- lenis (smooth momentum scrolling)
- react-fast-marquee (editorial ribbon)
- gsap installed (available); primary motion via framer-motion
- Frontend-only (no backend/DB required per user)

## User Choices
- CTAs open a contact popup modal (no forms saved to DB).
- Contact: email , Instagram @the_eventdiary
  (https://instagram.com/the_eventdiary), phone 9477657156.
- Exact prices: Basic ₹4,999 / Standard ₹9,999 / Premium ₹19,999 / Custom quote.
- Stock images, easily swappable (centralised in src/data/content.js).

## Architecture
- src/data/content.js — ALL editable content (contact, images, services, packages, events, perks).
- src/context/ContactContext.jsx — gdaeventdiary@gmail.comlobal contact-modal state.
- src/components/SmoothScroll.jsx — Lenis wrapper + scrollToId helper.
- src/components/{Header, Polaroid, Reveal, Florals, ContactModal}.jsx
- src/components/sections/{Hero, Ribbon, Services, Packages, Events, Perks, Footer}.jsx
- Theme in src/index.css (cream paper, charcoal, blush, gold; Bodoni Moda / Cormorant Garamond /
  Great Vibes / Montserrat), grain overlay, torn-note clip-path.

## What's Been Implemented (2026-07-21)
- Kinetic hero: masked line-by-line "EVENT DIARY" reveal, script tagline, star subtitle,
  parallax polaroid collage, torn-paper note, floral branch, two CTAs, scroll cue.
- Sticky glassmorphic header w/ smooth-scroll nav + Book Now; mobile menu.
- Editorial marquee ribbon (outline text).
- Services (5 numbered cards, staggered reveal, hover elevate).
- Packages (4 columns, Premium highlighted, exact prices, per-card CTA → modal).
- Events (8 items, alternating slide-in, script tagline).
- Perks (3 columns on charcoal band).
- Footer "Let's Connect": final CTA, tel + Instagram links, signature.
- Contact modal with email/Instagram/call (correct hrefs, new-tab IG, tel link).
- SEO meta/title set. a11y DialogDescription added.
- Tested: testing_agent_v3 iteration_1 → 50/50 frontend checks passed.

## Backlog / Next Actions
- P1: Optional monthly/annual price toggle on Packages.
- P1: Real brand photography swap (replace URLs in content.js).
- P2: Lead-capture form + MongoDB storage + admin view (if user later wants saved leads).
- P2: Lighthouse audit pass for 90+ (lazy-load, WebP conversions).
- P2: Custom cursor / testimonials / gallery section.
