"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Eye, EyeSlash } from "@/components/icons";
import { Button, button, Input } from "@/components/ui";

import { useHandleApiError } from "@/hooks/useHandleApiError";

import { createUser } from "@/services/users";

import { validationSchema } from "@/Utils/validations";

import { useMessage } from "@/Contexts/MessageContext";

const formSchema = yup.object().shape({
  fullName: validationSchema.fullName,
  email: validationSchema.email,
  password: validationSchema.password,
  confirmEmail: validationSchema.confirmEmail,
  confirmPassword: validationSchema.confirmPassword,
});

type FormValues = yup.InferType<typeof formSchema>;

export function FormSignUp() {
  const [showInput, setShowInput] = useState(false);

  const router = useRouter();

  const { successMessage } = useMessage();
  const handleApiError = useHandleApiError();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      password: "",
      email: "",
      confirmEmail: "",
      confirmPassword: "",
    },
    resolver: yupResolver(formSchema),
  });

  const handleShowPass = () => setShowInput((prev) => !prev);

  const onSubmit = async (values: FormValues) => {
    try {
      await createUser({
        email: values.email,
        password: values.password,
        name: values.fullName,
      });

      successMessage(
        "Usuário criado com sucesso!, redirecionando para login..."
      );
      router.push("/login");
    } catch (err) {
      handleApiError(err);
    }
  };

  return (
    <CardGeneric.Root className="z-10 w-full max-w-md p-8">
      <CardGeneric.Header className="mb-8 justify-center">
        <CardGeneric.Title>Criar Conta</CardGeneric.Title>
      </CardGeneric.Header>
      <CardGeneric.Content className="p-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <Input
              {...register("fullName")}
              type="text"
              label="Nome completo"
              errorMessage={errors.fullName?.message}
            />
          </div>
          <div className="mb-6">
            <Input
              {...register("email")}
              type="email"
              label="Email"
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="mb-6">
            <Input
              {...register("confirmEmail")}
              type="email"
              label="Confirme seu email"
              errorMessage={errors.confirmEmail?.message}
            />
          </div>
          <div className="mb-6">
            <Input
              {...register("password")}
              type={showInput ? "text" : "password"}
              label="Senha"
              errorMessage={errors.password?.message}
              renderEndIcon={(className) => (
                <Button
                  type="button"
                  theme="textOnly"
                  className={`${className} px-0`}
                  onClick={handleShowPass}
                >
                  {showInput ? (
                    <EyeSlash className={className} />
                  ) : (
                    <Eye className={className} />
                  )}
                </Button>
              )}
            />
          </div>
          <div className="mb-8">
            <Input
              {...register("confirmPassword")}
              type={showInput ? "text" : "password"}
              label="Confirmar senha"
              errorMessage={errors.password?.message}
              renderEndIcon={(className) => (
                <Button
                  type="button"
                  theme="textOnly"
                  className={`${className} px-0`}
                  onClick={handleShowPass}
                >
                  {showInput ? (
                    <EyeSlash className={className} />
                  ) : (
                    <Eye className={className} />
                  )}
                </Button>
              )}
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Button
              theme="primary"
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Cadastrar
            </Button>
            <Link href="/login" className={button({ theme: "textOnly" })}>
              Já tem uma conta ? Fazer login
            </Link>
          </div>
        </form>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
