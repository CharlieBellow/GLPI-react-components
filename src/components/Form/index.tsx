import { Formik, Form } from "formik";

import {
	validations,
	genderList,
	lettersOnly,
	passwordRules,
	serviceLocal,
	validationSchema,
	blocList,
} from "./validations";

import * as yup from 'yup'
import { toast } from "react-toastify";
import { Button } from "../Button";
import { CardLabelInput } from "../CardLabelInput";
import { CardTitle } from "../CardTitle";
import { CardLine } from "../CardLine";
import { MySelect } from "./MySelect";
import FieldSelect from "../FieldSelect";


const validate = yup.object().shape({
	name: validationSchema.name,
	serviceLocal: validationSchema.serviceLocal,
});

export const BasicForm = () => {

	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="title" />
				</div>

				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>

				<Formik
					initialValues={{
						name: "",
						serviceLocal: "",
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);
							toast.success("Chamado criado com sucesso!");
							//alert(JSON.stringify(values, null, 2));
							actions.resetForm();
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form autoComplete="on">
							<div className="flex flex-col gap-9 mx-14">
								<div className="">
									<CardLabelInput
										label="Nome"
										name="name"
										type="text"
										width="w-full"
										inputid="title"
									/>
								</div>

								<div className="">
									<FieldSelect
										label="serviceLocal"
										name="serviceLocal"
										default="Selecione"
										listitems={blocList}
									/>
								</div>
							</div>

							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button
									title="Solicitar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting}
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
