"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input } from "@/components/ui";

import { useMessage } from "@/hooks";

import { postGroup } from "@/Utils/server/postInfo";
import { validationSchema } from "@/Utils/validations";

const formSchema = yup.object().shape({
  description: validationSchema.titleGroup,
});

type FormValues = yup.InferType<typeof formSchema>;

export default function CreateGroupForm() {
  const { errorMessage, successMessage } = useMessage();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      description: "",
    },

    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await postGroup(values);
      successMessage("Categoria criada com sucesso!");
    } catch (error) {
      errorMessage("Algo deu errado, tente novamente.");
    }
  };

  return (
    <div className="mx-4">
      <CardGeneric.Root>
        <CardGeneric.Header>
          <CardGeneric.Title variant="h3" className="text-lg">
            Criar Categoria
          </CardGeneric.Title>
        </CardGeneric.Header>
        <CardGeneric.Separator />
        <CardGeneric.Content className="bg-transparent">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-14 flex flex-col gap-9">
              <div className="">
                <Input
                  {...register("description")}
                  label="Nome da Categoria"
                  type="text"
                  errorMessage={errors.description?.message}
                />
              </div>
            </div>
            <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
              <Button
                theme="primary"
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
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
