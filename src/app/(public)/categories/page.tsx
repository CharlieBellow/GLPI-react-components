import { getAllGroups } from "@/Utils/server/getInfo";
import { Route } from "next";
import CategoryBannerActiveServicesCount from "@/components/CategoryBannerPattern/CategoryBannerActiveServicesCount";
import CategoryBannerContent from "@/components/CategoryBannerPattern/CategoryBannerContent";
import CategoryBannerDescription from "@/components/CategoryBannerPattern/CategoryBannerDescription";
import CategoryBannerImage from "@/components/CategoryBannerPattern/CategoryBannerImage";
import CategoryBannerRoot from "@/components/CategoryBannerPattern/CategoryBannerRoot";

export const revalidate = 86400; // 24 hours

export default async function CategoriesPage() {
  const groups = await getAllGroups();

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
                  bannerUrl={group?.bannerUrl}
                  alt="ufal logo"
                />
                {/* <CategoryBannerIcon icon={Plus} size={25} /> */}
                <CategoryBannerDescription
                  href={`/servicebook/group/${group.id}` as Route}
                  key={group.id}
                >
                  {group.description}
                </CategoryBannerDescription>
                <CategoryBannerActiveServicesCount activeServicesCount={0} />
              </CategoryBannerContent>
            </CategoryBannerRoot>
          </div>
        ))}
      </div>
    </div>
  );
}
