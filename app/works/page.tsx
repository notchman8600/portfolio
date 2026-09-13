import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { createPageMetadata, siteUrl } from "@/data/seo";
import WorksContent from "./WorksContent";

export const metadata: Metadata = createPageMetadata("/works");

export default function WorksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteUrl() },
          { name: "開発実績・作品", url: siteUrl("/works") },
        ]}
      />
      <WorksContent />
    </>
  );
}
