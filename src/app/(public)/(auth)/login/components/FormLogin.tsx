"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Form, Formik } from "formik";
import * as yup from "yup";

import { Button, button } from "@/components/Buttons/Button";
import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Eye, EyeSlash } from "@/components/icons";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";

import { validationSchema } from "@/Utils/validations";

import { useMessage } from "@/Contexts/MessageContext";

const formSchema = yup.object().shape({
  email: validationSchema.email,
  password: yup.string().required("Senha é obrigatória"),
});

export function FormLogin() {
  const { successMessage, errorMessage } = useMessage();
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();

  const handleShowPass = () => setShowInput((prev) => !prev);

  const handleSubmit = async (values: yup.InferType<typeof formSchema>) => {
    await signIn("credentials", { ...values, redirect: false }).then((res) => {
      if (res && res.error) {
        errorMessage(res.error!);
      }

      successMessage(
        "Login realizado com sucesso! Estamos lhe redirecionando..."
      );

      router.push("/dashboard");
    });
  };

  return (
    <CardGeneric.Root className=" m-auto">
      <CardGeneric.Header className="mt-4">
        <CardGeneric.Title>Fazer Login</CardGeneric.Title>
      </CardGeneric.Header>

      <CardGeneric.Content>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
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
                  isLoading={isSubmitting}
                />

                <Button theme="textOnly">Esqueci a senha</Button>

                <Link
                  href="/signup"
                  className={button({
                    theme: "textOnly",
                  })}
                >
                  Não tem uma conta? Cadastre-se
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
