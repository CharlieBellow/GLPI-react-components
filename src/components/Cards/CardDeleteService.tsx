
import { useEffect, useState } from "react";
import * as yup from "yup";
import { getAllServices } from "../../Utils/server/getInfo";
import { Group } from "../../Utils/server/types";
import { deleteService } from "../../Utils/server/delInfo";
import { Icon, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Button } from "../Buttons/Button";

import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";
import FieldSelect from "../Inputs/FieldSelect";


import { useMessage } from "../../Contexts/MessageContext";
import { useRouter } from "next/router";




const validate = yup.object().shape({
	
});

export const CardDeleteService = () => {
	
	const { errorMessage, successMessage } = useMessage();
	
	const token = localStorage.getItem("token");
	const router = useRouter()
	const {subGroupId} = router.query
	
	const [listService, setListService] = useState<Group[]>([])
	useEffect(() => {
		if (!router.isReady) return;
		const fetchData = async () => {
			const response = await getAllServices(subGroupId as string)
			setListService(response)
		}
		fetchData()
	}, [router.isReady, listService, subGroupId])
	
	// console.log("aqui", listService[0].title);
	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Excluir Serviço" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
			
				<Formik
					initialValues={{
						description: "",
					}}
					// validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							const token = localStorage.getItem("token");
							if (values && token) {
						console.log("values", values.description)

						deleteService(values.description, token)
								successMessage("Grupo deletado com sucesso!");
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
								<div>
									<FieldSelect label="description" listitems={listService.map(service => service.description)} default="selecione o serviço a ser deletado" name="description" />
								</div>

								<div className="">
									{/* <CardLabelInput
										label="Id da Categoria"
										name="description"
										type="text"
										width="w-full"
										inputid="description"
									/> */}
								</div>
								
							
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
			
								<Button
									title={"Excluir"}
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
