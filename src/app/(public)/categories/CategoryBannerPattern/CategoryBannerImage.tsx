import React from 'react'
import Image from "next/image";

type CategoryBannerProps = {
  bannerUrl?: string;
  alt: string
};

export default function CategoryBannerImage({bannerUrl, alt}: CategoryBannerProps) {
  return (
    <Image
              src={bannerUrl ? `${bannerUrl}` : "/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"}
              className="bg-red-300 rounded-lg w-full flex justify-center  mx-auto h-[20%] -mt-8 "
              alt={alt}
              width={100}
              height={100}
            />
  )
}
