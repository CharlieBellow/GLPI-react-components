interface ButtonProps {
  title: string;
  bg: string;
  textColor: string;
}

export function ButtonCardAction(props: ButtonProps) {
  return (
    <button
      className={`hover:bg-opacity-80 focus:outline-azul-ufal font-bold py-2
      rounded-md shadow-sombra-botao text-base px-3 h-10
      ${props.bg} ${props.textColor}`}
    >
      {props.title}
    </button>
  );
}
