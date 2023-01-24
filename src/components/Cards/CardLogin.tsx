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
import { Link, useNavigate } from "react-router-dom";


const validate = yup.object().shape({
	email: validationSchema.email,
	password: validationSchema.password,
});

export function CardLogin () {
	
	const { auth, setAuth }: any = useContext( AuthContext )
	console.log( "auth", auth );
	const navigate = useNavigate()
	
	const signUp = () => {
		navigate('/')
	}
	
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
						console.log( "submit:", values );
						if ( values.email === "admin@admin.com" && values.password === "Admin123" ) {
							setAuth( true )
							//navigate("/dashboard")
							toast.success("Login realizado com sucesso!");
							signUp()
							
						} else {
						toast.error("Usuário não cadastrado. Clique no botão \"Novo Cadastro\" para criar uma conta.");

						}
						actions.resetForm();
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
								disabled={ isSubmitting || !isValid }
								
							/>
							
						
								
							<Button title="Esqueci a senha" theme="textOnly" />
							<Link to="/signup" className="text-blue-ufal text-center font-semibold text-base">Novo Cadastro</Link>
							
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
