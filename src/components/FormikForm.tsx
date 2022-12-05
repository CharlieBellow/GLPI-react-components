import React, { useState } from 'react';
import { useFormik, Formik, Field, useField, FormikProps, Form } from "formik";
import * as yup from "yup";

import { FormikCardLabelInput } from "./FormikCardLabelInput";
import { FormikCardLabelTextarea } from "./FormikCardLabelTextarea";
//import FormikButtonSelect from "./FormikButtonSelect";
import { Button } from "./Button";
import {FormikSelect} from './FormikSelect';
import { Minus } from 'phosphor-react';
//import { FormikSelect } from "react-formik-components";




export const FormikForm = () => {
	//const [selectValue, setSelectValue] = useState('')

	const serviceLocation = [
		{ value: "bloco-a", label: "Bloco A" },
		{ value: "bloco-b", label: "Bloco B" },
		{ value: "bloco-c", label: "Bloco C" },
		{ value: "bloco-med", label: "Bloco Med" },
		{ value: "bloco-em-l", label: "Bloco em L" },
		{ value: "casa-velha", label: "Casa Velha" },
		{ value: "ncex", label: "NCEX" },
		{ value: "ru", label: "RU" },
		{ value: "administrativo", label: "Administrativo" },
		{ value: "bloco-coordenacoes", label: "Bloco Coordenações" },
		{ value: "transporte", label: "Transporte" },
	];
	
	const validationSchema = yup.object().shape( {
		title: yup
			.string()
			.min( 5, "No mínimo 5 caracteres" )
			.required( "É obrigatório colocar um título" ),
		description: yup
			.string()
			.min( 5, "No mínimo 5 caracteres" )
			.required( "É obrigatório descrever o motivo" ),

		localService: yup
			.mixed()
			.required()
		.oneOf( [
			"bloco-a",
			"bloco-b",
			"bloco-c",
			"bloco-Med",
			"bloco-em-l",
			"casa-velha",
			"ncex",
			"ru",
			"administrativo",
					"bloco-coordenações",
					"transporte",
		]
		)
		.label( "LocalService" )
		//.required("É obrigatório colocar um título")
		,


		//.array()
		//.required("obrigatório")
		//.of(yup.string().min(3, "escolha local").required("obrigatório"))
		//.object().shape( {
		//	value: yup.string().required( "Required" ),
		////	label: yup.string().required( "Required" ),
		//}  
		//)
		//	
			//.string()
			//.oneOf(
			//	[
			//		"bloco-a",
			//		"bloco-b",
			//		"bloco-c",
			//		"bloco-Med",
			//		"bloco-em-l",
			//		"casa-velha",
			//		"ncex",
			//		"ru",
			//		"administrativo",
			//		"bloco-coordenações",
			//		"transporte",
			//	],
			//	//"invalido"
			//)
			//.required("Você deve escolher um local")

		//.required( "obrigatório" ),
	});
	

	

	return (
		<>
			<Formik
				initialValues={{ title: "", description: "", LocalService: "" }}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(values);

						//actions.setStatus({})
						//alert( JSON.stringify( values, null, 2 ) );
						setSubmitting(false);
						// limpar o formulário
					}, 200);
				}}
			>
				{({
					errors,
					touched,
					setFieldTouched,
					setFieldValue,
					values,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<Form action="submit" className="">
						<div className="flex flex-col gap-9">
							<div className="mx-14">
								<FormikCardLabelInput
									label="Título"
									type="text"
									inputId="title"
									width="w-full"
								/>
								{errors.title && touched.title ? (
									<span className="text-red-ufal">{errors.title}</span>
								) : null}
							</div>
							<div className="relative mx-14">
								<FormikCardLabelTextarea
									label="Descrição"
									textareaId="description"
								/>
								{errors.description && touched.description ? (
									<span className="text-red-ufal">{errors.description}</span>
								) : null}
							</div>
							<div className="mx-14">
								<>
									<FormikSelect
										//as="select"
										label="LocalService"
										name="LocalService"
										optionsList={serviceLocation} //className="w-full bg-gray-medium text-light-bg text-xl"
										//placeholder="LocalService"
										//onBlur={handleBlur}
										value={serviceLocation.find(c => c.value === value)}
										onChange={val => onChange(val.value)}
									/>
									{/*estilizar e tirar essa borda preta feia
										<label htmlFor="LocalService">Local do serviço:</label>
										<option
											value=""
											label=""
											className="w-full bg-gray-medium text-gray-text "
										>
											Selecione o local:{" "}
										</option>
										{serviceLocation.map(item => {
											return (
												<option
													value={item.value}
													key={item.value}
													id={item.value}
												>
													{item.label}
												</option>
											);
										})}
									</FormikSelect>*/}
									{errors.LocalService && touched.LocalService ? (
										<span className="text-red-ufal">{errors.LocalService}</span>
									) : null}
									{console.log(errors)}
								</>

								{/*<FormikButtonSelect
									title="LOCAL DO SERVIÇO:"
									placeholder="Local do serviço"
									listSelectButton={serviceLocation}
									className="block px-2.5 pb-2.5 pt-2.5 text-base text-light-bg bg-gray-medium focus:bg-transparent
										max-h-11 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-ufal peer"
									triggerWidth="w-full"
									//selectValue={selectValue}
									//value={selectValue}
								/>*/}
							</div>
						</div>
						<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
							<Button title="Solicitar" theme="primaryAction" type="submit" />
							<Button title="Cancelar" theme="secondaryAction" />
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
}