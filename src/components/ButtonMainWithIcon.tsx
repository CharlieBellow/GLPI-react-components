import * as Icon from 'phosphor-react'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
	//classname?: string;
	title?: string;
	icon: Icon.IconProps;
}

function ButtonMainWithIcon(props: ButtonProps) {
  return (
    <button  {...props}>
      <>{props.icon}</>
      {props.title}
    </button>

  )
}

export default ButtonMainWithIcon;