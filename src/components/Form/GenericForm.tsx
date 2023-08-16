"use client";
import { ReactNode } from "react";

import { HtmlAttributes } from "@stitches/react/types/css";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { useMessage } from "../../Contexts/MessageContext";
//import { useState } from "react";
import { validationSchema } from "../../Utils/validations";
import { Button } from "../Buttons/Button";
import { CardLine } from "../Cards/CardLine";
import { CardTitle } from "../Cards/CardTitle";

const validate = yup.object().shape({
  name: validationSchema.name,
});

type GenericFormProps = {
  children: ReactNode;
  initialValues: object;
  validation: object;
  onSubmit: ReactNode;
  actionSubmit: string;
  formTitle?: string;
  button?: boolean;
};
export const GenericForm = ({
  children,
  initialValues,
  validation,
  onSubmit,
  actionSubmit,
  formTitle,
  button
}: GenericFormProps & HtmlAttributes<HTMLElement>) => {
  const { errorMessage, successMessage } = useMessage();
  return (
    <div className="mx-4">
      <div
        className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
      >
        <div className="pl-9 pt-8">
          <CardTitle title={formTitle} />
        </div>

        <div className="mx-9 mb-10 mt-4">
          <CardLine />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log("submit:", values);
              successMessage("Chamado criado com sucesso!");
              //alert(JSON.stringify(values, null, 2));
              onSubmit;
              actions.resetForm();
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="on">
              <div className="mx-14 flex flex-col gap-9">{children}</div>

                { button &&
                  
                  <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
                <Button
                  title={actionSubmit}
                  theme="primaryAction"
                  type="submit"
                  disabled={isSubmitting}
                />
                <Button title="Cancelar" theme="secondaryAction" />
              </div>
                }
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
