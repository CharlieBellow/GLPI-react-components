import { Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { Button } from "./Button";
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";
import FieldSelect from "./FieldSelect";
import { validationSchema, servicesList } from "../Utils/validations";
import * as yup from "yup";
//import { services, ServicesList } from '../Pages/ServiceLetter/ServicesList';
import { useEffect, useState } from "react";


const validate = yup.object().shape( {
  titleCategory: validationSchema.titleCategory,
  description: validationSchema.description,
  services: validationSchema.services,
} )


export const CardCreateCategory = () => {

  const [categories, setCategories] = useState([{}]);

  useEffect( () => {
    const categoryStorage = localStorage.getItem("categories");
    
    if ( categoryStorage ) {
      setCategories( JSON.parse( categoryStorage ) )
      
      console.log("categories: ", categoryStorage);
      
    }
  }, [] )
  
  useEffect( () => {
    localStorage.setItem("categories", JSON.stringify(categories));
  })
  


  return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Criar Categoria" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				<Formik
					initialValues={{
						titleCategory: "",
						description: "",
						services: "",
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
							setCategories([...categories, values]);
							console.log("category:", categories);

							toast.success("Serviço criado com sucesso!");
							//alert(JSON.stringify(values, null, 2));
							actions.resetForm();
							//setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting, isValid }) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome da Categoria"
										name="titleCategory"
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
										listitems={servicesList}
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
}