interface CardTitleProps {
  title: string;
}

export function CardTitle(props: CardTitleProps) {
  return (
    <h2 className="text-light-bg font-bold text-3xl">
      {props.title}
    </h2>
  );
}
