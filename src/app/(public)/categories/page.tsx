import { getAllGroups } from "@/Utils/server/getInfo";
import CategoryBanner from "@/components/CategoryBanner";

export const revalidate = 86400; // 24 hours

export default async function CategoriesPage() {
  const groups = await getAllGroups();

  return (
    <div className="w-full">
      <h1 className="text-black mb-3 border-b border-gray-200 pb-1 text-3xl font-bold">
        Selecione a categoria
      </h1>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-4xl lg:grid-cols-4">
        {groups.map((group) => (
          <CategoryBanner key={group.id} {...group} activeServicesCount={0} />
        ))}
      </div>
    </div>
  );
}
