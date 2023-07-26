import { ElementType } from "react";

type CategoryBannerProps = {
  icon: ElementType;
  size: number;
};

export default function CategoryBannerIcon({
  icon: Icon,
}: CategoryBannerProps) {
  return <Icon className="my-4 h-auto w-auto" size={24} />;
}
