import Link from "next/link";

import { useBreakpointValue } from "@chakra-ui/react";

import { Pencil, Trash } from "@/components/icons";

import { deleteServiceOrder } from "../../Utils/server/delInfo";
import { Service } from "../../Utils/server/types";
import { Button } from "../Buttons/Button";

export const servicesList = [
  {
    id: "00",
    name: "Socorro Jesus",
    title: "Manutenção de Computadore",
    description:
      "Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
    serviceLocal: "Bloco A",
  },
];

interface ServiceOrderProps {
  servicelocal?: string;
  description?: string;
  id: string;
  patrimonyId: string;
  service: Service;
  status: string;
  createdAt: string;
  estimatedAt: string;
  responsibleId: string;
  requesterId: string;
  updatedAt: string;
}

export default function CardServiceOrder(props: ServiceOrderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const token = localStorage.getItem("token");

  // não exclui por algum erro no servidor
  async function delServiceOrder(id: string) {
    try {
      const del = await deleteServiceOrder(id, token as string);
    } catch (err) {
      console.log(err);
    }
  }
  const createdAtDate = new Date(props.createdAt);
  const updatedAt = new Date(props.updatedAt);

  return (
    <div
      className="my-4 flex h-full w-full flex-col justify-between rounded-xl bg-white-ice px-4 py-3 text-light-bg shadow-card lg:h-auto lg:w-auto lg:py-4"
      {...props}
      key={props.id}
      id={props.id}
    >
      <div>
        <div>
          <p className="mt-3 text-xs font-medium text-gray-600 lg:text-xl">
            <strong className="text-black">Descrição: </strong>
            {props.description}
          </p>
        </div>
        <div>
          {props.patrimonyId ? (
            props.patrimonyId === "notrequired" ? (
              <></>
            ) : (
              <p className="mt-3 text-sm font-medium text-gray-600 lg:text-xl">
                <strong className="text-black">Patrimônio: </strong>
                {props.patrimonyId}
              </p>
            )
          ) : (
            <></>
          )}
        </div>
        <div>
          {props.service ? (
            <p className="mt-3 text-xs font-medium text-gray-600 lg:text-xl">
              <strong className="text-black">Serviço: </strong>

              {props.service.title}
              {props.service.description}
            </p>
          ) : (
            <p className="mt-3 text-xs font-medium lg:text-xl">
              <strong>Serviço: </strong>

              {props.service}
            </p>
          )}
        </div>
        {/* <div>
					<p className="text-sm mt-3 font-medium lg:text-xl">
						<strong>Local: </strong>
						{props.servicelocal}
					</p>
				</div> */}

        {!props.responsibleId ? (
          <div>
            <p className="mt-3 text-sm font-medium text-gray-600 lg:text-xl">
              <strong className="text-black">Responsável pelo serviço: </strong>
              {props.responsibleId}
            </p>
          </div>
        ) : (
          <></>
        )}

        <div>
          <p className="mt-3 text-sm font-medium lg:text-xl">
            <strong>Solicitante: </strong>
            {props.requesterId}
          </p>
        </div>

        <div>
          <p className="mt-3 text-sm  font-medium lg:text-xl">
            <strong>Status: </strong>
            <span
              className={`${
                props.status === "Aberto"
                  ? "text-red-500"
                  : props.status === "Fechado"
                  ? "text-blue-ufal"
                  : props.status === "Em Execução"
                  ? "text-green-500"
                  : "text-amber-500"
              }`}
            >
              {props.status}
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-20">
          <div>
            <p className="mt-3 text-sm font-medium text-gray-600 lg:text-xl">
              <strong className="text-black">Criado: </strong>
              {createdAtDate.toLocaleDateString()}
            </p>
          </div>
          {/* <div>
						<p className="text-sm mt-3 font-medium lg:text-xl">
							<strong>Estimativa de Conclusão: </strong>
							{props.estimatedAt}
						</p>
					</div> */}
          <div>
            <p className="mt-3 text-sm font-medium text-gray-600 lg:text-xl">
              <strong className="text-black">Atualizado em: </strong>
              {updatedAt.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-fit flex-row gap-4 pt-3">
        <Link href={`serviceorder/${props.id}/edit`}>
          <Button className="flex" theme={"primary"}>
            {isWideVersion ? "Editar" : ""}
            <Pencil className="" weight="bold" size={20} />
          </Button>
        </Link>
        <Button
          className="flex"
          theme={"secondary"}
          onClick={() => {
            console.log(props.id);
            try {
              deleteServiceOrder(props.id, token as string);
              window.location.reload();
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {isWideVersion ? "Excluir" : ""}
          <Trash className="" weight="bold" size={20} />
        </Button>
      </div>
    </div>
  );
}
