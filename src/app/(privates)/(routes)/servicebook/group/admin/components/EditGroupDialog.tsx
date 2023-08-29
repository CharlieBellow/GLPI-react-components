"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button, Input } from "@/components/ui";
import {
  Dialog,
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

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      description,
    },
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const handleCancel = () => {
    reset();
    handleDialogItemOpenChange(false);
  };

  const onSubmit = async (values: FormValues) => {
    try {
      await updateGroup({ id, ...values });
      successMessage("Categoria atualizado com sucesso!");
      reset();
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="text"
                  label="Nome do categoria"
                  {...register("description")}
                  errorMessage={errors.description?.message}
                />
                <div className="ml-auto mt-10 flex w-2/4 items-center gap-3">
                  <Button
                    onClick={handleCancel}
                    theme="secondary"
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    theme="primary"
                    disabled={isSubmitting || !isValid}
                    isLoading={isSubmitting}
                  >
                    Salvar
                  </Button>
                </div>
              </form>
            </CardGeneric.Content>
          </CardGeneric.Root>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
