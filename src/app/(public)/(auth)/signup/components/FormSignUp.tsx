"use client";

import { useState } from "react";

import Link from "next/link";

import { Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";

import { Button, button } from "@/components/Buttons/Button";
import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Eye, EyeSlash } from "@/components/icons";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";

import { validationSchema } from "@/Utils/validations";

const validate = yup.object().shape({
  fullName: validationSchema.fullName,
  email: validationSchema.email,
  confirmEmail: validationSchema.confirmEmail,
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});

type FormValues = yup.InferType<typeof validate>;

export function FormSignUp() {
  const [showInput, setShowInput] = useState(true);

  const handleShowPass = () => setShowInput((prev) => !prev);

  const handleSubmit = (
    _values: FormValues,
    _actions: FormikHelpers<FormValues>
  ) => {
    // TODO: submit form data to server and handle response
  };

  return (
    <CardGeneric.Root className="m-auto">
      <CardGeneric.Header className="mt-4">
        <CardGeneric.Title>Criar Conta</CardGeneric.Title>
      </CardGeneric.Header>
      <CardGeneric.Content>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <div className="mb-6 px-10">
                <CardLabelInput
                  label="Nome Completo"
                  name="fullName"
                  width="w-full"
                  type="name"
                />
              </div>
              <div className="mb-6 px-10">
                <CardLabelInput
                  label="Email"
                  name="email"
                  width="w-full"
                  type="email"
                />
              </div>
              <div className="mb-6 px-10">
                <CardLabelInput
                  label="Confirme seu Email"
                  name="confirmEmail"
                  width="w-full"
                  type="email"
                />
              </div>
              <div className="mb-6 px-10">
                <CardLabelInput
                  label="Senha"
                  name="password"
                  width="w-full"
                  type={showInput ? "text" : "password"}
                  icon={
                    showInput ? (
                      <EyeSlash
                        onClick={handleShowPass}
                        className="absolute ml-72 flex"
                        weight="bold"
                      />
                    ) : (
                      <Eye
                        className="absolute ml-72 flex"
                        weight="bold"
                        onClick={handleShowPass}
                      />
                    )
                  }
                />
              </div>
              <div className="mb-6 px-10">
                <CardLabelInput
                  label="Confirme sua Senha"
                  name="confirmPassword"
                  width="w-full"
                  type={showInput ? "text" : "password"}
                  icon={
                    showInput ? (
                      <EyeSlash
                        onClick={handleShowPass}
                        className="absolute ml-72 flex"
                        weight="bold"
                      />
                    ) : (
                      <Eye
                        className="absolute ml-72 flex"
                        weight="bold"
                        onClick={handleShowPass}
                      />
                    )
                  }
                />
              </div>

              <div className="mx-11 mt-8 flex  flex-col justify-center">
                <Button
                  theme="primary"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  isLoading={isSubmitting}
                >
                  Cadastrar
                </Button>
                <Link href="/signup" className={button({ theme: "textOnly" })}>
                  Já tem uma conta ? Fazer login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
