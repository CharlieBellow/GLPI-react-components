type CategoryBannerProps = {
  children: React.ReactNode;
};

export default function CategoryBannerContent({
  children,
}: CategoryBannerProps) {
  return (
    <div className="my-3 flex w-full flex-col gap-1 text-black-text">
      {children}
    </div>
  );
}
