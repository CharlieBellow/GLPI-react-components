interface CardTitleProps {
  title: string;
}

export function CardTitle(props: CardTitleProps) {
  return (
    <h2 className="text-fundo-claro font-bold text-3xl">
      {props.title}
    </h2>
  );
}
