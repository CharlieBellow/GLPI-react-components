import React from "react";
import ButtonSelect from "./ButtonSelect";
import ButtonSelectObject from "./ButtonSelectObject";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";
import { validationSchema } from "../Utils/validations";

import { Formik, Field, Form} from "formik";


const serviceLocation = [
	{ values: "bloco-a", label: "Bloco A" },
	{ values: "bloco-b", label: "Bloco B" },
	{ values: "bloco-c", label: "Bloco C" },
	{ values: "bloco-med", label: "Bloco Med" },
	{ values: "bloco-em-l", label: "Bloco em L" },
	{ values: "casa-velha", label: "Casa Velha" },
	{ values: "ncex", label: "NCEX" },
	{ values: "ru", label: "RU" },
	{ values: "administrativo", label: "Administrativo" },
	{ values: "bloco-coordenações", label: "Bloco Coordenações" },
	{ values: "transporte", label: "Transporte" },
];

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
				<Formik
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							console.log("submit", values);

							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
					initialValues={ {
						name: "",
						title: "",
						description: "",
						serviceLocal: "",
					}}
					render={({ values, handleSubmit, errors, touched }) => (
						<Form onSubmit={handleSubmit}>
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome"
										name="name"
										type="text"
										width="w-full"
										inputId="title"
									/>
									{errors.name && touched.name && (
										<span className="text-red-ufal text-sm">
											{errors.name}
										</span>)}
									
								</div>

								<div className="">
									<CardLabelInput
										label="Título"
										name="title"
										type="text"
										width="w-full"
										inputId="title"
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
										textareaId="description"
									/>
									{errors.description && touched.description && (
										<span className=" text-red-ufal text-sm">
											{errors.description}
										</span>
									)}
								</div>
								<div >
									<Field
										as="select"
										placeholder="selecione"
										name="serviceLocal"
										className={`bg-gray-medium text-gray-text font-bold text-base py-2 px-2.5 rounded-md w-full`}
									>
										<option value="" className="">
											LOCAL DO SERVIÇO:
										</option>
										{serviceLocation.map(item => {
											return <option value={item.values}>{item.label}</option>;
										})}

										{/*<ButtonSelectObject
											type="select"
											label={"serviceLocal"}
											name="serviceLocal"
											title="LOCAL DO SERVIÇO:"
											placeholder="LOCAL DO SERVIÇO:"
											listSelectButton={serviceLocation}
											className="block px-2.5 pb-2.5 pt-2.5 text-base text-light-bg bg-gray-medium focus:bg-transparent
														max-h-11 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-ufal peer"
											triggerWidth="w-full"
										itemId={ 32 }
										/>*/}
									</Field>
									<>
										{errors.serviceLocal &&  touched.serviceLocal && (
											<span className=" text-red-ufal text-sm">
												{errors.serviceLocal}
											</span>
										)}
										
									</>
								</div>
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button title="Solicitar" theme="primaryAction" type="submit" />
								<Button title="Cancelar" theme="secondaryAction" />
							</div>
						</Form>
					)}
				/>
			</div>
		</div>
	);
};

export default CardCreateService;

// mandar p/ back-end um objeto com titulo, descrição, local onde será realizado o serviço e categoria do serviço e subcategoria do serviço. adicionar input de local do serviço (select)
//resolver o problema dos botões
