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
    { href: "#about", label: "About Us" },
    { href: "#collection", label: "Collection" },
    { href: "#gallery", label: "Gallery" },
    { href: "#giftbox", label: "Gift Sets" },
    { href: "#process", label: "Process" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-[#162b1a] shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-body text-sm tracking-widest uppercase text-white/60">
            Menu
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 flex flex-col px-6 py-8 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-body text-xl text-white/70 hover:text-white transition-colors py-3 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-6 border-t border-white/10">
          <Link
            href="#contact"
            onClick={onClose}
            className="block w-full text-center bg-white text-[#162b1a] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors duration-300 rounded-xl font-semibold"
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
    <button onClick={onClick} className="md:hidden w-10 h-10 flex items-center justify-center text-white/80" aria-label="Open menu">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#162b1a]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="Sunrise Pepper" className="h-10 lg:h-12 w-auto object-contain brightness-0 invert" />
            <div className="hidden sm:block">
              <p className="font-body text-base lg:text-lg text-white font-semibold tracking-wide uppercase leading-tight">Sunrise</p>
              <p className="text-[0.55rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-white/50 leading-tight">
                Organic Kampot Pepper
              </p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            {[
              { href: "#about", label: "About Us" },
              { href: "#collection", label: "Collection" },
              { href: "#gallery", label: "Gallery" },
              { href: "#giftbox", label: "Gift Sets" },
              { href: "#process", label: "Process" },
              { href: "/blog", label: "Blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-white text-[#162b1a] px-5 py-2 text-xs tracking-[0.15em] uppercase hover:bg-white/90 transition-colors duration-300 rounded-full font-semibold"
            >
              Order
            </Link>
          </nav>
          <HamburgerButton onClick={() => setDrawerOpen(true)} />
        </div>
      </header>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

/* ─── HERO (Canva Slide 1) ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Farm photo background — corridor of pepper vines */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/farm/img-3137.jpg"
        alt="Sunrise Pepper farm in Kampot, Cambodia"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#1a3020]/75" />

      {/* Inner frame overlay — slightly lighter, centered */}
      <div className="absolute inset-6 md:inset-16 lg:inset-24 bg-[#162b1a]/40 pointer-events-none" />

      {/* Top-left quarter-circle */}
      <div className="absolute -top-16 -left-16 w-44 h-44 md:w-56 md:h-56 bg-[#3a7d44]/90 rounded-br-full" />

      {/* Bottom-right large circle */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-[#4a8d44]/80 rounded-full" />

      {/* Central content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="animate-fade-up">
          {/* Three overlapping semi-transparent circles */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#4CAF50]/25 rounded-full -mr-5 md:-mr-6 border border-[#4CAF50]/30" />
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#4CAF50]/35 rounded-full -mr-5 md:-mr-6 border border-[#4CAF50]/40" />
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#4CAF50]/25 rounded-full border border-[#4CAF50]/30" />
          </div>

          <h1 className="font-body text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-wider uppercase leading-none mb-6">
            Sunrise Pepper
          </h1>
          <p className="text-white/85 text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.3em] uppercase font-body">
            (Cambodia) Import Export Co., Ltd
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/30" />
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
    "Ecocert Certified",
    "Kampot Province",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-mint border-y border-leaf/15 py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 text-xs tracking-[0.25em] uppercase text-bark-light flex items-center gap-8">
            {item}
            <span className="text-leaf">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── ABOUT US (Canva Slide 2) ─── */
function About() {
  return (
    <section id="about" className="bg-[#FAFAF8]">
      {/* Top half — text */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a3020] leading-tight mb-8">
          From Cambodian Soil
          <br />
          <span className="italic">to the World</span>
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#3d5b3d] text-base lg:text-lg leading-relaxed">
            Our family has been farming this land since 2014 in Dang Tung district,
            Kampot Province — the heart of Cambodia&apos;s legendary pepper-growing
            region. In 2019, we took a bold step: we established Sunrise Pepper
            (Cambodia) Import Export Co., Ltd. not just as a brand, but as a statement.
          </p>
        </div>
      </div>

      {/* Bottom half — full-width farm photo */}
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/farm/img-4881.jpg"
          alt="Aerial view of Sunrise Pepper farm in Kampot, rows of pepper vines stretching to the horizon"
          className="w-full h-full object-cover"
        />
        {/* Subtle green gradient at top for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8]/20 to-transparent" />
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
      image: "/images/product/c360-20230317-163555-28.jpg",
      notes: "Picked before the berry has fully ripened, then allowed to dry under the Kampot sun. This pepper has far more peppery notes than white pepper and a bit more spice than red. Relatively universal — add it to general cooking, specifically red meats and vegetables.",
      pairings: "Steaks, roasted vegetables, sauces, stocks",
      harvest: "Harvested green, sun-dried until wrinkled black",
    },
    {
      name: "Red",
      nameKh: "ក្រហម",
      tagline: "Rare & Fruity",
      image: "/images/product/c360-20230317-164504-01.jpg",
      notes: "The rarest Kampot variety — made from fully matured berries. Red pepper tends to have more heat but with a unique tasting note of delicious candied fruit. Delights when served with white meat, seafood, or sprinkled on desserts like apple pie and vanilla ice cream.",
      pairings: "Duck confit, soft cheeses, desserts, chocolate",
      harvest: "Harvested fully ripe, carefully dried to retain color",
    },
    {
      name: "White",
      nameKh: "ស",
      tagline: "Delicate & Aromatic",
      image: "/images/product/img-20230317-134415.jpg",
      notes: "Without the outer skin, black peppercorns become white peppercorns. Chosen more for its peppery flavor and color than for its power — perfect for white sauce, mashed potato, and dishes where you want flavor without dark specks.",
      pairings: "Seafood, soups, mashed potatoes, white sauces",
      harvest: "Ripe berries retted in water, outer shell removed by hand",
    },
  ];

  return (
    <section id="collection" className="py-28 lg:py-36 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-leaf tracking-[0.3em] text-xs uppercase mb-4">The Collection</p>
          <h2 className="font-display text-4xl lg:text-5xl text-bark">
            Three Varieties,
            <br />
            <span className="italic text-leaf-dark">One Terroir</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {peppers.map((pepper) => (
            <article
              key={pepper.name}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group overflow-hidden border border-leaf/5 hover:border-leaf/20"
            >
              <div className="aspect-[4/3] bg-sand/60 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pepper.image}
                  alt={`${pepper.name} Kampot pepper`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="font-display text-3xl lg:text-4xl text-bark">{pepper.name}</h3>
                  <span className="text-leaf text-2xl leading-none">{pepper.nameKh}</span>
                </div>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-6 font-semibold">{pepper.tagline}</p>
                <p className="text-bark-light text-[0.9rem] leading-relaxed mb-8">{pepper.notes}</p>

                <div className="space-y-3 pt-6 border-t border-leaf/10">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-leaf font-semibold mb-1">Pairs With</p>
                    <p className="text-bark-light text-sm">{pepper.pairings}</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-leaf font-semibold mb-1">Harvest</p>
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

/* ─── PHOTO GALLERY ─── */
function Gallery() {
  const photos = [
    { src: "/images/farm/img-20230519-123810.jpg", alt: "Pepper farm landscape" },
    { src: "/images/farm/photo-2020-05-25-11-29-01.jpg", alt: "Pepper vines close-up" },
    { src: "/images/farm/img-20230519-124229.jpg", alt: "Farm rows" },
    { src: "/images/product/20251018-141830.jpg", alt: "Gift set with three pepper vials and grinder" },
    { src: "/images/giftbox/c360-20230901-153440-83.jpg", alt: "Gift box packaging" },
    { src: "/images/farm/img-4881.jpg", alt: "Farm scene" },
    { src: "/images/auditor/img-1910.jpg", alt: "Ecocert auditor inspection" },
    { src: "/images/orders/img-20240313-204925-172.jpg", alt: "Order fulfillment" },
  ];

  return (
    <section id="gallery" className="py-28 lg:py-36 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-leaf tracking-[0.3em] text-xs uppercase mb-4">From Farm to Table</p>
          <h2 className="font-display text-4xl lg:text-5xl text-bark">
            Our World in
            <br />
            <span className="italic text-leaf-dark">Pictures</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl group ${
                i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GIFT BOX SECTION ─── */
function GiftBox() {
  return (
    <section id="giftbox" className="py-28 lg:py-36 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Gift box photo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/product/20251018-141830.jpg"
                alt="Sunrise Pepper gift set with black, white and red pepper vials and wooden grinder"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative green blob */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-leaf/10 rounded-full -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-leaf tracking-[0.3em] text-xs uppercase mb-4 font-body">Gift Sets</p>
            <h2 className="font-display text-4xl lg:text-5xl text-bark leading-tight mb-8">
              The Perfect
              <br />
              <span className="italic text-leaf-dark">Pepper Gift</span>
            </h2>
            <div className="space-y-5 text-bark-light leading-relaxed text-[0.95rem]">
              <p>
                Our signature gift set brings together all three varieties of Sunrise Organic Kampot Pepper — black, red, and white — in elegant glass vials with natural cork stoppers, paired with a handcrafted wooden pepper grinder.
              </p>
              <p>
                Each set comes in a beautifully designed kraft cardboard box featuring our pepper vine illustration, making it the perfect gift for food lovers, chefs, or anyone who appreciates the finest ingredients.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl">
                <p className="text-2xl font-display text-leaf-dark mb-1">3</p>
                <p className="text-xs text-bark-light">Pepper Varieties</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <p className="text-2xl font-display text-leaf-dark mb-1">30g</p>
                <p className="text-xs text-bark-light">Per Vial</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <p className="text-2xl font-display text-leaf-dark mb-1">PGI</p>
                <p className="text-xs text-bark-light">Certified</p>
              </div>
            </div>
          </div>
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
      image: "/images/farm/photo-2020-05-25-11-28-42.jpg",
    },
    {
      number: "02",
      title: "Selected",
      desc: "Berries are carefully sorted by color — green for black pepper, red for red pepper, ensuring only the finest make the cut.",
      image: "/images/farm/photo-2020-05-25-11-28-48.jpg",
    },
    {
      number: "03",
      title: "Processed",
      desc: "Black pepper is cleaned, boiled, and sun-dried. White pepper is soaked, shelled, washed, and dried. Red pepper is dried and sorted.",
      image: "/images/farm/photo-2020-05-25-11-28-51.jpg",
    },
    {
      number: "04",
      title: "Certified",
      desc: "Every batch meets strict PGI and Ecocert organic standards. Certified, graded, and traceable to our farm in Kampot.",
      image: "/images/auditor/img-1910.jpg",
    },
  ];

  return (
    <section id="process" className="py-28 lg:py-36 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-leaf tracking-[0.3em] text-xs uppercase mb-4">The Process</p>
          <h2 className="font-display text-4xl lg:text-5xl text-bark">
            From Soil
            <br />
            <span className="italic text-leaf-dark">to Your Kitchen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="font-display text-4xl text-leaf/20 block mb-3">{step.number}</span>
                <h3 className="font-display text-xl mb-3 text-bark">{step.title}</h3>
                <p className="text-bark-light leading-relaxed text-[0.9rem]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CERTIFICATION ─── */
function Certification() {
  return (
    <section className="py-28 lg:py-36 px-6 bg-leaf-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-leaf-light tracking-[0.3em] text-xs uppercase mb-4 font-body">Certification</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
              Certified
              <br />
              <span className="italic text-leaf-light">Organic & Authentic</span>
            </h2>
            <div className="space-y-5 text-white/70 leading-relaxed text-[0.95rem]">
              <p>
                Sunrise Pepper is proud to be certified by ECOCERT, one of the world&apos;s leading organic certification bodies. Our farm meets both EU and US organic standards, ensuring every peppercorn we produce is genuinely organic.
              </p>
              <p>
                Our PGI (Protected Geographical Indication) certification guarantees that our pepper is authentically from Kampot province — the only region in the world with the right terroir to produce this exceptional pepper. Similar to champagne, the PGI label is protected by international law.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4">
                <span className="text-3xl">🌿</span>
                <div>
                  <p className="font-display text-sm">Ecocert</p>
                  <p className="text-white/50 text-xs">EU & US Organic</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4">
                <span className="text-3xl">🏅</span>
                <div>
                  <p className="font-display text-sm">PGI</p>
                  <p className="text-white/50 text-xs">Protected Origin</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4">
                <span className="text-3xl">🇰🇭</span>
                <div>
                  <p className="font-display text-sm">KPPA</p>
                  <p className="text-white/50 text-xs">Kampot Pepper Assn.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Auditor photo */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/auditor/img-1914.jpg" alt="Ecocert auditor inspection" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/auditor/img-1921.jpg" alt="Farm certification" className="w-full h-full object-cover" />
            </div>
          </div>
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
        <p className="text-leaf tracking-[0.3em] text-xs uppercase mb-4">Get in Touch</p>
        <h2 className="font-display text-4xl lg:text-5xl text-bark mb-6">
          Bring Kampot Home
        </h2>
        <p className="text-bark-light leading-relaxed max-w-xl mx-auto mb-10">
          Whether you&apos;re a chef seeking the finest ingredients, a specialty food importer, or simply a pepper lover — we&apos;d love to hear from you. Wholesale inquiries welcome.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@sunrisekampotpepper.com"
            className="bg-leaf text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-leaf-dark transition-colors duration-300 rounded-full"
          >
            Email Us
          </a>
          <a
            href="https://www.instagram.com/sunrisekampotpepper"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-leaf/30 text-leaf-dark px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-leaf hover:text-white hover:border-leaf transition-all duration-300 rounded-full"
          >
            Instagram
          </a>
        </div>

        {/* Contact details */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-leaf font-semibold mb-2">Phone</p>
            <p className="text-bark text-sm">+855-70-735-889</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-leaf font-semibold mb-2">Location</p>
            <p className="text-bark text-sm">Kampot Province, Cambodia</p>
          </div>
        </div>

        {/* Company profile download */}
        <div className="mt-12 pt-10 border-t border-leaf/10">
          <p className="text-bark-light/60 text-xs tracking-wider uppercase mb-4">Our Story</p>
          <a
            href="/Sunrise-Company-Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-leaf text-sm hover:text-leaf-dark transition-colors duration-300"
          >
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Company Profile (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-leaf-dark text-white/60 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.png" alt="Sunrise Pepper" className="h-8 w-auto object-contain opacity-80" />
          <span className="text-white/80 font-display text-sm tracking-widest uppercase">Sunrise Pepper</span>
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
        <About />
        <Collection />
        <Gallery />
        <GiftBox />
        <Process />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
