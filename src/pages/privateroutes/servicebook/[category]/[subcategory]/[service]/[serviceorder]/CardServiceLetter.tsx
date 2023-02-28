import { useRouter } from "next/router";
import InfoServiceItem from "../../../../../../../components/ServicesComponent/InfoService";
import * as Icon from "phosphor-react";
import { Button } from "../../../../../../../components/Buttons/Button";
//import { ServicesList } from "./ServicesList";
import { useEffect, useState } from "react";
import Link from "next/link";

import { service, getService } from '../../../../../../../Utils/server/getInfo';



export default function CardServiceLetter ( ) {
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

  
  
  //useEffect( () => {
    
    if ( typeof window !== "undefined" ) {
      
      window.addEventListener( "scroll", changeFloatingButton );
    }
    //} )
    
    const router = useRouter();
    getService(router.query.serviceorder)
    console.log(router.query.serviceorder)

  console.log( "router", router.query );

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
        <h3 className="pt-4 font-medium ml-4 text-3xl lg:text-4xl lg:flex lg:visible hidden">
          { service.title }
        </h3>
        <div className="mr-4 fixed bottom-9 right-0 lg:right-0 lg:top-0 lg:relative lg:flex lg:justify-end">

          <Link href={ `/privateroutes/servicebook/category/${ router.query.subcategory }/${ router.query.service }/${ router.query.serviceorder }/createservice` }>
            <Button
              title={ floatingButton ? "" : changeButtonName() }
              theme="withIcon"
              icon={ <Icon.PhoneOutgoing size={ 24 } /> }
            />
          </Link>
        </div>
      </div>

      <InfoServiceItem infos={ service } icon={<Icon.DotsThreeVertical size={24}/> }/>
     

      <div className="ml-4 mt-9 gap-3.5 lg:flex hidden">
        <Link href={`/privateroutes/servicebook/category/${ router.query.subcategory }/${ router.query.service }/${ router.query.serviceorder }/createservice`}>
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
