"use client";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/Buttons/Button";
import { CardGeneric } from "@/components/Cards/CardGeneric";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/Dialog";

import { useHandleApiError } from "@/hooks/useHandleApiError";

import { updateGroup } from "@/services/service-book/groups";

import { validationSchema } from "@/Utils/validations";

import { Group } from "@/types";

import { useMessage } from "@/Contexts/MessageContext";

type EditGroupDialogProps = {
  isOpen: boolean;
  group: Pick<Group, "id" | "description">;
  handleDialogItemOpenChange: (value: boolean) => void;
};

const formSchema = Yup.object().shape({
  description: validationSchema.titleGroup,
});

type FormValues = Yup.InferType<typeof formSchema>;

export function EditGroupDialog({
  group,
  isOpen,
  handleDialogItemOpenChange,
}: EditGroupDialogProps) {
  const { id, description } = group;

  const { successMessage } = useMessage();
  const handleApiError = useHandleApiError();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      await updateGroup({ id, ...values });
      successMessage("Categoria atualizado com sucesso!");
      actions.resetForm();
      handleDialogItemOpenChange(false);
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogItemOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar categoria</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja editar o nome do categoria? Essa ação não
              poderá ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <CardGeneric.Root className="m-0 bg-transparent p-0 shadow-none">
            <CardGeneric.Content className="mt-8 p-0">
              <Formik
                initialValues={{
                  description,
                }}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, isValid }) => (
                  <Form className="flex flex-col gap-4">
                    <CardLabelInput
                      type="text"
                      label="Nome do categoria"
                      name="description"
                      width="w-full"
                    />
                    <div className="ml-auto mt-10 flex w-2/4 items-center gap-3">
                      <DialogClose asChild>
                        <Button theme="secondary" disabled={isSubmitting}>
                          Cancelar
                        </Button>
                      </DialogClose>
                      <Button
                        type="submit"
                        theme="primary"
                        disabled={isSubmitting || !isValid}
                        isSubmitting={isSubmitting}
                      >
                        Salvar
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </CardGeneric.Content>
          </CardGeneric.Root>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
