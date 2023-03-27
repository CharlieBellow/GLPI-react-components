
import * as yup from "yup";
import { Form, Formik } from "formik";
import { CardLine } from "./CardLine";
import { CardTitle } from "./CardTitle";
import { validationSchema } from "../../Utils/validations";
import { CardLabelTextarea } from "../../components/Inputs/CardLabelTextarea";
import { Button } from "../../components/Buttons/Button";
import router from "next/router";
import { useEffect, useState } from "react";
import { getService, getServiceOrder } from "../../Utils/server/getInfo";
import { ServiceOrder } from "../../Utils/server/types";
import { Spinner } from "@chakra-ui/react";
import { CardLabelInput } from "../../components/Inputs/CardLabelInput";

let requiredValidation
const validate = yup.object().shape({
    description: validationSchema.description,
    title: validationSchema.titleGroup,
    // serviceLocal: validationSchema.serviceLocal,
    patrimonyId: validationSchema.patrimony,
});

const validateWhitOutPatrimony = yup.object().shape({
    description: validationSchema.description,
    title: validationSchema.titleGroup,
    // serviceLocal: validationSchema.serviceLocal,
});     


function CardUpdateServiceOrder(){

	const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

	const { serviceOrderId, titleServiceOrder } = router.query
    const [serviceOrderInfo, setServiceOrderInfo] = useState<ServiceOrder>()
    useEffect(() => {
		if (!router.isReady) return;
		const fetchData = async () => {
			
			const response = await getServiceOrder(serviceOrderId as string, token as string)
			setServiceOrderInfo(response)
			if (response.isPatromonyIdRequired) {
				requiredValidation = validationSchema.patrimony
			}
			
		}
		fetchData()
		
	}, [router.isReady])
    return(
        <>
			<div className="mx-4">
				<div className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card">
					<>
						<div className="pl-9 pt-8">
							<CardTitle title="Criar ordem de serviço" />
						</div>
						<div className="mx-9 mt-4 mb-10">
							<CardLine />
						</div>
                            {router.isReady && serviceOrderInfo ?
							<Formik
								validateOnMount={true}
								initialValues={{
									description: serviceOrderInfo?.description,
									serviceId: serviceOrderInfo?.serviceId,
									patrimonyId: serviceOrderInfo?.service.isPatromonyIdRequired ? "" : "notrequired",
									requesterId: serviceOrderInfo?.requesterId,
									respponsibleId: serviceOrderInfo?.responsibleId,
									// serviceLocal:"",
									title: serviceOrderInfo?.service.title,
									status: serviceOrderInfo?.status,
									estimetadAt: serviceOrderInfo?.estimatedAt,
									closedAt: serviceOrderInfo?.createdAt
								}}
								validationSchema={validate}
								onSubmit={(values, actions) => {
									setTimeout(() => {
										console.log("submit:", values);

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
								</div>
								<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
									<Button
										isSubmitting={isSubmitting}
										title="Criar"
										theme="primaryAction"
										type="submit"
										disabled={isSubmitting || !isValid}
									/>
									<Button title="Cancelar" theme="secondaryAction" type="button" />
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