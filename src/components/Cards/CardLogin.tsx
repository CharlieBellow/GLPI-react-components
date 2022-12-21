import "../../styles/main.css";
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { Eye } from "phosphor-react";
import { Form, Formik } from "formik";
import { validationSchema } from "../../Utils/validations";
import * as yup from "yup";
import { toast } from "react-toastify";

const validate = yup.object().shape({
	email: validationSchema.email,
	password: validationSchema.password,
});

export function CardLogin() {
	return (
		<div className="container w-100 h-128 my-auto mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-16 pb-9 text-center">
				<CardTitle title="Fazer Login" />
			</div>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validate}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						console.log("submit:", values);

						toast.success("Chamado criado com sucesso!");
						//alert(JSON.stringify(values, null, 2));
						actions.resetForm();
						//setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, isValid }) => (
					<Form>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Email"
								name="email"
								width="w-full"
								type="email"
							/>
						</div>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Senha"
								name="password"
								width="w-full"
								type="password"
								icon={<Eye className="absolute flex ml-72" weight="bold" />}
							/>
						</div>

						<div className="flex flex-col justify-center mt-13 mx-11">
							<Button
								title="Entrar"
								theme="primary"
								type="submit"
								disabled={isSubmitting || !isValid}
							/>
							<Button title="Esqueci a senha" theme="textOnly" />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
