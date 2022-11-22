import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";
import { Eye } from "phosphor-react";

export function CardLogin() {
	return (
		<div className="container w-100 h-128 my-auto mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-16 pb-9 text-center">
				<CardTitle title="Fazer Login" />
			</div>
			<form action="">
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
						icon={<Eye className="absolute flex ml-72" weight="bold" />}
					/>
				</div>
			</form>
			<div className="flex flex-col justify-center mt-13 mx-11">
				<Button title="Entrar" theme="primary" />
				<Button title="Esqueci a senha" theme="textOnly" />
			</div>
		</div>
	);
}
