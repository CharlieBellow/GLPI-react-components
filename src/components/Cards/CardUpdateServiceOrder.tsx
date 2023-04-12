
import * as yup from "yup";
import { Form, Formik } from "formik";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";
import { validationSchema } from "../../Utils/validations";
import { CardLabelTextarea } from "../../components/Inputs/CardLabelTextarea";
import { Button } from "../../components/Buttons/Button";
import router from "next/router";
import { useEffect, useState } from "react";
import { getAllUsers, getService, getServiceOrder } from "../../Utils/server/getInfo";
import { ServiceOrder, User } from "../../Utils/server/types";
import { Spinner } from "@chakra-ui/react";
import { CardLabelInput } from "../../components/Inputs/CardLabelInput";
import FieldSelect from "../Inputs/FieldSelect";
import { updateServiceOrder } from "../../Utils/server/updateInfo";
import { useMessage } from "../../Contexts/MessageContext";


let requiredValidation
const validate = yup.object().shape({
    description: validationSchema.description,
    // serviceLocal: validationSchema.serviceLocal,
    patrimonyId: validationSchema.patrimony,
});

const validateWhitOutPatrimony = yup.object().shape({
    description: validationSchema.description,
    // serviceLocal: validationSchema.serviceLocal,
});     


function CardUpdateServiceOrder(){

	const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") as string);
	const {errorMessage, successMessage} = useMessage()

	const { serviceOrderId, titleServiceOrder } = router.query
    const [serviceOrderInfo, setServiceOrderInfo] = useState<ServiceOrder>()
	const [users, setUsers] = useState<User[]>([])
	const status = ["Aberto", "Em Execução", "Aguardando Peças", "Fechado"]
    useEffect(() => {
		if (!router.isReady) return;
		const fetchData = async () => {
			
			const response = await getServiceOrder(serviceOrderId as string, token as string)
			setServiceOrderInfo(response)
			const userResponse = await getAllUsers(token as string)
			setUsers(userResponse)
			if (response.isPatromonyIdRequired) {
				requiredValidation = validationSchema.patrimony
			}
			
		}
		fetchData()
		
	}, [serviceOrderId, token])
    return(
        <>
			<div className="mx-4">
				<div className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card">
					<>
						<div className="pl-9 pt-8">
							<CardTitle title="Editar ordem de serviço" />
						</div>
						<div className="mx-9 mt-4 mb-10">
							<CardLine />
						</div>
                            {router.isReady && serviceOrderInfo ?
							<Formik
								validateOnMount={true}
								initialValues={{
									description: serviceOrderInfo?.description,
									id: serviceOrderInfo?.id,
									patrimonyId: serviceOrderInfo?.service.isPatromonyIdRequired ? serviceOrderInfo.patrimonyId : "notrequired",
									respponsibleId: serviceOrderInfo?.responsibleId,
									status: serviceOrderInfo?.status,
									estimetadAt: serviceOrderInfo?.estimatedAt,
									//closedAt: serviceOrderInfo?.createdAt
								}}
								validationSchema={validate}
								onSubmit={(values, actions) => {
									setTimeout(() => {
										console.log("submit:", values);
										if (token !== null) {
											// ! alterar as informações que são passadas/recebidas no servidor
											updateServiceOrder(values, token, serviceOrderId as string)
										  	successMessage("Oredem de serviço atualizada com sucesso");
											router.back()
			
										} else {
											errorMessage("Algo deu errado, tente novamente.")
										}

							}, 400);
						}}
					>
						{({ isSubmitting, isValid }) => (
							<Form autoComplete="on">
								<div className="flex flex-col gap-9 mx-14">
									{/* <div className="">
										<CardLabelInput
											label="Título"
											name="title"
											type="text"
											width="w-full"
											inputid="title"
											disabled={serviceInfo && serviceInfo.title ? true : false}
										/>
									</div> */}
									<div className="">
										<CardLabelTextarea
											label="Descrição"
											type="textarea"
											name="description"
											textareaid="description"
										/>
									</div>
									<div>
									{  serviceOrderInfo && serviceOrderInfo.service.isPatromonyIdRequired ? 
									<CardLabelInput
									label="Patrimônio"
									name="patrimonyId"
									type="text"
									width="w-full"
										inputid="patrimonyId"
									/>
									: <></> }
									</div>	
									<div>
									{  serviceOrderInfo && user.isAdmin ? 
									<FieldSelect
									label="Responsável"
									name="respponsibleId"
									default={serviceOrderInfo.responsibleId ? "" : "Selecione o usuário responsável"}
									listitems={users.map(user => user.name)}/>
									: <></> }	
									</div>
									<div>
									{  serviceOrderInfo && user.isAdmin ? 
									<FieldSelect
									label="status"
									name="status"
									listitems={status}/>
									: <></> }	
									</div>
							
								</div>
								<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
									<Button
										isSubmitting={isSubmitting}
										title="Salvar"
										theme="primaryAction"
										type="submit"
										disabled={isSubmitting || !isValid}
									/>
									<Button title="Cancelar" theme="secondaryAction" type="button" onClick={() => router.back()} isSubmitting={false}/>
								</div>
						</Form>
					)}
					</Formik>
                    :
                    <div className="grid h-full place-items-center">
                    <Spinner size={'md'}></Spinner>
                </div>
        }
				</>
			</div>
      </div>
    </>
    )
}
export default CardUpdateServiceOrder