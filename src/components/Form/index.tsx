
mport { Formik, Form } from "formik";
//import { useState } from "react";

import {
	validationSchema,
} from "../../Utils/validations";

import * as yup from "yup";
import { useMessage } from "../../Contexts/MessageContext";
import { Button } from "../Buttons/Button";
import { CardLine } from "../Cards/CardLine";
import { CardTitle } from "../Cards/CardTitle";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { Formik, Form } from "formik";
const validate = yup.object().shape({
	name: validationSchema.name,
});

export const BasicForm = () => {
	const {errorMessage, successMessage} = useMessage()
	return (
		<div className="mx-4">
			<div
				className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="title" />
				</div>

				<div className="mx-9 mb-10 mt-4">
					<CardLine />
				</div>

				<Formik
					initialValues={{
						name: "",
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							successMessage("Chamado criado com sucesso!");
							//alert(JSON.stringify(values, null, 2));
							actions.resetForm();
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form autoComplete="on">
							<div className="mx-14 flex flex-col gap-9">
								<div className="">
									<CardLabelInput
										label="Nome"
										name="name"
										type="text"
										width="w-full"
										inputid="title"
									/>
								</div>
							</div>

							<div className="mr-14 mt-10 flex justify-end gap-x-3.5">
								<Button
									theme="primary"
									type="submit"
									disabled={isSubmitting}
								>Solicitar</Button>
								<Button theme="secondary" >Cancelar</Button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
