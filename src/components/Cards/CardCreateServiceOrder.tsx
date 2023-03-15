import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
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

import {Service} from "../../Utils/server/types"

import {postServiceOrder} from "../../Utils/server/postInfo"

import {getService} from "../../Utils/server/getInfo"

import {useAuth} from "../../Contexts/AuthContext"
import FieldSelect from "./../../components/Inputs/FieldSelect";

export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
	aplicantsName: validationSchema.name,
	title: validationSchema.title,
	description: validationSchema.description,
  serviceLocal: validationSchema.serviceLocal,
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


  const { token } = useAuth()
  
  
  const router = useRouter();
	const {serviceOrderId, titleServiceOrder} = router.query

  const [serviceInfo, setServiceInfo] = useState<Service>({})

useEffect(() => {
  const fetchData = async () => {
		if ( !router.isReady) return;
    const response = await getService( serviceOrderId as string )

    setServiceInfo(response)
		
    
  }
  fetchData()
  
}, [router.isReady, serviceOrderId])



const string = "serviceInfo"
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
        {console.log("response", serviceInfo)}
				<Formik
					initialValues={ {
            serviceId: serviceOrderId,
            title: titleServiceOrder,
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
                
            // patrimonyId: "",
            requesterId: myuser.id,
            respponsibleId: myuser.id,
            aplicantsName: myuser.name,
            serviceLocal: "",
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
						// o post está retornando um erro 401? AxiosError: Request failed with status code 401
              postServiceOrder( values, token )
              
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
                  {/* {serviceInfo.isPatromonyIdRequired && 
									<CardLabelInput
									label="Patrimônio"
									name="patrimonyId"
									type="text"
									width="w-full"
									inputid="patrimonyId"
									disabled={!serviceInfo.isPatromonyIdRequired }
								/>
									} */}
                    
                    
                  </div>
								<div className="">
									<FieldSelect
										label="serviceLocal"
										name="serviceLocal"
										default="Selecione o bloco"
										listitems={blocList}
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

export default CardCreateServiceOrder;
