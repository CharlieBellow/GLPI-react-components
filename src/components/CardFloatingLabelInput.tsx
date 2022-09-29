//* Versão alternativa de input

interface CardFloatingLabelInputProps {
  label: string;
  inputId: string;  
}

function CardLabel(props: CardFloatingLabelInputProps) {
  return (
    <label htmlFor={props.inputId} className="pt-0.5 absolute text-cinza-texto duration-300 transform -translate-y-4 scale-75 top-4 z-10
    origin-[0] left-2.5 peer-focus:text-azul-ufal  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
    peer-focus:scale-75 peer-focus:-translate-y-4">{props.label}</label>
  )
}

function CardFloatingLabelInput(props: CardFloatingLabelInputProps) {
  return (
      <div className="relative mx-[3.625rem]">
        <input type="text" id={props.inputId} name={props.inputId} className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full font-normal text-base
        text-fundo-claro bg-cinza-medio border-0 border-b-2 focus:outline-none focus:border-azul-ufal peer" placeholder=" " />
        <CardLabel label={props.label} inputId={props.inputId} />
      </div>
  )
}

export default CardFloatingLabelInput;
