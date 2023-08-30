"use client";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Plus } from "@/components/icons";
import { Button, Input } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

import { useHandleApiError } from "@/hooks/useHandleApiError";

import { createGroup } from "@/services/service-book/groups";

import { validationSchema } from "@/Utils/validations";

import { useMessage } from "@/Contexts/MessageContext";

const formSchema = Yup.object().shape({
  description: validationSchema.titleGroup,
});

type FormValues = Yup.InferType<typeof formSchema>;

export function CreateGroupDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleApiError = useHandleApiError();
  const { successMessage } = useMessage();

  const {
    register,
    reset,
    handleSubmit,
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
      await createGroup(values);
      successMessage("Grupo criado com sucesso!");
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
          Criar categoria
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar categoria</DialogTitle>
          </DialogHeader>
          <CardGeneric.Root className="m-0 bg-transparent p-0 shadow-none">
            <CardGeneric.Content className="mt-8 p-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="text"
                  label="Nome da categoria"
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
