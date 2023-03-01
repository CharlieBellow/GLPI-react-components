import React, { useEffect, useState } from "react";
import Link from "next/link"
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import {useRouter} from "next/router"
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import { servicesList } from "../ServicesComponent/Service";
import {
  bondList,
	blocList,
	validationSchema,
	
} from "../../Utils/validations";

import {getService, service} from "../../Utils/server/getInfo"
//import fetchApiData from "../../Utils/fetchApiData";

import { useServiceContext } from "../../Contexts/ServiceContext";
import { useServiceLetterContext } from "../../Contexts/ServiceLetterContext";

import FieldSelect from "../Inputs/FieldSelect";
import {  serviceModel } from "../../Utils/ServiceModels";



export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
	aplicantsName: validationSchema.name,
	title: validationSchema.title,
	description: validationSchema.description,
  serviceLocal: validationSchema.serviceLocal,
  patrimony: validationSchema.patrimony,
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
}

*/

export const CardCreateService = () => {
	

  const router = useRouter()
  console.log("serviceorder", router.query.serviceorder)

useEffect(() => {
  getService(router.query.serviceorder)

}, [])


// precisa criar um select onde dê pra selecionar vários e quardar em um array. por hora pede para colocar separado por vígula ou faz um checkbox com as opções
// criar um toggle par que possa pegar a opção de sim ou não do patrimônio 

	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Solicitar Serviço" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				<Formik
					initialValues={ {
            serviceSubGroupId: service.serviceSubGroupId,
            title: "service.title",
            description: "",
            definition: "",
            personType: [],
            aplicantsName: "user.fullName",
            serviceLocal: "",
            isPatromonyIdRequired: false,
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
						

							toast.success("Serviço criado com sucesso!");
						
							actions.resetForm();
							
						}, 400);
					}}
				>
					{({ isSubmitting, isValid }) => (
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
                      name="patrimony"
                      type="text"
                      width="w-full"
                      inputid="patrimony"
                    />
                    : <></>}
                  </div>
								<div className="">
									<FieldSelect
										label="serviceLocal"
										name="serviceLocal"
										default="Selecione o bloco"
										listitems={blocList}
									/>
								</div>
								<div className="">
									<FieldSelect
										label="bond"
										name="bond"
										default="Selecione o vínculo"
										listitems={bondList}
									/>
								</div>
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
                  <Button title="Cancelar" theme="secondaryAction" type="button" onClick={} />
                {/*</Link>*/}
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default CardCreateService;
