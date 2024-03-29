import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { useMessage } from "../../Contexts/MessageContext";
import { getUserId } from "../../Utils/server/getInfo";
import { User } from "../../Utils/server/types";
import { validationSchema } from "../../Utils/validations";
import { Button } from "../Buttons/Button";
import { CardLine } from "../Cards/CardLine";
import { CardLabelInputShowInfo } from "../Inputs/CardLabelInputShowInfo";
import { CardTitleImage } from "./CardTitleImage";

const validate = yup.object().shape({
  fullName: validationSchema.fullName,
  email: validationSchema.email,
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});

const myuser = {
  id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
  name: "Charlie Bellow",
  password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
  email: "email@email.com",
  avatar: null,
  isAdmin: false,
  created_at: "2023-03-22T16:19:14.843Z",
  permissions: [],
  roles: [],
};

// ! criar rota pra alterar senha / esquecer
function CardUserInfo() {
  const { errorMessage, successMessage } = useMessage();
  const [user, setUser] = useState<User>();

  const token = localStorage.getItem("token");
  // entender pq não tá pegando o usuario
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserId(myuser.id, token as string);
      setUser(response);
    };
    fetchData();
  }, [token]);

  const isAdmin = true;

  const router = useRouter();

  return (
    <div className="mx-4">
      <div
        className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
      >
        <div className="pl-9">
          <CardTitleImage
            title="Informações do Usuário"
            srcimage={"https://www.github.com/arthwrvl.png"}
            alt={"Imagem de perfil"}
          />
        </div>
        <div className="mx-9 mb-10 mt-4">
          <CardLine />
        </div>
        {user ? (
          <Formik
            initialValues={{
              name: user.name,
              email: user.email,
              password: "********",
            }}
            validationSchema={validate}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log("submit:", values);

                successMessage("Chamado criado com sucesso!");
                //alert(JSON.stringify(values, null, 2));
                actions.resetForm();
                //setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form action="" className="mx-14 flex flex-col gap-9">
                <div className="flex flex-col justify-center gap-9 lg:flex-row lg:gap-x-13">
                  <CardLabelInputShowInfo
                    label="Nome Completo"
                    name="name"
                    type="text"
                    inputid="name"
                    width="lg:w-80 w-full"
                    disabled={user.name ? true : false}
                  />
                  <CardLabelInputShowInfo
                    label="E-mail"
                    type="email"
                    name="email"
                    inputid="email"
                    width="lg:w-80 w-full"
                    disabled={user.name ? true : false}
                  />
                </div>
                <div className="flex flex-col gap-9 lg:flex-row lg:gap-x-13">
                  <CardLabelInputShowInfo
                    label="Senha"
                    type="password"
                    name="password"
                    inputid="****"
                    width="lg:w-80 w-full"
                    disabled={user.name ? true : false}
                  />
                </div>
                <div className="mt-10 flex justify-end gap-x-3.5 ">
                  <Link href="./update">
                    <Button theme="primary" type="button">
                      Alterar
                    </Button>
                  </Link>
                  {isAdmin ? (
                    <Button title="Excluir" theme="secondary" />
                  ) : (
                    <></>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="flex justify-center">
            <Spinner size="lg" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardUserInfo;
