"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui/Button";

import { useHandleApiError } from "@/hooks";

import { postUser } from "@/services/user";

import { User } from "../../../../../../Utils/server/types";
import { validationSchema } from "../../../../../../Utils/validations";

const formSchema = yup.object().shape({
  fullName: validationSchema.fullName,
  email: validationSchema.email,
  password: validationSchema.password,
  confirmPassword: validationSchema.confirmPassword,
});

type UserInfoProps = {
  user: User;
};

type FormValues = yup.InferType<typeof formSchema>;

// ! criar rota pra alterar senha / esquecer
function UserInfo(user: UserInfoProps) {
  const handleApiError = useHandleApiError();

  const {
    register,

    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      fullName: user.user.name,
      email: user.user.email,
      password: user.user.password,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await postUser({ ...values });
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div className="mx-4">
      <CardGeneric.Root>
        <CardGeneric.Header>
          <CardGeneric.Title>Informações do Usuário</CardGeneric.Title>
          <CardGeneric.Image
            fallbackText="Imagem do usuário"
            url="https://www.github.com/arthwrvl.png"
          />
        </CardGeneric.Header>

        <CardGeneric.Separator />

        <CardGeneric.Content>
          <form
            className="mx-14 flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                {...register("fullName")}
                errorMessage={errors.fullName?.message}
                label="Nome Completo"
                type="text"
                disabled={user.user.name ? true : false}
              />
              <Input
                {...register("email")}
                errorMessage={errors.email?.message}
                label="E-mail"
                type="email"
                disabled={user.user.name ? true : false}
              />

              <Input
                {...register("password")}
                errorMessage={errors.password?.message}
                label="Senha"
                type="password"
                disabled={user.user.name ? true : false}
              />
            </div>
            <div className="mt-10 flex justify-end  ">
              <div className="flex-end flex gap-x-3.5">
                <Link href="./update">
                  <Button theme="primary" type="button" disabled={isSubmitting}>
                    Alterar
                  </Button>
                </Link>

                <Button title="Excluir" theme="secondary" />
              </div>
            </div>
          </form>
        </CardGeneric.Content>
      </CardGeneric.Root>
    </div>
  );
}

export default UserInfo;
