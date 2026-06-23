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
          SLIDE 3 — THREE PEPPERCORN COLORS + STORY
          ════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0f1f10]">
        <div className="relative w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex items-center justify-center h-auto md:h-[85vh]">

          {/* Three pill-shaped pepper panels */}
          <div className="relative w-full flex items-center justify-center h-[45vh] md:h-full">
            {/* Black pepper — left */}
            <div className="absolute left-[5%] md:left-[8%] w-[28%] md:w-[22%] aspect-[3/7] rounded-[999px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
              <Image src="/images/pepper-black.jpg" alt="Black Kampot Pepper" fill className="object-cover scale-125" />
            </div>

            {/* White pepper — center */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[28%] md:w-[22%] aspect-[3/7] rounded-[999px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
              <Image src="/images/pepper-white.jpg" alt="White Kampot Pepper" fill className="object-cover scale-150" />
            </div>

            {/* Red pepper — right */}
            <div className="absolute right-[5%] md:right-[8%] w-[28%] md:w-[22%] aspect-[3/7] rounded-[999px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
              <Image src="/images/pepper-red.jpg" alt="Red Kampot Pepper" fill className="object-cover scale-125" />
            </div>

            {/* Desktop: Green story card — overlapping center */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[60%] lg:w-[55%] bg-[#3d7a4a] rounded-3xl p-6 lg:p-7 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6)]">
              <p className="text-white text-base lg:text-lg leading-relaxed text-justify">
                For too long, Cambodia&apos;s finest organic pepper has been exported through third parties — stripped of its origin, its story, and the credit that belongs to the people who grow it. We watched Kampot peppercorns leave our country, end up on shelves in Europe and America, and nobody knew they came from Cambodia. Nobody knew the hands that grew them.
              </p>
            </div>
          </div>

          {/* Mobile: Green story card — below the pills */}
          <div className="md:hidden w-[85%] bg-[#3d7a4a] rounded-2xl p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] mt-4 mb-8">
            <p className="text-white text-sm leading-relaxed text-justify">
              For too long, Cambodia&apos;s finest organic pepper has been exported through third parties — stripped of its origin, its story, and the credit that belongs to the people who grow it. We watched Kampot peppercorns leave our country, end up on shelves in Europe and America, and nobody knew they came from Cambodia. Nobody knew the hands that grew them.
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 4 — WHY SUNRISE EXISTS
          ════════════════════════════════════════ */}
      <section className="w-full min-h-screen bg-[#0f1f10] flex flex-col md:flex-row">
        {/* Left: Gold illustration */}
        <div className="w-full md:w-[38%] flex items-center justify-center p-8 md:p-10 relative">
          <img src="/images/sunrise-logo1.png" alt="Sunrise Pepper logo" className="w-full max-w-[280px] md:max-w-[320px] opacity-90" />
        </div>

        {/* Center: Photo strip — hidden on mobile */}
        <div className="hidden md:block w-[10%] relative">
          <Image src="/images/product-green.jpg" alt="Pepper plant" fill className="object-cover" />
        </div>

        {/* Mobile: Photo strip visible — cropped with rounded corners */}
        <div className="md:hidden w-[85%] max-w-[380px] h-[22vh] relative overflow-hidden mx-auto rounded-2xl mt-2">
          <Image src="/images/product-green.jpg" alt="Pepper plant" fill className="object-cover" />
        </div>

        {/* Right: Text — hidden on mobile, separate block below */}
        <div className="hidden md:block w-[50%] p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-white text-base md:text-lg leading-[1.85] mb-6 text-justify font-light">
              That&apos;s why <strong className="text-white font-normal">Sunrise</strong> exists. We built our own company to work directly with international buyers — to tell them where this pepper comes from, who grew it, and what makes it unlike anything else on earth. We want the world to know that Cambodian people are capable of standing in the international market on our own terms.
            </p>
            <p className="text-white text-base md:text-lg leading-[1.85] text-justify font-light">
              Cambodians take great pride in Organic Kampot Pepper, widely recognized as one of the world&apos;s finest peppers due to its unique terroir, aroma, and quality. With this pride, we established <strong className="text-white font-normal">Sunrise Organic Kampot Pepper</strong> to bring authentic Cambodian pepper to both local and international markets — with our name, our origin, and our story attached.
            </p>
          </div>
        </div>

        {/* Mobile: Text below with more spacing */}
        <div className="md:hidden w-full px-8 pb-10 mt-8">
          <p className="text-white text-base leading-[1.85] mb-5 text-justify font-light">
            That&apos;s why <strong className="text-white font-normal">Sunrise</strong> exists. We built our own company to work directly with international buyers — to tell them where this pepper comes from, who grew it, and what makes it unlike anything else on earth. We want the world to know that Cambodian people are capable of standing in the international market on our own terms.
          </p>
          <p className="text-white text-base leading-[1.85] text-justify font-light">
            Cambodians take great pride in Organic Kampot Pepper, widely recognized as one of the world&apos;s finest peppers due to its unique terroir, aroma, and quality. With this pride, we established <strong className="text-white font-normal">Sunrise Organic Kampot Pepper</strong> to bring authentic Cambodian pepper to both local and international markets — with our name, our origin, and our story attached.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 5 — MISSION
          ════════════════════════════════════════ */}
      <section className="w-full min-h-screen bg-[#0f1f10] relative overflow-hidden">

        {/* Top-left quarter-circle — half size of hero */}
        <div className="absolute top-0 left-0 w-20 md:w-36 h-20 md:h-36 rounded-br-[100%] bg-gradient-to-br from-[#1a3a1e]/70 to-[#142e18]/50 z-5">
          {/* Logo centered inside quarter-circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/sunrise-pp-logo.png" alt="Sunrise" width={80} height={90} className="w-10 md:w-16 h-auto opacity-90" />
          </div>
        </div>

        {/* Title — upper-left */}
        <div className="relative z-10 pt-20 md:pt-24 pb-6 md:pb-8 pl-8 md:pl-40 pr-6 md:pr-10">
          <h2 className="font-display text-4xl md:text-6xl text-[#c4996a]/80">MISSION</h2>
        </div>

        {/* Main photo — square full-width on mobile, text overlay with glass */}
        <div className="relative z-10 mission-photo-wrap">
          <div className="relative w-full aspect-square md:h-80 md:aspect-auto overflow-hidden">
            <Image src="/images/mission-farmers.jpg" alt="Farmers harvesting organic Kampot pepper" fill className="object-cover" priority sizes="100vw" />
            {/* Green glass text overlay — mobile only */}
            <div className="absolute inset-0 flex items-center justify-center p-6 md:hidden">
              <div className="bg-[rgba(30,63,32,0.75)] backdrop-blur-[4px] rounded-xl p-6 max-w-[85%]">
                <p className="text-white text-base leading-[1.85] font-light">
                  It began with a simple mission: to support local farmers, especially women farmers and entrepreneurs, and to bring 100% organic, high-quality Kampot pepper to the global market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission text — desktop only (below image) */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-10 hidden md:block">
          <p className="text-white text-base md:text-lg leading-[1.85] text-left font-light">
            It began with a simple mission: to support local farmers, especially women farmers and entrepreneurs, and to bring 100% organic, high-quality Kampot pepper to the global market.
          </p>
          {/* Mobile: pepper pills centered below text */}
          <div className="flex sm:hidden gap-2 mt-10 justify-center">
            <div className="w-10 h-16 rounded-[999px] overflow-hidden relative">
              <Image src="/images/pepper-black.jpg" alt="" fill className="object-cover scale-125" />
            </div>
            <div className="w-10 h-16 rounded-[999px] overflow-hidden relative">
              <Image src="/images/pepper-white.jpg" alt="" fill className="object-cover scale-150" />
            </div>
            <div className="w-10 h-16 rounded-[999px] overflow-hidden relative">
              <Image src="/images/pepper-red.jpg" alt="" fill className="object-cover scale-125" />
            </div>
          </div>
        </div>

        {/* Bottom-right pill pepper images — desktop: absolute, mobile: inline below text */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 hidden sm:flex gap-2 md:gap-3">
          <div className="w-10 md:w-16 h-16 md:h-28 rounded-[999px] overflow-hidden relative">
            <Image src="/images/pepper-black.jpg" alt="" fill className="object-cover scale-125" />
          </div>
          <div className="w-10 md:w-16 h-16 md:h-28 rounded-[999px] overflow-hidden relative">
            <Image src="/images/pepper-white.jpg" alt="" fill className="object-cover scale-150" />
          </div>
          <div className="w-10 md:w-16 h-16 md:h-28 rounded-[999px] overflow-hidden relative">
            <Image src="/images/pepper-red.jpg" alt="" fill className="object-cover scale-125" />
          </div>
        </div>

        {/* Bottom-right quarter-circle — transparent like top-left */}
        <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 rounded-tl-[100%] bg-gradient-to-tl from-[#1a3a1e]/70 to-[#142e18]/50 z-0" />
      </section>

      {/* ════════════════════════════════════════
          SLIDE 6 — STEPS FORWARD
          ════════════════════════════════════════ */}
      <section className="w-full bg-[#0f1f10] overflow-hidden">
        {/* Top: photo left, text right */}
        <div className="flex flex-col md:flex-row min-h-[50vh]">
          <div className="w-full md:w-1/2 relative h-64 md:h-80 overflow-hidden">
            <Image src="/images/workers-sorting.jpg" alt="Workers sorting fresh green pepper crop branches" fill className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-14 flex items-center">
            <div>
              <p className="text-white text-base md:text-lg leading-relaxed mb-4">
                From a small beginning, we have taken meaningful steps forward:
              </p>
              <ul className="text-white/90 text-sm md:text-base space-y-2 font-body">
                <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Partnering directly with local organic farmers</li>
                <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Promoting sustainable and chemical-free farming practices</li>
                <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Expanding into international markets</li>
                <li className="flex items-start gap-2"><span className="text-[#4a8c5c] mt-0.5">•</span> Developing premium packaging that reflects Cambodian identity</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom: text left, photo right */}
        <div className="flex flex-col md:flex-row min-h-[50vh]">
          <div className="w-full md:w-1/2 p-8 md:p-14 flex items-center order-2 md:order-1">
            <p className="text-white text-base md:text-lg leading-relaxed">
              Our journey proves our strength — built on authenticity, community commitment, and a passion for excellence.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-64 md:h-80 overflow-hidden order-1 md:order-2">
            <Image src="/images/processing-workers.jpg" alt="Aerial view of workers sorting pepper berries into bowls" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 7 — CERTIFICATIONS (4 pills)
          ════════════════════════════════════════ */}
      <section id="certifications" className="w-full min-h-0 md:min-h-screen bg-[#0f1f10] flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 hidden md:flex items-center justify-center p-6 md:p-8">
          <div className="w-36 md:w-48 h-80 md:h-[500px] rounded-[999px] overflow-hidden relative">
            <Image src="/images/product-green.jpg" alt="Green peppercorns on vine" fill className="object-cover" />
          </div>
        </div>
        <div className="w-full md:w-3/5 p-6 md:p-10 lg:p-12 flex flex-col justify-center gap-3 md:gap-4 md:pl-8">
          <h3 className="text-white text-base md:text-xl font-body font-medium mb-1 md:mb-2">
            SUNRISE is 100% certified by International Organisations
          </h3>
          {[
            { name: 'ECOCERT S.A.', text: 'Organic certification organization founded in 1991, is based in Europe but conducts inspections in over 80 countries, making it one of the largest organic certification organizations in the world.', color: 'bg-red-700' },
            { name: 'EU Organic', text: 'ECOCERT S.A. offers certification of corporate activities according to EC regulations 834/2007, 889/2008 and 1235/2008 relative to organic farming in the European Union.', color: 'bg-green-600' },
            { name: 'USDA Organic', text: 'USDA Organic is the certification of the United State Department of Agriculture. This certification controls the compliance of the company with the USDA organic regulations.', color: 'bg-green-700' },
            { name: 'KPPA', text: 'Kampot Pepper Promotion Association (KPPA) The KPPA is the organisation that regulates, controls and certifies Kampot Pepper production.', color: 'bg-amber-800' },
          ].map((cert, i) => (
            <div key={i} className="bg-[#5a7a50] rounded-2xl md:rounded-[999px] px-4 md:px-6 py-3 md:py-4 flex items-start gap-3 md:gap-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${cert.color} flex items-center justify-center flex-shrink-0 text-white text-[7px] md:text-[8px] font-bold text-center leading-tight`}>
                {cert.name.split(' ').map(w => w[0]).join('')}
              </div>
              <p className="text-white text-xs md:text-sm leading-relaxed">
                <strong>{cert.name}</strong> {cert.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 8 — GI CERTIFICATIONS (2 pills)
          ════════════════════════════════════════ */}
      <section className="w-full min-h-[70vh] md:min-h-screen bg-[#0f1f10] flex items-center justify-center md:justify-end p-6 md:p-16">
        <div className="w-full max-w-xl flex flex-col gap-4 md:gap-6">
          <div className="bg-[#5a7a50] rounded-2xl md:rounded-[999px] px-5 md:px-6 py-4 md:py-5 flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white text-lg">🇰🇭</div>
            <div>
              <h4 className="text-white font-body font-bold text-sm md:text-base mb-1">Cambodian Government Global Indication</h4>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                Kampot Pepper was first awarded protected geographical indication, a status recognizing the product as unique and special, by the Cambodian Government in 2010.
              </p>
            </div>
          </div>
          <div className="bg-[#5a7a50] rounded-2xl md:rounded-[999px] px-5 md:px-6 py-4 md:py-5 flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 text-white text-lg">🇪🇺</div>
            <div>
              <h4 className="text-white font-body font-bold text-sm md:text-base mb-1">European Union Geographical Indication</h4>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                Kampot Pepper is GI certified by the EU, the same body that certifies Champagne and other geographic-specific products in Europe and worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 9 — QUALITY
          ════════════════════════════════════════ */}
      <section className="w-full bg-[#0f1f10]">
        <div className="flex flex-col md:flex-row min-h-[50vh]">
          <div className="w-full md:w-3/5 p-8 md:p-14 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-5xl text-[#81C784] mb-5 md:mb-6">QUALITY</h2>
            <p className="text-white text-base md:text-lg leading-relaxed mb-3 md:mb-4">
              Quality at Sunrise Pepper isn&apos;t a label — it&apos;s a practice rooted in our soil.
            </p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Our farm sits in Dang Tung district, where Kampot&apos;s legendary terroir — quartz-rich soil, warm coastal breezes, and seasonal monsoons — creates conditions that cannot be replicated anywhere else on earth. Every vine is meticulously tended using only certified organic methods. No synthetic fertilizers, no chemicals.
            </p>
          </div>
          <div className="w-full md:w-2/5 relative h-56 md:h-auto min-h-[250px]">
            <Image src="/images/farm/photo-2020-05-25-11-28-51.jpg" alt="Farm workers" fill className="object-cover" />
          </div>
        </div>
        <div className="relative h-48 md:h-72 lg:h-80">
          <Image src="/images/farm/photo-2020-05-25-11-29-01.jpg" alt="Plantation overview" fill className="object-cover" />
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

