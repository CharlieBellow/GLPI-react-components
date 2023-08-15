type HeadingProps = {
  title: string;
  subtitle?: string;
};

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-2xl font-semibold text-secondary-1">{subtitle}</p>
      )}
      <hr className="h-px w-full bg-secondary-2" />
    </div>
  );
}
