interface CardFloatingLabelTextareaProps {
  label: string;
  textareaId: string;  
}

function CardLabel(props: CardFloatingLabelTextareaProps) {
  return (
    <label htmlFor={props.textareaId} className="absolute text-base bg-branco-gelo text-fundo-claro duration-300 transform
    -translate-y-5 scale-75 top-2 origin-[0] px-2 peer-focus:px-2 peer-focus:text-azul-ufal
    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-7
    peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">{props.label}</label>    
  )
}

function CardFloatingLabelTextarea(props: CardFloatingLabelTextareaProps) {
  return (
      <div className="relative mx-[3.625rem]">
        <textarea id={props.textareaId} name={props.textareaId} className="block px-2.5 pb-2.5 pt-4 h-[10.125rem] min-h-full max-h-[10.125rem] w-full text-base
        text-fundo-claro bg-transparent rounded-lg border-[0.1rem] border-fundo-claro appearance-none
        focus:outline-none focus:ring-0 focus:border-2 focus:border-azul-ufal peer" placeholder=" " />          
        <CardLabel label={props.label} textareaId={props.textareaId} />
      </div>
  )
}

export default CardFloatingLabelTextarea;
