import "../styles/main.css";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLabelInput } from "./CardLabelInput";
import { Eye } from "phosphor-react";

export function CardLogin() {
	return (
		<div className="container w-auto lg:w-[25rem] h-[32rem] my-auto mx-auto bg-white-ice rounded-lg shadow-card">
			<div className="pt-[4.125rem] pb-[2.25rem] text-center">
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
						icon={<Eye className="absolute flex ml-[14.6rem] lg:ml-[18.7rem]" weight="bold" />}
					/>
				</div>
			</form>
			<div className="flex flex-col justify-center  mt-[3.375rem] mx-11">
				<Button title="Entrar" style={`btn-primary-mobile`} />
				<Button title="Esqueci a senha" style={`btn-text-only`} />
			</div>
		</div>
	);
}
