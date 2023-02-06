import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "../Cards/CardLine";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { validationSchema } from "../../Utils/validations";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { Spinner } from "@chakra-ui/react";

const validate = yup.object().shape({
	fullName: validationSchema.fullName,
	email: validationSchema.email,
	password: validationSchema.password,
	confirmPassword: validationSchema.confirmPassword,
});

function CardUserInfo() {
	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Informações do Perfil" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				<Formik
					initialValues={{
						fullName: "",
						email: "",
						password: "",
						confirmPassword: "",
					}}
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
						<Form action="" className="flex flex-col gap-9 mx-14">
							<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
								<CardLabelInput
									label="Nome Completo"
									name="fullName"
									type="text"
									inputid="name"
									width="lg:w-80 w-full"
								/>
								<CardLabelInput
									label="E-mail"
									type="email"
									name="email"
									inputid="email"
									width="lg:w-80 w-full"
								/>
							</div>
							<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
								<CardLabelInput
									label="Senha"
									type="password"
									name="password"
									inputid="password"
									width="lg:w-80 w-full"
								/>
								<CardLabelInput
									label="Confirmar Senha"
									type="password"
									name="confirmPassword"
									inputid="cpassword"
									width="lg:w-80 w-full"
								/>
							</div>
							<div className="flex justify-end gap-x-3.5 mt-10">
								{isSubmitting ? <Spinner size="xl" /> : null}
								<Button
									title="Salvar"
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
}

export default CardUserInfo;
