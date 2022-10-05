interface CardTitleProps {
  title: string;
}

export function CardTitle(props: CardTitleProps) {
  return (
    <span className="text-fundo-claro font-semibold text-3xl">
      {props.title}
    </span>
  );
}
