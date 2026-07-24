import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-json-ld"
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify of a static, server-defined object (no user input)
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbList),
      }}
      strategy="afterInteractive"
    />
  );
}
