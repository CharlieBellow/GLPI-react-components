import { useEffect, useState } from "react";

import router from "next/router";

import { Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { Button } from "../../components/Buttons/Button";
import { CardLabelInput } from "../../components/Inputs/CardLabelInput";
import { CardLabelTextarea } from "../../components/Inputs/CardLabelTextarea";
import { useMessage } from "../../Contexts/MessageContext";
import { getAllUsers, getServiceOrder } from "../../Utils/server/getInfo";
import { putServiceOrder } from "../../Utils/server/putInfo";
import { ServiceOrder, User } from "../../Utils/server/types";
import { validationSchema } from "../../Utils/validations";
import FieldSelect from "../Inputs/FieldSelect";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";

let requiredValidation;
const validate = yup.object().shape({
  description: validationSchema.description,
  // serviceLocal: validationSchema.serviceLocal,
  patrimonyId: validationSchema.patrimony,
});

const validateWhitOutPatrimony = yup.object().shape({
  description: validationSchema.description,
  // serviceLocal: validationSchema.serviceLocal,
});

function CardUpdateServiceOrder() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") as string);
  const { errorMessage, successMessage } = useMessage();

  const { serviceOrderId, titleServiceOrder } = router.query;
  const [serviceOrderInfo, setServiceOrderInfo] = useState<ServiceOrder>();
  const [users, setUsers] = useState<User[]>([]);
  const [newStatus, setNewStatus] = useState<string>(""); //console.log("info", serviceOrderInfo)

  const status = [
    "Aberto",
    "Pendente",
    "Em Execução",
    "Aguardando Peças",
    "Fechado",
  ];

  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const response = await getServiceOrder(
        serviceOrderId as string,
        token as string
      );
      setServiceOrderInfo(response);
      // é necessário passar um lista de usuários que podem ser atibuídos aqui, no caso, cada adm do setor vá ter uma lista de subordinados que ele pode atribuir tarefas
      const userResponse = await getAllUsers(token as string);
      setUsers(userResponse);
      if (response.isPatromonyIdRequired) {
        requiredValidation = validationSchema.patrimony;
      }
    };
    fetchData();
  }, [serviceOrderId, token]);

  console.log("infos", users);

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
            {router.isReady && serviceOrderInfo ? (
              <Formik
                validateOnMount
                initialValues={{
                  description: serviceOrderInfo?.description,
                  id: serviceOrderInfo?.id,
                  patrimonyId: serviceOrderInfo?.service.isPatromonyIdRequired
                    ? serviceOrderInfo.patrimonyId
                    : "notrequired",
                  respponsibleId: serviceOrderInfo?.responsibleId,
                  status: serviceOrderInfo?.status,
                  estimetadAt: serviceOrderInfo?.estimatedAt,
                  //closedAt: serviceOrderInfo?.createdAt
                }}
                validationSchema={validate}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    console.log("submit:", values);
                    if (token !== null) {
                      // ! alterar as informações que são passadas/recebidas no servidor
                      putServiceOrder(values, token as string);
                      successMessage(
                        "Oredem de serviço atualizada com sucesso"
                      );
                      router.back();
                    } else {
                      errorMessage("Algo deu errado, tente novamente.");
                    }
                  }, 400);
                }}
              >
                {({ isSubmitting, isValid }) => (
                  <Form autoComplete="on">
                    <div className="mx-14 flex flex-col gap-9">
                      {/* <div className="">
										<CardLabelInput
											label="Título"
											name="title"
											type="text"
											width="w-full"
											inputid="title"
											disabled={serviceInfo && serviceInfo.title ? true : false}
										/>
									</div> */}
                      <div className="">
                        <CardLabelTextarea
                          label="Descrição"
                          type="textarea"
                          name="description"
                          textareaid="description"
                        />
                      </div>
                      <div>
                        {serviceOrderInfo &&
                        serviceOrderInfo.service.isPatromonyIdRequired ? (
                          <CardLabelInput
                            label="Patrimônio"
                            name="patrimonyId"
                            type="text"
                            width="w-full"
                            inputid="patrimonyId"
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                      <div>
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
                        )}
                      </div>
                      <div>
                        {serviceOrderInfo.status ? (
                          // && user.isAdmin
                          <FieldSelect
                            label="status"
                            name="status"
                            listitems={status}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
                      <Button
                        isLoading={isSubmitting}
                        theme="primary"
                        type="submit"
                        disabled={isSubmitting || !isValid}
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
                  </Form>
                )}
              </Formik>
            ) : (
              <div className="grid h-full place-items-center">
                <Spinner size={"md"} />
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}
export default CardUpdateServiceOrder;
