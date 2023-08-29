import { Form, Formik } from "formik";
import * as yup from "yup";

import { postUser } from "../../Utils/server/postInfo";
import { validationSchema } from "../../Utils/validations";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";

const validate = yup.object().shape({
  name: validationSchema.fullName,
  email: validationSchema.email,
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});

function CardCreateUser() {
  // const { errorMessage, successMessage } = useMessage()
  const token = localStorage.getItem("token");
  return (
    <div className="mx-4">
      <div
        className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
      >
        <div className="pl-9 pt-8">
          <CardTitle title="Criar Usuário" />
        </div>
        <div className="mx-9 mb-10 mt-4">
          <CardLine />
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log("submit:", values);
              postUser(values, token as string);
              // successMessage("Chamado criado com sucesso!");
              //alert(JSON.stringify(values, null, 2));
              actions.resetForm();
              //setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form action="" className="mx-14 flex flex-col gap-9">
              <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                <CardLabelInput
                  label="Nome Completo"
                  name="name"
                  type="text"
                  inputid="name"
                  width="lg:w-80 w-full"
                />
                <CardLabelInput
                  label="E-mail"
                  type="email"
                  name="email"
                  inputid="email"
                  width="lg:w-80 w-full"
                />
              </div>
              <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                <CardLabelInput
                  label="Senha"
                  type="password"
                  name="password"
                  inputid="password"
                  width="lg:w-80 w-full"
                />
                <CardLabelInput
                  label="Confirmar Senha"
                  type="password"
                  name="confirmPassword"
                  inputid="cpassword"
                  width="lg:w-80 w-full"
                />
              </div>
              <div className="mt-10 flex justify-end gap-x-3.5">
                <Button
                  theme="primary"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  isLoading={isSubmitting}
                >
                  Criar
                </Button>
                <Button theme="secondary">Cancelar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CardCreateUser;
