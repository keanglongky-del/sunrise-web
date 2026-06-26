'use client';

import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [showSpices, setShowSpices] = useState(false);
  const spiceSectionRef = useRef<HTMLDivElement>(null);
  const pepperCarouselRef = useRef<HTMLDivElement>(null);
  const spiceCarouselRef = useRef<HTMLDivElement>(null);
  const [activePepperCard, setActivePepperCard] = useState(0);
  const [activeSpiceCard, setActiveSpiceCard] = useState(0);

  const openSpices = useCallback(() => {
    setShowSpices(true);
    setTimeout(() => {
      spiceSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);
  const pepperScrollHandler = useCallback(() => {
    const el = pepperCarouselRef.current;
    if (!el) return;
    const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth || 1;
    const gap = 20;
    const scrollPos = el.scrollLeft;
    const idx = Math.round(scrollPos / (cardWidth + gap));
    setActivePepperCard(Math.min(idx, 4));
  }, []);
  const spiceScrollHandler = useCallback(() => {
    const el = spiceCarouselRef.current;
    if (!el) return;
    const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth || 1;
    const gap = 20;
    const scrollPos = el.scrollLeft;
    const idx = Math.round(scrollPos / (cardWidth + gap));
    setActiveSpiceCard(Math.min(idx, 10));
  }, []);

  return (
    <div className="font-body text-bark bg-cream antialiased">

      {/* ════════════════════════════════════════
          SLIDE 1 — HERO
          ════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#0a0f0a]">
        {/* Background: cinematic farm with perspective path */}
        <Image
          src="/images/hero-farm-path.jpg"
          alt=""
          fill
          className="object-cover scale-105"
          style={{ filter: 'brightness(0.6) contrast(1.1) saturate(0.9)' }}
          priority
        />
        {/* Dark green cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d]/70 via-[#0d1f10]/50 to-[#0a1a0d]/80 z-[1]" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,15,8,0.6) 100%)' }}
        />

        {/* Top-left quarter-circle + official logo */}
        <div className="absolute top-0 left-0 w-42 sm:w-50 md:w-[17rem] h-42 sm:h-50 md:h-[17rem] rounded-br-[100%] bg-gradient-to-br from-[#1a3a1e]/90 to-[#142e18]/80 z-10" />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-5 z-40 flex flex-col items-center pointer-events-auto">
          <Image
            src="/logo-official.png"
            alt="Sunrise"
            width={80}
            height={90}
            className="w-16 sm:w-20 md:w-[5.5rem] h-auto"
            priority
          />
        </div>

        {/* Bottom-right quarter-circle */}
        <div className="absolute bottom-0 right-0 w-40 sm:w-50 md:w-[20rem] h-40 sm:h-50 md:h-[20rem] rounded-tl-[100%] bg-gradient-to-tl from-[#2d6b3a]/80 to-[#1e4d28]/60 z-10" />

        {/* Soft glowing circles — upper center */}
        <div className="absolute top-24 sm:top-28 md:top-32 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="absolute w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 rounded-full bg-[#3a7a4a]/15 blur-xl -translate-x-8" />
          <div className="absolute w-28 sm:w-36 md:w-48 h-28 sm:h-36 md:h-48 rounded-full bg-[#4a8c5c]/10 blur-lg translate-x-6 -translate-y-3" />
          <div className="absolute w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-[#5a9c6c]/8 blur-md translate-x-0 translate-y-2" />
        </div>

        {/* Gold accent line — thin horizontal below circles, above title */}
        <div className="absolute top-32 sm:top-36 md:top-44 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#c4996a]/40 to-transparent" />
        </div>

        {/* Nav bar — glassmorphism */}
        <nav className="absolute top-0 left-0 right-0 z-30 hidden md:flex items-center justify-between px-10 py-5 bg-[#0d1f10]/40 backdrop-blur-md border-b border-white/5">
          <div className="w-40" />
          <div className="flex items-center gap-10 text-white/85 text-sm font-medium tracking-[0.08em]">
            <a href="#about" className="hover:text-[#c4996a] transition-colors duration-300">About Us</a>
            <a href="#certifications" className="hover:text-[#c4996a] transition-colors duration-300">Certification</a>
            <div className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
              <a href="#pepper-types" className="hover:text-[#c4996a] transition-colors duration-300 flex items-center gap-1">
                Product
                <svg className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 bg-[#0d1f10]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-2 min-w-[180px] shadow-2xl z-50 transition-all duration-200 origin-top ${productOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <a href="#pepper-types" onClick={() => setProductOpen(false)} className="block px-5 py-2.5 text-sm text-white/85 hover:text-[#D4B06A] hover:bg-white/5 transition-colors rounded-lg">Pepper Types</a>
                <button onClick={() => { setProductOpen(false); openSpices(); }} className="block w-full text-left px-5 py-2.5 text-sm text-white/85 hover:text-[#D4B06A] hover:bg-white/5 transition-colors rounded-lg">Our Spices</button>
              </div>
            </div>
            <a href="#contact" className="hover:text-[#c4996a] transition-colors duration-300">Contact</a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-5 right-5 z-40 md:hidden p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
        {open && (
          <div className="absolute top-0 left-0 right-0 z-30 md:hidden bg-[#0a1a0d]/95 backdrop-blur-xl pt-16 pb-8 px-8">
            {[
              { label: 'About Us', id: 'about' },
              { label: 'Certification', id: 'certifications' },
              { label: 'Product', id: null, children: [
                { label: 'Pepper Types', id: 'pepper-types' },
                { label: 'Our Spices', id: 'our-spices', action: 'openSpices' },
              ]},
              { label: 'Contact', id: 'contact' },
            ].map(item => {
              if (item.children) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className="flex items-center justify-between w-full py-3 text-white/90 text-lg tracking-[0.08em] border-b border-white/8"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 text-white/50 transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ease-in-out ${productOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {item.children.map(child => (
                        (child as { label: string; id: string; action?: string }).action === 'openSpices' ? (
                          <button key={child.id} onClick={() => { setOpen(false); setProductOpen(false); openSpices(); }}
                            className="block w-full text-left py-2.5 pl-4 text-white/60 text-sm tracking-[0.08em] border-b border-white/5 hover:text-[#c4996a] transition-colors">
                            {child.label}
                          </button>
                        ) : (
                          <a key={child.id} href={`#${child.id}`} onClick={() => { setOpen(false); setProductOpen(false); }}
                            className="block py-2.5 pl-4 text-white/60 text-sm tracking-[0.08em] border-b border-white/5 hover:text-[#c4996a] transition-colors">
                            {child.label}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}
                  className="block py-3 text-white/90 text-lg tracking-[0.08em] border-b border-white/8 hover:text-[#c4996a] transition-colors">
                  {item.label}
                </a>
              );
            })}
          </div>
        )}

        {/* Center title — premium typography */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          {/* Small gold label above title */}
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[#c4996a]/60" />
            <span className="text-[#c4996a]/80 text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium">
              Since 2014 · Kampot, Cambodia
            </span>
            <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-[#c4996a]/60" />
          </div>
          <h1 className="font-body font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.04em] leading-none">
            SUNRISE PEPPER
          </h1>
          <p className="font-body text-white/75 text-[10px] sm:text-xs md:text-sm tracking-[0.3em] mt-3 md:mt-5 font-light">
            (CAMBODIA) IMPORT EXPORT CO., LTD
          </p>
          {/* Gold accent line below subtitle */}
          <div className="mt-5 md:mt-6 w-10 md:w-14 h-px bg-gradient-to-r from-transparent via-[#c4996a]/50 to-transparent" />
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-14 left-0 right-0 z-10 text-center pointer-events-none">
          <p className="text-white/40 text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] uppercase font-light">
            Organic Kampot Pepper · Geographical Indication Protected
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 2 — FROM CAMBODIAN SOIL TO THE WORLD
          ════════════════════════════════════════ */}
      <section id="about" className="w-full relative">
        {/* Aerial photo — full section background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/farm-aerial.jpg"
          alt="Sunrise Pepper plantation aerial view"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* White overlay — top portion fades to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent z-[1]" />

        {/* Content */}
        <div className="relative z-[2] py-20 sm:py-28 md:py-36 px-6 md:px-16 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-bark leading-snug tracking-wide">
              From Cambodian Soil to the World
            </h2>
            <p className="text-bark/60 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-[1.85] font-light">
              Our family has been farming this land since 2014 in Dang Tung district, Kampot Province — the heart of Cambodia&apos;s legendary pepper-growing region. In 2019, we took a bold step: we established Sunrise Pepper (Cambodia) Import Export Co., Ltd. not just as a brand, but as a statement.
            </p>
            {/* Gold divider */}
            <div className="w-16 h-px bg-[#c4996a]/40 mx-auto mt-8 mb-10" />
            {/* Stats — desktop: horizontal row, mobile: vertical cards */}
            <div className="hidden md:grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
              <div>
                <div className="font-body font-bold text-3xl sm:text-4xl md:text-5xl text-bark leading-none">16</div>
                <div className="font-body text-[11px] sm:text-xs text-bark/40 mt-2 tracking-wide uppercase">Hectares of land</div>
              </div>
              <div>
                <div className="font-body font-bold text-3xl sm:text-4xl md:text-5xl text-bark leading-none">10,120</div>
                <div className="font-body text-[11px] sm:text-xs text-bark/40 mt-2 tracking-wide uppercase">Pepper trees</div>
              </div>
              <div>
                <div className="font-body font-bold text-3xl sm:text-4xl md:text-5xl text-bark leading-none">4.3</div>
                <div className="font-body text-[11px] sm:text-xs text-bark/40 mt-2 tracking-wide uppercase">Hectares in production</div>
              </div>
            </div>
            {/* Mobile: vertical cards with gold accent */}
            <div className="md:hidden flex flex-col gap-4 max-w-xs mx-auto mt-2">
              <div className="bg-white rounded-lg p-5 text-center shadow-[0_4px_10px_rgba(0,0,0,0.04)] border-l-4 border-[#c4996a]">
                <div className="font-body font-bold text-4xl text-[#1E3F20] leading-none mb-1">16</div>
                <div className="font-body text-sm text-bark tracking-wide uppercase font-semibold">Hectares of Land</div>
              </div>
              <div className="bg-white rounded-lg p-5 text-center shadow-[0_4px_10px_rgba(0,0,0,0.04)] border-l-4 border-[#c4996a]">
                <div className="font-body font-bold text-4xl text-[#1E3F20] leading-none mb-1">10,120</div>
                <div className="font-body text-sm text-bark tracking-wide uppercase font-semibold">Pepper Trees</div>
              </div>
              <div className="bg-white rounded-lg p-5 text-center shadow-[0_4px_10px_rgba(0,0,0,0.04)] border-l-4 border-[#c4996a]">
                <div className="font-body font-bold text-4xl text-[#1E3F20] leading-none mb-1">4.3</div>
                <div className="font-body text-sm text-bark tracking-wide uppercase font-semibold">Hectares in Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer so the aerial photo shows below the white gradient */}
        <div className="h-48 sm:h-64 md:h-80 lg:h-96 relative z-[1]" />
      </section>

      {/* ════════════════════════════════════════
          SLIDE 3 — THE JOURNEY OF KAMPOT PEPPER
          Museum arch windows with pepper vine
          ════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(175deg, #1a1210 0%, #2a1a14 15%, #0E2A1F 40%, #0E2A1F 60%, #1a1218 80%, #0E2A1F 100%)'
        }}
      >

        {/* ── Section Header ── */}
        <div className="relative z-10 flex flex-col items-center pt-16 pb-10 md:pt-24 md:pb-14 px-6">
          {/* Sunrise Logo */}
          <div className="w-14 h-14 md:w-16 md:h-16 mb-5 relative">
            <Image src="/images/logo-icon.png" alt="Sunrise" fill className="object-contain" />
          </div>
          <h2 className="font-display text-[#C89B3C] text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-center leading-tight">
            OUR PEPPER. OUR STORY.
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-px bg-[#C89B3C]/40" />
            <svg className="w-4 h-4 text-[#C89B3C]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8 7 4 10 4 14a8 8 0 0016 0c0-4-4-7-8-12z" />
              <path d="M12 6c-2 2.5-4 4.5-4 7a4 4 0 008 0c0-2.5-2-4.5-4-7z" />
            </svg>
            <div className="w-8 h-px bg-[#C89B3C]/40" />
          </div>
        </div>

        {/* ── Pepper Vine — decorative line-art behind arches ── */}
        <svg className="absolute top-[15%] left-0 w-full h-[65%] pointer-events-none z-[1]" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          {/* Main vine stem — flows left to right across all three arches */}
          <path d="M50,300 C150,180 250,320 400,250 C500,210 550,280 700,220 C850,160 950,260 1100,200"
            stroke="#C89B3C" strokeWidth="1.2" strokeOpacity="0.12" fill="none" />
          {/* Secondary tendril */}
          <path d="M100,340 C200,260 300,370 450,310 C550,270 650,330 800,280 C900,250 1000,300 1100,260"
            stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.08" fill="none" />
          {/* Small leaves branching off */}
          <path d="M200,260 C180,230 190,200 210,180" stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.10" fill="none" />
          <path d="M400,250 C385,220 395,195 415,175" stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.10" fill="none" />
          <path d="M700,220 C685,190 695,165 715,145" stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.10" fill="none" />
          <path d="M950,250 C935,220 945,195 965,175" stroke="#C89B3C" strokeWidth="0.8" strokeOpacity="0.10" fill="none" />
          {/* Leaf shapes */}
          <ellipse cx="215" cy="178" rx="8" ry="14" transform="rotate(-20 215 178)" stroke="#C89B3C" strokeWidth="0.6" strokeOpacity="0.08" fill="#C89B3C" fillOpacity="0.04" />
          <ellipse cx="420" cy="173" rx="8" ry="14" transform="rotate(-15 420 173)" stroke="#C89B3C" strokeWidth="0.6" strokeOpacity="0.08" fill="#C89B3C" fillOpacity="0.04" />
          <ellipse cx="720" cy="143" rx="8" ry="14" transform="rotate(-20 720 143)" stroke="#C89B3C" strokeWidth="0.6" strokeOpacity="0.08" fill="#C89B3C" fillOpacity="0.04" />
          <ellipse cx="970" cy="173" rx="8" ry="14" transform="rotate(-15 970 173)" stroke="#C89B3C" strokeWidth="0.6" strokeOpacity="0.08" fill="#C89B3C" fillOpacity="0.04" />
          {/* Downward flow into story section */}
          <path d="M1100,200 C1120,280 1080,380 1000,450 C950,500 800,520 600,540 C400,560 300,550 200,560"
            stroke="#C89B3C" strokeWidth="1" strokeOpacity="0.08" fill="none" />
          {/* Small pepper berries along the vine */}
          <circle cx="300" cy="290" r="4" stroke="#C89B3C" strokeWidth="0.6" strokeOpacity="0.10" fill="#C89B3C" fillOpacity="0.05" />
          <circle cx="600" cy="240" r="4" stroke="#C89B3C" strokeWidth="0.6" strokeOpacity="0.10" fill="#C89B3C" fillOpacity="0.05" />
          <circle cx="850" cy="210" r="4" stroke="#C89B3C" strokeWidth="0.6" strokeOpacity="0.10" fill="#C89B3C" fillOpacity="0.05" />
        </svg>

        {/* ── 3 Museum Arch Windows ── */}
        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-6">

            {/* Black Pepper Arch */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full pepper-arch overflow-hidden border-2 border-[#C89B3C]/25 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)] relative">
                <Image src="/images/pepper-black.jpg" alt="Organic Kampot Black Pepper" fill className="object-cover scale-[1.8]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none" />
              </div>
              <span className="text-[#C89B3C]/60 text-[10px] tracking-[0.3em] font-medium">BLACK</span>
            </div>

            {/* White Pepper Arch */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full pepper-arch overflow-hidden border-2 border-[#C89B3C]/25 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)]">
                <Image src="/images/pepper-white.jpg" alt="Organic Kampot White Pepper" fill className="object-cover scale-150" />
              </div>
              <span className="text-[#C89B3C]/60 text-[10px] tracking-[0.3em] font-medium">WHITE</span>
            </div>

            {/* Red Pepper Arch */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-full pepper-arch overflow-hidden border-2 border-[#C89B3C]/25 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)]">
                <Image src="/images/pepper-red.jpg" alt="Organic Kampot Red Pepper" fill className="object-cover scale-125" />
              </div>
              <span className="text-[#C89B3C]/60 text-[10px] tracking-[0.3em] font-medium">RED</span>
            </div>

          </div>
        </div>

        {/* ── Gold Connection + Leaf ── */}
        <div className="relative z-10 flex flex-col items-center my-8 md:my-12">
          <div className="w-px h-10 bg-gradient-to-b from-[#C89B3C]/40 to-[#C89B3C]/15" />
          <svg className="w-5 h-5 text-[#C89B3C]/35 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2C8 7 4 10 4 14a8 8 0 0016 0c0-4-4-7-8-12z" />
          </svg>
          <div className="w-px h-8 bg-gradient-to-b from-[#C89B3C]/15 to-[#C89B3C]/35" />
        </div>

        {/* ── Story Card ── */}
        <div className="relative z-10 px-6 pb-16 md:pb-24 max-w-md mx-auto">
          <div className="relative bg-[#0E2A1F]/70 border border-[#C89B3C]/15 rounded-3xl p-7 md:p-8"
            style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
          >
            {/* Corner vine decorations */}
            <svg className="absolute bottom-3 left-3 w-16 h-16 text-[#C89B3C]/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M8 56c8-12 20-20 32-28" />
              <path d="M20 48c2-4 6-6 10-8" />
              <circle cx="42" cy="26" r="3" />
            </svg>
            <svg className="absolute bottom-3 right-3 w-16 h-16 text-[#C89B3C]/[0.06] rotate-90" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M8 56c8-12 20-20 32-28" />
              <circle cx="42" cy="26" r="3" />
            </svg>

            <h3 className="font-display text-[#C89B3C] text-xl md:text-2xl tracking-wide mb-4 text-center">
              From Cambodia to the World
            </h3>
            <p className="text-[#F7F2E8]/80 text-sm md:text-base leading-[1.9] text-center font-light">
              For too long, Cambodia&apos;s finest organic pepper has been exported through third parties — stripped of its origin, its story, and the credit that belongs to the people who grow it. We watched Kampot peppercorns leave our country, end up on shelves in Europe and America, and nobody knew they came from Cambodia. Nobody knew the hands that grew them.
            </p>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          SLIDE 4 — WHY SUNRISE EXISTS
          Premium editorial with photo fade
          ════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#121614]">

        {/* Background photo — top-right, bright pepper vine with left-to-right shadow */}
        <div className="absolute top-0 right-0 w-[75%] h-[65%] pointer-events-none">
          <Image
            src="/images/product-green.jpg"
            alt=""
            fill
            className="object-cover object-top-right"
          />
          {/* Directional shadow: dark on left (under text) → transparent on right (photo shines) */}
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(18,22,20,0.95) 25%, rgba(18,22,20,0.55) 50%, rgba(18,22,20,0) 80%)'
            }}
          />
          {/* Bottom fade to blend into section background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121614]/30 to-[#121614]" />
        </div>

        {/* ── Text Content — single column, left-aligned ── */}
        <div className="relative z-10 flex flex-col px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28 max-w-lg">

          {/* Kicker line */}
          <span className="text-[#D4AF37] text-[11px] sm:text-xs tracking-[0.25em] font-semibold uppercase mb-4">
            WE DON&apos;T JUST
          </span>

          {/* Main headline — premium serif */}
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-wide mb-6">
            export pepper.
            <br />
            We share our origin.
          </h2>

          {/* Gold divider with leaf */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#D4AF37]/40" />
            <svg className="w-4 h-4 text-[#D4AF37]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8 7 4 10 4 14a8 8 0 0016 0c0-4-4-7-8-12z" />
              <path d="M12 6c-2 2.5-4 4.5-4 7a4 4 0 008 0c0-2.5-2-4.5-4-7z" />
            </svg>
            <div className="w-12 h-px bg-[#D4AF37]/40" />
          </div>

          {/* Body paragraph 1 */}
          <p className="text-[#d4d4d4]/80 text-sm sm:text-base leading-[1.85] font-light text-left mb-5">
            For too long, Cambodia&apos;s finest organic pepper has been exported through third parties — stripped of its origin, its story, and the credit that belongs to the people who grow it.
          </p>

          {/* Body paragraph 2 — "Sunrise" highlighted in gold */}
          <p className="text-[#d4d4d4]/80 text-sm sm:text-base leading-[1.85] font-light text-left mb-10">
            That&apos;s why <span className="text-[#D4AF37] font-normal">Sunrise</span> exists. We built our own company to work directly with international buyers — to tell them where this pepper comes from, who grows it, and why it matters.
          </p>

          {/* Desktop only: additional paragraph */}
          <p className="hidden md:block text-[#d4d4d4]/70 text-base leading-[1.85] font-light text-left">
            Cambodians take great pride in Organic Kampot Pepper, widely recognized as one of the world&apos;s finest peppers due to its unique terroir, aroma, and quality. With this pride, we established <strong className="text-[#D4AF37] font-normal">Sunrise Organic Kampot Pepper</strong> to bring authentic Cambodian pepper to both local and international markets — with our name, our origin, and our story attached.
          </p>

        </div>

        {/* Floating scroll indicator — bottom-right */}
        <div className="absolute bottom-6 right-6 z-10 animate-bounce">
          <svg className="w-5 h-5 text-[#D4AF37]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>

      </section>

      {/* ════════════════════════════════════════
          SLIDE 5 — MISSION
          Editorial magazine style
          ════════════════════════════════════════ */}
      <section className="w-full bg-[#121614] relative overflow-hidden">

        {/* ── Mobile: photo edge-to-edge top, green block below, pills at corner ── */}
        <div className="md:hidden flex flex-col">
          {/* Photo — full bleed, no header, human story first */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image src="/images/mission-farmers.jpg" alt="Farmers harvesting organic Kampot pepper" fill className="object-cover" priority sizes="100vw" />
          </div>

          {/* Green text block — editorial style */}
          <div className="relative bg-[#1B2E1E] px-6 pt-7 pb-10">
            {/* Gold title — premium serif, like "From Cambodia to the World" */}
            <h3 className="font-display text-[#D4AF37] text-xl tracking-wide">
              OUR MISSION
            </h3>
            <div className="w-8 h-px bg-[#D4AF37]/30 mt-2 mb-3" />
            {/* Body — spacious, breathable */}
            <p className="text-white text-sm leading-[1.7] font-light text-left mt-3">
              It began with a simple mission: to support local farmers, especially women farmers and entrepreneurs, and to bring 100% organic, high-quality Kampot pepper to the global market.
            </p>

            {/* Pepper pills — signature badge, overlapping photo & text corner */}
            <div className="absolute -top-6 right-5 flex gap-1">
              <div className="w-8 h-[3.2rem] rounded-[999px] overflow-hidden relative border-2 border-[#1B2E1E] shadow-lg shadow-black/30">
                <Image src="/images/pepper-black.jpg" alt="Black pepper" fill className="object-cover scale-125" />
              </div>
              <div className="w-8 h-[3.2rem] rounded-[999px] overflow-hidden relative border-2 border-[#1B2E1E] shadow-lg shadow-black/30">
                <Image src="/images/pepper-white.jpg" alt="White pepper" fill className="object-cover scale-150" />
              </div>
              <div className="w-8 h-[3.2rem] rounded-[999px] overflow-hidden relative border-2 border-[#1B2E1E] shadow-lg shadow-black/30">
                <Image src="/images/pepper-red.jpg" alt="Red pepper" fill className="object-cover scale-125" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Desktop: keep quarter-circle + title + photo card + text ── */}
        <div className="hidden md:block">
          {/* Top-left quarter-circle */}
          <div className="absolute top-0 left-0 w-36 h-36 rounded-br-[100%] bg-gradient-to-br from-[#1a3a1e]/70 to-[#142e18]/50 z-5">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/sunrise-pp-logo.png" alt="Sunrise" width={80} height={90} className="w-16 h-auto opacity-90" />
            </div>
          </div>

          <div className="relative z-10 pt-24 pb-8 pl-40 pr-10">
            <h2 className="font-display text-6xl text-[#c4996a]/80">MISSION</h2>
          </div>

          <div className="relative z-10 mission-photo-wrap">
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <Image src="/images/mission-farmers.jpg" alt="Farmers harvesting organic Kampot pepper" fill className="object-cover" priority sizes="100vw" />
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-10 py-10">
            <p className="text-white text-lg leading-[1.85] text-left font-light">
              It began with a simple mission: to support local farmers, especially women farmers and entrepreneurs, and to bring 100% organic, high-quality Kampot pepper to the global market.
            </p>
          </div>

          {/* Desktop pepper pills — bottom-right */}
          <div className="absolute bottom-10 right-10 z-10 flex gap-3">
            <div className="w-16 h-28 rounded-[999px] overflow-hidden relative">
              <Image src="/images/pepper-black.jpg" alt="" fill className="object-cover scale-125" />
            </div>
            <div className="w-16 h-28 rounded-[999px] overflow-hidden relative">
              <Image src="/images/pepper-white.jpg" alt="" fill className="object-cover scale-150" />
            </div>
            <div className="w-16 h-28 rounded-[999px] overflow-hidden relative">
              <Image src="/images/pepper-red.jpg" alt="" fill className="object-cover scale-125" />
            </div>
          </div>

          {/* Bottom-right quarter-circle */}
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-[100%] bg-gradient-to-tl from-[#1a3a1e]/70 to-[#142e18]/50 z-0" />
        </div>

      </section>

      {/* ════════════════════════════════════════
          SLIDE 6 — STEPS FORWARD
          Editorial magazine style
          ════════════════════════════════════════ */}
      <section className="w-full bg-[#121614] overflow-hidden">

        {/* ── Mobile: photo first, green block below ── */}
        <div className="md:hidden flex flex-col">
          {/* Photo 1 — full bleed top */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image src="/images/workers-sorting.jpg" alt="Workers sorting fresh green pepper crop branches" fill className="object-cover" priority sizes="100vw" />
          </div>

          {/* Green text block 1 — Steps we've taken */}
          <div className="relative bg-[#1B2E1E] px-6 pt-7 pb-8">
            <h3 className="font-display text-[#D4AF37] text-xl tracking-wide">
              STEPS FORWARD
            </h3>
            <div className="w-8 h-px bg-[#D4AF37]/30 mt-2 mb-3" />
            <p className="text-white text-sm leading-[1.7] font-light text-left mb-4">
              From a small beginning, we have taken meaningful steps forward:
            </p>
            <ul className="text-white/90 text-sm leading-[1.7] space-y-2.5">
              <li className="flex items-start gap-2.5"><span className="text-[#D4AF37] mt-1 text-[6px]">◆</span> Partnering directly with local organic farmers</li>
              <li className="flex items-start gap-2.5"><span className="text-[#D4AF37] mt-1 text-[6px]">◆</span> Promoting sustainable and chemical-free farming practices</li>
              <li className="flex items-start gap-2.5"><span className="text-[#D4AF37] mt-1 text-[6px]">◆</span> Expanding into international markets</li>
              <li className="flex items-start gap-2.5"><span className="text-[#D4AF37] mt-1 text-[6px]">◆</span> Developing premium packaging that reflects Cambodian identity</li>
            </ul>
          </div>

          {/* Photo 2 — full bleed */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image src="/images/processing-workers.jpg" alt="Workers sorting pepper berries into bowls" fill className="object-cover" sizes="100vw" />
          </div>

          {/* Green text block 2 — Our strength */}
          <div className="relative bg-[#1B2E1E] px-6 pt-7 pb-10">
            <p className="text-white text-sm leading-[1.7] font-light text-left">
              Our journey proves our strength — built on authenticity, community commitment, and a passion for excellence.
            </p>
          </div>
        </div>

        {/* ── Desktop: side-by-side layout ── */}
        <div className="hidden md:block">
          <div className="flex flex-row min-h-[50vh]">
            <div className="w-1/2 relative h-80 overflow-hidden">
              <Image src="/images/workers-sorting.jpg" alt="Workers sorting fresh green pepper crop branches" fill className="object-cover" />
            </div>
            <div className="w-1/2 p-14 flex items-center">
              <div>
                <h3 className="font-display text-[#D4AF37] text-2xl tracking-wide mb-2">STEPS FORWARD</h3>
                <div className="w-10 h-px bg-[#D4AF37]/30 mb-4" />
                <p className="text-white text-lg leading-relaxed mb-4">
                  From a small beginning, we have taken meaningful steps forward:
                </p>
                <ul className="text-white/90 text-base space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Partnering directly with local organic farmers</li>
                  <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Promoting sustainable and chemical-free farming practices</li>
                  <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Expanding into international markets</li>
                  <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Developing premium packaging that reflects Cambodian identity</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row min-h-[50vh]">
            <div className="w-1/2 p-14 flex items-center">
              <p className="text-white text-lg leading-relaxed">
                Our journey proves our strength — built on authenticity, community commitment, and a passion for excellence.
              </p>
            </div>
            <div className="w-1/2 relative h-80 overflow-hidden">
              <Image src="/images/processing-workers.jpg" alt="Aerial view of workers sorting pepper berries into bowls" fill className="object-cover" />
            </div>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          CERTIFICATIONS — Unified Section
          ════════════════════════════════════════ */}
      <section id="certifications" className="w-full bg-[#0E2417] py-12 md:py-20 px-6 md:px-12 lg:px-16">
        {/* Hero Certification Image */}
        <div className="w-full rounded-3xl overflow-hidden mx-auto max-w-5xl mb-10 md:mb-14">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image src="/images/product-green-hd.jpg" alt="Fresh green Kampot pepper clusters on the vine, natural sunlight" fill className="object-cover" priority={false} sizes="(max-width: 768px) 100vw, 1024px" />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-display text-[#C8A15A] text-2xl md:text-3xl lg:text-[34px] tracking-wide mb-4">
            CERTIFIED WORLDWIDE
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A15A]/40 mx-auto mb-5" />
          <p className="text-[#F5F0E8]/80 text-sm md:text-base max-w-[75%] mx-auto leading-relaxed">
            Recognized by leading international organic and geographical indication organizations.
          </p>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-10 md:mb-14">
          {[
            {
              name: 'ECOCERT',
              logo: '/images/certs/Ecocert.png',
              fallback: 'ES',
              color: '#B71C1C',
            },
            {
              name: 'USDA Organic',
              logo: '/images/certs/usda-organic.png',
              fallback: 'USDA',
              color: '#1B5E20',
            },
            {
              name: 'EU Organic',
              logo: '/images/certs/eu-organic.png',
              fallback: 'EU',
              color: '#2E7D32',
            },
            {
              name: 'EU GI',
              logo: '/images/certs/igp.png',
              fallback: 'GI',
              color: '#1565C0',
            },
            {
              name: 'Cambodian GI',
              logo: '/images/certs/cam-gi.png',
              fallback: 'KH',
              color: '#BF360C',
            },
            {
              name: 'KPPA',
              logo: '/images/certs/kppa.png',
              fallback: 'KP',
              color: '#5D4037',
            },
          ].map((cert, i) => (
            <div
              key={i}
              className="bg-[#FAF8F2] rounded-[18px] shadow-sm flex flex-col items-center justify-center p-4 md:p-6 aspect-square md:aspect-auto md:min-h-[180px]"
            >
              {/* Logo */}
              {cert.logo ? (
                <div className="w-full flex-1 flex items-center justify-center mb-2 relative">
                  <div className="relative w-full h-full max-w-[320px] max-h-[320px]">
                    <Image src={cert.logo} alt={cert.name} fill className="object-contain" />
                  </div>
                </div>
              ) : (
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: cert.color }}
                >
                  <span className="text-white text-[9px] md:text-[10px] font-bold tracking-wider">
                    {cert.fallback}
                  </span>
                </div>
              )}
              {/* Name */}
              <span className="text-[#0E2417] font-body font-semibold text-xs md:text-sm text-center leading-tight">
                {cert.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center max-w-[85%] mx-auto">
          <div className="w-10 h-[1px] bg-[#C8A15A]/30 mx-auto mb-6" />
          <p className="text-[#F5F0E8] font-body text-sm md:text-base leading-relaxed font-medium">
            Every Sunrise product is organically certified, fully traceable, and sourced directly from Kampot, Cambodia.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          QUALITY
          ════════════════════════════════════════ */}

      {/* 1 — Hero Farm Photo with overlay */}
      <section className="relative w-full">
        <div className="relative w-full h-[35vh] md:h-[40vh]">
          <Image src="/images/farm/img-20230519-124229.jpg" alt="Pepper vines on Sunrise farm in Kampot, Cambodia" fill className="object-cover" priority={false} sizes="100vw" />
          {/* Dark green overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0D2B1E] via-[#0D2B1E]/50 to-transparent" />
          {/* Sunrise logo centered at top — premium hallmark */}
          <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-20 h-20 md:w-28 md:h-28 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <Image src="/images/logo-icon.png" alt="Sunrise" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* 2 — Section Header */}
      <section className="w-full bg-[#0D2B1E] pt-14 md:pt-20 pb-4 md:pb-6 px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[#D4B06A] text-4xl md:text-5xl lg:text-6xl tracking-[0.12em] mb-5 md:mb-6">
            QUALITY
          </h2>
          <div className="w-10 h-[1px] bg-[#D4B06A]/40 mx-auto" />
        </div>
      </section>

      {/* 3 — Intro Statement */}
      <section className="w-full bg-[#0D2B1E] pb-12 md:pb-16 px-6 md:px-12">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-[#F5F5F0] text-sm md:text-base leading-relaxed">
            Quality at Sunrise Pepper isn&apos;t a label.
            <br />
            It&apos;s a practice rooted in our soil.
          </p>
        </div>
      </section>

      {/* 4 — Three Story Cards */}
      <section className="w-full bg-[#0D2B1E] pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              image: '/images/farm/photo-2020-05-25-11-28-51.jpg',
              alt: 'Close-up of healthy pepper vines on the vine',
              title: 'ROOTED IN KAMPOT',
              text: 'Grown in the unique terroir of Dang Tung, where rich soil, coastal breezes and seasonal rains create exceptional pepper.',
            },
            {
              image: '/images/farm/img-20230519-124423.jpg',
              alt: 'Sunrise farmer harvesting pepper on the farm',
              title: '100% CERTIFIED ORGANIC',
              text: 'No synthetic fertilizers. No chemical pesticides. Only certified organic farming methods.',
            },
            {
              image: '/images/farm/photo-2020-05-25-11-28-42.jpg',
              alt: 'Hand sorting and selecting dried peppercorns',
              title: 'HANDCRAFTED CARE',
              text: 'Every peppercorn is harvested, selected and processed with care before reaching customers worldwide.',
            },
          ].map((block, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative w-full aspect-[4/3] mb-4 md:mb-5 overflow-hidden">
                <Image src={block.image} alt={block.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-[#D4B06A] font-body font-semibold text-xs md:text-sm tracking-[0.1em] mb-2 md:mb-3">
                {block.title}
              </h3>
              <p className="text-[#F5F5F0]/80 font-body text-sm leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Bottom Quote over Full-Width Photo */}
      <section className="relative w-full">
        <div className="relative w-full h-[40vh] md:h-[50vh]">
          {/* Pre-cropped macro of individual peppercorns */}
          <Image src="/images/pepper-black-hero.jpg" alt="Sundried black peppercorns" fill className="object-cover" priority={false} sizes="100vw" />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#0D2B1E]/60" />
          {/* Gradient fade at bottom — blends photo into deep green */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0D2B1E] via-[#0D2B1E]/80 to-transparent pointer-events-none z-[1]" />
          {/* Quote + Logo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 text-center z-[2]">
            <p className="text-[#F5F5F0] font-body text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6 md:mb-8 italic">
              &ldquo;From vine to harvest, every peppercorn reflects the care of our farmers and the character of Kampot.&rdquo;
            </p>
            <div className="w-20 h-20 md:w-28 md:h-28 relative opacity-90">
              <Image src="/images/logo-icon.png" alt="Sunrise" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR PEPPER, OUR PROMISE
          Mobile-first storytelling — authentic farm feel
          ════════════════════════════════════════ */}

      {/* ── SECTION 1 — Hero Photo ── */}
      <section className="relative w-full bg-[#0B2415]">
        <div className="relative w-full h-[280px] md:h-[350px] overflow-hidden">
          <Image src="/images/farm-vines.jpg" alt="Sunrise pepper vines on the farm" fill className="object-cover object-center" priority={false} sizes="100vw" />
          {/* Dark gradient overlay — stronger at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2415]/30 via-transparent to-[#0B2415] z-[1]" />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-[2]">
            <span className="text-[#D4B06A]/70 text-[9px] md:text-[10px] tracking-[0.3em] font-medium mb-3 md:mb-4">
              SUNRISE ORGANIC KAMPOT PEPPER
            </span>
            <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.08em] leading-[1.15]">
              OUR PEPPER,<br />OUR PROMISE
            </h2>
            <span className="text-[#D4B06A]/60 text-[10px] md:text-xs tracking-[0.2em] mt-3 md:mt-4 font-light">
              Quality You Can Trust
            </span>
          </div>
        </div>
        {/* Curved transition — SVG wave */}
        <div className="relative -mt-1 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[30px] md:h-[40px]" preserveAspectRatio="none">
            <path d="M0,40 C360,10 1080,55 1440,20 L1440,60 L0,60 Z" fill="#0B2415" />
          </svg>
        </div>
      </section>

      {/* ── SECTION 2 — Story Content + Photo Collage ── */}
      <section className="relative w-full bg-[#0B2415] pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Desktop: two-column */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text column */}
            <div className="flex flex-col">
              <div className="w-8 h-px bg-[#D4B06A]/40 mb-6" />
              <p className="text-[#F5F5F0]/85 text-base lg:text-lg leading-[1.85] font-light mb-5">
                When harvest time comes, each peppercorn is hand-picked at the right stage of ripeness — green berries for black pepper, fully red for red pepper, and mature berries for the water-retting process that creates white pepper.
              </p>
              <p className="text-[#F5F5F0]/85 text-base lg:text-lg leading-[1.85] font-light mb-5">
                After picking, berries are sorted by hand. Only the best make it through. They&apos;re then processed using traditional methods — cleaned, boiled where needed, sun-dried on our farm&apos;s drying beds, and graded.
              </p>
              <p className="text-[#F5F5F0]/85 text-base lg:text-lg leading-[1.85] font-light">
                Every batch is traceable back to our farm, our plots, and our harvest date. This is why our pepper carries both PGI and organic certification. Not because we fill out paperwork — because the pepper itself earns it.
              </p>
            </div>
            {/* Photo collage column */}
            <div className="relative flex flex-col items-center">
              {/* Main image */}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.5)]">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/images/workers-sorting.jpg" alt="Workers sorting fresh pepper on the farm" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              {/* Circular overlapping image */}
              <div className="absolute -bottom-8 -left-4 lg:-left-8 w-32 lg:w-40 h-32 lg:h-40 rounded-full overflow-hidden shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] border-4 border-[#0B2415]">
                <Image src="/images/farm/photo-2020-05-25-11-28-42.jpg" alt="Hand sorting peppercorns" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Mobile: stacked single column */}
          <div className="md:hidden flex flex-col gap-8">
            {/* Photos first on mobile */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/images/workers-sorting.jpg" alt="Workers sorting fresh pepper on the farm" fill className="object-cover" sizes="100vw" />
                </div>
              </div>
              {/* Circular overlapping */}
              <div className="absolute -bottom-6 -left-3 w-24 h-24 rounded-full overflow-hidden shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)] border-[3px] border-[#0B2415]">
                <Image src="/images/farm/photo-2020-05-25-11-28-42.jpg" alt="Hand sorting peppercorns" fill className="object-cover" />
              </div>
            </div>
            {/* Text below photos on mobile */}
            <div className="flex flex-col pt-2">
              <div className="w-6 h-px bg-[#D4B06A]/40 mb-4" />
              <p className="text-[#F5F5F0]/85 text-sm leading-[1.8] font-light mb-4">
                When harvest time comes, each peppercorn is hand-picked at the right stage of ripeness — green berries for black pepper, fully red for red pepper, and mature berries for the water-retting process that creates white pepper.
              </p>
              <p className="text-[#F5F5F0]/85 text-sm leading-[1.8] font-light mb-4">
                After picking, berries are sorted by hand. Only the best make it through. They&apos;re then processed using traditional methods — cleaned, boiled where needed, sun-dried on our farm&apos;s drying beds, and graded.
              </p>
              <p className="text-[#F5F5F0]/85 text-sm leading-[1.8] font-light">
                Every batch is traceable back to our farm, our plots, and our harvest date. This is why our pepper carries both PGI and organic certification. Not because we fill out paperwork — because the pepper itself earns it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Certification Strip ── */}
      <section className="relative w-full bg-[#0B2415] pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#D4B06A]/60 text-[9px] md:text-[10px] tracking-[0.3em] font-medium">
            CERTIFIED FOR YOUR CONFIDENCE
          </span>
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-10 md:gap-16">
            <div className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
              <Image src="/images/certs/Ecocert.png" alt="ECOCERT" fill className="object-contain" />
            </div>
            <div className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
              <Image src="/images/certs/usda-organic.png" alt="USDA Organic" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — Farm Landscape Merged with Quote ── */}
      <section className="relative w-full bg-[#0B2415]">
        {/* Farm photo emerges from background — no hard edges */}
        <div className="relative w-full h-[50vh] md:h-[55vh] overflow-hidden">
          <Image src="/images/farm/img-20230519-124229.jpg" alt="Sunrise pepper farm landscape in Kampot" fill className="object-cover" priority={false} sizes="100vw" />
          {/* Dark gradient fade from top — merges into green background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2415] via-[#0B2415]/50 to-transparent z-[1]" />
          {/* Quote centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-16 z-[2]">
            <p className="text-[#F5F5F0] font-body text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6 md:mb-8 italic">
              &ldquo;From vine to harvest,<br />
              every peppercorn reflects the care<br />
              of our farmers and the character of Kampot.&rdquo;
            </p>
            <div className="w-20 h-20 md:w-28 md:h-28 relative opacity-90">
              <Image src="/images/logo-icon.png" alt="Sunrise" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 11 — PHOTO COLLAGE
          ════════════════════════════════════════ */}
      <section className="w-full min-h-0 md:min-h-screen bg-[#0f1f10] p-4 md:p-8 lg:p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-fr md:h-full">
          <div className="rounded-xl overflow-hidden relative h-40 md:h-60 md:row-span-2">
            <Image src="/images/farm/photo-2020-05-25-11-28-38.jpg" alt="Pouring peppercorns" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden relative h-40 md:h-auto md:row-span-2">
            <Image src="/images/farm/photo-2020-05-25-11-28-51.jpg" alt="Drying peppercorns" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden relative h-40 md:h-auto md:row-span-2">
            <Image src="/images/farm/photo-2020-05-25-11-28-54.jpg" alt="Drying beds" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden relative h-40 md:h-52">
            <Image src="/images/farm/photo-2023-06-01-14-37-28.jpg" alt="Harvesting" fill className="object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden relative h-40 md:h-52">
            <Image src="/images/farm/photo-2020-05-25-11-28-45.jpg" alt="Processing" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ORGANIC KAMPOT PEPPER TYPES
          Horizontal swipe carousel — mobile-first
          ════════════════════════════════════════ */}
      <section id="pepper-types" className="relative w-full bg-[#0B2414] py-12 md:py-20 overflow-hidden">
        {/* Section Header */}
        <div className="text-center px-6 mb-8 md:mb-14">
          <h2 className="font-display text-[#D4B06A] text-2xl md:text-4xl tracking-[0.08em] leading-tight">
            Organic Kampot Pepper Types
          </h2>
          <p className="text-[#D4B06A]/50 text-xs md:text-sm tracking-[0.15em] mt-2 font-light">
            Four unique peppers. One extraordinary terroir.
          </p>
          <div className="w-12 h-px bg-[#D4B06A]/30 mx-auto mt-5" />
        </div>

        {/* Carousel */}
        <div
          ref={pepperCarouselRef}
          onScroll={pepperScrollHandler}
          className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[
            {
              name: 'Green Kampot Pepper',
              img: '/images/product-green.jpg',
              text: 'Harvested fresh during the season. Bright, vibrant and juicy with herbal notes. Popular in Cambodian cuisine and best enjoyed fresh.',
              cta: 'Discover Green Pepper',
            },
            {
              name: 'Black Kampot Pepper',
              img: '/images/product-black.jpg',
              text: 'The classic Kampot pepper. Bold aroma, rich heat and deep complexity developed through natural sun drying.',
              cta: 'Discover Black Pepper',
            },
            {
              name: 'White Kampot Pepper',
              img: '/images/product-white.jpg',
              text: 'Made from ripe berries soaked and cleaned naturally. Smooth, elegant and refined with a gentle lingering heat.',
              cta: 'Discover White Pepper',
            },
            {
              name: 'Red Kampot Pepper',
              img: '/images/product-red.jpg',
              text: 'The rarest and most prized variety. Naturally sweet, fruity and intensely aromatic with exceptional depth.',
              cta: 'Discover Red Pepper',
            },
            {
              name: 'The Sunrise Difference',
              img: '/images/farm/img-20230519-124423.jpg',
              text: 'From our farm in Kampot to kitchens around the world. Certified organic, fully traceable and proudly grown in Cambodia.',
              cta: 'Meet Our Farm',
            },
          ].map((card, i) => (
            <div
              key={card.name}
              className="flex-shrink-0 w-[82vw] sm:w-[65vw] md:w-[300px] lg:w-[320px] snap-center"
            >
              <div className="bg-[#122e18] rounded-3xl overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)] border border-[#D4B06A]/10 flex flex-col">
                {/* Image — top 55% */}
                <div className="relative w-full aspect-[4/3]">
                  <Image src={card.img} alt={card.name} fill className="object-cover" sizes="(max-width: 768px) 82vw, 320px" />
                </div>
                {/* Content — bottom 45% */}
                <div className="flex flex-col items-center text-center p-5 md:p-6 flex-1">
                  <h3 className="font-display text-[#D4B06A] text-base md:text-lg tracking-wide mb-2">
                    {card.name}
                  </h3>
                  <p className="text-[#F5F5F0]/75 text-xs md:text-sm leading-relaxed mb-4 flex-1">
                    {card.text}
                  </p>
                  <span className="text-[#D4B06A]/70 text-xs tracking-[0.12em] font-medium">
                    {card.cta} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => {
                const el = pepperCarouselRef.current;
                if (!el) return;
                const card = el.children[i];
                if (card) {
                  card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
              }}
              className={`rounded-full transition-all duration-300 ${
                activePepperCard === i
                  ? 'w-6 h-2 bg-[#D4B06A]'
                  : 'w-2 h-2 bg-[#D4B06A]/30 hover:bg-[#D4B06A]/50'
              }`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        {/* Discover Our Spices CTA */}
        <div className="flex justify-center mt-10 mb-6">
          <button
            onClick={openSpices}
            className="group inline-flex items-center gap-3 px-10 py-4 border border-[#D4B06A]/40 hover:border-[#D4B06A]/80 rounded-[999px] text-[#D4B06A] text-sm tracking-[0.12em] font-medium transition-all duration-300 hover:bg-[#D4B06A]/5 hover:shadow-[0_0_30px_rgba(212,176,106,0.08)]"
          >
            Discover Our Spices
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR SPICES — Product Gallery
          Hidden by default, revealed on Discover click
          ════════════════════════════════════════ */}
      {showSpices && (
      <div ref={spiceSectionRef}>
      <section className="relative w-full bg-[#0B2414] py-16 md:py-24 overflow-hidden animate-fade-up">
        {/* Subtle top gradient transition from products */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4B06A]/20 to-transparent" />

        {/* Hero */}
        <div className="text-center px-6 mb-10 md:mb-16 animate-fade-up">
          <h2 className="font-display text-[#D4B06A] text-3xl md:text-5xl tracking-[0.08em] leading-tight">
            OUR SPICES
          </h2>
          <p className="text-[#F5F5F0]/60 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Beyond Kampot Pepper, discover the authentic flavors of Cambodia.
          </p>
          <div className="w-16 h-px bg-[#D4B06A]/30 mx-auto mt-6" />
        </div>

        {/* Product Gallery — Mobile carousel */}
        <div
          ref={spiceCarouselRef}
          onScroll={spiceScrollHandler}
          className="flex gap-5 md:hidden overflow-x-auto snap-x snap-mandatory px-6 pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[
            { name: 'Black Pepper 50g', img: '/images/spices/black50g50g.png', text: 'Bold aroma and rich heat. Premium whole black Kampot peppercorns.' },
            { name: 'Red Pepper 50g', img: '/images/spices/red50g.png', text: 'Naturally sweet with fruity notes. The rarest Kampot variety.' },
            { name: 'White Pepper 50g', img: '/images/spices/white50g.png', text: 'Smooth, delicate and refined. Perfect for soups and seafood.' },
            { name: 'Black Pepper 250g', img: '/images/spices/black250g.png', text: 'Family size. The classic Kampot pepper for everyday cooking.' },
            { name: 'White Pepper 250g', img: '/images/spices/white250g.png', text: 'Premium 250g pouch. Elegant and refined flavour.' },
            { name: 'Red Pepper 250g', img: '/images/spices/red250g.png', text: 'Large format. Intensely aromatic with exceptional depth.' },
            { name: 'Set 30g with Grinder', img: '/images/spices/set30g.png', text: 'Black, White & Red with wooden grinder. The perfect tasting set.' },
            { name: 'Full Set 30g', img: '/images/spices/fullset30g.png', text: 'Three glass tubes — Black, White & Red — in a premium gift box.' },
            { name: 'Gift Set 50g', img: '/images/spices/set50g.png', text: '50g of each variety. Presented in a decorative gift box.' },
            { name: 'Premium Gift Set 250g', img: '/images/spices/set250g.png', text: '250g of each variety in a woven basket with flowers.' },
            { name: 'Bouquet Gift', img: '/images/spices/bouquetflower.png', text: 'Luxury floral arrangement with Kampot pepper selection.' },
          ].map((card, i) => (
            <div key={card.name} className="flex-shrink-0 w-[82vw] snap-center">
              <div className="group bg-[#122e18] rounded-[20px] overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)] border border-[#D4B06A]/10 flex flex-col transition-transform duration-300 hover:-translate-y-1 active:scale-[0.98]">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={card.img} alt={card.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="82vw" />
                </div>
                <div className="flex flex-col items-center text-center p-5 flex-1">
                  <h3 className="font-display text-[#D4B06A] text-base tracking-wide mb-2">{card.name}</h3>
                  <p className="text-[#F5F5F0]/70 text-xs leading-relaxed mb-4 flex-1">{card.text}</p>
                  <span className="group/cta inline-flex items-center gap-1.5 px-5 py-2 border border-[#D4B06A]/30 hover:border-[#D4B06A]/70 rounded-[999px] text-[#D4B06A] text-xs tracking-[0.1em] font-medium transition-all duration-300 hover:bg-[#D4B06A]/5">
                    Discover
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid grid-cols-4 gap-6 px-10 lg:px-16 max-w-7xl mx-auto">
          {[
            { name: 'Black Pepper 50g', img: '/images/spices/black50g50g.png', text: 'Bold aroma and rich heat. Premium whole black Kampot peppercorns.' },
            { name: 'Red Pepper 50g', img: '/images/spices/red50g.png', text: 'Naturally sweet with fruity notes. The rarest Kampot variety.' },
            { name: 'White Pepper 50g', img: '/images/spices/white50g.png', text: 'Smooth, delicate and refined. Perfect for soups and seafood.' },
            { name: 'Black Pepper 250g', img: '/images/spices/black250g.png', text: 'Family size. The classic Kampot pepper for everyday cooking.' },
            { name: 'White Pepper 250g', img: '/images/spices/white250g.png', text: 'Premium 250g pouch. Elegant and refined flavour.' },
            { name: 'Red Pepper 250g', img: '/images/spices/red250g.png', text: 'Large format. Intensely aromatic with exceptional depth.' },
            { name: 'Set 30g with Grinder', img: '/images/spices/set30g.png', text: 'Black, White & Red with wooden grinder. The perfect tasting set.' },
            { name: 'Full Set 30g', img: '/images/spices/fullset30g.png', text: 'Three glass tubes — Black, White & Red — in a premium gift box.' },
            { name: 'Gift Set 50g', img: '/images/spices/set50g.png', text: '50g of each variety. Presented in a decorative gift box.' },
            { name: 'Premium Gift Set 250g', img: '/images/spices/set250g.png', text: '250g of each variety in a woven basket with flowers.' },
            { name: 'Bouquet Gift', img: '/images/spices/bouquetflower.png', text: 'Luxury floral arrangement with Kampot pepper selection.' },
          ].map((card, idx) => (
            <div key={card.name} className="group animate-fade-up-stagger" style={{ animationDelay: `${idx * 80}ms` }}>
              <div className="bg-[#122e18] rounded-[20px] overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)] border border-[#D4B06A]/10 flex flex-col transition-transform duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={card.img} alt={card.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="flex flex-col items-center text-center p-5 flex-1">
                  <h3 className="font-display text-[#D4B06A] text-sm tracking-wide mb-2">{card.name}</h3>
                  <p className="text-[#F5F5F0]/70 text-xs leading-relaxed mb-4 flex-1">{card.text}</p>
                  <span className="group/cta inline-flex items-center gap-1.5 px-5 py-2 border border-[#D4B06A]/30 hover:border-[#D4B06A]/70 rounded-[999px] text-[#D4B06A] text-xs tracking-[0.1em] font-medium transition-all duration-300 hover:bg-[#D4B06A]/5">
                    Discover
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover/cta:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots (mobile only) */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <button
              key={i}
              onClick={() => {
                const el = spiceCarouselRef.current;
                if (!el) return;
                const card = el.children[i];
                if (card) {
                  card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
              }}
              className={`rounded-full transition-all duration-300 ${
                activeSpiceCard === i
                  ? 'w-6 h-2 bg-[#D4B06A]'
                  : 'w-2 h-2 bg-[#D4B06A]/30 hover:bg-[#D4B06A]/50'
              }`}
              aria-label={`Go to spice card ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Bottom Banner ── */}
        <div className="relative w-full mt-16 md:mt-20 overflow-hidden">
          <div className="relative w-full h-[280px] md:h-[360px]">
            <Image
              src="/images/farm-aerial.jpg"
              alt="Sunrise Organic Kampot Pepper Farm aerial view"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-[#0a1a0d]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2414] via-transparent to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <h3 className="font-display text-[#F5F5F0] text-2xl md:text-4xl tracking-[0.06em] leading-tight max-w-2xl">
              Authentic Kampot Pepper. Crafted for the World.
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
              <a
                href="#products"
                className="px-8 py-3.5 bg-[#D4B06A] hover:bg-[#c4996a] text-[#0B2414] rounded-full text-sm font-semibold tracking-[0.08em] transition-colors duration-300"
              >
                View All Products
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-[#F5F5F0]/40 hover:border-[#F5F5F0]/70 text-[#F5F5F0] rounded-full text-sm font-medium tracking-[0.08em] transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
      )}

      {/* ════════════════════════════════════════
          CONTACT
          ════════════════════════════════════════ */}
      <section id="contact" className="w-full bg-[#0B2414]">
        {/* ── Hero Photo ── */}
        <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden">
          <Image
            src="/images/farm/img-3137.jpg"
            alt="Sunrise Organic Kampot Pepper Farm"
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority={false}
          />
          {/* Dark gradient fade at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2414] via-[#0B2414]/40 to-transparent" />
          {/* Rounded bottom corners mask */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#0B2414] rounded-t-[32px]" />
        </div>

        {/* ── Title Area ── */}
        <div className="px-6 pt-10 pb-8 text-center">
          <p className="text-[#D4B06A] text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-[26px] md:text-4xl text-[#F5F5F0] mb-4 leading-tight">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-white/60 text-[15px] md:text-base max-w-md mx-auto leading-relaxed">
            Questions about our pepper, wholesale orders, or partnerships? We&apos;re here to help.
          </p>
        </div>

        {/* ── Primary Action Buttons ── */}
        <div className="px-6 space-y-3 mb-8">
          <a
            href="https://wa.me/85570735889"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white rounded-2xl text-[16px] font-medium transition-colors shadow-lg shadow-[#25D366]/20"
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href="https://maps.google.com/?q=Sunrise+Organic+Kampot+Pepper+Kok+Kleang+Sen+Sok+Phnom+Penh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 border-2 border-[#D4B06A]/60 hover:border-[#D4B06A] active:border-[#D4B06A] text-[#D4B06A] rounded-2xl text-[16px] font-medium transition-colors"
          >
            {/* Location Icon */}
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Visit Our Office
          </a>
        </div>

        {/* ── Contact Information Card ── */}
        <div className="px-6 mb-8">
          <div className="bg-white/[0.06] rounded-3xl px-6 py-6 space-y-0 border border-white/[0.08]">
            {/* Phone */}
            <div className="flex items-start py-4">
              <span className="text-[#D4B06A] text-lg mr-4 mt-0.5">📞</span>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Phone</p>
                <a href="tel:+85581230730" className="text-[#F5F5F0] text-base hover:text-[#D4B06A] transition-colors">
                  +855 81 230 730
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#D4B06A]/15" />

            {/* WhatsApp */}
            <div className="flex items-start py-4">
              <span className="text-[#D4B06A] text-lg mr-4 mt-0.5">📱</span>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-1">WhatsApp</p>
                <a href="https://wa.me/85570735889" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F0] text-base hover:text-[#D4B06A] transition-colors">
                  +855 70 735 889
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#D4B06A]/15" />

            {/* Email */}
            <div className="flex items-start py-4">
              <span className="text-[#D4B06A] text-lg mr-4 mt-0.5">📧</span>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Email</p>
                <a href="mailto:anitakang88@yahoo.com.au" className="text-[#F5F5F0] text-base hover:text-[#D4B06A] transition-colors break-all">
                  anitakang88@yahoo.com.au
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#D4B06A]/15" />

            {/* Address */}
            <div className="flex items-start py-4">
              <span className="text-[#D4B06A] text-lg mr-4 mt-0.5">📍</span>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-1">Address</p>
                <p className="text-[#F5F5F0] text-[15px] leading-relaxed">
                  #02, St 09, Kok Kleang<br />
                  Sen Sok, Phnom Penh<br />
                  Cambodia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Social Section ── */}
        <div className="px-6 pb-12">
          <a
            href="https://www.facebook.com/share/1HNr9whfpQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 bg-white/[0.06] hover:bg-white/[0.1] active:bg-white/[0.14] text-[#F5F5F0] rounded-2xl text-[15px] font-medium transition-colors border border-white/[0.08]"
          >
            {/* Facebook Icon */}
            <svg className="w-5 h-5 mr-3 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Sunrise Organic Kampot Pepper
          </a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#0f1f10] border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span className="font-display text-white/60">Sunrise Pepper</span>
          <span>Dang Tung, Kampot Province, Cambodia</span>
          <span>© {new Date().getFullYear()} Sunrise Pepper (Cambodia) Import Export Co., Ltd.</span>
        </div>
      </footer>
    </div>
  );
}

