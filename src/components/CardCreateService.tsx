import React from "react";
//import ButtonSelect from "./ButtonSelect";
//import ButtonSelectObject from "./ButtonSelectObject";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";
//import * as validations from "../components/Form/validations";
import {
	blocList,
	validationSchema,
	validations,
} from "../components/Form/validations";

import * as yup from "yup";

import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import FieldSelect from "./FieldSelect";




export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
	name: validationSchema.name,
	title: validationSchema.title,
	description: validationSchema.description,
	serviceLocal: validationSchema.serviceLocal,
});

export const CardCreateService = () => {
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
				{console.log(validationSchema)}
				<Formik
					initialValues={{
						name: "",
						title: "",
						description: "",
						serviceLocal: "",
					}}
					//validationSchema={validations}
					validationSchema={validate}
					onSubmit={( values, actions, setSubmitting ) => {
						setTimeout(() => {
							console.log("submit:", values);

							toast.success("Chamado criado com sucesso!");
							//alert(JSON.stringify(values, null, 2));
							actions.resetForm();
							setSubmitting(false);
						}, 400);
					}}
				>
					{({
						values,
						handleSubmit,
						isSubmitting,
						errors,
						touched,
						isValidating,
					}) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome"
										name="name"
										type="text"
										width="w-full"
										inputid="title"
									/>
									{errors.name && touched.name && (
										<span className="text-red-ufal text-sm">{errors.name}</span>
									)}
								</div>

								<div className="">
									<CardLabelInput
										label="Título"
										name="title"
										type="text"
										width="w-full"
										inputid="title"
									/>
									{errors.title && touched.title && (
										<span className="text-red-ufal text-sm">
											{errors.title}
										</span>
									)}
								</div>

								<div className="">
									<CardLabelTextarea
										label="Descrição"
										type="textarea"
										name="description"
										textareaid="description"
									/>
									{errors.description && touched.description && (
										<span className=" text-red-ufal text-sm">
											{errors.description}
										</span>
									)}
								</div>
								<div className="">
									<FieldSelect
										label="serviceLocal"
										name="serviceLocal"
										default="Selecione"
										listitems={blocList}
									/>

									{errors.serviceLocal && touched.serviceLocal && (
										<span className=" text-red-ufal text-sm">
											{errors.serviceLocal}
										</span>
									)}
								</div>
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button
									title="Solicitar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting}
								/>
								<Button title="Cancelar" theme="secondaryAction" />
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default CardCreateService;

// mandar p/ back-end um objeto com titulo, descrição, local onde será realizado o serviço e categoria do serviço e subcategoria do serviço. adicionar input de local do serviço (select)
//resolver o problema dos botões
