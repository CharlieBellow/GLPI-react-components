import { useRouter } from "next/router";
import InfoServiceItem from "../ServicesComponent/InfoService";
import * as Icon from "phosphor-react";
import { Button } from "../Buttons/Button";
//import { ServicesList } from "./ServicesList";
import { useEffect, useState } from "react";
import Link from "next/link";

import { getService } from '../../Utils/server/getInfo';
import { Service } from "../../Utils/server/types";

//nessa tela tem que pegar o tipo de usuário logado para saber se vai dar permissão para ele  criar chamado ou não: (se personType === user.bond (tipo de vínculo que o usuário tem) então libera o botão de abrir chamado, se não for o botão fica desabilidado) 

export default function CardServiceDescription () {
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




  //useEffect( () => {

  if ( typeof window !== "undefined" ) {

    window.addEventListener( "scroll", changeFloatingButton );
  }
  //} )

  const router = useRouter();
  const [service, setService] = useState<Service>()

  useEffect( () => {
    const fetchData = async () => {
      console.log(router.query.serviceId as string);
      const response = await getService(router.query.serviceId as string)
      setService(response);      
    }
    fetchData();
  }, [] );


  //  var myIndex;
  //  const indexService = () => {
  //    service.map( ( service, index ) => {
  //
  //      console.log( service.description );
  //      if ( service.id == router.query.serviceorder ) {
  //
  //        myIndex = index;
  //        return myIndex;
  //      }
  //    } );
  //
  //  };

  //indexService();
  //o myIndex (trocar nomme da variável) vai ser passado para a próxima página para que seja possível pegar a carta de serviço [(service)] e passar para o objeto que vai ser mandado no back-end com todas as informações captadas pelo fomik

  // construir as rotas dinâmicas. quando recarrega ele dá erro

  return (
    <div className="lg:bg-white-100 bg-white-strong-ice lg:mx-10 lg:rounded-lg lg:px-8 lg:py-8 lg:my-8 md:mx-16 text-justify">
      <div className="lg:flex lg:justify-between lg:items-baseline">
        <h3 className="pt-4 font-bold ml-4 text-3xl lg:text-4xl lg:flex lg:visible hidden">
          {service && service.title }
        </h3>
        <div className="mr-4 fixed bottom-9 right-0 lg:right-0 lg:top-0 lg:relative lg:flex lg:justify-end">

          <Link href={ `/privateroutes/servicebook/serviceorder/${ router.query.serviceId }/createserviceorder` }>
            <Button
              title={ floatingButton ? "" : "Solicitar Serviço" }
              theme="withIcon"
              icon={ <Icon.PhoneOutgoing size={ 24 } /> }
            />
          </Link>
        </div>
      </div>

      <InfoServiceItem infos={ service as Service } icon={ <Icon.DotsThreeVertical size={ 24 } /> } />


      <div className="ml-4 mt-9 gap-3.5 lg:flex hidden">
        <Link href={ `/privateroutes/servicebook/serviceorder/${ router.query.serviceId }/createserviceorder` }>
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
