"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller,useForm } from "react-hook-form";
import * as yup from "yup";

import { Button, Input, TipTapTextEditor } from "@/components/ui";

import { useMessage } from "@/hooks";

import { postServiceOrder } from "@/Utils/server/postInfo";
import { validationSchema } from "@/Utils/validations";

import { Service } from "@/types";

import { CardGeneric } from "./CardGeneric";

export const lettersOnly = /[^a-zA-Z]/g;

const formSchema = yup.object().shape({
  description: validationSchema.description,
  title: validationSchema.titleGroup,
  // serviceLocal: validationSchema.serviceLocal,
  patrimonyId: validationSchema.patrimony,
});

type CardCreateServiceOrderProps = {
  service: Service;
};

type FormValues = yup.InferType<typeof formSchema>;

export default function CardCreateServiceOrder({
  service,
}: CardCreateServiceOrderProps) {
  const myuser = {
    id: "972e1f58-95c6-4582-ac05-fb385dbb557b",
    status: "Ativo",
    cpf: "08551062476",
    name: "Charlie Bellow de Oliveira",
    birthDate: "2023-03-02T17:00:26.157Z",
    gender: "M",
    created_at: "2023-03-02T20:00:24.955Z",
  };

  console.log(service);

  const { successMessage } = useMessage();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      description: "",
      serviceId: service.id,
      patrimonyId: service.isPatromonyIdRequired ? "" : "notrequired",
      requesterId: myuser.id,
      respponsibleId: myuser.id,
      // serviceLocal:"",
      title: service.title,
      status: "Aberto",
      estimetadAt: new Date(),
      closedAt: new Date(),
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    await postServiceOrder(values).then(() => {
      successMessage("Chamado criado com sucesso!");
    });
  };

  return (
    <>
      <CardGeneric.Root>
        <CardGeneric.Header>
          <CardGeneric.Title>Criar ordem de serviço</CardGeneric.Title>
        </CardGeneric.Header>

        <CardGeneric.Separator />

        <CardGeneric.Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-14 flex flex-col gap-9">
              <div className="">
                <Input
                  {...register("title")}
                  label="Título"
                  errorMessage={errors.title?.message}
                  readOnly={service && service.title ? true : false}
                  placeholder={service.title ? service.title : ""}
                />
              </div>
              <div className="">
                <Controller
            name="description"
            control={control}
            render={({ field }) => {
              return (
                <TipTapTextEditor
                  onUpdate={(event) => {
                    field.onChange(event.editor.getHTML());
                  }}
                />
              );
            }}
          />
                        
                      </div> 
              <div>
                {service && service.isPatromonyIdRequired ? (
                  <Input
                    {...register("patrimonyId")}
                    label="Patrimônio"
                    errorMessage={errors.patrimonyId?.message}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="mt-10 grid justify-end ">
              <div className="flex gap-x-3.5">
                <Button theme="secondary" type="button">
                  Cancelar
                </Button>
                <Button theme="primary" type="submit" disabled={isSubmitting}>
                  Criar
                </Button>
              </div>
            </div>
          </form>
        </CardGeneric.Content>
      </CardGeneric.Root>
    </>
  );
}
