
import * as Icon from 'phosphor-react';
import { Service } from '../../Utils/server/types'
import InfoServiceLabel from './InfoServiceLabel';
import InfoServiceSeparator from './InfoServiceSeparator';
import RenderEnumAsLabels from './RenderEnumAsLabels';
interface InfosServiceItemProps {
	icon?: Icon.IconProps;
	infos: Service,
}

// * informações do serviço
export default function InfoServiceItem ( props: InfosServiceItemProps ) {

	return (
    <>
      
      <InfoServiceSeparator icon={<Icon.ArticleMedium size={26}/>} title="Descrição" content={props.infos && <div dangerouslySetInnerHTML={{__html:props.infos.description}}/>} expandable={true}/>
      <InfoServiceSeparator icon={<Icon.ListBullets size={26}/>} title="Definição" content={ props.infos && props.infos.definition} expandable={true}/>
      
      <div className='grid grid-flow-row grid-cols-2'>
       <InfoServiceSeparator icon={<Icon.ListBullets size={26}/>} title="Público-Alvo" content={<RenderEnumAsLabels people={props.infos && props.infos.personType}/>} expandable={false}/><InfoServiceSeparator icon={<Icon.Watch size={26}/>} title="Tempo Necessário para execução" content={props.infos && <InfoServiceLabel content={props.infos.deadline as any}/>} expandable={false}/>
        <InfoServiceSeparator icon={<Icon.Clock size={26}/>} title="Horário de Atendimento" content={props.infos && <InfoServiceLabel content={props.infos.openningHours as any}/>} expandable={false}/>
        <InfoServiceSeparator icon={<Icon.FilePlus size={26}/>} title="Documentos Necessários" content={<RenderEnumAsLabels people={props.infos && props.infos.requiredDocuments as string}/>} expandable={false}/>
        <InfoServiceSeparator icon={<Icon.Phone size={26}/>} title="Informações para contato" content={props.infos &&  props.infos.contactInfo as string} expandable={false}/>
        {props.infos && props.infos.isPrioritaryService && <InfoServiceSeparator icon={<Icon.BookmarkSimple size={26}/>} title="Prioridade" content="" expandable={false}/>}  
        {props.infos && props.infos.isPatromonyIdRequired && <InfoServiceSeparator icon={<Icon.ComputerTower size={26}/>} title="Patrimônio Solicitado" content="" expandable={false}/>  }
      </div>
		</>
	);
}

