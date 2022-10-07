interface CardFloatingLabelTextareaProps {
  label: string;
  textareaId: string;  
}

function CardLabel(props: CardFloatingLabelTextareaProps) {
  return (
    <label
      htmlFor={props.textareaId}
      className="absolute text-base peer-focus:bg-branco-gelo text-fundo-claro duration-300 transform
      -translate-y-5 scale-100 -top-1 origin-[0] peer-focus:px-2 peer-focus:text-azul-ufal
      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:translate-x-1.5 peer-placeholder-shown:top-7
      peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
    >
      {props.label}
    </label>    
  )
}

export function CardFloatingLabelTextarea(props: CardFloatingLabelTextareaProps) {
  return (
      <div className="relative mx-14">
        <textarea
          id={props.textareaId}
          name={props.textareaId}
          className="block px-2.5 pb-2.5 pt-2.5 h-40 min-h-full max-h-40 w-full text-base
          text-fundo-claro bg-cinza-medio focus:bg-transparent rounded-lg appearance-none
          focus:outline-none focus:ring-0 focus:border-2 focus:border-azul-ufal peer"
          placeholder=" "
        />      
            
        <CardLabel
          label={props.label}
          textareaId={props.textareaId}
        />
      </div>
  )
}
