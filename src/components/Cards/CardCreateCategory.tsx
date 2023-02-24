import axios from "axios"; 
import { Icon, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import { CardLine } from "../Cards/CardLine";
import { CardTitle } from "./CardTitle";
import FieldSelect from "../Inputs/FieldSelect";
import { validationSchema, servicesList } from "../../Utils/validations";
import * as yup from "yup";
//import { services, ServicesList } from '../Pages/ServiceLetter/ServicesList';
import { useEffect, useState } from "react";
import { useCategoryContext } from '../../Contexts/CategoryContext';
import { categoryIcons, categoryModel } from "../../Utils/ServiceModels";

import {useAuth} from "../../Contexts/AuthContext"



/* 

{
	"id": "35be846f-55ba-48d0-a752-d22a9a82eb47",
	"description": "GTI",
	"createdAt": "2023-02-17T17:23:59.579Z",
	"updatedAt": "2023-02-17T17:23:59.579Z"
}

*/

const validate = yup.object().shape({
  description: validationSchema.titleCategory,
	
});

export const CardCreateCategory = () => {

  const {token} = useAuth()

  async function postCategory(values) {
  const postCategory = await axios({
                method: 'post',
                baseURL: "http://172.27.12.171:3333",
                url: "/servicebook/group",
                data: values,
                headers: {authorization: `Bearer ${ token }`}
              }) 
    }


  return (
    <>
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
						description: "",
            
					}}
		
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
              postCategory(values)

							toast.success("Categoria criada com sucesso!");

              
							
							actions.resetForm();
					
						}, 400);
					}}
				>
					{({ isSubmitting, isValid }) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome da Categoria"
                    name="description"
										type="text"
										width="w-full"
                    inputid="description"
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
		</div >
      </>
	);
};
