"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";

import { Button } from "@/components/Buttons/Button";
import { CardLine } from "@/components/Cards/CardLine";
import { CardTitle } from "@/components/Cards/CardTitle";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";

import { postGroup } from "@/Utils/server/postInfo";
import { validationSchema } from "@/Utils/validations";

import { useMessage } from "@/Contexts/MessageContext";

const validate = yup.object().shape({
  description: validationSchema.titleGroup,
});

type FormValues = yup.InferType<typeof validate>;

export default function CreateGroupForm() {
  const { errorMessage, successMessage } = useMessage();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      await postGroup(values);
      successMessage("Categoria criada com sucesso!");
      actions.resetForm();
    } catch (error) {
      errorMessage("Algo deu errado, tente novamente.");
    }
  };

  return (
    <div className="mx-4">
      <div className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block lg:w-202 lg:max-w-card">
        <div className="pl-9 pt-8">
          <CardTitle title="Criar Categoria" />
        </div>
        <div className="mx-9 mb-10 mt-4">
          <CardLine />
        </div>
        <Formik
          initialValues={{
            description: "",
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form autoComplete="on">
              <div className="mx-14 flex flex-col gap-9">
                <div className="">
                  <CardLabelInput
                    label="Nome da Categoria"
                    name="description"
                    type="text"
                    width="w-full"
                    inputid="description"
                  />
                </div>
              </div>
              <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
                <Button
                  title={"Criar"}
                  theme="primaryAction"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  isSubmitting={isSubmitting}
                />
                <Button
                  title="Cancelar"
                  theme="secondaryAction"
                  isSubmitting={false}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
