import React from 'react'

type CategoryBannerProps = {
  activeServicesCount: number;
};

export default function CategoryBannerActiveServicesCount({activeServicesCount}: CategoryBannerProps) {
  return (
    <div className=" flex h-full w-full">Serviços disponíveis: {activeServicesCount}</div>
  )
}
