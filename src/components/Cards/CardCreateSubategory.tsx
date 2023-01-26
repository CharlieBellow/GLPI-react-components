import { Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import { CardLine } from "../Cards/CardLine";
import { CardTitle } from "./CardTitle";
import FieldSelect from "../Inputs/FieldSelect";

import { categoryModel, serviceModel, subcategoryModel } from '../../Utils/ServiceModels'
import {
	validationSchema,
	servicesList,
	categoriesList,
} from "../../Utils/validations";
import * as yup from "yup";
//import { services, ServicesList } from "../Pages/ServiceLetter/ServicesList";
import { useEffect, useState } from "react";
import { useServiceContext } from "../../Contexts/ServiceContext";
import { useServiceLetterContext } from "../../Contexts/ServiceLetterContext";

const validate = yup.object().shape({
	titleSubcategory: validationSchema.titleSubcategory,
	description: validationSchema.description,
	category: validationSchema.category,
	services: validationSchema.services,
});

export const CardCreateSubcategory = () => {

	const { addInfoService, infoService } = useServiceContext()
	const { addInfoServiceLetter, infoServiceLetter } = useServiceLetterContext()

	
	console.log( "infoServiceLetter:", infoServiceLetter )
	const [ subcategories, setSubcategories ] = useState( subcategoryModel );

	useEffect(() => {
		const subcategoryStorage = localStorage.getItem("subcategories");

		if (subcategoryStorage) {
			setSubcategories(JSON.parse(subcategoryStorage));

			//console.log("subcategories: ", subcategoryStorage);
		}
	}, [] );

	useEffect(() => {
		localStorage.setItem("subcategories", JSON.stringify(subcategories));
	} );
	
	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Criar Subcategoria" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				<Formik
					initialValues={{
						titleSubcategory: "",
						description: "",
						category: categoryModel[ 0 ],
						//services: [],
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
							.replace(" ", ""),
					}}
					//validationSchema={validations}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							setSubcategories([...subcategories, values]);
							console.log("subcategory:", subcategories);
						console.log("values:", values);
						
						
							addInfoServiceLetter( [ { subcategory: values, id: "0" } ] )
							console.log( "infoServiceLetter:", infoServiceLetter )
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
										label="Nome da Subcategoria"
										name="titleSubcategory"
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
										label="services"
										name="services"
										default="Selecione o serviço"
										listitems={ serviceModel.map( service => {
											return (
												service.serviceLetter.title
											);
										}
										) }
									/>
								</div>
								<div className="">
									<FieldSelect
										label="category"
										name="category"
										default="Selecione a categoria"
										listitems={ 
											categoryModel.map( (category) => {
												return (
													category.titleCategory
												);
											}
											)
} 
									/>
								</div>
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								{isSubmitting ? <Spinner size="xl" /> : null}
								<Button
									title="Solicitar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid}
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
