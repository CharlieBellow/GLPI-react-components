// import { useState } from "react";

import router from "next/router";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button, Input } from "@/components/ui";

import { getServiceOrder } from "../../Utils/server/getInfo";
import { validationSchema } from "../../Utils/validations";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";

const formSchema = yup.object().shape({
  description: validationSchema.description,
  // serviceLocal: validationSchema.serviceLocal,
  patrimonyId: validationSchema.patrimony,
});

type FormValues = yup.InferType<typeof formSchema>;

// const validateWhitOutPatrimony = yup.object().shape({
//   description: validationSchema.description,
//   // serviceLocal: validationSchema.serviceLocal,
// });

function CardUpdateServiceOrder() {
  // const { errorMessage, successMessage } = useMessage();

  // const { serviceOrderId } = params();
  // const [serviceOrderInfo, setServiceOrderInfo] = useState<ServiceOrder>();
  // const [users, setUsers] = useState<User[]>([]);
  // const [newStatus, setNewStatus] = useState<string>(""); //console.log("info", serviceOrderInfo)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      description: serviceOrderInfo?.description,
      id: serviceOrderInfo?.id,
      patrimonyId: serviceOrderInfo?.service.isPatromonyIdRequired
        ? serviceOrderInfo.patrimonyId
        : "notrequired",
      respponsibleId: serviceOrderInfo?.responsibleId,
      status: serviceOrderInfo?.status,
      estimetadAt: serviceOrderInfo?.estimatedAt,
      //closedAt: serviceOrderInfo?.createdAt
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    const response = await getServiceOrder(serviceOrderId);

    // const userResponse = await getAllUsers();

    if (response.isPatromonyIdRequired) {
      requiredValidation = validationSchema.patrimony;
    }

    console.log("values", values);
  };

  // const status = [
  //   "Aberto",
  //   "Pendente",
  //   "Em Execução",
  //   "Aguardando Peças",
  //   "Fechado",
  // ];

  // console.log("infos", users);

  return (
    <>
      <div className="mx-4">
        <div
          className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
        >
          <>
            <div className="pl-9 pt-8">
              <CardTitle title="Editar ordem de serviço" />
            </div>
            <div className="mx-9 mb-10 mt-4">
              <CardLine />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mx-14 flex flex-col gap-9">
                <div className="">
                  <Input
                    {...register("description")}
                    label="Título"
                    type="text"
                    disabled={
                      serviceInfo && serviceOrderInfo.description ? true : false
                    }
                    errorMessage={errors.description}
                  />
                </div>
                <div className="">
                  <Input
                    {...resgister("description")}
                    label="Descrição"
                    type="textarea"
                  />
                </div>
                <div>
                  {serviceOrderInfo &&
                  serviceOrderInfo.service.isPatromonyIdRequired ? (
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
                  {/* {serviceOrderInfo ? (
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
              <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
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
                  onClick={() => router.back()}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </>
        </div>
      </div>
    </>
  );
}
export default CardUpdateServiceOrder;
