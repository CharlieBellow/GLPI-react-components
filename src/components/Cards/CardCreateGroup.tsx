import { Icon, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Button } from "../Buttons/Button";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { CardLabelTextarea } from "../Inputs/CardLabelTextarea";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";
import FieldSelect from "../Inputs/FieldSelect";
import { validationSchema, servicesList } from "../../Utils/validations";
import * as yup from "yup";
//import { services, ServicesList } from '../Pages/ServiceLetter/ServicesList';
import { useEffect, useState } from "react";
import { useGroupContext } from '../../Contexts/GroupContext';
import { groupIcons, groupModel } from "../../Utils/ServiceModels";
import { useMessage } from "../../Contexts/MessageContext";
import { Group } from "../../Utils/server/types";



const validate = yup.object().shape({
	titleCategory: validationSchema.titleGroup,
	description: validationSchema.description,
	services: validationSchema.services,
	link: validationSchema.link,
});

export const CardCreateGroup = () => {

	//const {category} = useCategoryContext()
	const [ groups, setGroups ] = useState<Group[]>([]);
	const {errorMessage, successMessage} = useMessage()
	useEffect(() => {
		const groupStorage = localStorage.getItem("groups");

		if (groupStorage) {
			setGroups(JSON.parse(groupStorage));

			console.log("groups: ", groupStorage);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("groups", JSON.stringify(groups));
	});


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
						//services: [],
						//icon: categoryIcons[ 3 ].icon,
						link: "",
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
							//setCategories([...categories, values]);
							console.log("group:", groups);

							successMessage("Grupo criado com sucesso!");
							
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
									<CardLabelInput
										label="link"
										name="link"
										type="text"
										width="w-full"
										inputid="title"
									/>
								</div>
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								{isSubmitting ?  <Spinner size="xl" /> : null}
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
