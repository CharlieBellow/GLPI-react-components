"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button, button } from "@/components/Buttons/Button";
import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Eye, EyeSlash } from "@/components/icons";
import { Input } from "@/components/ui";

import { validationSchema } from "@/Utils/validations";

import { useMessage } from "@/Contexts/MessageContext";

const formSchema = yup.object().shape({
  email: validationSchema.email,
  password: yup.string().required("Senha é obrigatória"),
});

type FormValues = yup.InferType<typeof formSchema>;

export function FormLogin() {
  const { successMessage, errorMessage } = useMessage();
  const [showInput, setShowInput] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  });

  const handleShowPass = () => setShowInput((prev) => !prev);

  const onSubmit = async (values: FormValues) => {
    await signIn("credentials", { ...values, redirect: false }).then((res) => {
      if (res && res.error) {
        errorMessage(res.error!);
        return;
      }

      successMessage(
        "Login realizado com sucesso! Estamos lhe redirecionando..."
      );

      router.push("/dashboard");
    });
  };

  return (
    <CardGeneric.Root className="z-10 w-full max-w-md p-8">
      <CardGeneric.Header className="mb-8 justify-center">
        <CardGeneric.Title>Fazer Login</CardGeneric.Title>
      </CardGeneric.Header>

      <CardGeneric.Content className="p-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <Input
              {...register("email")}
              type="email"
              label="Email"
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="mb-8">
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
          <div className="flex flex-col justify-center">
            <Button
              theme="primary"
              type="submit"
              disabled={isSubmitting || !isValid}
              isLoading={isSubmitting}
            >
              Entrar
            </Button>

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
        </form>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
