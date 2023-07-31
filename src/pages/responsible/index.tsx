import { validationSchema } from "@/Utils/validations";
import { GenericForm } from "@/components/Form/GenericForm";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";
import FieldSelect from "@/components/Inputs/FieldSelect";
import { Layout } from "@/components/Layout";
import * as yup from "yup";
import { CardGeneric } from "../../components/Cards/CardGeneric";
import { getAllUsers } from "@/Utils/server/getInfo";
import { useState } from "react";


import {getAuthSession} from "@/Utils/auth"


import {} from "next-auth"

const validate = yup.object().shape({
  name: validationSchema.name,
});

const values = {
  serviceOrder: "",
};

const list = ["Aluno", "Técnico"];

export default async function Reponsible() {
  // const token = localStorage.getItem("token");

const auth = await getAuthSession()

console.log("auth", auth);


  // const [users, setUsers] = useState({})
  // const resp = async () => {

  //   const user = await getAllUsers(token)
  //   console.log("resp", users);
  //   setUsers(user)
    
    
  // }
  

  return (
    <Layout>
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
              <GenericForm
                initialValues={values}
                validation={validate}
                onSubmit={() => {
                  console.log("submitttt");
                }}
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
                  listitems={list.map((user) => {
                    return user;
                  })}
                />
              </GenericForm>
            </div>
          </CardGeneric.Content>
        </CardGeneric.Root>
      </div>
    </Layout>
  );
}
