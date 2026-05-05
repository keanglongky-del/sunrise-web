import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf6f0]/90 backdrop-blur-sm border-b border-[#c8a96e]/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌶️</span>
          <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">
            Sunrise Pepper
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
          <Link
            href="#story"
            className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
          >
            Our Story
          </Link>
          <Link
            href="#products"
            className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
          >
            Products
          </Link>
          <Link
            href="#quality"
            className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
          >
            Quality
          </Link>
          <Link
            href="#contact"
            className="bg-[#1a1a1a] text-[#faf6f0] px-5 py-2 rounded-sm hover:bg-[#2d2d2d] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_40%,#c8a96e_0%,transparent_60%)]" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-[#c8a96e] uppercase tracking-[0.3em] text-sm mb-6">
          From Kampot, Cambodia
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#faf6f0] leading-tight mb-6">
          Sunrise Organic
          <br />
          <span className="text-[#c8a96e]">Kampot Pepper</span>
        </h1>
        <p className="text-[#faf6f0]/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The world&rsquo;s most prized pepper, grown organically in the rich
          volcanic soil of Cambodia&rsquo;s legendary Kampot region.
        </p>
        <Link
          href="#products"
          className="inline-block border border-[#c8a96e] text-[#c8a96e] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#c8a96e] hover:text-[#1a1a1a] transition-all"
        >
          Discover Our Pepper
        </Link>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 px-6 bg-[#faf6f0]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#c8a96e] uppercase tracking-[0.3em] text-sm mb-4">
            Our Story
          </p>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
            Rooted in Tradition
          </h2>
          <div className="space-y-4 text-[#1a1a1a]/70 leading-relaxed">
            <p>
              For generations, the farmers of Kampot have cultivated pepper in
              the shadow of Cambodia&rsquo;s mountains. The region&rsquo;s
              unique microclimate &mdash; quartz-rich soil, warm coastal breezes,
              and seasonal monsoons &mdash; creates a terroir that is
              impossible to replicate.
            </p>
            <p>
              At Sunrise Pepper, we honor this tradition. Every vine is tended by
              hand. Every peppercorn is harvested at peak ripeness and sun-dried
              naturally. The result is a pepper of extraordinary depth &
              mdash; floral, pungent, and unmistakably Kampot.
            </p>
            <p>
              Our farm holds PGI (Protected Geographical Indication)
              certification, guaranteeing that every grain carries the authentic
              character of this legendary region.
            </p>
          </div>
        </div>
        <div className="aspect-[4/5] bg-[#1a1a1a]/5 rounded-sm flex items-center justify-center">
          <div className="text-center text-[#1a1a1a]/30">
            <span className="text-6xl block mb-3">🌿</span>
            <p className="text-sm uppercase tracking-widest">Farm Photo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      name: "Black Pepper",
      emoji: "⚫",
      description:
        "Dried at full maturity for bold, complex flavor. Notes of eucalyptus, mint, and fresh wood.",
      color: "bg-[#faf6f0]",
    },
    {
      name: "Red Pepper",
      emoji: "🔴",
      description:
        "Rare red berries, sun-dried to retain their sweet heat. Fruity with a lingering warmth.",
      color: "bg-[#1a1a1a] text-[#faf6f0]",
    },
    {
      name: "White Pepper",
      emoji: "⚪",
      description:
        "Ripe berries soaked and husked to reveal the pure core. Delicate, earthy, and aromatic.",
      color: "bg-[#faf6f0]",
    },
  ];

  return (
    <section id="products" className="py-24 px-6 bg-[#f0ebe2]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c8a96e] uppercase tracking-[0.3em] text-sm mb-4">
            Our Products
          </p>
          <h2 className="text-4xl font-bold text-[#1a1a1a]">
            Three Peppers, One Origin
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className={`${p.color} p-8 rounded-sm border border-[#1a1a1a]/10`}
            >
              <span className="text-4xl block mb-6">{p.emoji}</span>
              <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
              <p
                className={`leading-relaxed ${
                  p.color.includes("1a1a1a")
                    ? "text-[#faf6f0]/70"
                    : "text-[#1a1a1a]/70"
                }`}
              >
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="py-24 px-6 bg-[#1a1a1a] text-[#faf6f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c8a96e] uppercase tracking-[0.3em] text-sm mb-4">
            Quality & Certification
          </p>
          <h2 className="text-4xl font-bold">
            Why Kampot Pepper Matters
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              label: "PGI Certified",
              desc: "Protected Geographical Indication from the European Union — an authenticity guarantee.",
            },
            {
              label: "Organically Grown",
              desc: "No synthetic chemicals. Just healthy soil, sunshine, and generations of know-how.",
            },
            {
              label: "Hand Harvested",
              desc: "Each peppercorn is picked and sorted by hand at peak ripeness for maximum flavor.",
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="w-12 h-px bg-[#c8a96e] mx-auto mb-6" />
              <h3 className="text-lg font-bold text-[#c8a96e] mb-3">
                {item.label}
              </h3>
              <p className="text-[#faf6f0]/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#faf6f0]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#c8a96e] uppercase tracking-[0.3em] text-sm mb-4">
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
          Bring Kampot Home
        </h2>
        <p className="text-[#1a1a1a]/70 leading-relaxed mb-10">
          Whether you&rsquo;re a chef, a specialty food importer, or a pepper
          lover — we&rsquo;d love to hear from you. Reach out for wholesale
          inquiries, orders, or farm visits.
        </p>
        <a
          href="mailto:info@sunrisekampotpepper.com"
          className="inline-block bg-[#1a1a1a] text-[#faf6f0] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#2d2d2d] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#faf6f0]/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Sunrise Organic Kampot Pepper</p>
        <p>Kampot Province, Cambodia</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Products />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
