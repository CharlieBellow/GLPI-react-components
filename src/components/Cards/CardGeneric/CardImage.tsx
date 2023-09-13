import Image from "next/image";

import Modal from "@/components/Modal";
// import { Dialog } from "@/components/ui";

type CardImageProps = {
  url?: string;
  fallbackText: string;
  editImage?: boolean;
};

export default function CardImage({
  url,
  fallbackText,
  editImage,
}: CardImageProps) {
  return url ? (
    <>
      <Image
        className="-mt-13 rounded-lg"
        src="https://www.github.com/charliebellow.png"
        alt="teste"
        width={60}
        height={60}
      />
      {editImage ? <Modal avatar="https://www.github.com/charliebellow.png" /> : <></>}
      {/* {editImage ? <Dialog /> : <></>} */}
    </>
  ) : (
    <div className="-mt-13 h-16 w-16 rounded-lg bg-primary-blue">
      <p className="flex h-full w-full items-center justify-center font-bold text-white-100">
        {fallbackText}
      </p>
    </div>
  );
}
