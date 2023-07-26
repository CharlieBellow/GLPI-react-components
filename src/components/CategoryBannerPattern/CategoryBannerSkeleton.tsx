export default function CategoryBannerSkeleton() {
  return (
    <div className="relative flex w-auto flex-col rounded-lg bg-white-100 px-4 text-black-text shadow-card">
      <div className="item-center relative left-1/2 -mt-8 flex  h-[80px] w-full -translate-x-1/2 justify-center rounded-lg">
        <div className="h-full w-full animate-pulse rounded-lg bg-gradient-to-r from-gray-300 to-gray-300/90" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <span className="block h-4 animate-pulse rounded-md border-b border-gray-200 bg-gradient-to-r from-gray-300  to-gray-300/90 pb-px text-lg/relaxed font-semibold transition-colors hover:underline" />

        <p className="mt-3 h-3 animate-pulse rounded-md bg-gradient-to-r from-gray-300 to-gray-300/90 text-sm font-medium" />
      </div>
    </div>
  );
}
