import React, { ReactNode } from "react";

type CategoryBannerRootProps = {
  children: ReactNode;
};
export default function CategoryBannerRoot({
  children,
}: CategoryBannerRootProps) {
  return (
    <div className="relative flex w-auto flex-col rounded-lg bg-white-100 shadow-card px-4 text-black-text">
      {children}
    </div>
  );
}
