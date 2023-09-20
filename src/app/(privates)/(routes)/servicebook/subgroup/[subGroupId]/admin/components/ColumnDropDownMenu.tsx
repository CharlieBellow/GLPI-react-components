"use client";

import { useCallback, useState } from "react";

import { DotsThreeVertical } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu";

import { SubGroupModel } from "@/types";

import { DeleteSubGroupDialog } from "./DeleteSubGroupDialog";
import { EditSubGroupDialog } from "./EditSubGroupDialog";

type ColumnDropDownMenuProps = {
  subGroup: Pick<SubGroupModel, "id" | "description" | "person">;
};

export function ColumnDropDownMenu({ subGroup }: ColumnDropDownMenuProps) {
  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);
  const [editDialogIsOpen, setEditDialogIsOpen] = useState(false);

  const handleEditDialogOpenChange = useCallback(
    (value?: boolean) => {
      if (dropdownMenuIsOpen) {
        setDropdownMenuIsOpen(false);
      }
      setEditDialogIsOpen((prev) => (value ? value : !prev));
    },
    [dropdownMenuIsOpen]
  );

  const handleDeleteDialogOpenChange = useCallback(
    (value?: boolean) => {
      if (dropdownMenuIsOpen) {
        setDropdownMenuIsOpen(false);
      }
      setDeleteDialogIsOpen((prev) => (value ? value : !prev));
    },
    [dropdownMenuIsOpen]
  );

  return (
    <>
      <DropdownMenu
        open={dropdownMenuIsOpen}
        onOpenChange={setDropdownMenuIsOpen}
      >
        <DropdownMenuTrigger className="px-2">
          <DotsThreeVertical size={24} className="stroke-secondary-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          hidden={editDialogIsOpen}
          align="end"
          className="w-40"
        >
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleEditDialogOpenChange()}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDeleteDialogOpenChange()}>
            Deletar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditSubGroupDialog
        subGroup={{ ...subGroup }}
        isOpen={editDialogIsOpen}
        handleDialogItemOpenChange={handleEditDialogOpenChange}
      />
      <DeleteSubGroupDialog
        subGroupId={subGroup.id}
        isOpen={deleteDialogIsOpen}
        handleDialogItemOpenChange={handleDeleteDialogOpenChange}
      />
    </>
  );
}
