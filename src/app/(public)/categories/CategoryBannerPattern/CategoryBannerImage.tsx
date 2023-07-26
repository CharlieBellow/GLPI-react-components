import Image from "next/image";

type CategoryBannerProps = {
  bannerUrl?: string;
  alt: string;
};

export default function CategoryBannerImage({
  bannerUrl,
  alt,
}: CategoryBannerProps) {
  return (
    // <div className="bg-cover flex h-1/4">
    <Image
      src={
        bannerUrl
          ? `${bannerUrl}`
          : "/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
      }
      className="relative left-1/2 -mt-8 flex h-[80px]  w-full -translate-x-1/2 justify-center rounded-lg bg-red-300 bg-cover"
      alt={alt}
      width={100}
      height={100}
    />
    // </div>
  );
}
