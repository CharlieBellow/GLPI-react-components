import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";


export function CardSignUp() {
	return (
		<div className="container w-[25rem] h-[32rem] my-auto mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
			<div className="pt-[1.625rem] pb-8 text-center">
				<CardTitle title="Criar Conta" />
			</div>
			<form action="">
				<div className="mb-6">
					<CardLabelInput
						label="Nome Completo"
						inputId="fullName"
						width="w-full"
						type=""
					/>
				</div>
				<div className="mb-6">
					<CardLabelInput
						label="Email"
						inputId="email"
						width="w-full"
						type=""
					/>
				</div>
				<div className="mb-6">
					<CardLabelInput
						label="Senha"
						inputId="password"
						width="w-full"
						type=""
					/>
				</div>
			</form>
			<div className="flex flex-col justify-center  mt-8 mx-11">
				{/* quando colocar o estilo pela pros style ele não sobrescreve a estilização e aí dificulta o aproveitamento do componente  */}
				<Button title="Cadastrar" style="btn-primary-mobile" />
				<Button title="Fazer login" style="btn-text-only" />
			</div>
		</div>
	);
}
