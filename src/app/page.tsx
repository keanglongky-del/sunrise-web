"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── MOBILE DRAWER ─── */
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const links = [
    { href: "#origin", label: "Origin" },
    { href: "#collection", label: "Collection" },
    { href: "#process", label: "Process" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-bark/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-cream shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-bark/10">
          <span className="font-display text-sm tracking-widest uppercase text-bark">
            Menu
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-bark-light hover:text-bark transition-colors"
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-6 py-8 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-2xl text-bark hover:text-terracotta transition-colors py-3 border-b border-bark/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Order CTA */}
        <div className="px-6 py-6 border-t border-bark/10">
          <Link
            href="#contact"
            onClick={onClose}
            className="block w-full text-center bg-bark text-cream px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-bark-light transition-colors duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}

/* ─── HAMBURGER BUTTON ─── */
function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden w-10 h-10 flex items-center justify-center text-bark"
      aria-label="Open menu"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M4 7H20M4 12H20M4 17H20" />
      </svg>
    </button>
  );
}

/* ─── NAVBAR ─── */
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-icon.png"
              alt="Sunrise Pepper"
              className="h-10 lg:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-display text-lg lg:text-xl text-bark leading-tight">
                Sunrise
              </p>
              <p className="text-[0.6rem] lg:text-[0.65rem] tracking-[0.2em] uppercase text-bark-light leading-tight">
                Organic Kampot Pepper
              </p>
            </div>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { href: "#origin", label: "Origin" },
              { href: "#collection", label: "Collection" },
              { href: "#process", label: "Process" },
              { href: "/blog", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-bark-light hover:text-bark transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-bark text-cream px-5 py-2 text-xs tracking-[0.15em] uppercase hover:bg-bark-light transition-colors duration-300"
            >
              Order
            </Link>
          </nav>
          {/* Mobile hamburger */}
          <HamburgerButton onClick={() => setDrawerOpen(true)} />
        </div>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bark overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-farm.jpg"
        alt="Sunrise Pepper farm in Kampot, Cambodia"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bark/60 via-bark/40 to-bark/80" />
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="animate-fade-up">
          <p className="text-terracotta tracking-[0.4em] text-xs uppercase mb-8 font-body">
            Single Origin &middot; Kampot, Cambodia
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-8 font-normal">
            Pepper Worth
            <br />
            <span className="italic text-terracotta">Traveling For</span>
          </h1>
          <p className="text-cream/60 text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-12 font-light">
            Grown on our family farm in the volcanic soil of Kampot province.
            Hand-harvested, sun-dried, PGI-certified. The world&rsquo;s most
            prized peppercorn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#collection"
              className="border border-terracotta text-terracotta px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-terracotta hover:text-bark transition-all duration-500"
            >
              Explore Our Pepper
            </Link>
            <Link
              href="#origin"
              className="text-cream/50 px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:text-cream transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-terracotta/40" />
      </div>
    </section>
  );
}

/* ─── TRUST MARQUEE ─── */
function TrustMarquee() {
  const items = [
    "PGI Certified",
    "Organically Grown",
    "Single Origin",
    "Hand-Harvested",
    "Sun-Dried",
    "Family Farm",
    "Fair Trade",
    "Kampot Province",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-sand border-y border-terracotta/20 py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xs tracking-[0.25em] uppercase text-bark-light flex items-center gap-8"
          >
            {item}
            <span className="text-terracotta">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── ORIGIN STORY ─── */
function Origin() {
  return (
    <section id="origin" className="py-28 lg:py-36 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-terracotta tracking-[0.3em] text-xs uppercase mb-4 font-body">
              Our Origin
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-bark leading-tight mb-8">
              Rooted in
              <br />
              <span className="italic">Kampot&rsquo;s Terroir</span>
            </h2>
            <div className="space-y-5 text-bark-light leading-relaxed text-[0.95rem]">
              <p>
                For centuries, the province of Kampot has produced what many
                chefs consider the finest pepper on earth. The region&rsquo;s
                unique combination of quartz-rich soil, warm coastal breezes,
                and seasonal monsoons creates a terroir that cannot be
                replicated anywhere else.
              </p>
              <p>
                At Sunrise Pepper, our family has been farming this land for
                generations. We grow our pepper vines on tall wooden poles,
                the traditional Kampot method, using only organic practices. No
                synthetic fertilizers, no chemicals &mdash; just healthy soil,
                sunshine, rain, and patience.
              </p>
              <p>
                Every peppercorn is hand-picked at peak ripeness and sun-dried
                naturally on our farm. This is why Kampot pepper earned its PGI
                (Protected Geographical Indication) status from the European
                Union &mdash; a guarantee of authenticity that is as rigorous
                as champagne.
              </p>
            </div>
          </div>

          {/* Farm photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farm-vines.jpg"
                alt="Pepper vines growing on wooden poles at Sunrise Pepper farm in Kampot"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative offset box */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-terracotta/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PEPPER COLLECTION ─── */
function Collection() {
  const peppers = [
    {
      name: "Black",
      nameKh: "ម្រះ",
      tagline: "Bold & Complex",
      image: "/images/product-black.jpg",
      notes:
        "Picked before the berry has fully ripened, then allowed to dry under the Kampot sun. This pepper has far more peppery notes than white pepper and a bit more spice than red. Relatively universal — add it to general cooking, specifically red meats and vegetables.",
      pairings: "Steaks, roasted vegetables, sauces, stocks",
      harvest: "Harvested green, sun-dried until wrinkled black",
    },
    {
      name: "Red",
      nameKh: "ក្រហម",
      tagline: "Rare & Fruity",
      image: "/images/product-red.jpg",
      notes:
        "The rarest Kampot variety — made from fully matured berries. Red pepper tends to have more heat but with a unique tasting note of delicious candied fruit. Delights when served with white meat, seafood, or sprinkled on desserts like apple pie and vanilla ice cream.",
      pairings: "Duck confit, soft cheeses, desserts, chocolate",
      harvest: "Harvested fully ripe, carefully dried to retain color",
    },
    {
      name: "White",
      nameKh: "ស",
      tagline: "Delicate & Aromatic",
      image: "/images/product-white.jpg",
      notes:
        "Without the outer skin, black peppercorns become white peppercorns. Chosen more for its peppery flavor and color than for its power — perfect for white sauce, mashed potato, and dishes where you want flavor without dark specks.",
      pairings: "Seafood, soups, mashed potatoes, white sauces",
      harvest: "Ripe berries retted in water, outer shell removed by hand",
    },
  ];

  return (
    <section id="collection" className="py-28 lg:py-36 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-terracotta tracking-[0.3em] text-xs uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-bark">
            Three Varieties,
            <br />
            <span className="italic">One Terroir</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {peppers.map((pepper) => (
            <article
              key={pepper.name}
              className="bg-cream rounded-sm border border-terracotta/10 hover:border-terracotta/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Product image */}
              <div className="aspect-[4/3] bg-sand/60 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pepper.image}
                  alt={`${pepper.name} Kampot pepper`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="font-display text-3xl lg:text-4xl text-bark">
                  {pepper.name}
                </h3>
                <span className="text-terracotta text-2xl leading-none">
                  {pepper.nameKh}
                </span>
              </div>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-6 font-semibold">
                {pepper.tagline}
              </p>

              {/* Tasting notes */}
              <p className="text-bark-light text-[0.9rem] leading-relaxed mb-8">
                {pepper.notes}
              </p>

              {/* Details */}
              <div className="space-y-3 pt-6 border-t border-bark/10">
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-terracotta font-semibold mb-1">
                    Pairs With
                  </p>
                  <p className="text-bark-light text-sm">{pepper.pairings}</p>
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-terracotta font-semibold mb-1">
                    Harvest
                  </p>
                  <p className="text-bark-light text-sm">{pepper.harvest}</p>
                </div>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function Process() {
  const steps = [
    {
      number: "01",
      title: "Hand Picked",
      desc: "Each peppercorn is hand-picked at peak ripeness from our 10,120 pepper vines across 6 plots in Kampot province.",
    },
    {
      number: "02",
      title: "Selected",
      desc: "Berries are carefully sorted by color — green for black pepper, red for red pepper, ensuring only the finest make the cut.",
    },
    {
      number: "03",
      title: "Processed",
      desc: "Black pepper is cleaned, boiled, and sun-dried. White pepper is soaked, shelled, washed, and dried. Red pepper is dried and sorted.",
    },
    {
      number: "04",
      title: "Certified",
      desc: "Every batch meets strict PGI and Ecocert organic standards. Certified, graded, and traceable to our farm in Kampot.",
    },
  ];

  return (
    <section id="process" className="relative py-28 lg:py-36 px-6 bg-bark text-cream overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/process-banner.jpg"
        alt="Pepper production process at Sunrise Pepper farm"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-terracotta tracking-[0.3em] text-xs uppercase mb-4">
            The Process
          </p>
          <h2 className="font-display text-4xl lg:text-5xl">
            From Soil
            <br />
            <span className="italic text-terracotta">to Your Kitchen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center lg:text-left">
              <span className="font-display text-5xl text-terracotta/30 block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-2xl mb-4">{step.title}</h3>
              <p className="text-cream/50 leading-relaxed text-[0.9rem]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY KAMPOT ─── */
function WhyKampot() {
  const badges = [
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 2L20 10H28L22 16L24 26L16 20L8 26L10 16L4 10H12L16 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "PGI Certified",
      desc: "Protected Geographical Indication — the EU guarantee of authentic Kampot origin, like champagne for wine.",
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="12"/>
          <path d="M12 16C12 16 14 20 16 20C18 20 20 16 20 16C20 16 18 12 16 12C14 12 12 16 12 16Z" />
          <path d="M16 4V8M16 24V28M4 16H8M24 16H28" strokeLinecap="round"/>
        </svg>
      ),
      title: "Organic Farm",
      desc: "No synthetic chemicals. No shortcuts. Healthy soil, sunshine, and generations of farming knowledge.",
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 26L16 6L26 26H6Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 6V18M16 22V24" strokeLinecap="round"/>
        </svg>
      ),
      title: "Family Operated",
      desc: "A real family farm, not a corporation. Every peppercorn is traceable to our fields in Kampot province.",
    },
  ];

  return (
    <section className="py-28 lg:py-36 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-terracotta tracking-[0.3em] text-xs uppercase mb-4">
            Why Kampot Pepper
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-bark">
            A Pepper Unlike
            <br />
            <span className="italic">Any Other</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {badges.map((badge) => (
            <div key={badge.title} className="text-center">
              <div className="text-terracotta mb-6 flex justify-center">
                {badge.icon}
              </div>
              <h3 className="font-display text-xl mb-3 text-bark">
                {badge.title}
              </h3>
              <p className="text-bark-light text-[0.9rem] leading-relaxed">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 px-6 bg-sand">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-terracotta tracking-[0.3em] text-xs uppercase mb-4">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl lg:text-5xl text-bark mb-6">
          Bring Kampot Home
        </h2>
        <p className="text-bark-light leading-relaxed max-w-xl mx-auto mb-10">
          Whether you&rsquo;re a chef seeking the finest ingredients, a
          specialty food importer, or simply a pepper lover &mdash; we&rsquo;d
          love to hear from you. Wholesale inquiries welcome.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@sunrisekampotpepper.com"
            className="bg-bark text-cream px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-bark-light transition-colors duration-300"
          >
            Email Us
          </a>
          <a
            href="https://www.instagram.com/sunrisekampotpepper"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-bark/20 text-bark px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:border-bark transition-colors duration-300"
          >
            Instagram
          </a>
        </div>

        {/* Company profile download */}
        <div className="mt-14 pt-10 border-t border-bark/10">
          <p className="text-bark-light/60 text-xs tracking-wider uppercase mb-4">
            Our Story
          </p>
          <a
            href="/Sunrise-Company-Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-terracotta text-sm hover:text-bark transition-colors duration-300"
          >
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Company Profile (PDF)
          </a>
        </div>

        <p className="mt-8 text-bark-light/50 text-xs tracking-wider">
          Kampot Province, Cambodia
        </p>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-bark text-cream/40 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-icon.png"
            alt="Sunrise Pepper"
            className="h-8 w-auto object-contain opacity-80"
          />
          <span className="text-cream/60 font-display text-sm tracking-widest uppercase">
            Sunrise Pepper
          </span>
        </div>
        <p>&copy; {new Date().getFullYear()} Sunrise Organic Kampot Pepper</p>
        <p>Kampot Province, Cambodia</p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Origin />
        <Collection />
        <Process />
        <WhyKampot />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
