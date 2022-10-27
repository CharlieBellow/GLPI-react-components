import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";
import { Eye } from "phosphor-react";


export function CardSignUp() {
	return (
		<div className="container w-auto lg:w-[25rem] h-[29.625rem] my-auto mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
			<div className="pt-[1.625rem] pb-8 text-center">
				<CardTitle title="Criar Conta" />
			</div>
			<form action="">
				<div className="mb-6 px-10">
					<CardLabelInput
						label="Nome Completo"
						inputId="fullName"
						width="w-full"
						type=""
					/>
				</div>
				<div className="mb-6 px-10">
					<CardLabelInput
						label="Email"
						inputId="email"
						width="w-full"
						type=""
					/>
				</div>
				<div className="mb-6 px-10">
					<CardLabelInput
						label="Senha"
						inputId="password"
						width="w-full"
						type=""
						icon={
							<Eye className="absolute flex ml-[14.6rem] lg:ml-[18.7rem]" weight="bold" />
						}
					/>
				</div>
			</form>
			<div className="flex flex-col justify-center  mt-8 mx-11">
				<Button title="Cadastrar" style={`btn-primary-mobile`} />
				<Button title="Fazer login" style={`btn-text-only`} />
			</div>
		</div>
	);
}
