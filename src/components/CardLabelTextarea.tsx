import CardLabel from "./CardLabel";

interface CardTextareaProps {
  textareaId: string;
}

interface CardLabelTextareaProps {
  label: string;
  textareaId: string;
}

function CardTextarea(props: CardTextareaProps) {
  return (
    <div>
      <textarea id={props.textareaId} name={props.textareaId} className="box-content py-2 px-4 h-[10.125rem] w-[41.25rem] min-h-full max-h-[10.125rem] bg-cinza-medio rounded-lg outline-hidden outline-2 focus:outline-azul-ufal text-fundo-claro text-base leading-[1.375rem] font-normal"></textarea>
    </div>
  );
}

function CardLabelTextarea(props: CardLabelTextareaProps) {
  return (
    <>
      <div className="px-[3.625rem]">
        <CardLabel label={props.label} for={props.textareaId} />
      </div>
      <div className="pt-2 px-[3.625rem]">
        <CardTextarea textareaId={props.textareaId} />
      </div>
    </>
  );
}

export default CardLabelTextarea;