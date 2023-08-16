"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";

import { Button } from "@/components/Buttons/Button";
import { CardGeneric } from "@/components/Cards/CardGeneric";
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
      <CardGeneric.Root>
        <CardGeneric.Header>
          <CardGeneric.Title variant="h3" className="text-lg">
            Criar Categoria
          </CardGeneric.Title>
        </CardGeneric.Header>
        <CardGeneric.Separator />
        <CardGeneric.Content className="bg-transparent">
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
        </CardGeneric.Content>
      </CardGeneric.Root>
    </div>
  );
}
