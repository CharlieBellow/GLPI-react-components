"use client"
import { GenericForm } from "@/components/Form/GenericForm";
import { ReactNode } from "react";

type FormicGenericPros = {
  children: ReactNode;
  initialValues: object;
  validation: object;
  onSubmit: any;
  actionSubmit: string;
  formTitle: string;
}
export default function FormicGeneric({children, initialValues, validation, onSubmit, formTitle, actionSubmit}: FormicGenericPros ) {

  const handleSubmit = async () => {
    {onSubmit}
  }
  return (
    <>
      <GenericForm
  initialValues={initialValues}
  validation={validation}
  actionSubmit={actionSubmit}
  formTitle={formTitle}
        onSubmit={handleSubmit}
        
      >
        {children}
      </GenericForm>
    </>
  );
}
