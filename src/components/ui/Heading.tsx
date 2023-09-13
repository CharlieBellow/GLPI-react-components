type HeadingProps = {
  title: string;
  subtitle?: string;
};

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <>
      <h2 className="text-3xl font-bold text-black-text md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg font-medium text-black-text/80">{subtitle}</p>
      )}
      <hr className="mt-2=1 h-px w-full bg-secondary-2" />
    </>
  );
}
