"use client";

import { useState } from "react";

import { CardGeneric } from "@/components/Cards/CardGeneric";
import { Button } from "@/components/ui";
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

import { useMessage } from "@/hooks";
import { useHandleApiError } from "@/hooks/useHandleApiError";

import { deleteSubGroup } from "@/services/service-book/subgroups";

type DeleteSubGroupDialogProps = {
  isOpen: boolean;
  subGroupId: string;
  handleDialogItemOpenChange: (value: boolean) => void;
};

export function DeleteSubGroupDialog({
  subGroupId,
  isOpen,
  handleDialogItemOpenChange,
}: DeleteSubGroupDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { successMessage } = useMessage();
  const handleApiError = useHandleApiError();

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteSubGroup(subGroupId);
      successMessage("Sub Categoria deletada com sucesso");
      handleDialogItemOpenChange(false);
    } catch (err) {
      handleApiError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogItemOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deletar Sub Categoria</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja deletar a sub categoria? Essa ação não
              poderá ser desfeita. Remova todos os subcategorias e serviços
              antes de deletar o categoria.
            </DialogDescription>
          </DialogHeader>
          <CardGeneric.Root className="m-0 bg-transparent p-0 shadow-none">
            <CardGeneric.Content className="mt-4 p-0">
              <div className="ml-auto flex w-2/4 items-center gap-3">
                <DialogClose asChild>
                  <Button theme="secondary" disabled={isLoading}>
                    Cancelar
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  theme="danger"
                  onClick={handleDelete}
                  isLoading={isLoading}
                >
                  Confirmar
                </Button>
              </div>
            </CardGeneric.Content>
          </CardGeneric.Root>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
