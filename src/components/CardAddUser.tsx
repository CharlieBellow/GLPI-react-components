import { styled } from "@stitches/react";
import { CardLabelInput } from "./CardLabelInput";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { Button } from "./Button";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as yup from 'yup';
//import {CpfMask} from '../Utils/Masks'

import {
	validationSchema,
	campusList,
	bondList,
	genderList,
} from "../Utils/validations";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import FieldSelect from "./FieldSelect";

const TabsTrigger = styled(TabsPrimitive.Trigger, {
	'&[data-state="active"]': {
		fontWeight: "bold",
		color: "#0095DA",
		border: "none",
		boxShadow: "0 3px 0 0 currentColor",
	},
});

const tab = `bg-white-ice shadow-tab py-0 px-5 h-11 flex-1 flex items-center justify-center
text-base text-light-bg select-none border-2 border-b border-gray-medium rounded-t-lg
hover:text-blue-ufal hover:cursor-pointer focus:relative`;

const validate = yup.object().shape({
	fullName: validationSchema.fullName,
	cpf: validationSchema.cpf,
	email: validationSchema.email,
	nMatricula: validationSchema.nMatricula,
	bond: validationSchema.bond,
	campus: validationSchema.campus,
	gender: validationSchema.gender,
	address: validationSchema.address,
	complement: validationSchema.complement,
	district: validationSchema.district,
	city: validationSchema.city,
	state: validationSchema.state,
	cep: validationSchema.cep,
	bank: validationSchema.bank,
	acountType: validationSchema.acountType,
	account: validationSchema.account,
	agency: validationSchema.agency,
});

//const cpfmask = CpfMask;

const CardAddUser = () => (
	<div className="mx-4">
		<div
			className="mt-18 mx-auto mb-80 flex flex-col lg:block
			bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
			h-auto shadow-card"
		>
			<Formik
				validationSchema={validate}
				onSubmit={values => {
					setTimeout(() => {
						console.log("submit", values);

						toast.success("Chamado criado com sucesso!");
						//alert(JSON.stringify(values, null, 2));
						//setSubmitting(false);
					}, 400);
				}}
				initialValues={{
					fullName: "",
					cpf: "",
					email: "",
					nMatricula: "",
					bond: "",
					campus: "",
					gender: "",
					address: "",
					complement: "",
					district: "",
					city: "",
					state: "",
					cep: "",
					bank: "",
					acountType: "",
					account: "",
					agency: "",
				}}
			>
				{({ isSubmitting, setFieldValue }) => (
					<TabsPrimitive.Root defaultValue="tab1">
						<div className="pl-9 pt-8">
							<CardTitle title="Adicionar Usuário" />
						</div>
						<div className="mx-9 mt-4 mb-6">
							<CardLine />
						</div>
						<TabsPrimitive.List
							className="shrink-0 mb-10 lg:mx-15 flex flex-col lg:flex-row
					gap-2 lg:gap-0 mx-14 border-b border-b-gray-medium"
						>
							<TabsTrigger className={tab} value="tab1">
								Informações pessoais
							</TabsTrigger>
							<TabsTrigger className={tab} value="tab2">
								Endereço
							</TabsTrigger>
							<TabsTrigger className={tab} value="tab3">
								Dados Bancários
							</TabsTrigger>
						</TabsPrimitive.List>
						<Form className="flex flex-col gap-9 mx-14">
							<TabsPrimitive.Content className="outline-none" value="tab1">
								<div className="flex flex-col gap-9">
									<div className="w-auto">
										<CardLabelInput
											label="Nome Completo"
											type="text"
											inputid="name"
											name="fullName"
											width="w-full"
										/>
									</div>
									<div className=" flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
										<div>
											<CardLabelInput
												label="CPF"
												type="text"
												inputid="cpf"
												name="cpf"
												width="lg:w-80 w-full"
											/>
										</div>
										<div>
											<CardLabelInput
												label="E-mail"
												type="email"
												inputid="email"
												name="email"
												width="lg:w-80 w-full"
											/>
										</div>
									</div>

									<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
										<div>
											<CardLabelInput
												label="N° de matrícula"
												type="number"
												inputid="enrollment"
												name="nMatricula"
												width="lg:w-80 w-full"
											/>
										</div>
										<div className="text-red-ufal text-sm lg:w-80">
											<FieldSelect
												label="Vínculo"
												name="bond"
												default="Selecione o vínculo"
												listitems={bondList}
											/>
										</div>
									</div>
									<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
										<div className="lg:w-80">
											<FieldSelect
												label="Campus"
												name="campus"
												default="Selecione seu campus"
												listitems={campusList}
											/>
										</div>
										<div className="lg:w-80">
											<FieldSelect
												label="Gênero"
												name="gender"
												default="Selecione seu gênero"
												listitems={genderList}
											/>
										</div>
									</div>
								</div>
							</TabsPrimitive.Content>

							<TabsPrimitive.Content className="outline-none" value="tab2">
								<div className="flex flex-col gap-9">
									<div>
										<CardLabelInput
											label="Endereço"
											type="text"
											inputid="address"
											name="address"
											width="w-full"
										/>
									</div>
									<div>
										<CardLabelInput
											label="Complemento"
											type="text"
											inputid="complement"
											name="complement"
											width="w-full"
										/>
									</div>
									<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
										<div>
											<CardLabelInput
												label="Bairro"
												type="text"
												inputid="district"
												name="district"
												width="lg:w-80 w-full"
											/>
										</div>
										<div>
											<CardLabelInput
												label="Cidade"
												type="text"
												inputid="city"
												name="city"
												width="lg:w-80 w-full"
											/>
										</div>
									</div>
									<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
										<div>
											<CardLabelInput
												label="Estado"
												type="text"
												inputid="state"
												name="state"
												width="lg:w-80 w-full"
											/>
										</div>
										<div>
											<CardLabelInput
												label="CEP"
												type="text"
												inputid="cep"
												name="cep"
												width="lg:w-80 w-full"
											/>
										</div>
									</div>
								</div>
							</TabsPrimitive.Content>
							<TabsPrimitive.Content className="outline-none" value="tab3">
								<div className="flex flex-col gap-9 mx-14">
									<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
										<div>
											<CardLabelInput
												label="Banco"
												type="text"
												inputid="bank"
												name="bank"
												width="lg:w-80 w-full"
											/>
										</div>
										<div>
											<CardLabelInput
												label="Tipo de Conta"
												type="text"
												inputid="bank_type"
												name="acountType"
												width="lg:w-80 w-full"
											/>
										</div>
									</div>
									<div className="flex flex-col lg:flex-row justify-center lg:gap-x-13 gap-9">
										<div>
											<CardLabelInput
												label="Conta"
												type="text"
												inputid="bank_account"
												name="account"
												width="lg:w-80 w-full"
											/>
										</div>
										<div>
											<CardLabelInput
												label="Agência"
												type="number"
												inputid="bank_agency"
												name="agency"
												width="lg:w-80 w-full"
											/>
										</div>
									</div>
								</div>
								<div className="flex justify-end gap-x-3.5 mt-10 mr-14">
									<Button
										title="Solicitar"
										theme="primaryAction"
										type="submit"
										disabled={isSubmitting}
									/>
									<Button title="Cancelar" theme="secondaryAction" />
								</div>
							</TabsPrimitive.Content>
						</Form>
					</TabsPrimitive.Root>
				)}
			</Formik>
		</div>
	</div>
);

export default CardAddUser;
