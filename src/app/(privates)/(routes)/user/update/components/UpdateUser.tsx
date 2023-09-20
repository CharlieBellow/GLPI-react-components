"use client";
import Link from "next/link";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { useHandleApiError, useMessage } from "@/hooks";

import { postUser } from "@/Utils/server/postInfo";

import { User } from "../../../../../../Utils/server/types";
import { validationSchema } from "../../../../../../Utils/validations";


const formSchema = yup.object().shape({
  name: validationSchema.fullName,
  email: validationSchema.email,
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});



type UserProps = {
  user: User;
};

type FormValues = yup.InferType<typeof formSchema>;

export default function UpdateUser({user}: UserProps) {
  const { successMessage } = useMessage();

  const myuser = {
    id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
    name: "Charlie Bellow",
    password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
    email: "email@email.com",
    avatar: user.avatar,
    isAdmin: false,
    created_at: "2023-03-22T16:19:14.843Z",
    permissions: [],
    roles: [],
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      name: user.name,
      email: user.email,
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(formSchema),
  });

  const handleApiError = useHandleApiError();

  const onSubmit = async (values: FormValues) => {
    try {
      await postUser({ ...values });
      successMessage("Informações atualizadas com sucesso!");
      reset();
    } catch (error) {
      handleApiError(error);

    }
  };
  // const isAdmin = true;

  return (
    <div className="mx-4">
      <CardGeneric.Root>
        <CardGeneric.Header>
          <CardGeneric.Title>Atualizar dados do perfil</CardGeneric.Title>
        

          <CardGeneric.Image
            fallbackText="Imagem de perfil"
            url={myuser.avatar}
            editImage
            />
          
        </CardGeneric.Header>

        <CardGeneric.Separator />
        <CardGeneric.Content>
          <form
            action=""
            className="mx-14 flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <Input
                {...register("name")}
                label="Nome Completo"
                type="text"
                disabled={user.name ? true : false}
                errorMessage={errors.name?.message}
              />
              <Input
                label="E-mail"
                type="email"
                {...register("email")}
                errorMessage={errors.email?.message}
                disabled={user.name ? true : false}
              />

              <Input
                label="Senha"
                type="password"
                {...register("password")}
                errorMessage={errors.password?.message}
              />
              <Input
                label="Confirme sua senha"
                type="password"
                {...register("confirmPassword")}
                errorMessage={errors.confirmPassword?.message}
              />
            </div>
            <div className="mt-10 flex justify-end gap-x-3.5 ">
              <div className="flex items-end gap-4">
                <Button
                  title="Alterar"
                  theme="primary"
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                />

                <Link href="./">
                  <Button theme="secondary">Cancelar</Button>
                </Link>

                <Button type="button" theme="danger">
                  Excluir Conta
                </Button>
              </div>
            </div>
          </form>
        </CardGeneric.Content>
      </CardGeneric.Root>
    </div>
  );
}
