import { Field } from "formik";

interface CardLabelTextareaProps extends React.HTMLAttributes<HTMLElement> {
	label: string;
  textareaId?: string;
  register?: any;
  type?: string;
  name?: string
}

function CardLabel(props: CardLabelTextareaProps) {
  return (
    <label
      {...props}
      htmlFor={props.textareaId}
      className="absolute text-base peer-focus:bg-white-ice text-light-bg duration-300 transform
      -translate-y-5 scale-100 -top-1 origin-[0] peer-focus:px-2 peer-focus:text-blue-ufal
      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:translate-x-1.5 peer-placeholder-shown:top-7
      peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
    >
      {props.label}
    </label>    
  )
}

export function CardLabelTextarea(props: CardLabelTextareaProps) {
  return (
    <div className="relative">
      
      <Field as="textarea"
        { ...props }
        name={ props.name }
        id={ props.label }
        type={ props.type }
        className="block px-2.5 pb-2.5 pt-2.5 h-40 min-h-full max-h-40 w-full text-base
          text-light-bg bg-gray-medium focus:bg-transparent rounded-lg appearance-none
          focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-ufal peer"
        placeholder=" "
        />      
            
        <CardLabel
          label={props.label}
          textareaId={props.textareaId}
        />
      </div>
  )
}
