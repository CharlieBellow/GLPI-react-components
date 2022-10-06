interface ButtonProps {
  title: string;
  style: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={`hover:bg-opacity-80 font-bold py-2 rounded-md
      shadow-sombra-botao focus:outline-azul-ufal
      ${props.style}`}
    >
      {props.title}
    </button>
  );
}
