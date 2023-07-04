"use client";

import { validationSchema } from "@/Utils/validations";
import { Button } from "@/components/Buttons/Button";
import { CardTitle } from "@/components/Cards/CardTitle";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";
import { Form, Formik } from "formik";
import Link from "next/link";
import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
  email: validationSchema.email,
  password: yup.string().required("Senha é obrigatória"),
});

export function FormLogin() {
  const [showInput, setShowInput] = useState(false);

  const handleShowPass = () => setShowInput((prev) => !prev);

  return (
    <div className="container m-auto h-128 w-100 rounded-lg bg-white-ice shadow-card">
      <div className="pb-10 pl-6 pt-16 text-center">
        <CardTitle title="Fazer Login" />
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={formSchema}
        onSubmit={() => {}}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
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
                label="Senha"
                name="password"
                width="w-full"
                type={showInput ? "text" : "password"}
                icon={
                  showInput ? (
                    <EyeSlash
                      className="absolute right-2 top-1/2 inline-block -translate-y-1/2"
                      weight="bold"
                      onClick={handleShowPass}
                    />
                  ) : (
                    <Eye
                      className="absolute right-2 top-1/2 inline-block -translate-y-1/2"
                      weight="bold"
                      onClick={handleShowPass}
                    />
                  )
                }
              />
            </div>

            <div className="mx-11 mt-13 flex flex-col justify-center">
              <Button
                title="Entrar"
                theme="primary"
                type="submit"
                disabled={isSubmitting || !isValid}
                isSubmitting={isSubmitting}
              />

              <Button title="Esqueci a senha" theme="textOnly" />

              <Link
                href="/signup"
                className="text-center text-base font-semibold text-blue-ufal"
              >
                Novo Cadastro
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
