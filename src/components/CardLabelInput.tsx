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
    <div>
      <input type="text" id={props.inputId} name={props.inputId} className={props.width}></input>
    </div>
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
