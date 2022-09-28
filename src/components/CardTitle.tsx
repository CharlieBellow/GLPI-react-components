interface CardTitleProps {
  title: string;
}

function CardTitle(props: CardTitleProps) {
  return (
    <span className="text-fundo-claro font-semibold text-[2rem] leading-[3.2rem]">
      {props.title}
    </span>
  );
}

export default CardTitle;
