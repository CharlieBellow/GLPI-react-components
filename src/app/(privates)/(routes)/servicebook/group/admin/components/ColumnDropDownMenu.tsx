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

import { Group } from "@/types";

import { DeleteGroupDialog } from "@/app/(privates)/(routes)/servicebook/group/admin/components/DeleteGroupDialog";

import { EditGroupDialog } from "./EditGroupDialog";

type ColumnDropDownMenuProps = Pick<Group, "id" | "description">;

export function ColumnDropDownMenu({
  id,
  description,
}: ColumnDropDownMenuProps) {
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
      <EditGroupDialog
        group={{ id, description }}
        isOpen={editDialogIsOpen}
        handleDialogItemOpenChange={handleEditDialogOpenChange}
      />
      <DeleteGroupDialog
        groupId={id}
        isOpen={deleteDialogIsOpen}
        handleDialogItemOpenChange={handleDeleteDialogOpenChange}
      />
    </>
  );
}
