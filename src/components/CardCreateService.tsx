import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";
import {servicesList} from './Service'
import {
	blocList,
	validationSchema,
} from "../Utils/validations";

import * as yup from "yup";

import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import FieldSelect from "./FieldSelect";

import {Spinner} from "@chakra-ui/react";

export const lettersOnly = /[^a-zA-Z]/g;

const validate = yup.object().shape({
	name: validationSchema.name,
	title: validationSchema.title,
	description: validationSchema.description,
	serviceLocal: validationSchema.serviceLocal,
});

export const CardCreateService = () => {

	const [services, setServices] = useState(servicesList);
	
	useEffect(() => {
		const servicesStorage = localStorage.getItem("services")

		if(servicesStorage) {
			setServices(JSON.parse(servicesStorage))
		}
		console.log("lista: ", servicesStorage)
	}, [])


	useEffect(() => {
		localStorage.setItem("services", JSON.stringify(services));
	}, [services])

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
					initialValues={{
						name: "",
						title: "",
						description: "",
						serviceLocal: "",
						id: new Date()
							.toLocaleTimeString("pt-br", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit",
								second: "numeric",
							})
							.toString()
							.replace(":", "")
							.replace(":", "")
							.replace("/", "")
							.replace("/", "")
							.replace(" ", "")
					}}
					//validationSchema={validations}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							setServices([...services, values]);
							console.log("services:", services);

							toast.success("Serviço criado com sucesso!");
							//alert(JSON.stringify(values, null, 2));
							actions.resetForm();
							//setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
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
								</div>

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
									<CardLabelTextarea
										label="Descrição"
										type="textarea"
										name="description"
										textareaid="description"
									/>
								</div>
								<div className="">
									<FieldSelect
										label="serviceLocal"
										name="serviceLocal"
										default="Selecione"
										listitems={blocList}
									/>
								</div>
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								{isSubmitting ? <Spinner size="xl" /> : null}
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
