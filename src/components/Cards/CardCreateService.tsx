"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input } from "@/components/ui";
import { TipTapTextEditor } from "@/components/ui/TipTapTextEditor";

import { useHandleApiError, useMessage } from "@/hooks";

import { postService } from "../../Utils/server/postInfo";
import { validationSchema } from "../../Utils/validations";

export const lettersOnly = /[^a-zA-Z]/g;

const formSchema = yup.object().shape({
  title: validationSchema.title,
  definition: validationSchema.title,
  addFile: validationSchema.file,
  description: validationSchema.descriptionService,
  // personType: validationSchema.personType,
});

type FormValues = yup.InferType<typeof formSchema>;

export function CardCreateService() {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      addFile: undefined,
      description: "",
      // personType: [],
      // isPatromonyIdRequired: false,
      definition: "",
    },
    resolver: yupResolver(formSchema),
  });

  const { successMessage } = useMessage();

  const handleApiError = useHandleApiError();
  const onSubmit = async (values: FormValues) => {
    try {
      await postService({ ...values });
      successMessage("Serviço criado com sucesso!");
      reset();
    } catch (err) {
      handleApiError(err);
    }
  };

  return (
    <CardGeneric.Root>
      <CardGeneric.Header>
        <CardGeneric.Title>Criar serviço</CardGeneric.Title>
      </CardGeneric.Header>

      <CardGeneric.Separator />

      <CardGeneric.Content>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <Input {...register("title")} label="Título" type="text" errorMessage={errors.title?.message}/>
          </div>
          <div>
            <Input {...register("definition")} label="Definição" type="text" errorMessage={errors.definition?.message}/>
          </div>
          <div>
            <Input
              {...register("addFile")}
              label="Adicionar arquivo"
              type="file"
              className="h-12 [&>div]:pt-3"
            />
          </div>
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

          {/* <div className="">
              <EditorField name="description" />
            </div>
            <div className="font-">
              <CardLabelInputCheckBoolean
                name="isPatromonyIdRequired"
                label="Requisitar patrimônio"
              />
            </div> */}

          <div>
            <p>Quem pode criar esse serviço? (selecione pelo menos um)</p>
            {/* <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 ">
                <CardLabelInputCheckbox
                  name="personType"
                  value="Discente"
                />
                <CardLabelInputCheckbox
                  name="personType"
                  value="Técnico Administrativo"
                />
                <CardLabelInputCheckbox name="personType" value="Docente" />
                <CardLabelInputCheckbox
                  name="personType"
                  value="Discente Pós-Graduação"
                />
                <CardLabelInputCheckbox
                  name="personType"
                  value="Terceirizado"
                />
              </div> */}
          </div>
          <div className="mr-14 mt-10 flex justify-end gap-x-3.5">
            <>
              <Button
                isLoading={isSubmitting}
                theme="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Criar
              </Button>
              <Button theme="secondary" type="button" isLoading={false}>
                Cancelar
              </Button>
            </>
          </div>
        </form>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
