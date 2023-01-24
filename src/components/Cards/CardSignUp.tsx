import "../../styles/main.css";
import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { Eye } from "phosphor-react";
import { Form, Formik } from "formik";
import { validationSchema } from "../../Utils/validations";

import * as yup from "yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

const validate = yup.object().shape({
	fullName: validationSchema.fullName,
	email: validationSchema.email,
	confirmEmail: validationSchema.confirmEmail,
	password: validationSchema.password,
	confirmPassword: validationSchema.confirmPassword,
});

export function CardSignUp () {
	
	const { auth, setAuth }: any = useContext( AuthContext )
	console.log( "auth", auth );

	return (
		<div className="container w-100 h-auto my-auto  mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-7 pb-8 text-center">
				<CardTitle title="Criar Conta" />
			</div>
			<Formik
				initialValues={{
					fullName: "",
					email: "",
					confirmEmail: "",
					password: "",
					confirmPassword: "",
				}}
				validationSchema={validate}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						console.log("submit:", values);

						if ( values  ) {
							setAuth( true );
						
							toast.success("Conta criada com sucesso!");
							
						} else {
							toast.error("Algo deu errado, tente novamente inserindo outros dados");

						}
					
						actions.resetForm();
						
					}, 400);
				}}
			>
				{({ isSubmitting, isValid }) => (
					<Form>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Nome Completo"
								name="fullName"
								width="w-full"
								type="name"
							/>
						</div>
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
								label="Confirme seu Email"
								name="confirmEmail"
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
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Confirme sua Senha"
								name="confirmPassword"
								width="w-full"
								type="password"
								icon={<Eye className="absolute flex ml-72" weight="bold" />}
							/>
						</div>

						<div className="flex flex-col justify-center  mt-8 mx-11">
							<Button
								title="Cadastrar"
								theme="primary"
								type="submit"
								disabled={isSubmitting || !isValid}
							/>
							<Link to="/login" className="text-blue-ufal text-center font-semibold text-base py-5">Fazer login</Link>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
