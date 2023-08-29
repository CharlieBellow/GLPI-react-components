"use client";

import Link from "next/link";

import { Button } from "@/components/Buttons/Button";
import { CardGeneric } from "@/components/Cards/CardGeneric";
import * as Icon from "@/components/icons";

import { Service } from "@/types";

import InfoServiceLabel from "../ServicesComponent/InfoServiceLabel";
import InfoServiceSeparator from "../ServicesComponent/InfoServiceSeparator";
import RenderEnumAsLabels from "../ServicesComponent/RenderEnumAsLabels";

type CardServiceDescriptionProps = Service;

export default function CardServiceDescription({
  contactInfo,
  deadline,
  definition,
  description,
  id,
  isPatromonyIdRequired,
  isPrioritaryService,
  openningHours,
  personType,
  requiredDocuments,
  title,
}: CardServiceDescriptionProps) {
  const floatingButton = false;

  return (
    <CardGeneric.Root>
      <CardGeneric.Header className="flex items-center justify-between">
        <CardGeneric.Title className="text-xl">{title}</CardGeneric.Title>
        <div className="fixed bottom-9 right-0 mr-4 lg:relative lg:right-0 lg:top-0 lg:flex lg:justify-end">
          <Link href={`/servicebook/serviceorder/${id}/createserviceorder/`}>
            <Button theme="primary">
              {floatingButton ? "" : "Solicitar Serviço"}
              <Icon.PhoneOutgoing size={24} />
            </Button>
          </Link>
        </div>
      </CardGeneric.Header>

      <CardGeneric.Separator />
      <CardGeneric.Content>
        <InfoServiceSeparator
          icon={<Icon.ArticleMedium size={24} />}
          title="Descrição"
          content={<div dangerouslySetInnerHTML={{ __html: description }} />}
          expandable
        />
        <InfoServiceSeparator
          icon={<Icon.ListBullets size={24} />}
          title="Definição"
          content={definition}
          expandable
        />

        <div className="grid grid-flow-row grid-cols-2">
          <InfoServiceSeparator
            icon={<Icon.ListBullets size={24} />}
            title="Público-Alvo"
            content={<RenderEnumAsLabels people={personType} />}
            expandable={false}
          />
          <InfoServiceSeparator
            icon={<Icon.Watch size={24} />}
            title="Tempo Necessário para execução"
            content={<InfoServiceLabel content={deadline} />}
          />
          <InfoServiceSeparator
            icon={<Icon.Clock size={24} />}
            title="Horário de Atendimento"
            content={<InfoServiceLabel content={openningHours} />}
          />
          <InfoServiceSeparator
            icon={<Icon.FilePlus size={24} />}
            title="Documentos Necessários"
            content={
              <RenderEnumAsLabels people={requiredDocuments as string} />
            }
          />
          <InfoServiceSeparator
            icon={<Icon.Phone size={24} />}
            title="Informações para contato"
            content={contactInfo as string}
          />
          {isPrioritaryService && (
            <InfoServiceSeparator
              icon={<Icon.BookmarkSimple size={24} />}
              title="Prioridade"
              content={isPrioritaryService}
            />
          )}
          {isPatromonyIdRequired && (
            <InfoServiceSeparator
              icon={<Icon.ComputerTower size={24} />}
              title="Patrimônio Solicitado"
              content={isPatromonyIdRequired}
            />
          )}
        </div>

        <div className="ml-4 mt-9 hidden gap-3.5 lg:flex">
          <Link href={`/servicebook/serviceorder/${id}/createserviceorder`}>
            <Button theme="primary">
              Solicitar Serviço
              <Icon.PhoneOutgoing size={24} />
            </Button>
          </Link>
        </div>
      </CardGeneric.Content>
    </CardGeneric.Root>
  );
}
