import * as yup from "yup";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import { CardLine } from "../Cards/CardLine";
import { CardTitle } from "./CardTitle";
import FieldSelect from "../Inputs/FieldSelect";

import {useAuth} from "../../Contexts/AuthContext"

import {
	validationSchema,
	servicesList,
	categoriesList,
} from "../../Utils/validations";


const validate = yup.object().shape({
	description: validationSchema.titleSubcategory,
});

export const CardCreateSubcategory = () => {


let categorias = []
 const getCategoriesList = async function() {

  const categoriesList = await axios({
                method: 'get',
                baseURL: "http://172.27.12.171:3333",
                url: "/servicebook/group",
              })
              
              .then(response => {
               categorias = response.data
            console.log(categorias)
               
                return categorias
               
              })
            }
getCategoriesList()

const {token} = useAuth()
 async function postSubategory(values) {
  const postCategory = await axios({
                method: 'post',
                baseURL: "http://172.27.12.171:3333",
                url: "/servicebook/subgroup",
                data: values,
                headers: {authorization: `Bearer ${ token }`}
              }) 
    }

	
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
						serviceGroupId: "",
						description: "",
						
					}}
				
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
						  postSubategory(values)

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
										name="description"
										type="text"
										width="w-full"
										inputid="title"
									/>
								</div>

                <div className="">
                  <FieldSelect
                    label="serviceGroupId"
                    name="serviceGroupId"
                    default="Selecione a categoria a qual ela pertence"
                    listitems={categorias} 
                  />
                </div>
								{/*<div className="">
									<FieldSelect
										label="services"
										name="services"
										default="Selecione o serviço"
										listitems={ serviceOrderModel.map( service => {
											return (
												service.serviceLetter.title
											);
										}
										) }
									/>
								</div>*/}
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button
									title={isSubmitting ? <Spinner size="md" /> : "Solicitar" }
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
