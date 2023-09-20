"use client";

import { useState } from "react";

import { useParams } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Plus } from "@/components/icons";
import { Button, Input, Select } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

import { useMessage } from "@/hooks";
import { useHandleApiError } from "@/hooks/useHandleApiError";

import { createSubGroup } from "@/services/service-book/subgroups";

import { validationSchema } from "@/Utils/validations";

const formSchema = Yup.object().shape({
  description: validationSchema.titleGroup,
  coordinatorId: Yup.string().uuid().required(),
});

type FormValues = Yup.InferType<typeof formSchema>;

type CreateSubGroupDialogProps = {
  coordinators: Array<{ id: string; email: string; cpf: string; name: string }>;
};

export function CreateSubGroupDialog({
  coordinators,
}: CreateSubGroupDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  const mappedCoordinators = coordinators.map((coordinator) => ({
    id: coordinator.id,
    label: coordinator.email,
  }));

  const handleApiError = useHandleApiError();
  const { successMessage } = useMessage();

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      description: "",
    },
    resolver: yupResolver(formSchema),
  });

  const handleCancel = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmit = async (values: FormValues) => {
    try {
      const subGroupId = params.subGroupId;
      if (!subGroupId) return;

      await createSubGroup({
        ...values,
        serviceGroupId: subGroupId,
        personId: values.coordinatorId,
      });
      successMessage("Sub categoria criada com sucesso!");
      reset();
      setIsOpen(false);
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button theme="primary" className="w-max">
          <Plus size={20} className="text-current" />
          Criar sub categoria
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar sub categoria</DialogTitle>
          </DialogHeader>
          <CardGeneric.Root className="m-0 bg-transparent p-0 shadow-none">
            <CardGeneric.Content className="mt-8 p-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <Input
                  type="text"
                  label="Nome da categoria"
                  {...register("description")}
                  errorMessage={errors.description?.message}
                />
                <Controller
                  name="coordinatorId"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Select
                        label="Selecione o coordenador"
                        value={field.value}
                        onValueChange={field.onChange}
                        options={mappedCoordinators}
                      />
                    );
                  }}
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
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    Confirmar
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
