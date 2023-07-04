"use client";

import { useState } from "react";
import Link from "next/link";

import * as yup from "yup";
import { Form, Formik, FormikHelpers } from "formik";
import { Eye, EyeSlash } from "phosphor-react";

import { validationSchema } from "@/Utils/validations";
import { Button } from "@/components/Buttons/Button";
import { CardTitle } from "@/components/Cards/CardTitle";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";

const validate = yup.object().shape({
  fullName: validationSchema.fullName,
  email: validationSchema.email,
  confirmEmail: validationSchema.confirmEmail,
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});

type FormValues = yup.InferType<typeof validate>;

export function CardSignUp() {
  const [showInput, setShowInput] = useState(true);

  const handleShowPass = () => setShowInput((prev) => !prev);

  const handleSubmit = (
    _values: FormValues,
    _actions: FormikHelpers<FormValues>
  ) => {
    // TODO: submit form data to server and handle response
  };

  return (
    <div className="container m-auto h-auto w-100  rounded-lg bg-white-ice shadow-card">
      <div className="pb-8 pl-6 pt-7 text-center">
        <CardTitle title="Criar Conta" />
      </div>
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
                title="Cadastrar"
                theme="primary"
                type="submit"
                disabled={isSubmitting || !isValid}
                isSubmitting={isSubmitting}
              />
              <Link
                href="/signup"
                className="py-5 text-center text-base font-semibold text-blue-ufal"
              >
                Fazer login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
