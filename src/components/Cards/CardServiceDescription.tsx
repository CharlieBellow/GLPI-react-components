import * as Icon from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getService } from "../../Utils/server/getInfo";
import { Service } from "../../Utils/server/types";
import { Button } from "../Buttons/Button";
import InfoServiceItem from "../ServicesComponent/InfoService";
//import { ServicesList } from "./ServicesList";

//nessa tela tem que pegar o tipo de usuário logado para saber se vai dar permissão para ele  criar chamado ou não: (se personType === user.bond (tipo de vínculo que o usuário tem) então libera o botão de abrir chamado, se não for o botão fica desabilidado)

export default function CardServiceDescription() {
  const [floatingButton, setFloatingButton] = useState(false);

  const changeFloatingButton = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 80 && window.screen.width < 1024) {
        setFloatingButton(true);
      } else {
        setFloatingButton(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeFloatingButton);
  }

  const token = localStorage.getItem("token");
  const router = useRouter();
  const { serviceId } = router.query;

  const [serviceInfo, setServiceInfo] = useState<Service>();

  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const response = await getService(serviceId as string, token as string);

      setServiceInfo(response);
    };
    fetchData();
  }, [router.isReady, serviceId, token]);

  console.log("router", serviceInfo);

  // construir as rotas dinâmicas. quando recarrega ele dá erro

  return (
    <div className="mx-3 rounded-lg bg-white-strong-ice text-justify md:mx-16 lg:mx-10 lg:my-8 lg:rounded-lg lg:bg-white-100 lg:p-8">
      <div className="lg:flex lg:items-baseline lg:justify-between">
        <h3 className="ml-4 hidden pt-4 text-3xl font-bold lg:visible lg:flex lg:text-4xl">
          {serviceInfo && serviceInfo.title}
        </h3>
        <div className="fixed bottom-9 right-0 mr-4 lg:relative lg:right-0 lg:top-0 lg:flex lg:justify-end">
          <Link
            href={`/servicebook/serviceorder/${serviceId}/createserviceorder/`}
          >
            <Button
              title={floatingButton ? "" : "Solicitar Serviço"}
              theme="withIcon"
              icon={<Icon.PhoneOutgoing size={24} />}
            />
          </Link>
        </div>
      </div>

      <InfoServiceItem
        infos={serviceInfo as Service}
        icon={<Icon.DotsThreeVertical size={24} />}
      />

      <div className="ml-4 mt-9 hidden gap-3.5 lg:flex">
        <Link
          href={`/servicebook/serviceorder/${serviceId}/createserviceorder`}
        >
          <Button
            title="Solicitar Serviço"
            theme="primaryActionWithIcon"
            icon={<Icon.PhoneOutgoing size={24} />}
          />
        </Link>
      </div>
    </div>
  );
}
