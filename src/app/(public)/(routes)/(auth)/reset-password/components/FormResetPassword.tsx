"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input } from "@/components/ui";

import { useHandleApiError, useMessage } from "@/hooks";

import { resetPassword } from "@/services/users";

import { validationSchema } from "@/Utils/validations";

const formSchema = Yup.object().shape({
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});

type FormValues = Yup.InferType<typeof formSchema>;

type FormResetPasswordProps = { token: string };

export function FormResetPassword({ token }: FormResetPasswordProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(formSchema),
  });

  const handleApiError = useHandleApiError();
  const { successMessage } = useMessage();

  const onSubmit = async (data: FormValues) => {
    try {
      const { password } = data;
      await resetPassword({ password, token });
      successMessage(
        "Senha alterada com sucesso, você será redirecionado para a página de login"
      );
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <CardGeneric.Root className="z-10 w-full max-w-sm">
      <CardGeneric.Header>
        <div>
          <CardGeneric.Title>Restaurar Senha</CardGeneric.Title>
          <CardGeneric.Description>
            Digite sua nova senha
          </CardGeneric.Description>
        </div>
      </CardGeneric.Header>
      <CardGeneric.Separator />
      <CardGeneric.Content className="p-0 pt-4">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("password")}
            label="Senha"
            errorMessage={errors.password?.message}
          />
          <Input
            {...register("confirmPassword")}
            label="Confirmar senha"
            errorMessage={errors.confirmPassword?.message}
          />

          <Button type="submit" isLoading={isSubmitting}>
            Enviar
          </Button>
        </form>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
