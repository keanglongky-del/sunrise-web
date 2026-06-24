'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

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
            <a href="#products" className="hover:text-[#c4996a] transition-colors duration-300">Product</a>
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
            {['About Us|about', 'Certification|certifications', 'Product|products', 'Contact|contact'].map(item => {
              const [label, id] = item.split('|');
              return (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                  className="block py-3 text-white/90 text-lg tracking-[0.08em] border-b border-white/8 hover:text-[#c4996a] transition-colors">
                  {label}
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
        <Image
          src="/images/farm-aerial.jpg"
          alt="Sunrise Pepper plantation aerial view"
          fill
          className="object-cover object-center"
          priority
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
              <div className="w-full pepper-arch overflow-hidden border-2 border-[#C89B3C]/25 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)]">
                <Image src="/images/pepper-black.jpg" alt="Organic Kampot Black Pepper" fill className="object-cover scale-125" />
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
              className="bg-[#FAF8F2] rounded-[18px] shadow-sm flex flex-col items-center justify-center p-4 md:p-6 aspect-square md:aspect-auto md:min-h-[160px]"
            >
              {/* Logo */}
              {cert.logo ? (
                <div className="w-full flex-1 flex items-center justify-center mb-2 relative">
                  <div className="relative w-full h-full max-w-[130px] max-h-[130px]">
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
      {/* Section 1 — Hero Farm Photo */}
      <section className="w-full bg-[#0E2417]">
        <div className="relative w-full h-[50vh]">
          <Image src="/images/farm/img-20230519-124229.jpg" alt="Pepper vines growing in Kampot" fill className="object-cover" priority={false} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2417] via-transparent to-transparent" />
        </div>
      </section>

      {/* Section 2 — Quality Introduction */}
      <section className="w-full bg-[#0E2417] py-16 md:py-24 px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-[#D4B06A] text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] mb-6 md:mb-8">
            QUALITY
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed font-medium">
            Quality at Sunrise Pepper isn&apos;t a label.
            <br className="hidden sm:block" />
            <span className="inline sm:hidden"> </span>It&apos;s a practice rooted in our soil.
          </p>
        </div>
      </section>

      {/* Section 3 — Story Blocks */}
      <section className="w-full bg-[#0E2417] pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              image: '/images/farm/photo-2020-05-25-11-28-51.jpg',
              alt: 'Close-up pepper vine',
              title: 'ROOTED IN KAMPOT',
              text: 'Grown in the unique terroir of Dang Tung, where rich soil, coastal breezes and seasonal rains create exceptional pepper.',
            },
            {
              image: '/images/farm/img-20230519-124423.jpg',
              alt: 'Hand-harvesting pepper',
              title: 'HAND-HARVESTED',
              text: 'Every cluster is picked at peak ripeness by experienced farmers who have tended these vines for generations.',
            },
            {
              image: '/images/farm/img-20230519-123636.jpg',
              alt: 'Organic farm practices',
              title: 'CERTIFIED ORGANIC',
              text: 'No synthetic fertilizers, no chemicals. Only certified organic methods that protect the soil and deliver pure flavor.',
            },
          ].map((block, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative w-full aspect-[4/3] mb-4 md:mb-5 overflow-hidden">
                <Image src={block.image} alt={block.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-[#D4B06A] font-body font-semibold text-sm md:text-base tracking-[0.08em] mb-2 md:mb-3">
                {block.title}
              </h3>
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 10 — HAND-PICKED PROCESS
          ════════════════════════════════════════ */}
      <section className="w-full min-h-0 md:min-h-screen bg-[#0f1f10] relative overflow-hidden">
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4a8c5c] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
              <path d="M10 2C10 2 6 6 6 10C6 12.2 7.8 14 10 14C12.2 14 14 12.2 14 10C14 6 10 2 10 2Z"/>
            </svg>
          </div>
          <span className="text-white text-[10px] md:text-xs tracking-[0.2em]">SUNRISE ORGANIC KAMPOT PEPPER</span>
        </div>
        <div className="absolute top-14 left-10 md:top-20 md:left-16 pointer-events-none">
          <div className="absolute w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#4a8c5c]/22" />
          <div className="absolute w-10 md:w-14 h-10 md:h-14 rounded-full bg-[#4a8c5c]/16 translate-x-4 translate-y-3" />
          <div className="absolute w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#4a8c5c]/10 translate-x-8 translate-y-6" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row min-h-0 md:min-h-screen">
          <div className="w-full md:w-1/2 p-8 md:p-14 pt-24 md:pt-28 flex flex-col justify-center">
            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed mb-5 md:mb-6">
              When harvest time comes, each peppercorn is hand-picked at the right stage of ripeness — green berries for black pepper, fully red for red pepper, and mature berries for the water-retting process that creates white pepper. After picking, berries are sorted by hand. Only the best make it through. They&apos;re then processed using traditional methods — cleaned, boiled where needed, sun-dried on our farm&apos;s drying beds, and graded.
            </p>
            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
              Every batch is traceable back to our farm, our plots, and our harvest date. This is why our pepper carries both PGI and organic certification. Not because we fill out paperwork — because the pepper itself earns it.
            </p>
          </div>

          {/* Desktop: right side images */}
          <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-0 hidden md:block">
            {/* Large circle top */}
            <div className="absolute top-16 right-4 w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-64 rounded-full overflow-hidden">
              <Image src="/images/farm/photo-2020-05-25-11-28-42.jpg" alt="Processing" fill className="object-cover" />
            </div>
            {/* Small circle */}
            <div className="absolute top-64 right-12 w-24 md:w-32 lg:w-36 h-24 md:h-32 lg:h-36 rounded-full overflow-hidden">
              <Image src="/images/farm-vines.jpg" alt="Pepper vine" fill className="object-cover" />
            </div>
            {/* Large curved image bottom */}
            <div className="absolute bottom-0 right-0 w-3/4 h-36 md:h-48 lg:h-60" style={{ borderTopLeftRadius: '30%' }}>
              <Image src="/images/farm/photo-2020-05-25-11-28-48.jpg" alt="Hand-sorting" fill className="object-cover" />
            </div>
          </div>

          {/* Mobile: show images below text */}
          <div className="md:hidden relative h-64 mb-8 rounded-xl overflow-hidden">
            <Image src="/images/farm/photo-2020-05-25-11-28-48.jpg" alt="Hand-sorting pepper" fill className="object-cover" />
          </div>
          <div className="md:hidden relative h-52 rounded-xl overflow-hidden">
            <Image src="/images/farm/photo-2020-05-25-11-28-42.jpg" alt="Processing pepper" fill className="object-cover" />
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
          SLIDE 12 — ORGANIC KAMPOT PEPPER TYPES
          ════════════════════════════════════════ */}
      <section id="products" className="w-full min-h-screen bg-[#0f1f10] py-12 md:py-20 px-4 md:px-10 lg:px-16">
        <h2 className="font-display text-2xl md:text-4xl text-[#81C784] mb-10 md:mb-14">ORGANIC KAMPOT PEPPER TYPES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              name: 'Green Kampot Pepper',
              img: '/images/product-green.jpg',
              desc: 'Fresh green peppercorns are a seasonal thing. We harvest them every year between April and May, still on the vine, still full of moisture. Most people around here fry them fresh with pork or seafood — that\'s when they\'re at their best. They don\'t last long once picked, so if you want them, you come during harvest. We also pickle them in salt or brine to hold them a bit longer.',
            },
            {
              name: 'Black Kampot Pepper',
              img: '/images/product-black.jpg',
              desc: 'This is the one most people know. We pick the berries when they\'re fully grown but still green, then lay them out in the sun to dry. The heat builds as they darken. What comes out is a strong, deep pepper with a complexity that\'s hard to find anywhere else — it\'s the taste that put Kampot on the map, going all the way back to the French colonial era. It\'s the backbone of our farm.',
            },
            {
              name: 'White Kampot Pepper',
              img: '/images/product-white.jpg',
              desc: 'To make white pepper, we take the ripe red berries and soak them in water for two days. That breaks down the outer skin and flesh, leaving just the seed inside — naturally white. Chefs love this one for delicate dishes because it brings warmth and a gentle piperine kick without the heavier fruit notes of our black or red pepper. It wakes up the dish without taking over.',
            },
            {
              name: 'Red Kampot Pepper',
              img: '/images/product-red.jpg',
              desc: 'Red pepper comes from berries we leave on the vine until they turn fully red — that\'s when the flavor peaks. We dry them slow and careful to hold onto that sweet, fruity heat. It\'s the most prized variety we grow, and honestly, the one our farmers are proudest of. You won\'t find this flavor profile anywhere else on earth.',
            },
          ].map((pepper) => (
            <div key={pepper.name} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative mb-4 md:mb-5 flex-shrink-0">
                <Image src={pepper.img} alt={pepper.name} fill className="object-cover" />
              </div>
              <h3 className="text-white font-body font-bold text-sm md:text-base mb-2 md:mb-3">{pepper.name}</h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-[260px] md:max-w-[280px]">{pepper.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTACT
          ════════════════════════════════════════ */}
      <section id="contact" className="w-full py-16 md:py-24 px-6 bg-[#0f1f10]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#81C784] text-sm tracking-[0.2em] uppercase mb-4">Contact</p>
          <h2 className="font-display text-2xl md:text-4xl text-white mb-6">Interested in working with us?</h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            We work directly with international buyers, distributors, and partners. Reach out and let&apos;s talk.
          </p>
          <a href="mailto:info@sunrisepepper.com"
            className="inline-block bg-[#4a8c5c] hover:bg-[#3d7a4a] text-white font-medium px-8 py-3 rounded-full transition-colors">
            Get in Touch
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

