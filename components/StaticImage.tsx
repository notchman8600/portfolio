import { getImageProps, type ImageProps } from "next/image";
import { preload as preloadResource } from "react-dom";

type StaticImageProps = Pick<
  ImageProps,
  | "src"
  | "alt"
  | "width"
  | "height"
  | "sizes"
  | "quality"
  | "style"
  | "className"
> & { preload?: boolean };

// Static images need responsive URLs, but no client state or hydration.
export function StaticImage({ preload = false, ...image }: StaticImageProps) {
  const { props } = getImageProps({
    ...image,
    loading: preload ? "eager" : "lazy",
  });

  if (preload) {
    preloadResource(props.src, {
      as: "image",
      imageSrcSet: props.srcSet,
      imageSizes: props.sizes,
    });
  }

  // biome-ignore lint/performance/noImgElement: getImageProps retains Next.js image optimization without a client component.
  // biome-ignore lint/a11y/useAltText: The required alt prop is forwarded by getImageProps.
  return <img {...props} />;
}
