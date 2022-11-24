import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";
import { Eye } from "phosphor-react";


export function CardSignUp() {
	return (
		<div className="container w-100 h-118 my-auto mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-7 pb-8 text-center">
				<CardTitle title="Criar Conta" />
			</div>
			<form action="">
				<div className="mb-6 px-10">
					<CardLabelInput
						label="Nome Completo"
						inputId="fullName"
						width="w-full"
						type="name"
					/>
				</div>
				<div className="mb-6 px-10">
					<CardLabelInput
						label="Email"
						inputId="email"
						width="w-full"
						type="email"
					/>
				</div>
				<div className="mb-6 px-10">
					<CardLabelInput
						label="Senha"
						inputId="password"
						width="w-full"
						type="password"
						icon={
							<Eye className="absolute flex ml-72" weight="bold" />
						}
					/>
				</div>
			</form>
			<div className="flex flex-col justify-center  mt-8 mx-11">
				<Button title="Cadastrar" theme="primary" type="submit"/>
				<Button title="Fazer login" theme="textOnly" />
			</div>
		</div>
	);
}
