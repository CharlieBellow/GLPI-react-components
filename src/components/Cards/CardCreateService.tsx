import { postService } from "../../Utils/server/postInfo";

import { FormikProvider, useFormik } from "formik";

import { UploadSimple } from "@/components/icons";
import { useRouter } from "next/router";
import * as yup from "yup";
import { validationSchema } from "../../Utils/validations";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelInputCheckBoolean } from "../Inputs/CardLabelInputCheckBoolean";
import { CardLabelInputCheckbox } from "../Inputs/CardLabelInputCheckbox";
import { CardLabelInputFile } from "../Inputs/CardLabelInputFile";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";

import { Spinner } from "@chakra-ui/react";
import { useMessage } from "../../Contexts/MessageContext";
import EditorField from "../../components/Inputs/EditorField";

export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
  title: validationSchema.title,
  definition: validationSchema.title,
  description: validationSchema.descriptionService,
  personType: validationSchema.personType,
});

export const CardCreateService = () => {
  const router = useRouter();
  const { subGroupId } = router.query;
  const token = localStorage.getItem("token");
  const { errorMessage, successMessage } = useMessage();
  const formikProps = useFormik({
    initialValues: {
      serviceSubGroupId: subGroupId,
      title: "",
      description: "",
      personType: [],
      isPatromonyIdRequired: false,
      definition: "",
    },
    onSubmit(values, actions) {
      setTimeout(() => {
        console.log("submit:", values);
        if (token !== null) {
          postService(values, token);

          successMessage("Serviço criado com sucesso!");

          actions.resetForm();
        } else {
          errorMessage("Algo deu errado, tente novamente");
        }
      }, 400);
    },
    validationSchema: validate,
    validateOnMount: true,
  });

  return (
    <>
      <div className="mx-4">
        <ul>
          <li>fdsfdsfdsfsdf</li>
          <li>dsfds</li>
          <li>fds</li>
          <li>dsf</li>
          <li>&nbsp;</li>
        </ul>
        <div
          className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice px-8 pb-9 shadow-card
				lg:block lg:w-202 lg:max-w-card"
        >
          <div className="pl-9 pt-8">
            <CardTitle title="Criar serviço" />
          </div>
          <div className="mx-9 mb-10 mt-4">
            <CardLine />
          </div>
          {router.isReady ? (
            <FormikProvider value={formikProps}>
              <form
                className="flex flex-col gap-4"
                onSubmit={formikProps.handleSubmit}
              >
                <div className="">
                  <CardLabelInput
                    label="Título"
                    name="title"
                    type="text"
                    width="w-full"
                    inputid="title"
                  />
                </div>
                <div>
                  <CardLabelInput
                    label="Definição"
                    name="definition"
                    type="text"
                    width="w-full"
                    inputid="definition"
                  />
                </div>
                <div>
                  <CardLabelInputFile
                    label="Adicionar Documento"
                    name="addFile"
                    type="file"
                    width="w-full"
                    inputid="title"
                    icon={
                      <UploadSimple
                        className="absolute mr-4 flex"
                        weight="bold"
                      />
                    }
                  />
                </div>
                <div className="">
                  <EditorField name="description" />
                </div>
                <div className="font-">
                  <CardLabelInputCheckBoolean
                    name="isPatromonyIdRequired"
                    label="Requisitar patrimônio"
                  />
                </div>

                <div>
                  <p>Quem pode criar esse serviço? (selecione pelo menos um)</p>
                  <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 ">
                    <CardLabelInputCheckbox
                      name="personType"
                      value="Discente"
                      checkArray={formikProps.values.personType}
                    />
                    <CardLabelInputCheckbox
                      name="personType"
                      value="Técnico Administrativo"
                      checkArray={formikProps.values.personType}
                    />
                    <CardLabelInputCheckbox
                      name="personType"
                      value="Docente"
                      checkArray={formikProps.values.personType}
                    />
                    <CardLabelInputCheckbox
                      name="personType"
                      value="Discente Pós-Graduação"
                      checkArray={formikProps.values.personType}
                    />
                    <CardLabelInputCheckbox
                      name="personType"
                      value="Terceirizado"
                      checkArray={formikProps.values.personType}
                    />
                  </div>
                  {formikProps.errors.personType &&
                  formikProps.touched.personType ? (
                    <span className="text-sm text-red-ufal">
                      {formikProps.errors.personType}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
                  <>
                    <Button
                      isSubmitting={formikProps.isSubmitting}
                      title="Criar"
                      theme="primaryAction"
                      type="submit"
                      disabled={
                        formikProps.isSubmitting || !formikProps.isValid
                      }
                    />
                    <Button
                      title="Cancelar"
                      theme="secondaryAction"
                      type="button"
                      isSubmitting={false}
                    />
                  </>
                </div>
              </form>
            </FormikProvider>
          ) : (
            <>
              <Spinner size="md" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardCreateService;
