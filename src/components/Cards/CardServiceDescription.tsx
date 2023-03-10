import { useRouter } from "next/router";
import InfoServiceItem from "../ServicesComponent/InfoService";
import * as Icon from "phosphor-react";
import { Button } from "../Buttons/Button";
//import { ServicesList } from "./ServicesList";
import { useEffect, useState } from "react";
import Link from "next/link";

import { service, getService } from '../../Utils/server/getInfo';

//nessa tela tem que pegar o tipo de usuário logado para saber se vai dar permissão para ele  criar chamado ou não: (se personType === user.bond (tipo de vínculo que o usuário tem) então libera o botão de abrir chamado, se não for o botão fica desabilidado) 

interface CardServiceDescriptionProps{
  title: string;
} 
export default function CardServiceDescription ( props: CardServiceDescriptionProps ) {
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

  const changeButtonName = () => {
    if ( typeof window !== "undefined" ) {

      if ( window.screen.width < 1024 ) {
        return "Abrir chamado";
      } else {
        return "Solicitar serviço";
      }
    }
  };


  if ( typeof window !== "undefined" ) {

    window.addEventListener( "scroll", changeFloatingButton );
  }


  const router = useRouter();

  useEffect( () => {
    getService( router.query.serviceId );
    console.log( router.query.serviceId );
  }, [] );

  console.log( "router", router.query );
 

  // construir as rotas dinâmicas. quando recarrega ele dá erro

  return (
    <div className="lg:bg-white-100 bg-white-strong-ice lg:mx-10 lg:rounded-lg lg:px-8 lg:py-8 lg:my-8 md:mx-16 text-justify">
      <div className="lg:flex lg:justify-between lg:items-baseline">
        <h3 className="pt-4 font-bold ml-4 text-3xl lg:text-4xl lg:flex lg:visible hidden">
          
          { service.title }
          
        
        </h3>
        <div className="mr-4 fixed bottom-9 right-0 lg:right-0 lg:top-0 lg:relative lg:flex lg:justify-end">

          <Link href={ `/privateroutes/servicebook/serviceorder/${ router.query.serviceId }/createserviceorder` }>
            <Button
              title={ floatingButton ? "" : changeButtonName() }
              theme="withIcon"
              icon={ <Icon.PhoneOutgoing size={ 24 } /> }
            />
          </Link>
        </div>
      </div>

      <InfoServiceItem infos={ service } icon={ <Icon.DotsThreeVertical size={ 24 } /> } />


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
