import { Route } from "next";
import Link from "next/link";
import Image from "next/image";

type CategoryBannerProps = {
  id: string;
  description: string;
  bannerUrl?: string;
  activeServicesCount: number;
};

export default function CategoryBanner({
  id,
  description,
  bannerUrl = undefined,
  activeServicesCount = 0,
}: CategoryBannerProps) {
  return (
    <div
      key={id}
      className="flex flex-col overflow-hidden rounded-md shadow-md"
    >
      <div className="relative aspect-[4/2] w-full overflow-hidden sm:aspect-[3/1] md:aspect-[2/1]">
        {bannerUrl ? (
          <Image
            src="/images/example-card.jpg"
            alt="ufal logo"
            fill
            className="transition-transform hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full justify-center bg-gray-text">
            <Image
              src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
              alt="ufal logo"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <Link
          href={`/${id}` as Route}
          key={id}
          className="text-black block border-b border-gray-200 pb-px text-lg/relaxed font-semibold transition-colors hover:underline"
        >
          {description}
        </Link>

        <p className="mt-3 text-sm font-medium">
          Serviços disponíveis:&nbsp;
          <span className="font-bold">{activeServicesCount}</span>
        </p>
      </div>
    </div>
  );
}
