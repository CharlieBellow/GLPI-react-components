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

import { useMessage } from "@/hooks";
import { useHandleApiError } from "@/hooks/useHandleApiError";

import { updateGroup } from "@/services/service-book/groups";

import { validationSchema } from "@/Utils/validations";

import { SubGroupModel } from "@/types";

type EditSubGroupDialogProps = {
  isOpen: boolean;
  subGroup: Pick<SubGroupModel, "id" | "description" | "person">;
  handleDialogItemOpenChange: (value: boolean) => void;
};

const formSchema = Yup.object().shape({
  personId: Yup.string().uuid().required(),
  description: validationSchema.titleGroup,
});

type FormValues = Yup.InferType<typeof formSchema>;

export function EditSubGroupDialog({
  subGroup,
  isOpen,
  handleDialogItemOpenChange,
}: EditSubGroupDialogProps) {
  const { id, description } = subGroup;

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
      personId: subGroup.person.email,
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
      successMessage("Sub Categoria atualizado com sucesso!");
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
            <DialogTitle>Editar Sub Categoria</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja editar o nome da categoria? Essa ação não
              poderá ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <CardGeneric.Root className="m-0 bg-transparent p-0 shadow-none">
            <CardGeneric.Content className="mt-8 p-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="text"
                  label="Nome"
                  {...register("description")}
                  errorMessage={errors.description?.message}
                />
                <div className="ml-auto mt-10 flex w-2/4 items-center gap-3">
                  <Button
                    theme="secondary"
                    disabled={isSubmitting}
                    onClick={handleCancel}
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
