export const createServiceJsonLd = ({
  name,
  description,
  provider,
  url,
  serviceType,
  offers,
}: {
  name: string;
  description: string;
  provider: string;
  url: string;
  serviceType?: string;
  offers?: {
    priceRange?: string;
    availability?: string;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Person",
      name: provider,
      url: "https://notchman.tech",
    },
    url,
    serviceType: serviceType || "ProfessionalService",
    offers: offers && {
      "@type": "Offer",
      priceRange: offers.priceRange || "要相談",
      availability: offers.availability || "https://schema.org/InStock",
    },
  };
};

export const createBreadcrumbJsonLd = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};