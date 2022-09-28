import "../../styles/main.css";
import Button from '../Button';
import CardTitle from '../CardTitle';
import CardLine from '../CardLine';
import CardLabelInput from '../CardLabelInput';
import CardLabelTextarea from "../CardLabelTextarea";

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
        <form action="">
          <div>
            <CardLabelInput label="Título" inputId="titulo" width="long-input" /> 
          </div>
          <div className="mt-6">
            <CardLabelTextarea label="Descrição" textareaId="descricao" />
          </div>
        </form>
        <div className="flex justify-end gap-x-3.5 mr-14 mt-[3.4375rem]">
          <Button title="Solicitar" theme="card-action-btn-primary"/>
          <Button title="Cancelar" theme="card-action-btn-secondary"/>
        </div>
      </div>
    </>
  );
}

function App() {
  return <FormService />;
}

export default App;
