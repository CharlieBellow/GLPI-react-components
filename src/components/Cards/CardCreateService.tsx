import React, { useEffect} from "react";
import { Field} from "formik";
import {postService} from "../../Utils/server/postInfo"

import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import {useRouter} from "next/router"
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelInputCheckbox } from "../Inputs/CardLabelInputCheckbox";
import { CardLabelInputCheckBoolean } from "../Inputs/CardLabelInputCheckBoolean";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import {

	validationSchema,
	
} from "../../Utils/validations";
import { CardLabelInputFile } from "../Inputs/CardLabelInputFile";
import { Eye, UploadSimple } from "phosphor-react";

import {postServiceOrder} from "../../Utils/server/postInfo"

import { useMessage } from "../../Contexts/MessageContext";
import {useAuth} from "../../Contexts/AuthContext"

export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
	title: validationSchema.title,
	definition: validationSchema.title,
	description: validationSchema.descriptionService,
  personType: validationSchema.personType,

});


export const CardCreateService = () => {
	
  const router = useRouter();

  console.log("router", router.query.subgroupId)
  const { token } = useAuth()
  const {errorMessage, successMessage} = useMessage()

  return (
    <>
		<div className="mx-4">
			<div className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card">
					<div className="pl-9 pt-8">
						<CardTitle title="Criar serviço" />
					</div>
					<div className="mx-9 mt-4 mb-10">
						<CardLine />
					</div>
					<Formik
        				validateOnMount={true}
						initialValues={ {
							serviceSubGroupId: router.query.subgroupId,
							title:"",
							description: "",
							personType: [],
							isPatromonyIdRequired: false,
							definition: "",
						}}
						validationSchema={validate}
						onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
						
              				postService( values, token )
              
			  				successMessage("Serviço criado com sucesso!");
						
							actions.resetForm();
							
						}, 400);
					}}
					>
						{({ isSubmitting, isValid, values,  touched, errors }) => (
						<Form autoComplete="on">
								<div className="flex flex-col gap-9 mx-14">
									<>
									<div className="">
										<CardLabelInput
											label="Título"
											name="title"
											type="text"
											width="w-full"
											inputid="title"
										/>
									</div>
									<div className="">
										<CardLabelInput
											label="Definição"
											name="definition"
											type="text"
											width="w-full"
											inputid="definition"
										
										/>
									</div>
									<div className="">
										<CardLabelInputFile
											label="Adicionar Documento"
											name="addFile"
											type="file"
											width="w-full"
											inputid="title"
											icon={<UploadSimple className="absolute flex mr-4" weight="bold" />}
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

									<div className="">
										<CardLabelInputCheckBoolean name="isPatromonyIdRequired" label="Requisitar patrimônio"/>
									</div>        
					
									<div>
										<p>Quem pode criar esse serviço? (selecione pelo menos um)</p>
										<div className="gap-2 flex flex-col lg:grid lg:grid-cols-2 ">

											<CardLabelInputCheckbox name="personType" value="Discente" checkArray={values.personType}/>
											<CardLabelInputCheckbox name="personType" value="Técnico Administrativo" checkArray={values.personType}/>
											<CardLabelInputCheckbox name="personType" value="Docente" checkArray={values.personType}/>
											<CardLabelInputCheckbox name="personType" value="Discente Pós-Graduação" checkArray={values.personType}/>
											<CardLabelInputCheckbox name="personType" value="Terceirizado" checkArray={values.personType}/>
											
										</div>
										{errors.personType && touched.personType ? (
											<span className="text-red-ufal text-sm">{errors.personType}</span>
											) : <></>}
									</div>
									{console.log("errors", errors.personType)}
									<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
										<>
											<Button
												isSubmitting={isSubmitting}
												title="Solicitar"
												theme="primaryAction"
												type="submit"
												disabled={isSubmitting || !isValid}
											/>
											{console.log("sub", isSubmitting)}
											{console.log("val", isValid)}
											{/*<Link href={"/"}>*/}
											<Button title="Cancelar" theme="secondaryAction" type="button"  />
											{/*</Link>*/}
										</>
									</div>
									</>
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
