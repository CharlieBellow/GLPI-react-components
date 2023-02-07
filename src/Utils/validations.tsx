import * as yup from "yup";

import { categoryModel, serviceModel, subcategoryModel } from './ServiceModels';

import { services } from '../pages/privateroutes/servicebook/category/[subcategory]/serviceletter/ServicesList';

export const lettersOnly = /[^a-zA-Z]/g;

export const phoneNumber = /\([0-9]{2}\) 9[0-9]\d{3}-\d{4}/;
export const cep = /[0-9]{8}/g;

export const cpfNumber =
  /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;

export const cepNumber = /^[0-9]{5}-[0-9]{3}$/;

export const bank = /[0-9]{5,9}/;

export const acountType = /[0-9]{2}/g;

export const agency = /[0-9]{4}/g;

export const account = /[0-9]{4,7}/;



//criar uma máscara pra ele aceitar só 8 ou 10 números
export const nMatricula = /([0-9]{8,10})/;

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
  "Centro de Engenharia e Ciências Agrárias",
];

export const bondList = [ "Aluno", "Técnico", "Professor", "Servidor", "outro", "Administrador" ];

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

export const servicesList = services.map( service => {
  return (
    service.title
  );
} );

//const categoriesStorage = localStorage.getItem( "categories" );

export const categoriesList = [ "lista de categorias criadas", "outros" ];
//	categoriesStorage.map( service => {
//	return service.title;
//});



// Mínimo de seis caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (Ex.: @ $ ! % * ? &) = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6,}$"/
export const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número:
export const validationSchema = {
  name: yup
    .string()
    .matches( lettersOnly, "Apenas letras" )
    .min( 10, "No mínimo 10 caracteres" )
    .max( 60, "No máximo 60 caracteres" )
    .required( "É obrigatório informar seu nome" ),

  title: yup
    .string()
    .min( 5, "No mínimo 5 caracteres" )
    .max( 60, "No máximo 60 caracteres" )
    .required( "É obrigatório colocar um título" ),
  link: yup
    .string()
    .min( 1, "No mínimo 5 caracteres" )
    .required( "É obrigatório colocar um título" ),
  description: yup
    .string()
    .min( 50, "No mínimo 50 caracteres" )
    .max( 500, "No máximo 500 caracteres" )
    .required( "É obrigatório descrever o motivo" ),
  serviceLocal: yup
    .string()
    .oneOf( blocList, "Escolha entre essas opções:" )
    .required( "É obrigatório escolher um local" ),

  phone: yup.string().matches( phoneNumber ),

  fullName: yup
    .string()
    .matches( lettersOnly, "Apenas letras" )
    .min( 9, "No mínimo 9 caracteres." )
    .max( 60, "No máximo 60 caracteres." )
    .required( "É obrigatório informar seu nome completo." ),

  cpf: yup
    .string()
    .required( "É obrigatório informar seu cpf." )
    .matches( cpfNumber, "Digite apenas 11 números." )
    .min( 11, "No mínimo 11 números." )
    .max( 11, "Apenas 11 números" ),

  email: yup
    .string()
    .email( "Ex. de e-mail válido: email@email.com" )
    .required( "É obrigatório informar seu email." ),
  confirmEmail: yup
    .string()
    .oneOf( [ yup.ref( "email" ), null ], "Os emails precisam ser iguais." )
    .required( "Você precisa confirmar seu email" ),

  password: yup
    .string()
    .min( 6, "Deve conter no mínimo 6 dígitos" )
    .matches(
      passwordRules,
      "Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número"
    )
    .required( "É obrigatório informar a senha" ),
  confirmPassword: yup
    .string()
    .oneOf( [ yup.ref( "password" ), null ], "As senhas precisam ser iguais." )
    .required( "Você precisa confirmar sua senha" ),
  nMatricula: yup
    .string()
    .matches( nMatricula, "Ex.: 20221516 ou 2022151645" )
    .required( "É obrigatório informar o número de matrícula." ),

  bond: yup
    .string()
    .oneOf( bondList, "Escolha entre essas opções:" )
    .required(
      "É obrigatório informar o seu tipo de vínculo com a instituição. "
    ),
  campus: yup
    .string()
    .oneOf( campusList, "Escolha entre essas opções:" )
    .required( "É obrigatório informar de qual campus você é." ),
  gender: yup
    .string()
    .oneOf( genderList, "Escolha entre essas opções:" )
    .required( "É obrigatório informar seu gênero" ),
  address: yup.string().required( "É obrigatório informar seu endereço" ),
  complement: yup.string(),
  district: yup.string().required( "É obrigatório informar o bairro" ),
  city: yup.string().required( "É obrigatório informar a cidade" ),
  uf: yup
    .string()
    .uppercase()
    .min( 2, "Apenas duas letras maiúsculas" )
    .max( 2, "Apenas duas letras maiúsculas" )
    .required( "É obrigatório informar o estado" ),
  cep: yup
    .string()
    .matches( cep, "Deve conter 8 números" )
    .required( "É obrigatório informar seu CEP" )
    .min( 8, "No mínimo 11 números." )
    .max( 8, "Apenas 11 números" ),
  bank: yup
    .string()
    .required( "É obrigatório informar o banco" )
    .matches( bank, "Digite apenas 5 ou 9 números." )
    .min( 5, "No mínimo 5 números." )
    .max( 9, "Apenas 9 números" ),

  acountType: yup
    .string()
    .matches( acountType, "Digite apenas 3 números." )
    .min( 3, "No mínimo 3 números." )
    .max( 3, "Apenas 3 números" ),
  agency: yup
    .string()
    .matches( agency, "Digite apenas 4 números." )
    .required( "É obrigatório informar a agência" )
    .min( 4, "No mínimo 4 números." )
    .max( 4, "Apenas 4 números" ),
  account: yup
    .string()
    .matches( account, "Digite apenas 5 ou 9 números." )
    .required( "É obrigatório informar o Nº da conta" )
    .min( 5, "No mínimo 5 números." )
    .max( 9, "Apenas 9 números" ),
  titleCategory: yup
    .string()
    .min( 3, "No mínimo 3 caracteres" )
    .max( 50, "No máximo 50 caracteres" )
    .required( "É obrigatório informar o nome da Categoria" ),
  titleSubcategory: yup
    .string()
    .min( 3, "No mínimo 3 caracteres" )
    .max( 50, "No máximo 50 caracteres" )
    .required( "É obrigatório informar o nome da Subcategoria" ),
  services: yup
    .string()
    .oneOf( serviceModel.map( serviceName => { return serviceName.serviceLetter.title; } ), "Escolha entre essas opções:" )
    .required( "É obrigatório informar o serviço" ),
  category: yup
    .string()
    .oneOf( categoryModel.map( categoryName => { return categoryName.titleCategory; } ), "Escolha entre essas opções:" )
    .required( "É obrigatório informar o serviço" ),
};

export const validations = yup.object().shape( validationSchema );
