import Image from "next/image";

type CardImageProps = {
  url?: string;
  fallbackText: string;
};

export default function CardImage({ url, fallbackText }: CardImageProps) {
  return url ? (
    <Image
      className="-mt-13 rounded-lg"
      src="https://github.com/charliebellow.png"
      alt="teste"
      width={60}
      height={60}
    />
  ) : (
    <div className="-mt-13 h-16 w-16 rounded-lg bg-primary-blue">
      <p className="flex h-full w-full items-center justify-center font-bold text-white-100">
        {fallbackText}
      </p>
    </div>
  );
}
