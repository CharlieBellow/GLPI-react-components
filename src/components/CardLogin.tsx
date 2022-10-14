import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";

export function CardLogin() {
	return (
		<div className="container w-[25rem] h-[32rem] my-auto mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
			<div className="pt-[4.125rem] pb-[2.25rem] text-center">
				<CardTitle title="Fazer Login" />
			</div>
			<form action="">
				<div className="mb-6">
					<CardLabelInput label="Email" inputId="email" width="w-full" />
				</div>
				<div className="mb-6">
					<CardLabelInput label="Senha" inputId="password" width="w-full" />
				</div>
			</form>
			<div className="flex flex-col justify-center  mt-[3.375rem] mx-11">
				<Button title="Entrar" style="btn-primary-mobile" />
				<Button title="Esqueci a senha" style="btn-text-only" />
			</div>
		</div>
	);
}
