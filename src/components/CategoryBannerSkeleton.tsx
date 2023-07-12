export default function CategoryBannerSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-md shadow-md">
      <div className="relative aspect-[4/2] w-full overflow-hidden sm:aspect-[3/1] md:aspect-[2/1]">
        <div className="h-full w-full animate-pulse bg-gradient-to-r from-gray-300 to-gray-300/90" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <span className="block h-4 animate-pulse rounded-md border-b border-gray-200 bg-gradient-to-r from-gray-300  to-gray-300/90 pb-px text-lg/relaxed font-semibold transition-colors hover:underline" />

        <p className="mt-3 h-3 animate-pulse rounded-md bg-gradient-to-r from-gray-300 to-gray-300/90 text-sm font-medium" />
      </div>
    </div>
  );
}
