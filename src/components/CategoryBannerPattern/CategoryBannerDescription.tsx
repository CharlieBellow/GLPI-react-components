import Link from "next/link";

type CategoryBannerDescriptionProps = {
  children: React.ReactNode;
  href: string;
  key: string;
};

export default function CategoryBannerDescription({
  children,
  href,
  id,
}: CategoryBannerDescriptionProps) {
  return (
    <Link
      href={href}
      key={id}
      className="flex w-full cursor-pointer flex-col gap-2 text-black-text hover:text-blue-ufal hover:underline"
    >
      {children}
    </Link>
  );
}
