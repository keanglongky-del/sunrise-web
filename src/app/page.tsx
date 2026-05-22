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
      <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#0f1f10]">
        <Image
          src="/images/farm-vines.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.5)' }}
          priority
        />
        {/* Top-left quarter-circle + gold logo */}
        <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 rounded-br-[100%] bg-[#1a2e1b]/80 z-10" />
        <div className="absolute top-5 left-5 md:top-8 md:left-10 z-20 flex flex-col items-center">
          <svg width="52" height="72" viewBox="0 0 52 72" fill="none" className="md:w-16 md:h-20">
            <path d="M26 68V24" stroke="#c4996a" strokeWidth="2" strokeLinecap="round"/>
            <path d="M26 28C22 20 14 16 8 20C2 24 6 36 16 40C20 41.5 24 38 26 32" fill="#c4996a" opacity="0.7"/>
            <path d="M26 38C30 30 38 26 44 30C50 34 46 46 36 50C32 51.5 28 48 26 42" fill="#c4996a" opacity="0.6"/>
            <path d="M26 16C24 8 16 4 10 6C4 8 4 18 12 24C18 28 24 26 26 20" fill="#c4996a" opacity="0.5"/>
            <circle cx="22" cy="50" r="4" fill="#c4996a" opacity="0.6"/>
            <circle cx="26" cy="48" r="4.5" fill="#c4996a" opacity="0.7"/>
            <circle cx="30" cy="50" r="4" fill="#c4996a" opacity="0.6"/>
            <circle cx="24" cy="56" r="3.5" fill="#c4996a" opacity="0.5"/>
            <circle cx="28" cy="54" r="4" fill="#c4996a" opacity="0.6"/>
          </svg>
          <span className="font-display text-[#c4996a] text-sm italic mt-0.5">Sunrise</span>
        </div>

        {/* Bottom-right quarter-circle */}
        <div className="absolute bottom-0 right-0 w-80 md:w-[28rem] h-80 md:h-[28rem] rounded-tl-[100%] bg-[#3d7a4a]/70 z-10" />

        {/* Three overlapping circles */}
        <div className="absolute top-14 md:top-20 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="absolute w-32 md:w-44 h-32 md:h-44 rounded-full bg-[#4a8c5c]/25 -translate-x-6" />
          <div className="absolute w-24 md:w-36 h-24 md:h-36 rounded-full bg-[#4a8c5c]/18 translate-x-5 -translate-y-2" />
          <div className="absolute w-16 md:w-28 h-16 md:h-28 rounded-full bg-[#4a8c5c]/12 translate-x-1 translate-y-3" />
        </div>

        {/* Nav bar */}
        <nav className="absolute top-0 left-0 right-0 z-30 hidden md:flex items-center justify-between px-8 py-5 bg-[#1a2e1b]/50">
          <div className="w-40" />
          <div className="flex items-center gap-10 text-white text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-[#c4996a] transition-colors">About Us</a>
            <a href="#certifications" className="hover:text-[#c4996a] transition-colors">Certification</a>
            <a href="#products" className="hover:text-[#c4996a] transition-colors">Product</a>
            <a href="#contact" className="hover:text-[#c4996a] transition-colors">Contact</a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-5 right-5 z-40 md:hidden p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
        {open && (
          <div className="absolute top-0 left-0 right-0 z-30 md:hidden bg-[#1a2e1b]/95 backdrop-blur-lg pt-16 pb-8 px-8">
            {['About Us|about', 'Certification|certifications', 'Product|products', 'Contact|contact'].map(item => {
              const [label, id] = item.split('|');
              return (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                  className="block py-3 text-white text-lg tracking-wide border-b border-white/10">
                  {label}
                </a>
              );
            })}
          </div>
        )}

        {/* Center title */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h1 className="font-body font-bold text-white text-4xl sm:text-5xl md:text-7xl tracking-wide leading-tight">
            SUNRISE PEPPER
          </h1>
          <p className="font-body text-white/90 text-xs sm:text-sm md:text-base tracking-[0.25em] mt-3 md:mt-4">
            (CAMBODIA) IMPORT EXPORT CO., LTD
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 2 — FROM CAMBODIAN SOIL TO THE WORLD
          ════════════════════════════════════════ */}
      <section id="about" className="w-full">
        <div className="bg-white py-14 md:py-20 px-6 md:px-16 lg:px-20">
          <h2 className="font-display text-2xl md:text-4xl text-bark leading-snug max-w-2xl">
            From Cambodian Soil to the World
          </h2>
          <p className="text-bark/70 text-base md:text-lg max-w-2xl mt-5 leading-relaxed">
            Our family has been farming this land since 2014 in Dang Tung district, Kampot Province — the heart of Cambodia&apos;s legendary pepper-growing region. In 2019, we took a bold step: we established Sunrise Pepper (Cambodia) Import Export Co., Ltd. not just as a brand, but as a statement.
          </p>
          <div className="grid grid-cols-3 gap-6 md:gap-10 mt-10 max-w-md">
            <div>
              <div className="font-body font-bold text-3xl md:text-4xl text-bark">16</div>
              <div className="font-body text-xs md:text-sm text-bark/50 mt-1">Hectares of land</div>
            </div>
            <div>
              <div className="font-body font-bold text-3xl md:text-4xl text-bark">10,120</div>
              <div className="font-body text-xs md:text-sm text-bark/50 mt-1">Pepper trees</div>
            </div>
            <div>
              <div className="font-body font-bold text-3xl md:text-4xl text-bark">4.3</div>
              <div className="font-body text-xs md:text-sm text-bark/50 mt-1">Hectares in production</div>
            </div>
          </div>
        </div>
        <div className="h-56 md:h-80 lg:h-96 relative">
          <Image src="/images/farm/photo-2020-05-25-11-28-54.jpg" alt="Pepper plantation aerial view"
            fill className="object-cover" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 3 — THIRD-PARTY EXPORT STORY
          ════════════════════════════════════════ */}
      <section className="w-full min-h-[80vh] md:min-h-screen bg-[#0f1f10] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#3d7a4a] p-8 md:p-14 flex items-center">
          <p className="text-white text-base md:text-xl leading-relaxed">
            For too long, Cambodia&apos;s finest organic pepper has been exported through third parties — stripped of its origin, its story, and the credit that belongs to the people who grow it. We watched Kampot peppercorns leave our country, end up on shelves in Europe and America, and nobody knew they came from Cambodia. Nobody knew the hands that grew them.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-[#0f1f10] relative min-h-[40vh] md:min-h-0">
          <Image src="/images/product-standup.jpg" alt="Processing facility"
            fill className="object-cover" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 4 — PEPPER VARIETIES VISUAL
          ════════════════════════════════════════ */}
      <section className="w-full min-h-0 md:min-h-screen bg-[#0f1f10] flex items-center justify-center p-4 md:p-12">
        <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6">
          {/* Center text box */}
          <div className="relative z-10 w-full md:absolute md:inset-0 md:flex md:items-center md:justify-center px-4 order-1">
            <div className="bg-[#3d7a4a] rounded-2xl md:rounded-3xl p-6 md:p-10 max-w-lg shadow-2xl">
              <p className="text-white text-sm md:text-base leading-relaxed">
                For too long, Cambodia&apos;s finest organic pepper has been exported through third parties — stripped of its origin, its story, and the credit that belongs to the people who grow it. We watched Kampot peppercorns leave our country, end up on shelves in Europe and America, and nobody knew they came from Cambodia. Nobody knew the hands that grew them.
              </p>
            </div>
          </div>

          {/* Three pill-shaped images */}
          <div className="hidden md:flex flex-shrink-0">
            <div className="w-36 h-[420px] rounded-[999px] overflow-hidden relative flex-shrink-0">
              <Image src="/images/product-black.jpg" alt="" fill className="object-cover opacity-60" />
            </div>
          </div>
          <div className="hidden md:flex flex-shrink-0">
            <div className="w-36 h-[420px] rounded-[999px] overflow-hidden relative flex-shrink-0">
              <Image src="/images/product-white.jpg" alt="" fill className="object-cover opacity-60" />
            </div>
          </div>
          <div className="hidden md:flex flex-shrink-0">
            <div className="w-36 h-[420px] rounded-[999px] overflow-hidden relative flex-shrink-0">
              <Image src="/images/product-red.jpg" alt="" fill className="object-cover opacity-60" />
            </div>
          </div>

          {/* Mobile: show pepper images in a horizontal row below text */}
          <div className="flex md:hidden justify-center gap-4 order-2">
            <div className="w-20 h-56 rounded-[999px] overflow-hidden relative flex-shrink-0">
              <Image src="/images/product-black.jpg" alt="" fill className="object-cover opacity-60" />
            </div>
            <div className="w-20 h-56 rounded-[999px] overflow-hidden relative flex-shrink-0">
              <Image src="/images/product-white.jpg" alt="" fill className="object-cover opacity-60" />
            </div>
            <div className="w-20 h-56 rounded-[999px] overflow-hidden relative flex-shrink-0">
              <Image src="/images/product-red.jpg" alt="" fill className="object-cover opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 5 — WHY SUNRISE EXISTS
          ════════════════════════════════════════ */}
      <section className="w-full min-h-screen bg-[#0f1f10] flex flex-col md:flex-row">
        {/* Left: Gold illustration */}
        <div className="w-full md:w-[40%] flex flex-col items-center justify-center p-8 md:p-10 relative">
          <svg width="200" height="300" viewBox="0 0 200 300" fill="none" className="opacity-90 max-w-[200px]">
            <path d="M100 280V70" stroke="#c4996a" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M100 90C80 70 50 60 30 72C10 84 20 114 50 124C70 130 90 118 100 104" fill="#c4996a" opacity="0.65"/>
            <path d="M100 130C120 110 150 100 170 112C190 124 178 154 148 164C128 170 110 158 100 144" fill="#c4996a" opacity="0.55"/>
            <path d="M100 50C94 30 74 18 54 22C34 26 30 52 46 68C58 80 82 80 100 68" fill="#c4996a" opacity="0.45"/>
            <circle cx="88" cy="190" r="7" fill="#c4996a" opacity="0.75"/>
            <circle cx="100" cy="186" r="8" fill="#c4996a" opacity="0.85"/>
            <circle cx="112" cy="190" r="7" fill="#c4996a" opacity="0.75"/>
            <circle cx="94" cy="204" r="6" fill="#c4996a" opacity="0.65"/>
            <circle cx="106" cy="200" r="7" fill="#c4996a" opacity="0.75"/>
            <circle cx="100" cy="216" r="5.5" fill="#c4996a" opacity="0.55"/>
            <circle cx="88" cy="240" r="6" fill="#c4996a" opacity="0.65"/>
            <circle cx="100" cy="236" r="7" fill="#c4996a" opacity="0.75"/>
            <circle cx="112" cy="240" r="6" fill="#c4996a" opacity="0.65"/>
          </svg>
          <div className="mt-4 flex flex-col items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="#c4996a">
              <circle cx="16" cy="16" r="12" fill="none" stroke="#c4996a" strokeWidth="1.2"/>
              <path d="M16 8V16L20 20" stroke="#c4996a" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="font-display text-[#c4996a] text-sm italic mt-1">Sunrise</span>
          </div>
        </div>

        {/* Center: Photo strip */}
        <div className="hidden md:block w-[10%] relative">
          <Image src="/images/product-green.jpg" alt="Pepper plant" fill className="object-cover" />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-[50%] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-6 left-6 pointer-events-none">
            <div className="absolute w-20 md:w-24 h-20 md:h-24 rounded-full bg-[#4a8c5c]/25" />
            <div className="absolute w-16 md:w-20 h-16 md:h-20 rounded-full bg-[#4a8c5c]/18 translate-x-4 -translate-y-2" />
            <div className="absolute w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#4a8c5c]/12 translate-x-1 translate-y-3" />
          </div>
          <div className="absolute bottom-0 right-0 w-36 md:w-48 h-36 md:h-48 rounded-tl-[100%] bg-[#4a8c5c]/40" />

          <div className="relative z-10">
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              That&apos;s why <strong className="text-white">Sunrise</strong> exists. We built our own company to work directly with international buyers — to tell them where this pepper comes from, who grew it, and what makes it unlike anything else on earth. We want the world to know that Cambodian people are capable of standing in the international market on our own terms.
            </p>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Cambodians take great pride in Organic Kampot Pepper, widely recognized as one of the world&apos;s finest peppers due to its unique terroir, aroma, and quality. With this pride, we established <strong className="text-white">Sunrise Organic Kampot Pepper</strong> to bring authentic Cambodian pepper to both local and international markets — with our name, our origin, and our story attached.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 6 — MISSION
          ════════════════════════════════════════ */}
      <section className="w-full min-h-0 md:min-h-screen bg-[#0f1f10] relative overflow-hidden py-24 md:py-0">
        {/* Header */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4a8c5c] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="white" className="md:w-5 md:h-5">
              <path d="M10 2C10 2 6 6 6 10C6 12.2 7.8 14 10 14C12.2 14 14 12.2 14 10C14 6 10 2 10 2Z"/>
            </svg>
          </div>
          <span className="text-white text-[10px] md:text-xs tracking-[0.2em] hidden sm:inline">SUNRISE ORGANIC KAMPOT PEPPER</span>
        </div>

        {/* 3 circles */}
        <div className="absolute top-14 left-10 md:top-20 md:left-16 pointer-events-none">
          <div className="absolute w-16 md:w-28 h-16 md:h-28 rounded-full bg-[#4a8c5c]/22" />
          <div className="absolute w-12 md:w-22 h-12 md:h-22 rounded-full bg-[#4a8c5c]/16 translate-x-5 -translate-y-2" />
          <div className="absolute w-8 md:w-16 h-8 md:h-16 rounded-full bg-[#4a8c5c]/10 translate-x-2 translate-y-4" />
        </div>

        {/* Title */}
        <div className="relative z-10 pt-10 md:pt-20 pb-4 md:pb-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-white">MISSION</h2>
        </div>

        {/* Photo */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
          <div className="relative h-48 md:h-72 rounded-xl overflow-hidden">
            <Image src="/images/farm/photo-2023-06-01-14-37-28.jpg" alt="Harvesting pepper" fill className="object-cover" />
          </div>
        </div>

        {/* Mission text */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <p className="text-white text-base md:text-lg leading-relaxed text-center">
            It began with a simple mission: to support local farmers, especially women farmers and entrepreneurs, and to bring 100% organic, high-quality Kampot pepper to the global market.
          </p>
        </div>

        {/* Bottom-right quarter circle */}
        <div className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 rounded-tl-[100%] bg-[#4a8c5c] z-0" />

        {/* Pill pepper images */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 hidden sm:flex gap-2 md:gap-3">
          <div className="w-10 md:w-16 h-16 md:h-28 rounded-[999px] overflow-hidden relative">
            <Image src="/images/product-black.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="w-10 md:w-16 h-16 md:h-28 rounded-[999px] overflow-hidden relative">
            <Image src="/images/product-white.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="w-10 md:w-16 h-16 md:h-28 rounded-[999px] overflow-hidden relative">
            <Image src="/images/product-red.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 7 — STEPS FORWARD
          ════════════════════════════════════════ */}
      <section className="w-full bg-[#0f1f10]">
        {/* Top: photo left, text right */}
        <div className="flex flex-col md:flex-row min-h-[50vh]">
          <div className="w-full md:w-1/2 relative h-56 md:h-auto">
            <Image src="/images/farm/photo-2020-05-25-11-28-38.jpg" alt="Processing pepper" fill className="object-cover" />
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
          <div className="w-full md:w-1/2 relative h-56 md:h-auto order-1 md:order-2">
            <Image src="/images/farm/photo-2020-05-25-11-28-45.jpg" alt="Sorting pepper" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 8 — CERTIFICATIONS (4 pills)
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
          SLIDE 9 — GI CERTIFICATIONS (2 pills)
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
          SLIDE 10 — QUALITY
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
          SLIDE 11 — HAND-PICKED PROCESS
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
          <div className="absolute w-20 md:w-28 h-20 md:h-28 rounded-full bg-[#4a8c5c]/22" />
          <div className="absolute w-16 md:w-22 h-16 md:h-22 rounded-full bg-[#4a8c5c]/16 translate-x-5 -translate-y-2" />
          <div className="absolute w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#4a8c5c]/10 translate-x-2 translate-y-4" />
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
            <div className="absolute bottom-0 right-0 w-full h-48 md:h-64 lg:h-80" style={{ borderTopLeftRadius: '35%' }}>
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
          SLIDE 12 — PHOTO COLLAGE
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
          SLIDE 13 — ORGANIC KAMPOT PEPPER TYPES
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
