import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Form, Formik } from "formik";
import * as yup from "yup";

import { useMessage } from "../../Contexts/MessageContext";
import { deleteService } from "../../Utils/server/delInfo";
import { getAllServices } from "../../Utils/server/getInfo";
import { Group } from "../../Utils/server/types";
import { Button } from "../Buttons/Button";
import FieldSelect from "../Inputs/FieldSelect";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";

const validate = yup.object().shape({});

export const CardDeleteSubGroup = () => {
  const { errorMessage, successMessage } = useMessage();

  const token = localStorage.getItem("token");
  const router = useRouter();
  const { subGroupId } = router.query;

  const [listSubGroup, setListSubGroup] = useState<Group[]>([]);
  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const response = await getAllServices(subGroupId as string);
      setListSubGroup(response);
    };
    fetchData();
  }, [router.isReady, subGroupId]);

  // console.log("aqui", listService[0].title);
  return (
    <div className="mx-4">
      <div
        className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
      >
        <div className="pl-9 pt-8">
          <CardTitle title="Excluir Subcategoria" />
        </div>
        <div className="mx-9 mb-10 mt-4">
          <CardLine />
        </div>

        <Formik
          initialValues={{
            description: "",
          }}
          // validationSchema={validate}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log("submit:", values);
              const token = localStorage.getItem("token");
              if (values && token) {
                console.log("values", values.description);

                deleteService(values.description, token);
                successMessage("Grupo deletado com sucesso!");
                actions.resetForm();
              } else {
                errorMessage("Algo deu errado. Tente Novamente.");
              }
            }, 400);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form autoComplete="on">
              <div className="mx-14 flex flex-col gap-9">
                <div>
                  <FieldSelect
                    label="description"
                    listitems={listSubGroup.map(
                      (service) => service.description
                    )}
                    default="selecione a subcategoria a ser deletada"
                    name="description"
                  />
                </div>

                <div className="">
                  {/* <CardLabelInput
										label="Id da Categoria"
										name="description"
										type="text"
										width="w-full"
										inputid="description"
									/> */}
                </div>
              </div>
              <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
                <Button
                  theme="primary"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  isLoading={isSubmitting}
                >
                  Excluir
                </Button>
                <Button theme="secondary">Cancelar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
