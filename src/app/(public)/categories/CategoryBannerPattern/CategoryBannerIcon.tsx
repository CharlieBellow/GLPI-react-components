import { ElementType } from "react";

type CategoryBannerProps = {
  icon: ElementType;
  size: number
};

export default function CategoryBannerIcon({
  icon: Icon,
}: CategoryBannerProps) {
  return <Icon className="h-full w-full bg-red-400" size={32} />;
}
