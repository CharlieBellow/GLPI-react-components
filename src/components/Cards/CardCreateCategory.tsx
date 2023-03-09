import * as yup from "yup";
import axios from "axios"; 
import { Icon, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import { toast } from "react-toastify";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLine } from "../Cards/CardLine";
import { CardTitle } from "./CardTitle";

import { validationSchema } from "../../Utils/validations";

import {useAuth} from "../../Contexts/AuthContext"
import {postCategory} from "../../Utils/server/postInfo"


const validate = yup.object().shape({
  description: validationSchema.titleCategory,
	
});

export const CardCreateCategory = () => {

  const {token} = useAuth()
  
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
              postCategory(values, token)
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
								<Button
                    title={"Solicitar" }
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
