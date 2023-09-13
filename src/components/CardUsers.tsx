import { useBreakpointValue } from "@chakra-ui/react";

import { Trash } from "@/components/icons";
import { Button } from "@/components/ui/Button";

import { User } from "../Utils/server/types";

// * card de usuário para ser exibida na lista de usuários

export default function CardUser(props: User) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <div
      className="my-4 flex h-full w-full flex-col justify-between rounded-xl bg-white-ice px-4 py-3 text-light-bg shadow-card lg:h-auto lg:w-auto lg:py-4"
      {...props}
      key={props.id}
      id={props.id}
    >
      <div>
        <div>
          <p className="mt-3 text-xs font-medium lg:text-xl">
            <strong>Nome: </strong>
            {props.name}
          </p>
        </div>
        <div>
          <p className="mt-3 text-sm font-medium lg:text-xl">
            <strong>Email: </strong>
            {props.email}
          </p>
        </div>
        <div>
          <p className="mt-3 text-sm font-medium lg:text-xl">
            <strong>Senha: </strong>
            {props.password}
          </p>
        </div>
        <div>
          <p className="mt-3 text-sm font-medium lg:text-xl">
            <strong>Credencial: </strong>
            {props.isAdmin}
          </p>
        </div>
        <div>
          <p className="mt-3 text-sm font-medium lg:text-xl">
            <strong>Permissão: </strong>
            {props.permissions}
          </p>
        </div>
        <div>
          <p className="mt-3 text-sm font-medium lg:text-xl">
            <strong>Roles: </strong>
            {props.roles}
          </p>
        </div>
      </div>
      <div className="w-fit pt-3">
        <Button className="flex" theme="primary">
          {isWideVersion ? "Excluir" : ""}
          <Trash className="" weight="bold" size={20} />
        </Button>
      </div>
    </div>
  );
}
