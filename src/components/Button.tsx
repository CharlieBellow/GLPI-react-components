interface ButtonProps {
  title: string;
  style: string;
}

export function Button(props: ButtonProps) {
  return (
      <button
        className={`hover:bg-opacity-80 font-bold rounded-md
        focus:outline-blue-ufal
        ${props.style}`}
      >
        {props.title}
      </button>

  );
}
