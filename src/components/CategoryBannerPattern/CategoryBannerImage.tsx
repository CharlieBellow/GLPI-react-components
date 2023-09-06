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
    <div className="item-center relative left-1/2 -mt-8 flex  h-[80px] w-full -translate-x-1/2 justify-center rounded-lg bg-tertiary-1">
      <Image
        src={
          bannerUrl
            ? `${bannerUrl}`
            : "/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
        }
        className="h-20 w-20 "
        alt={alt}
        width={80}
        height={80}
      />
    </div>
  );
}
