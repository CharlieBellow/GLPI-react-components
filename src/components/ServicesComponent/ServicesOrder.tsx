import { ServiceOrder } from "../../Utils/server/types";
import { CardGeneric } from "../Cards/CardGeneric";

type ServicesOrderProps = {
  responsible?: ServiceOrder[];
  requester?: ServiceOrder[];
  title: string;
};

// const myuser = {
//   id: "972e1f58-95c6-4582-ac05-fb385dbb557b",
//   status: "Ativo",
//   cpf: "08551062476",
//   name: "Charlie Bellow de Oliveira",
//   birthDate: "2023-03-02T17:00:26.157Z",
//   gender: "M",
//   created_at: "2023-03-02T20:00:24.955Z",
// };
export default async function ServicesOrder({
  // responsible,
  requester,
  title,
}: ServicesOrderProps) {
  // const requesterList = requester;
  // const responsibleList = responsible;
  // const servicesList = [...requester, responsible];
  // const servicesStatus = servicesList;

  // const toogle = "responsible";

  // let values = requesterList;
  console.log("comp", requester[0].description);

  return (
    <>
      <CardGeneric.Root className="bg-secondary-1">
        <CardGeneric.Header>
          <CardGeneric.Title>{title}</CardGeneric.Title>
        </CardGeneric.Header>

        <CardGeneric.Content>
          {/*   
            Fazer as rotas separadas: 

            value="atribuido"
              value="proprietario"
              value="status"
              value="todos"
               */}

          <div className="tv:grid-cols- mx-auto w-full grid-cols-1 flex-wrap justify-around gap-9 lg:grid lg:w-full lg:grid-cols-2">
            {requester?.map((request) => {
              return (
                <CardGeneric.Root className="gap-4" key={request.id}>
                  <CardGeneric.Header>
                    <CardGeneric.Title>
                      {request.service.title}
                    </CardGeneric.Title>
                  </CardGeneric.Header>
                  <CardGeneric.Content>
                    <div className="flex flex-col gap-5">
                      <div>{request.id}</div>

                      {request.patrimonyId ? (
                        <div>{request.patrimonyId}</div>
                      ) : null}

                      <div>{request.requesterId}</div>

                      <div>{request.description}</div>
                    </div>
                  </CardGeneric.Content>

                  <div
                    className={
                      request.status === "Aberto"
                        ? "text-green-500"
                        : props.status === "Fechado"
                        ? "text-red-500"
                        : props.status === "Em Execução"
                        ? "text-blue-ufal"
                        : "text-amber-500"
                    }
                  >
                    {request.status}
                  </div>
                </CardGeneric.Root>
              );
            })}
          </div>
        </CardGeneric.Content>
      </CardGeneric.Root>
    </>
  );
}
