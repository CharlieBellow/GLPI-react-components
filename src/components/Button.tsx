interface ButtonProps {
  theme: string;
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={props.theme}>
      {props.title}
    </button>
  );
}

export default Button;
