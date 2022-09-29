interface ButtonProps {
  classname: string;
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={props.classname}>
      {props.title}
    </button>
  );
}

export default Button;

