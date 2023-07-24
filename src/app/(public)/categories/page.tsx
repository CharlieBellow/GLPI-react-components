"use client";
import CategoryBannerContent from "./CategoryBannerPattern/CategoryBannerContent";
import CategoryBannerIcon from "./CategoryBannerPattern/CategoryBannerIcon";
import CategoryBannerImage from "./CategoryBannerPattern/CategoryBannerImage";
import CategoryBannerRoot from "./CategoryBannerPattern/CategoryBannerRoot";
// import CategoryBanner from "@/components/CategoryBanner";
import { Plus } from "phosphor-react";
import CategoryBannerActiveServicesCount from "./CategoryBannerPattern/CategoryBannerActiveServicesCount";

export const revalidate = 86400; // 24 hours

export default async function CategoriesPage() {
  // const groups = await getAllGroups();

  const groups = [
    {
      id: "446ba367-8c8e-4f11-b920-413ef6e9e836",
      description: "Sistemas",
      createdAt: "2023-02-17T17:24:21.797Z",
      updatedAt: "2023-02-17T17:24:21.797Z",
      serviceGroupId: "35be846f-55ba-48d0-a752-d22a9a82eb47",
    },
    {
      id: "446ba367-8c8e-4f11-b920-413ef6e9e836",
      description: "Redes",
      createdAt: "2023-02-17T17:24:21.797Z",
      updatedAt: "2023-02-17T17:24:21.797Z",
      serviceGroupId: "35be846f-55ba-48d0-a752-d22a9a82eb47",
      bannerUrl: "/images/ufal-sigla-branca-fundo-transparente-40por-cento.png",
    },

    {
      id: "446ba367-8c8e-4f11-b920-413ef6e9e836",
      description: "Manutanção",
      createdAt: "2023-02-17T17:24:21.797Z",
      updatedAt: "2023-02-17T17:24:21.797Z",
      serviceGroupId: "35be846f-55ba-48d0-a752-d22a9a82eb47",
    },
  ];

  return (
    <div className="w-auto">
      <h1 className="text-black  border-b border-gray-200  text-3xl font-bold">
        Selecione a categoria
      </h1>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 justify-center gap-12 sm:grid-cols-2 md:grid-cols-3 lg:max-w-4xl lg:grid-cols-4 ">
        {groups.map((group) => (
          <div key={group.id} className=" flex justify-center">
            <CategoryBannerRoot key={group.id}>

              <CategoryBannerContent>
              <CategoryBannerImage
                bannerUrl={group.bannerUrl}
                alt="ufal logo"
              />
                <CategoryBannerIcon icon={Plus} size={25} />
                {group.description}
                <CategoryBannerActiveServicesCount activeServicesCount={0} />
              </CategoryBannerContent>
            </CategoryBannerRoot>
          </div>
        ))}
      </div>
    </div>
  );
}
