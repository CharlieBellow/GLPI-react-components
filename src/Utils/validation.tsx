import * as yup from "yup";

export const lettersOnly = /[^a-zA-Z]/g

export const phoneNumber = /\([0-9]{2}\) 9[0-9]\d{3}-\d{4}/;

export const cpfNumber =
	/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;

export const cepNumber = /^[0-9]{5}-[0-9]{3}$/;

//criar uma máscara pra ele aceitar só 8 ou 10 números
export const nMatricula = /([0-9]{8})/ || /([0-9]{10})/; 

export const blocList = [
	"Bloco A",
	"Bloco B",
	"Bloco C",
	"Bloco Med",
	"Bloco em L",
	"Casa Velha",
	"NCEX",
	"RU",
	"Administrativo",
	"Bloco Coordenações",
	"Transporte",
]; 

export const campusList = [
	"Maceió",
	"Arapiraca",
	"Penedo",
	"Viçosa",
	"Delmiro Gouveia",
	"Palmeira dos Índios",
	"Centro de Engenharia e Ciências Agrárias"
]; 

export const bondList = [
	"Aluno",
	"Técnico",
	"Professor",
	"Servidor",
	"outro",
]; 

export const genderList = [
	"Homem",
	"Mulher",
	"Não-Binárie",
	"Homem Trans",
	"Mulher Trans",
	"Agênero",
	"Intersex",
	"Gênero fluido",
	"Queer",
	"Andrógeno",
	"outro",
	"prefiro não informar",
]; 

// Mínimo de seis caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (Ex.: @ $ ! % * ? &) = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6,}$"/
export const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
// Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número:


export const validation = 
	yup.object().shape({
		name: yup
			.string()
			.matches(lettersOnly, "Apenas letras")
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
			.oneOf(blocList, "Escolha entre essas opções:")
			.required("É obrigatório escolher um local"),

		phone: yup.string().matches(phoneNumber),


		fullName: yup
			.string()
			.matches(lettersOnly, "Apenas letras")
			.min(9, "No mínimo 9 caracteres.")
			.max(60, "No máximo 60 caracteres.")
			.required("É obrigatório informar seu nome completo."),
		cpf: yup
			.string()
			.required("É obrigatório informar seu cpf.")
			.matches(cpfNumber, "Digite apenas 11 números.")
			.min(11, "No mínimo 11 números.")
			.max(11, "Apenas 11 números"),
		
		email: yup
			.string()
			.email("Ex. de e-mail válido: email@email.com")
			.required("É obrigatório informar seu email."),
		password: yup
			.string()
			.min(6, "Deve conter no mínimo 6 dígitos")
			.matches(
				passwordRules,
				"Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número"
			)
			.required("É obrigatório informar a senha"),
		confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas precisam ser iguais.").required("Você precisa confirmar sua senha"),
		nMatricula: yup
			.string()
			.matches(nMatricula, "Ex.: 20221516 ou 2022151645")
			.required("É obrigatório informar o número de matrícula."),

		bond: yup
			.string()
			.oneOf(bondList, "Escolha entre essas opções:")
			.required(
				"É obrigatório informar o seu tipo de vínculo com a instituição. "
			),
		campus: yup
			.string()
			.oneOf(campusList, "Escolha entre essas opções:")
			.required("É obrigatório informar de qual campus você é."),
		gender: yup
			.string()
			.oneOf(genderList, "Escolha entre essas opções:")
			.required("É obrigatório informar seu gênero"),
		address: yup.string().required("É obrigatório informar seu endereço"),
		complement: yup.string(),
		district: yup
			.string()
			.required("É obrigatório informar o bairro"),
		city: yup
			.string()
			.required("É obrigatório informar a cidade"),
		state: yup
			.string()
			.required("É obrigatório informar o estado"),
		cep: yup
			.string()
			.required("É obrigatório informar seu CPF"),
		bank: yup
			.number()
			.positive()
			.integer()
			.required("É obrigatório informar o banco"),
		acountType: yup
			.number()
			.positive()
			.integer()
			.required("É obrigatório informar o tipo de conta"),
		agency: yup
			.number()
			.positive()
			.integer()
			.required("É obrigatório informar a agência"),
		account: yup
			.number()
			.positive()
			.integer()
			.required("É obrigatório informar o Nº da conta"),


	});

