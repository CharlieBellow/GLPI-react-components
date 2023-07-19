type CategoryBannerProps = {
  children: React.ReactNode;
};

export default function CategoryBannerContent({
 children
}: CategoryBannerProps) {
  return (
      <div className=" w-full text-black-text">
        {children}
    </div>
      

    
  );
}
