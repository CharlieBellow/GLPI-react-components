import CategoryBannerSkeleton from "@/components/CategoryBannerPattern/CategoryBannerSkeleton";

export default function Loading() {
  return (
    <div className="w-full">
      <h1 className="text-black mb-3 border-b border-gray-200 pb-1 text-3xl font-bold">
        Selecione a categoria
      </h1>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 justify-center gap-12 sm:grid-cols-2 md:grid-cols-3 lg:max-w-4xl lg:grid-cols-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <CategoryBannerSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
