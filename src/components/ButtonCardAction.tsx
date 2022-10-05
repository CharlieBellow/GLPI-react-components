interface ButtonProps {
  title: string;
  bg: string;
  textColor: string;
  textSize: string;
  lineHeight: string;
  paddingHorizontal: string;
  height: string;
}

export function ButtonCardAction(props: ButtonProps) {
  return (
    <button
      className={`hover:bg-opacity-80 focus:outline-azul-ufal font-bold leading-[1.625rem] py-2 rounded-md shadow-sombra-botao
      ${props.bg} ${props.textColor} ${props.textSize} ${props.lineHeight} ${props.paddingHorizontal} ${props.height}`}
    >
      {props.title}
    </button>
  );
}
