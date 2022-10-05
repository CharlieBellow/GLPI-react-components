interface CardFloatingLabelInputProps {
  label: string;
  inputId: string;
  width: string;  
}

function CardLabel(props: CardFloatingLabelInputProps) {
  return (
    <label
      htmlFor={props.inputId}
      className="pl-2 absolute text-base bg-branco-gelo text-fundo-claro duration-300 transform
      -translate-y-5 scale-75 top-2 origin-[0] px-2 peer-focus:px-2 peer-focus:text-azul-ufal
      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
      peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
    >
      {props.label}
    </label>
  )
}

export function CardFloatingLabelInput(props: CardFloatingLabelInputProps) {
  return (
      <div className="relative mx-14">
        <input 
          type="text"
          id={props.inputId}
          name={props.inputId}
          className={`block px-2.5 pb-2.5 pt-4 text-base text-fundo-claro bg-transparent
          rounded-lg border-[0.1rem] border-fundo-claro appearance-none focus:outline-none
          focus:ring-0 focus:border-2 focus:border-azul-ufal peer ${props.width}`}
          placeholder=" "
        />
        
        <CardLabel
          label={props.label}
          inputId={props.inputId}
          width={props.width}
        />
      </div>
  )
}
