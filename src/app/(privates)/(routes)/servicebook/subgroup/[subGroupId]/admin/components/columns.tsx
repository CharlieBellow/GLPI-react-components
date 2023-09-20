"use client";

import { ColumnDef } from "@tanstack/react-table";

import { SubGroupModel } from "@/types";

import { ColumnDropDownMenu } from "./ColumnDropDownMenu";

export const columns: ColumnDef<SubGroupModel>[] = [
  {
    accessorKey: "description",
    header: "Nome",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const { id, description, person } = row.original;
      return <ColumnDropDownMenu subGroup={{ id, description, person }} />;
    },
  },
];
