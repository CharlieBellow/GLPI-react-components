import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";
import { Eye } from "phosphor-react";
import { Form, Formik, FormikValues } from "formik";
//import { validationSchema } from "../Utils/validations";


export function CardLogin() {
	return (
		<div className="container w-100 h-128 my-auto mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-16 pb-9 text-center">
				<CardTitle title="Fazer Login" />
			</div>
			<Formik
				initialValues={{ email: "", password: "" }}
				//validationSchema={validationSchema}
				onSubmit={(values: FormikValues) => {
					return console.log(values);
					//console.log(values.email)

					//throw new Error( "Function not implemented." );
				}}
			>
				{({ errors, touched }) => (
					<Form >
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
								{errors.password && touched.password ? (
									<span className="text-red-ufal">{errors.password}</span>
								) : null}
							</>
						</div>
						<div className="flex flex-col justify-center mt-13 mx-11">
							<Button title="Entrar" theme="primary" type="submit" />
							<Button title="Esqueci a senha" theme="textOnly" />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
