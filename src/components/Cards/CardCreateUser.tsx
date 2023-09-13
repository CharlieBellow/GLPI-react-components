"use client"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input } from "@/components/ui";

import { useHandleApiError, useMessage } from "@/hooks";

import { postUser } from "../../Utils/server/postInfo";
import { validationSchema } from "../../Utils/validations";

const formSchema = yup.object().shape({
  name: validationSchema.fullName,
  email: validationSchema.email,
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});

type FormValues = yup.InferType<typeof formSchema>;

export function CardCreateUser() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(formSchema),
  });

  const { successMessage } = useMessage();
  const handleApiError = useHandleApiError();

  const onSubmit = async (values: FormValues) => {
    try {
      await postUser({ ...values });
      successMessage("Usuário criado com sucesso.");
      reset();
      console.log("submit:", values);
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div className="mx-4">
      <CardGeneric.Root>
        <CardGeneric.Header>
          <CardGeneric.Title>Criar Usuário</CardGeneric.Title>
        </CardGeneric.Header>

        <CardGeneric.Separator />
        <CardGeneric.Content>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid grid-cols-2 gap-6">

              <Input
                {...register("name")}
                label="Nome Completo"
                errorMessage={errors.name?.message}
                type="text"
              />
              <Input label="E-mail" type="email" {...register("email")} />
            
            
              <Input label="Senha" type="password" {...register("password")} />
              <Input
                label="Confirmar Senha"
                type="password"
                {...register("confirmPassword")}
                />
              </div>
           
            <div className="mt-10 flex justify-end gap-x-3.5">
              <Button
                theme="primary"
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                Criar
              </Button>
              <Button theme="secondary">Cancelar</Button>
            </div>
          </form>
        </CardGeneric.Content>
      </CardGeneric.Root>
    </div>
  );
}

export default CardCreateUser;
