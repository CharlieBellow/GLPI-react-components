import * as yup from "yup";

export const phoneNumber = /\([0-9]{2}\) 9[0-9]\d{3}-\d{4}/;

export const cpfNumber =
	/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;

export const cepNumber = /^[0-9]{5}-[0-9]{3}$/;

export const validationSchema = yup.object().shape({
	name: yup
		.string()
		.min(10, "No mínimo 10 caracteres")
		.max(60, "No máximo 60 caracteres")
		.required("É obrigatório informar seu nome"),
	title: yup
		.string()
		.min(5, "No mínimo 5 caracteres")
		.max(60, "No máximo 60 caracteres")
		.required("É obrigatório colocar um título"),
	description: yup
		.string()
		.min(50, "No mínimo 50 caracteres")
		.max(500, "No máximo 500 caracteres")
		.required("É obrigatório descrever o motivo"),
	serviceLocal: yup
		.string()
		.oneOf(
			[
				"bloco-a",
				"bloco-b",
				"Bloco C",
				"bloco-med",
				"bloco-em-l",
				"casa-velha",
				"ncex",
				"ru",
				"administrativo",
				"bloco-coordenações",
				"transporte",
			],
			"Escolha entre essas opções:"
		)
		.required("É obrigatório escolher um local"),
});
