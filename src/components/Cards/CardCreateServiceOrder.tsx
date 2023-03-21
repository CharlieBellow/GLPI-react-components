import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";

import {
	blocList,
	validationSchema,

} from "../../Utils/validations";

import { Service } from "../../Utils/server/types"

import { postServiceOrder } from "../../Utils/server/postInfo"

import { getService } from "../../Utils/server/getInfo"


import { Spinner } from "@chakra-ui/react";
import { useMessage } from "../../Contexts/MessageContext";
import axios from "axios";

export const lettersOnly = /[^a-zA-Z]/g;
let requiredValidation
const validate = yup.object().shape({
	description: validationSchema.description,
	title: validationSchema.titleGroup,
	// serviceLocal: validationSchema.serviceLocal,
	patrimonyId: validationSchema.patrimony,
});

const validateWhitOutPatrimony = yup.object().shape({
	description: validationSchema.description,
	title: validationSchema.titleGroup,
	// serviceLocal: validationSchema.serviceLocal,
	// patrimony: validationSchema.patrimony,
});


export const CardCreateServiceOrder = () => {

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
		isPatromonyIdRequired: true,
		glpiSla: null,
		createdAt: "2023-02-23T13:32:49.880Z",
		updatedAt: "2023-02-23T13:32:49.880Z"
	}


	const token = localStorage.getItem("token");
	const router = useRouter();
	const { serviceOrderId, titleServiceOrder } = router.query

	const [serviceInfo, setServiceInfo] = useState<Service>()

	const { errorMessage, successMessage } = useMessage()

	// nessa tela não conseguimos passar o títuo do serviço e nem o ID do serviço. por alguma razão não estamos conseguindo pegar o objeto de serviço e passar para esse formulário e validar

	
	useEffect(() => {
		if (!router.isReady) return;
		const fetchData = async () => {
			
			const response = await getService(serviceOrderId as string)
			setServiceInfo(response)
			if (response.isPatromonyIdRequired) {
				requiredValidation = validationSchema.patrimony
			}
			
		}
		fetchData()
		
	}, [router.isReady])
	
	console.log("response", serviceInfo)
	

	return (
		<>
			<div className="mx-4">
				<div className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card">
					<>
						<div className="pl-9 pt-8">
							<CardTitle title="Criar ordem de serviço" />
						</div>
						<div className="mx-9 mt-4 mb-10">
							<CardLine />
						</div>
						
						{router.isReady && serviceInfo ?
							<Formik
								validateOnMount={true}
								initialValues={{
									description: "",
									serviceId: serviceInfo.id,
									patrimonyId: serviceInfo.isPatromonyIdRequired ? "" : "notrequired",
									requesterId: myuser.id,
									respponsibleId: myuser.id,
									// serviceLocal:"",
									title: serviceInfo.title,
									status: "Aberto",
									estimetadAt: new Date(),
									closedAt: new Date()
								}}
								validationSchema={validate}
								onSubmit={(values, actions) => {
									setTimeout(() => {
										console.log("submit:", values);

										if (token !== null) {
											axios({
												method: 'post',
												baseURL: "http://172.27.12.171:3333",
												url: `/servicebook/serviceorder/`,
												data: values,
												headers: { authorization: `Bearer ${token}` }
											})
									
						

											successMessage("Serviço criado com sucesso!");

											actions.resetForm();
										} else {
											errorMessage("Algo deu errado. Tente novamente.")
										}

									}, 400);
								}}
							>
								{({ isSubmitting, isValid }) => (
									<Form autoComplete="on">
										<div className="flex flex-col gap-9 mx-14">
											<div className="">
												<CardLabelInput
													label="Título"
													name="title"
													type="text"
													width="w-full"
													inputid="title"
													disabled={serviceInfo && serviceInfo.title ? true : false}
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
												{serviceInfo && serviceInfo.isPatromonyIdRequired ?
													<CardLabelInput
														label="Patrimônio"
														name="patrimonyId"
														type="text"
														width="w-full"
														inputid="patrimonyId"
													/>
													: <></>}
											</div>
										</div>
										<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
											<Button
												isSubmitting={isSubmitting}
												title={isSubmitting ? <Spinner size="md" /> : "Criar"}
												theme="primaryAction"
												type="submit"
												disabled={isSubmitting || !isValid}
											/>
											<Button title="Cancelar" theme="secondaryAction" type="button" />
										</div>
									</Form>
								)}
							</Formik>
							: <div className="flex justify-center"><Spinner size="lg" /></div>}
					</>
				</div>
			</div>
		</>
	);
};

export default CardCreateServiceOrder;
