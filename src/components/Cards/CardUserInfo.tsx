import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "../Cards/CardLine";
import { CardLabelInput } from "../Inputs/CardLabelInput";
import { validationSchema } from "../../Utils/validations";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Spinner } from "@chakra-ui/react";
import { useMessage } from "../../Contexts/MessageContext";
import { getUserId } from "../../Utils/server/getInfo";
import { User } from "../../Utils/server/types";
import { useEffect, useState } from "react";
import { Divide } from "phosphor-react";
import Link from "next/link";

const validate = yup.object().shape({
	fullName: validationSchema.fullName,
	email: validationSchema.email,
	password: validationSchema.password,
	confirmPassword: validationSchema.confirmPassword,
});


const myuser = {
	id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
	name: "Charlie Bellow",
	password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
	email: "email@email.com",
	avatar: null,
	isAdmin: false,
	created_at: "2023-03-22T16:19:14.843Z",
	permissions: [],
	roles: []
}

// ! criar rota pra alterar senha / esquecer
function CardUserInfo() {
	const { errorMessage, successMessage } = useMessage()
	const [user, setUser] = useState<User>()
	
	const token = localStorage.getItem("token");
// entender pq não tá pegando o usuario
	useEffect(() => {
		const fetchData = async () => {
			const response = await getUserId(myuser.id, token as string)
			console.log("myuser", response)
			setUser(response)
		} 

		fetchData()
	}, [])

	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Informações do Usuário" />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				{user  ? (<Formik
					initialValues={{
						name: user.name,
						email: user.email,
						password: user.password,
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							console.log("submit:", values);

							successMessage("Chamado criado com sucesso!");
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
									name="name"
									type="text"
									inputid="name"
									width="lg:w-80 w-full"
									disabled={user.name ? true : false}
								/>
								<CardLabelInput
									label="E-mail"
									type="email"
									name="email"
									inputid="email"
									width="lg:w-80 w-full"
									disabled={user.name ? true : false}
								/>
							</div>
							<div className="flex flex-col lg:flex-row justify-between lg:gap-x-13 gap-9 text-blue-ufal underline text-base">
								<Link href="">
									<div >
										<span>Alterar Senha</span>
									</div>
								</Link>
								// TODO link para recuperar senha (enviar por email)
								<Link href="">
									<div >
										<span>Esqueci minha senha</span>
									</div>
								</Link>
							</div>
							{/* <div className="flex justify-end gap-x-3.5 mt-10">
								{isSubmitting ? <Spinner size="xl" /> : null}
								<Button
									title="Salvar"
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid}
								/>
								<Button title="Cancelar" theme="secondaryAction" />
							</div> */}
						</Form>
					)}
				</Formik>) : <div><Spinner size="lg"/></div>}
				
			</div>
		</div>
	);
}

export default CardUserInfo;
