import CardLabel from './CardLabel';

interface CardInputProps {
  inputId: string;
  width: string;
}

interface CardLabelInputProps {
  label: string;
  inputId: string;
  width: string;
}

function CardInput(props: CardInputProps) {
  return (
    <input type="text" id={props.inputId} name={props.inputId} className={`
      box-content py-1 px-4 h-8 bg-cinza-medio rounded-lg outline-hidden outline-2
      focus:outline-azul-ufal text-fundo-claro text-base leading-[1.375rem] font-normal
      ${props.width}
    `} />
  );
}

function CardLabelInput(props: CardLabelInputProps) {
  return (
    <>
      <div className="px-[3.625rem]">
        <CardLabel for={props.inputId} label={props.label} />
      </div>
      <div className="pt-2 px-[3.625rem]">
        <CardInput inputId={props.inputId} width={props.width} />
      </div>
    </>
  );
}

export default CardLabelInput;
