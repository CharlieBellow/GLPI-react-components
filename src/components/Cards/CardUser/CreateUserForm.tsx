import { useEffect, useState } from "react";

import { Form, Formik } from "formik";
import * as yup from "yup";

import { useMessage } from "../../../Contexts/MessageContext";
import { validationSchema } from "../../../Utils/validations";
import { Button } from "../../Buttons/Button";
import { CardLine } from "../../Cards/CardLine";
import { CardTitle } from "../../Cards/CardTitle";
import { CardLabelInput } from "../../Inputs/CardLabelInput";
import { usersList } from "./User";

const validate = yup.object().shape({
  name: validationSchema.name,
  email: validationSchema.email,
});

export const BasicForm = () => {
  const [users, setUsers] = useState(usersList);
  const { errorMessage, successMessage } = useMessage();

  useEffect(() => {
    const usersStorage = localStorage.getItem("users");

    if (usersStorage) {
      setUsers(JSON.parse(usersStorage));
    }

    console.log("lista:", usersStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="mx-4">
      <div
        className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
      >
        <div className="pl-9 pt-8">
          <CardTitle title="title" />
        </div>

        <div className="mx-9 mb-10 mt-4">
          <CardLine />
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            date: new Date()
              .toLocaleTimeString("pt-br", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
              .substr(0, 10)
              //.replace(new RegExp("/", 'g'),"-" )
              .toString(),
            time: new Date()
              .toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
              .toString(),
            id: new Date()
              .toLocaleTimeString("pt-br", {
                second: "2-digit",
              })
              .toString(),
          }}
          validationSchema={validate}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log("submit:", values);

              setUsers([...users, values]);
              console.log("users: ", users);

              successMessage("Chamado criado com sucesso!");
              //alert(JSON.stringify(values, null, 2));
              actions.resetForm();
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="on">
              <div className="mx-14 flex flex-col gap-9">
                <div className="">
                  <CardLabelInput
                    label="Nome"
                    name="name"
                    type="text"
                    width="w-full"
                    inputid="name"
                  />
                </div>
                <div className="">
                  <CardLabelInput
                    label="email"
                    name="email"
                    type="email"
                    width="w-full"
                    inputid="email"
                  />
                </div>
              </div>

              <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
                <Button theme="primary" type="submit" disabled={isSubmitting}>
                  Solicitar
                </Button>
                <Button theme="secondary">Cancelar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/*<>
				{usersList.map((user: any) => {
					return (
						<User
							nome={user.name}
							date={user.date}
							time={user.time}
							email={user.email}
							id={user.time}
							key={user.time}
						/>
					);
				})}
				{console.log(usersList)}
			</>*/}
    </div>
  );
};
