import React from 'react'

type CategoryBannerProps = {
  activeServicesCount: number;
};

export default function CategoryBannerActiveServicesCount({activeServicesCount}: CategoryBannerProps) {
  return (
    <div className=" flex  w-auto">Serviços disponíveis: {activeServicesCount}</div>
  )
}
