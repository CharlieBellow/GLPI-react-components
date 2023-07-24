type CategoryBannerProps = {
  children: React.ReactNode;
};

export default function CategoryBannerContent({
  children,
}: CategoryBannerProps) {
  return <div className=" w-full text-black-text pb-3">{children}</div>;
}
