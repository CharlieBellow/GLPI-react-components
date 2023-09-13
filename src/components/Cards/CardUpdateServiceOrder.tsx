"use client";
import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input, TipTapTextEditor } from "@/components/ui";

import { useHandleApiError, useMessage } from "@/hooks";

import { updateServiceOrder } from "@/services/service-book/service-order";

import { ServiceOrder } from "@/Utils/server/types";

import { validationSchema } from "../../Utils/validations";

const formSchema = yup.object().shape({
  description: validationSchema.description,
  title: validationSchema.title,
  patrimonyId: validationSchema.patrimony,
});

type FormValues = yup.InferType<typeof formSchema>;

type CardUpdateServiceOrderProps = {
  serviceOrderInfo: ServiceOrder;
  serviceOrderId: string;
};

export default function CardUpdateServiceOrder({
  serviceOrderInfo,
  serviceOrderId,
}: CardUpdateServiceOrderProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      description: serviceOrderInfo?.description,
      title: serviceOrderInfo?.service.title,
      patrimonyId: serviceOrderInfo?.patrimonyId,
    },
    resolver: yupResolver(formSchema),
  });

  const navigator = useRouter();

  const { successMessage } = useMessage();

  const handleApiError = useHandleApiError();

  const onSubmit = async (values: FormValues) => {
    try {
      await updateServiceOrder({ ...values, id: serviceOrderId });
      successMessage("Serviço atualizado com sucesso.");
    } catch (err) {
      handleApiError(err);
    }

    console.log("values", values);
  };

  return (
    <>
      <div className="mx-4">
        <CardGeneric.Root>
          <CardGeneric.Header className="pl-9 pt-8">
            <CardGeneric.Title>Editar ordem de serviço</CardGeneric.Title>
          </CardGeneric.Header>
          <CardGeneric.Separator />
          <CardGeneric.Content>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mx-14 flex flex-col gap-9">
                <div className="">
                  <Input
                    {...register("title")}
                    label="Título"
                    type="text"
                    disabled={serviceOrderInfo.service.title ? true : false}
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
                  {serviceOrderInfo.service.isPatromonyIdRequired ? (
                    <Input
                      {...register("patrimonyId")}
                      label="Patrimônio"
                      errorMessage={errors.patrimonyId?.message}
                      type="text"
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {/* 
                  
                  // falta implementar a verificação do papel do usuário para ver se ele pode alterar o responsável pelo serviço (o ideal é que seja em outra tela ou em um modal. pq essa vai ser para o usuário editar alguma coisa no corpo da ordem de serviço.
                  {serviceOrderInfo ? (
                    // && user.isAdmin
                    <FieldSelect
                    label="Responsável"
                    name="respponsibleId"
                    default={
                      serviceOrderInfo.responsibleId
                      ? ""
                      : "Selecione o usuário responsável"
                    }
                    // é necessário passar um lista de usuários que podem ser atibuídos aqui, no caso, cada adm do setor vá ter uma lista de subordinados que ele pode atribuir tarefas
                    listitems={users.map((user) => user.name)}
                    />
                    ) : (
                      <></>
                    )} */}
                </div>
                <div>
                  {/* {serviceOrderInfo.status ? (
                          // && user.isAdmin
                          <FieldSelect
                            label="status"
                            name="status"
                            listitems={status}
                          />
                          ) : (
                          <></>
                        )} */}
                </div>
              </div>
              <div className="mt-10 grid justify-end">
                <div className="flex gap-x-3.5">
                  <Button
                    isLoading={isSubmitting}
                    theme="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Salvar
                  </Button>
                  <Button
                    theme="secondary"
                    type="button"
                    onClick={() => navigator.back()}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </form>
          </CardGeneric.Content>
        </CardGeneric.Root>
      </div>
    </>
  );
}
