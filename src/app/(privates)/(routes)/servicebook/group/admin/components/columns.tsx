"use client";

import { ColumnDef } from "@tanstack/react-table";

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

export const columns: ColumnDef<Group>[] = [
  {
    accessorKey: "description",
    header: "Nome",
  },
  {
    id: "actions",
    header: "Ações",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="px-2">
            <DotsThreeVertical size={24} className="stroke-secondary-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Deletar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
