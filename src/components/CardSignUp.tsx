import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";
import { Eye } from "phosphor-react";
import { Form, Formik, FormikValues } from "formik";
//import { validationSchema } from "../Utils/validationSchema";

export function CardSignUp() {
	return (
		<div className="container w-100 h-118 my-auto mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-7 pb-8 text-center">
				<CardTitle title="Criar Conta" />
			</div>
			<Formik
				initialValues={{ email: "", password: "" }}
				//validationSchema={validationSchema}
				onSubmit={(values: FormikValues) => {
					return console.log("submit: ", values);
					//console.log(values.email)

					//throw new Error( "Function not implemented." );
				}}
			>
				{({ errors, touched, isSubmitting }) => (
					<Form>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Nome Completo"
								name="fullName"
								width="w-full"
								type="name"
							/>
							<>
								{errors.email && touched.email ? (
									<span className="text-red-ufal">{errors.email}</span>
								) : null}
							</>
						</div>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Email"
								name="email"
								width="w-full"
								type="email"
							/>
							<>
								{errors.email && touched.email ? (
									<span className="text-red-ufal">{errors.email}</span>
								) : null}
							</>
						</div>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Senha"
								name="password"
								width="w-full"
								type="password"
								icon={<Eye className="absolute flex ml-72" weight="bold" />}
							/>
							<>
								{errors.email && touched.email ? (
									<span className="text-red-ufal">{errors.email}</span>
								) : null}
							</>
						</div>

						<div className="flex flex-col justify-center  mt-8 mx-11">
							<Button
								title="Cadastrar"
								theme="primary"
								type="submit"
								disabled={isSubmitting}
								className={isSubmitting ? "bg-opacity-0 " : ""}
							/>
							<Button title="Fazer login" theme="textOnly" />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
