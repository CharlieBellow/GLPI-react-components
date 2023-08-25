"use client";
import { useState } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/Buttons/Button";
import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Plus } from "@/components/icons";
import { CardLabelInput } from "@/components/Inputs/CardLabelInput";
import {
  Dialog,
  DialogClose,
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

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      await createGroup(values);
      actions.resetForm();
      successMessage("Grupo criado com sucesso!");
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
              <Formik
                initialValues={{
                  description: "",
                }}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, isValid }) => (
                  <Form>
                    <CardLabelInput
                      type="text"
                      label="Nome da categoria"
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
                        Confirmar
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
