"use client";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { validationSchema } from "@/Utils/validations";

import { Service } from "@/types";

import { useMessage } from "@/Contexts/MessageContext";

import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardGeneric } from "./CardGeneric";

export const lettersOnly = /[^a-zA-Z]/g;
let requiredValidation;
const validate = yup.object().shape({
  description: validationSchema.description,
  title: validationSchema.titleGroup,
  // serviceLocal: validationSchema.serviceLocal,
  patrimonyId: validationSchema.patrimony,
});

const validateWhitOutPatrimony = yup.object().shape({
  description: validationSchema.description,
  title: validationSchema.titleGroup,
  // serviceLocal: validationSchema.serviceLocal,
  // patrimony: validationSchema.patrimony,
});

type CardCreateServiceOrderProps = {
  service: Service;
};
export default function CardCreateServiceOrder({
  service,
}: CardCreateServiceOrderProps) {
  const myuser = {
    id: "972e1f58-95c6-4582-ac05-fb385dbb557b",
    status: "Ativo",
    cpf: "08551062476",
    name: "Charlie Bellow de Oliveira",
    birthDate: "2023-03-02T17:00:26.157Z",
    gender: "M",
    created_at: "2023-03-02T20:00:24.955Z",
  };

  const { errorMessage, successMessage } = useMessage();

  if (service?.isPatromonyIdRequired) {
    requiredValidation = validationSchema.patrimony;
  }

  console.log(service);
  return (
    <>
      <CardGeneric.Root>
        <CardGeneric.Header>
          <CardGeneric.Title>Criar ordem de serviço</CardGeneric.Title>
        </CardGeneric.Header>

        <CardGeneric.Separator />

        <CardGeneric.Content>
          <Formik
            validateOnMount
            initialValues={{
              // description: "",
              serviceId: service.id,
              patrimonyId: service.isPatromonyIdRequired ? "" : "notrequired",
              requesterId: myuser.id,
              respponsibleId: myuser.id,
              // serviceLocal:"",
              title: service.title,
              status: "Aberto",
              estimetadAt: new Date(),
              closedAt: new Date(),
            }}
            validationSchema={validate}
            onSubmit={(values, actions) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, isValid, errors, touched }) => (
              <Form autoComplete="on">
                <div className="mx-14 flex flex-col gap-9">
                  <div className="">
                    <CardLabelInput
                      label="Título"
                      name="title"
                      type="text"
                      width="w-full"
                      inputid="title"
                      // disabled={service && service.title ? true : false}
                    />
                  </div>
                  {/* <div className="">
                        <CardLabelTextareaTiny
                          label="Descrição"
                          type="textarea"
                          name="description"
                          textareaid="description"
                        />

                        {errors.description && touched.description ? (
                          <span className="text-sm text-red-ufal">
                            {errors.description}
                          </span>
                        ) : null}
                      </div> */}
                  <div>
                    {service && service.isPatromonyIdRequired ? (
                      <CardLabelInput
                        label="Patrimônio"
                        name="patrimonyId"
                        type="text"
                        width="w-full"
                        inputid="patrimonyId"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="mt-10 grid justify-end ">
                  <div className="flex gap-x-3.5">
                    <Button
                      theme="primary"
                      type="submit"
                      // disabled={isSubmitting || !isValid}
                    >
                      Criar
                    </Button>
                    <Button theme="secondary" type="button">
                      Cancelar
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </CardGeneric.Content>
      </CardGeneric.Root>
    </>
  );
}
