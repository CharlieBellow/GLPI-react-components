import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import FormicGeneric from "@/components/Cards/CardGeneric/FormicGeneric";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";
import FieldSelect from "@/components/Inputs/FieldSelect";

import { getAllUsers } from "@/Utils/server/getInfo";
import { validationSchema } from "@/Utils/validations";

const validate = yup.object().shape({
  name: validationSchema.name,
});

const values = {
  serviceOrder: "",
};

const list = ["Aluno", "Técnico"];

export default async function Reponsible() {
  const teste = await getAllUsers();

  console.log(teste.data);
  // const handle =  console.log("hello");

  return (
    <div className="mt-10">
      <CardGeneric.Root>
        <CardGeneric.Header hasImage>
          <CardGeneric.Image fallbackText="CB" />
          <CardGeneric.Title variant="h3" className="">
            Atribuir Responsável
          </CardGeneric.Title>
        </CardGeneric.Header>
        <CardGeneric.Separator />
        <CardGeneric.Content>
          <div>
            <FormicGeneric
              initialValues={values}
              validation={validate}
              onSubmit={console.log("dfgd")}
              actionSubmit={"submeteu"}
              formTitle={"Formulário Básico"}
            >
              <CardLabelInput
                label="Chamado"
                name="serviceOrder"
                type="text"
                width="100"
              />
              <FieldSelect
                name="reponsible"
                default="Selecione um responsável"
                label="Responsável"
                listitems={teste?.data.map((user) => {
                  return user.name;
                })}
              />
            </FormicGeneric>
          </div>
        </CardGeneric.Content>
      </CardGeneric.Root>
    </div>
  );
}
