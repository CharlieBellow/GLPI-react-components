import { ElementType } from "react";

type CategoryBannerProps = {
  icon: ElementType;
  size: number;
};

export default function CategoryBannerIcon({
  icon: Icon,
}: CategoryBannerProps) {
  return <Icon size={24} />;
}
