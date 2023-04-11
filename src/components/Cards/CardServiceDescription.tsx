import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InfoServiceItem from "../ServicesComponent/InfoService";
import { getService } from '../../Utils/server/getInfo';
import { Service } from '../../Utils/server/types';
import Link from "next/link";
import * as Icon from "phosphor-react";
import { Button } from "../Buttons/Button";
//import { ServicesList } from "./ServicesList";


//nessa tela tem que pegar o tipo de usuário logado para saber se vai dar permissão para ele  criar chamado ou não: (se personType === user.bond (tipo de vínculo que o usuário tem) então libera o botão de abrir chamado, se não for o botão fica desabilidado) 


export default function CardServiceDescription (  ) {
  const [ floatingButton, setFloatingButton ] = useState( false );

  const changeFloatingButton = () => {
    if ( typeof window !== "undefined" ) {
      if ( window.scrollY >= 80 && window.screen.width < 1024 ) {
        setFloatingButton( true );
      } else {
        setFloatingButton( false );
      }

    }
  };

  if ( typeof window !== "undefined" ) {

    window.addEventListener( "scroll", changeFloatingButton );
  }

  const token = localStorage.getItem("token");
  const router = useRouter();
  const {serviceId} = router.query

  const [serviceInfo, setServiceInfo] = useState<Service>()

  useEffect( () => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const response = await getService( serviceId as string, token as string);

      console.log(response)
      setServiceInfo(response)

    }
    fetchData()
  }, [router.isReady, serviceId, token] );

  console.log( "router", serviceInfo);

  
  // construir as rotas dinâmicas. quando recarrega ele dá erro

  return (
    <div className="lg:bg-white-100 bg-white-strong-ice lg:mx-10 lg:rounded-lg lg:px-8 lg:py-8 lg:my-8 md:mx-16 text-justify">
      <div className="lg:flex lg:justify-between lg:items-baseline">
        <h3 className="pt-4 font-bold ml-4 text-3xl lg:text-4xl lg:flex lg:visible hidden">
          {serviceInfo && serviceInfo.title }
        </h3>
        <div className="mr-4 fixed bottom-9 right-0 lg:right-0 lg:top-0 lg:relative lg:flex lg:justify-end">

          <Link href={ `/servicebook/serviceorder/${ serviceId }/createserviceorder/${serviceInfo && serviceInfo.title}` }>
            <Button
              title={ floatingButton ? "" : "Solicitar Serviço" }
              theme="withIcon"
              icon={ <Icon.PhoneOutgoing size={ 24 } /> }
            />
          </Link>
        </div>
      </div>

      <InfoServiceItem infos={ serviceInfo as Service } icon={ <Icon.DotsThreeVertical size={ 24 } /> } />


      <div className="ml-4 mt-9 gap-3.5 lg:flex hidden">
        <Link href={ `/servicebook/serviceorder/${ serviceId }/createserviceorder` }>
          <Button
            title="Solicitar Serviço"
            theme="primaryActionWithIcon"
            icon={ <Icon.PhoneOutgoing size={ 24 } /> }
          />
        </Link>
        <Button
          title="Esclarecer Dúvidas"
          theme="secondaryActionWithIcon"
          icon={ <Icon.Question size={ 24 } /> }
        />
        <Button
          title="Relatar Problema"
          theme="tertiaryActionWithIcon"
          icon={ <Icon.Warning size={ 24 } /> }
        />
      </div>
    </div>
  );
}
