import React from 'react'

type CategoryBannerProps = {
  description: string;
};

export default function CategoryBannerContent({description}: CategoryBannerProps) {
  return (
    <div className="flex h-full w-full text-black-text">{description}</div>
  )
}
