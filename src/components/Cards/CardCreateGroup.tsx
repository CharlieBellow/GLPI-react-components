import { Icon, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";
import FieldSelect from "../Inputs/FieldSelect";
import { validationSchema, servicesList,  } from "../../Utils/validations";
import * as yup from "yup";

import { useMessage } from "../../Contexts/MessageContext";

import { postGroup } from "../../Utils/server/postInfo";



const validate = yup.object().shape({
	description: validationSchema.titleGroup,
});

export const CardCreateGroup = () => {

	const { errorMessage, successMessage } = useMessage();

	const token = localStorage.getItem("token");
		
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
				{}
				<Formik
					initialValues={{
						description: "",
						// icon: groupIcons[ 3 ].icon,
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							const token = localStorage.getItem("token");
							if (values && token) {
								postGroup(values, token)
								successMessage("Grupo criado com sucesso!");
								actions.resetForm();
								
							} else {
								errorMessage("Algo deu errado. Tente Novamente.")
							}
							
					
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
								{/* <FieldSelect listitems={groupIcons } 
  label="Ícone"
  name="icon"
  default="icone"/> */}

							
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
			
								<Button
									title={isSubmitting ?  <Spinner size="md" /> : "Criar"}
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
