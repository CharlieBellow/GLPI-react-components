import { ReactNode } from "react";

type CategoryBannerRootProps = {
  children: ReactNode;
};
export default function CategoryBannerRoot({
  children,
}: CategoryBannerRootProps) {
  return (
    <div className="relative flex w-auto flex-col rounded-lg bg-white-100 px-4 text-black-text shadow-card">
      {children}
    </div>
  );
}
