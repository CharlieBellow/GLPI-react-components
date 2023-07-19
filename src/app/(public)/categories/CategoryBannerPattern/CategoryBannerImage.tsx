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
    <Image
      src={
        bannerUrl
          ? `${bannerUrl}`
          : "/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
      }
      className="mx-auto -mt-8 flex h-[25%] w-full  justify-center rounded-lg bg-red-300 "
      alt={alt}
      width={100}
      height={100}
    />
  );
}
