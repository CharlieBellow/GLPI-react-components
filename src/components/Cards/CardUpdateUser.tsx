import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInputShowInfo } from "../Inputs/CardLabelInputShowInfo";
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
	avatar: "https://www.github.com/arthwrvl.png",
	isAdmin: false,
	created_at: "2023-03-22T16:19:14.843Z",
	permissions: [],
	roles: []
}

function CardUpdateUser() {
	const { errorMessage, successMessage } = useMessage()
	const [user, setUser] = useState<User>()
	
	const token = localStorage.getItem("token");
// entender pq não tá pegando o usuario
	useEffect(() => {
		const fetchData = async () => {
			const response = await getUserId(myuser.id, token as string)
			setUser(response)
		} 
		fetchData()
	},)

	const isAdmin = true





	return (
		<div className="mx-4">
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9">
					<CardTitle title="Informações do Usuário" srcimage={myuser.avatar} alt={"Imagem de perfil"} width={86} height={86} type="image" editImage={true}  />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
				{user  ? (<Formik
					initialValues={{
						name: user.name,
						email: user.email,
						password: "",
						confirmPassword: ""
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							

							successMessage("Chamado criado com sucesso!");


				// falta a função de alterar usuário
							actions.resetForm();
						
						}, 400);
					}}
				>
					{({ isSubmitting, isValid }) => (
						<Form action="" className="flex flex-col gap-9 mx-14">
							<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
								<CardLabelInputShowInfo
									label="Nome Completo"
									name="name"
									type="text"
									inputid="name"
									width="lg:w-80 w-full"
									disabled={user.name ? true : false}
								/>
								<CardLabelInputShowInfo
									label="E-mail"
									type="email"
									name="email"
									inputid="email"
									width="lg:w-80 w-full"
									disabled={user.name ? true : false}
								/>
							</div>
							<div className="flex flex-col lg:flex-row lg:gap-x-13 gap-9">
								<CardLabelInput
									label="Senha"
									type="password"
									name="password"
									inputid="password"
									width="lg:w-80 w-full"
					
								/>
								<CardLabelInput
									label="Senha"
									type="password"
									name="confirmPassword"
									inputid="confirmPassword"
									width="lg:w-80 w-full"
							
								/>
						
							</div>
							<div className="flex justify-end gap-x-3.5 mt-10 ">
								<Button
									title={isSubmitting ? <Spinner size="md" /> : "Alterar"}
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid}
								/>
								{isAdmin ? <Button title="Excluir" theme="secondaryAction" /> : <Link href="../"><Button title="Cancelar" theme="secondaryAction" /></Link>}
								
							</div>
							
						</Form>
					)}
				</Formik>) : <div  className="flex justify-center"><Spinner size="lg"/></div>}
				
			</div>
		</div>
	);
}

export default CardUpdateUser;