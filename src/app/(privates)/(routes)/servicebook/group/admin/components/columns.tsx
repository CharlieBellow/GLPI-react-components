"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Group } from "@/types";

import { ColumnDropDownMenu } from "./ColumnDropDownMenu";

export const columns: ColumnDef<Group>[] = [
  {
    accessorKey: "description",
    header: "Nome",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const { id, description } = row.original;
      return <ColumnDropDownMenu id={id} description={description} />;
    },
  },
];
