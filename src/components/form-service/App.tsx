// import React from 'react';
// TODO -> components in multiple files

import "../../styles/main.css";

interface CardTitleProps {
  title: string;
}

interface CardLabelProps {
  title: string;
}

function CardTitle(props: CardTitleProps) {
  return (
    <span className="text-fundo-claro font-semibold text-[2rem] leading-[3.2rem]">
      {props.title}
    </span>
  );
}

function CardLine() {
  return (
    <div className="box-content h-[0.01875rem] w-[47.5rem] bg-fundo-claro mx-auto"></div>
  );
}

function CardLabel(props: CardLabelProps) {
  return (
    <label className="text-fundo-claro font-normal text-base leading-[1.6rem]">
      {props.title}
    </label>
  );
}

function CardInput() {
  return (
    <div>
      <input className="box-content py-1 px-4 h-8 w-[41.25rem] bg-cinza-medio rounded-lg outline-hidden outline-2 focus:outline-azul-ufal text-fundo-claro text-base leading-[1.375rem] font-normal"></input>
    </div>
  );
}

function CardTextArea() {
  return (
    <div>
      <textarea className="box-content py-2 px-4 h-[10.125rem] w-[41.25rem] min-h-full max-h-[10.125rem] bg-cinza-medio rounded-lg outline-hidden outline-2 focus:outline-azul-ufal text-fundo-claro text-base leading-[1.375rem] font-normal"></textarea>
    </div>
  );
}

function CardLabelInput(props: CardLabelProps) {
  return (
    <>
      <div className="px-[3.625rem]">
        <CardLabel title={props.title} />
      </div>
      <div className="pt-2 px-[3.625rem]">
        <CardInput />
      </div>
    </>
  );
}

function CardTextAreaInput(props: CardLabelProps) {
  return (
    <>
      <div className="px-[3.625rem]">
        <CardLabel title={props.title} />
      </div>
      <div className="pt-2 px-[3.625rem]">
        <CardTextArea />
      </div>
    </>
  );
}

// TODO -> button with multiple variants
function CardButton() {
  return (
    <button className="bg-cinza-texto text-branco-100 font-bold leading-[1.625rem] text-base py-2 px-[0.625rem] rounded-md h-[2.625rem] shadow-sombra-botao">
      Solicitar
    </button>
  );
}

function FormService() {
  return (
    <>
      <div className="font-roboto mt-44 mb-[5.25rem] container w-[50.5rem] h-[35.75rem] mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
        <div className="pl-9 pt-[2.040625rem]">
          <CardTitle title="Solicitar Serviço" />
        </div>
        <div className="mt-[1.149375rem] mb-6">
          <CardLine />
        </div>
        <div>
          <CardLabelInput title="Título" />
        </div>
        <div className="mt-6">
          <CardTextAreaInput title="Descrição" />
        </div>
        <div className="grid place-items-center h-screen">
          <CardButton />
        </div>
      </div>
    </>
  );
}

function App() {
  return <FormService />;
}

export default App;
