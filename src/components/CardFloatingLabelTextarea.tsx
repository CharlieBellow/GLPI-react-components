//* Versão alternativa de textarea

interface CardFloatingLabelTextareaProps {
  label: string;
  textareaId: string;  
}

function CardLabel(props: CardFloatingLabelTextareaProps) {
  return (
    <label htmlFor={props.textareaId} className="pt-0.5 absolute text-cinza-texto duration-300 transform -translate-y-4 scale-75 top-4 z-10
    origin-[0] left-2.5 peer-focus:text-azul-ufal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
    peer-focus:scale-75 peer-focus:-translate-y-4">{props.label}</label>    
  )
}

function CardFloatingLabelTextarea(props: CardFloatingLabelTextareaProps) {
  return (
      <div className="relative mx-[3.625rem]">
        <textarea id={props.textareaId} name={props.textareaId} className="block rounded-lg px-2.5 pb-2.5 pt-5 h-[10.125rem] w-full min-h-full
        max-h-[10.125rem] font-normal text-base text-fundo-claro bg-cinza-medio border-0 border-b-2 focus:outline-none
        focus:border-azul-ufal peer" placeholder=" " />          
        <CardLabel label={props.label} textareaId={props.textareaId} />
      </div>
  )
}

export default CardFloatingLabelTextarea;
