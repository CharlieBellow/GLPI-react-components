interface CardLabelProps {
  label: string;
  for: string;
}

function CardLabel(props: CardLabelProps) {
  return (
    <label htmlFor={props.for} className="text-fundo-claro font-normal text-base leading-[1.6rem]">
      {props.label}
    </label>
  );
}

export default CardLabel;
