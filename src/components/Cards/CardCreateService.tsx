import React, { useEffect} from "react";

import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import {useRouter} from "next/router"
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import {

	validationSchema,
	
} from "../../Utils/validations";

import {postServiceOrder} from "../../Utils/server/postInfo"

import {getService, service} from "../../Utils/server/getInfo"

import {useAuth} from "../../Contexts/AuthContext"



export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
	aplicantsName: validationSchema.name,
	title: validationSchema.title,
	description: validationSchema.description,
  personType: validationSchema.personType,
  //serviceLocal: validationSchema.serviceLocal,
  //patrimony: validationSchema.patrimony,

});


/* 

{
	"serviceSubGroupId": "446ba367-8c8e-4f11-b920-413ef6e9e836",
	"title": "Criar email institucional",
	"description": "Acessar perfil.ufal.br, ",
	"definition": "Etapas para criação do email institucional",
	"personType": [
		"Discente",
		"Docente"
	],
	"isPatromonyIdRequired": "true"


  idPerson: 972e1f58-95c6-4582-ac05-fb385dbb557b

idServiceOrder:  14ebb57f-5c74-4a71-9192-3c609aa310d6
}

*/

export const CardCreateService = () => {
	
const myuser = {
	id: "972e1f58-95c6-4582-ac05-fb385dbb557b",
	status: "Ativo",
	cpf: "08551062476",
	name: "Charlie Bellow de Oliveira",
	birthDate: "2023-03-02T17:00:26.157Z",
	gender: "M",
	created_at: "2023-03-02T20:00:24.955Z"
}

const myservice = {
	id: "55901ad6-15e3-4e90-96c3-91e9307ffe0f",
	description: "Acessar perfil.ufal.br, ",
	title: "Criar email institucional",
	definition: "Etapas para criação do email institucional",
	serviceSubGroupId: "446ba367-8c8e-4f11-b920-413ef6e9e836",
	personType: "{Discente,Docente}",
	waitingTime: null,
	deadline: null,
	openningHours: null,
	isPrioritaryService: false,
	serviceLocation: null,
	requiredDocuments: null,
	contactInfo: null,
	isPatromonyIdRequired: false,
	glpiSla: null,
	createdAt: "2023-02-23T13:32:49.880Z",
	updatedAt: "2023-02-23T13:32:49.880Z"
}


  const myserviceorder =  {
  id: "14ebb57f-5c74-4a71-9192-3c609aa310d6",
	status: "Aberto",
	description: "minha ordem de serviço",
	closedAt: "2023-03-02T17:09:25.173Z",
	patrimonyId: "123456",
	requesterId: "972e1f58-95c6-4582-ac05-fb385dbb557b",
	serviceId: "eff33f67-0d9d-402f-baa3-96a30df953f1",
	createdAt: "2023-03-02T20:09:23.962Z",
	updatedAt: "2023-03-02T20:09:23.962Z",
}


const createserviceorder =
{
	"description": "minha ordem de serviço",
	"status": "Aberto",
	"estimetadAt": "{% now 'iso-8601', '' %}",
	"closedAt": "{% now 'iso-8601', '' %}",
	"patrimonyId": "123456",
	"respponsibleId": "972e1f58-95c6-4582-ac05-fb385dbb557b",
	"requesterId": "972e1f58-95c6-4582-ac05-fb385dbb557b",
	"serviceId": "eff33f67-0d9d-402f-baa3-96a30df953f1"
}

  const { token } = useAuth()
  
 
  const router = useRouter()
  console.log("serviceorder", router.query.serviceorder)

useEffect(() => {
  //getService(router.query.serviceorder)

}, [])


  const postService = {
    "serviceSubGroupId": "a095c66f-711b-4187-a27f-55a3d66bf9ae",
    "title": "teste 2",
    "description": "Acessar perfil.ufal.br, ",
    "definition": "Etapas para criação do email institucional",
    "personType": [
      "Discente",
      "Docente"
    ],
    "isPatromonyIdRequired": "true"
  }

  //persontype: checar se usuário pode criar serviço
//  //export enum LinkType {
//  TECNICO = "Técnico Administrativo",
//    DOCENTE = "Docente",
//    DISCENTE = "Discente",
//    DISCENTEPOS = "Discente Pós-Graduação",
//    TERCEIRIZADO = "Terceirizado",
//}
// precisa criar um select onde dê pra selecionar vários e quardar em um array. por hora pede para colocar separado por vígula ou faz um checkbox com as opções
// criar um toggle par que possa pegar a opção de sim ou não do patrimônio 


  return (
    <>
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Abrir ordem de serviço" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				<Formik
					initialValues={ {
              isPatromonyIdRequired: false,
           persontype: [],

            serviceId: myservice.id,
            title: myservice.title,
            description: "",
            status: "Aberto",

              estimetadAt: new Date().toLocaleTimeString( "pt-BR", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
               hour: "2-digit",
								minute: "2-digit",
								second: "2-digit",
              } )
                .toString()
                .replace(":", ":")
                .replace(":", ":")
                   .replace(",", " ")
                .replace("/", "-")
                .replace("/", "-"),
                
                
              closedAt: new Date().toLocaleTimeString( "pt-BR", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
								minute: "2-digit",
								second: "2-digit",

              } )
                .toString()
                .replace(":", ":")
                .replace(":", ":")
                .replace(",", " ")
                .replace("/", "-")
                .replace("/", "-"),
                
            patrimonyId: "",
            requesterId: myuser.id,
            respponsibleId: myuser.id,
            aplicantsName: myuser.name,
            //serviceLocal: "",
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
						
              postServiceOrder( values, token )
              
							toast.success("Serviço criado com sucesso!");
						
							actions.resetForm();
							
						}, 400);
					}}
				>
					{({ isSubmitting, isValid, values }) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome Completo"
										name="aplicantsName"
										type="text"
										width="w-full"
										inputid="title"
									disabled
									/>
								</div>

								<div className="">
									<CardLabelInput
										label="Título"
										name="title"
										type="text"
										width="w-full"
										inputid="title"
                    disabled
                   
									/>
                  </div>

                  <div className="">
									<CardLabelInput
										label={values.isPatromonyIdRequired}
										name="isPatromonyIdRequired"
										type="checkbox"
										width="w-full"
										inputid="isPatromonyIdRequired"
                   
                   
									/>
                  </div>

                  <label>
            <Field type="checkbox" name="isPatromonyIdRequired" />
            
                  {`${values.isPatromonyIdRequired}`}
          </label>


           <div className="">
									<CardLabelInput
										label="Discente"
										name="persontype"
										type="checkbox"
										width="w-full"
										inputid="persontype"
                   
                   
									/>
                  </div>
                  
                  <label>
                    <Field type="checkbox" name="persontype" value="Discente" />
                    Discente
                  </label>

								<div className="">
									<CardLabelTextarea
										label="Descrição"
										type="textarea"
										name="description"
										textareaid="description"
                    />
								</div>
                  <div>
                    { service.isPatromonyIdRequired ? 
                    <CardLabelInput
                      label="Patrimônio"
                      name="patrimonyId"
                      type="text"
                      width="w-full"
                        inputid="patrimonyId"
                    />
                    : <></>}
                  </div>
								{/*<div className="">
									<FieldSelect
										label="serviceLocal"
										name="serviceLocal"
										default="Selecione o bloco"
										listitems={blocList}
									/>
								</div>*/}
								
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button
									isSubmitting={isSubmitting}
									title="Solicitar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid}
								/>
                {/*<Link href={"/"}>*/}
                  <Button title="Cancelar" theme="secondaryAction" type="button"  />
                {/*</Link>*/}
							</div>
						</Form>
					)}
				</Formik>
			</div>
      </div>
    </>
	);
};

export default CardCreateService;
