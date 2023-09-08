export default function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-sm text-black-text/80">{children}</p>;
}
