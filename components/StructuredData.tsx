interface StructuredDataProps {
  id: string;
  data: object;
}

export function StructuredData({ id, data }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Escape HTML delimiters so JSON cannot close the script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
