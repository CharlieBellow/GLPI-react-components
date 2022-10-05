interface ButtonProps {
  title: string;
  bg: string;
  textColor: string;
}

export function ButtonCardAction(props: ButtonProps) {
  return (
    <button
      className={`hover:bg-opacity-80 focus:outline-azul-ufal font-bold leading-[1.625rem] py-2
      rounded-md shadow-sombra-botao text-base px-[0.625rem] h-[2.625rem]
      ${props.bg} ${props.textColor}`}
    >
      {props.title}
    </button>
  );
}
