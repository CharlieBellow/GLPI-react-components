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
				className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Criar Categoria" />
				</div>
				<div className="mx-9 mb-10 mt-4">
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
							<div className="mx-14 flex flex-col gap-9">
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
							<div className="mr-14 mt-10 flex justify-end gap-x-3.5">
			
								<Button
									title={"Criar"}
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid} isSubmitting={isSubmitting}								/>
								<Button title="Cancelar" theme="secondaryAction" isSubmitting={ false} />
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
