import React, {ReactNode} from 'react'

type CategoryBannerRootProps = {
  children: ReactNode
}
export default function CategoryBannerRoot({children}: CategoryBannerRootProps) {
  return (
    
    <div className="relative flex h-full w-full flex-col rounded-lg bg-white-100 px-4 text-black-text">
      {children}

    </div>
  );
}