"use client";

import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input } from "@/components/ui";

import { useHandleApiError, useMessage } from "@/hooks";

import { forgotPassword } from "@/services/users";

import { validationSchema } from "@/Utils/validations";

const formSchema = Yup.object().shape({
  email: validationSchema.email,
});

type FormValues = Yup.InferType<typeof formSchema>;

export function FormForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(formSchema),
  });

  const handleApiError = useHandleApiError();
  const { successMessage } = useMessage();

  const onSubmit = async (data: FormValues) => {
    try {
      await forgotPassword(data.email);
      successMessage(
        "Um email foi enviado para você com as instruções para recuperar sua senha"
      );
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <CardGeneric.Root className="z-10 w-full max-w-sm">
      <CardGeneric.Header>
        <div>
          <CardGeneric.Title>Recuperar senha</CardGeneric.Title>
          <CardGeneric.Description>
            Digite seu email para recuperar sua senha
          </CardGeneric.Description>
        </div>
      </CardGeneric.Header>
      <CardGeneric.Separator />
      <CardGeneric.Content className="p-0 pt-4">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            label="Email"
            errorMessage={errors.email?.message}
          />

          <Button type="submit" isLoading={isSubmitting}>
            Enviar
          </Button>
        </form>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
