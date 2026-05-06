export default function JsonLd() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sunrise Organic Kampot Pepper",
    url: "https://sunrisepepper.com",
    logo: "https://sunrisepepper.com/logo.jpg",
    description:
      "Authentic Kampot pepper, organically grown in Cambodia. PGI-certified, hand-harvested, sun-dried.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampot",
      addressCountry: "KH",
    },
    sameAs: [
      "https://www.instagram.com/sunrisekampotpepper",
      "https://www.facebook.com/SunriseOrganicKampotPepper",
      "https://www.tiktok.com/@organickampotpepper",
    ],
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kampot Pepper",
    image: "https://sunrisepepper.com/logo.jpg",
    description:
      "Authentic PGI-certified Kampot pepper. Available in Black, Red, and White varieties. Organically grown and hand-harvested in Kampot Province, Cambodia.",
    brand: {
      "@type": "Brand",
      name: "Sunrise Pepper",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
    </>
  );
}
