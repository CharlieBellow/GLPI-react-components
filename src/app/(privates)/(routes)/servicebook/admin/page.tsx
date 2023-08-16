"use client";

import { CardGeneric } from "@/components/Cards/CardGeneric";

const list = [
  { description: "GTI" },
  { description: "Biblioteca" },
  { description: "GAE" },
  { description: "Admistração" },
  { description: "Segurança" },
  { description: "Restaurante universitário" },
];

const actions = [{ action: "editar" }, { action: "excluir" }];

export default function AdminPage() {
  return (
    <CardGeneric.Root>
      <CardGeneric.Header className="flex flex-col">
        <CardGeneric.Title className="text-xl">
          Lista de Grupos
        </CardGeneric.Title>
        <CardGeneric.Separator />
      </CardGeneric.Header>
      <CardGeneric.Content className="flex flex-col gap-3 bg-transparent">
        {list.map((group) => {
          return (
            <div
              key={group.description}
              className="flex items-center justify-between rounded-lg bg-secondary-2 p-4 text-lg font-semibold"
            >
              <div>{group.description}</div>
            </div>
          );
        })}
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
