import { styled } from '@stitches/react';
import { CardLabelInput } from "./CardLabelInput";
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { Button } from './Button';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
	'&[data-state="active"]': {
		fontWeight: "bold",
		color: "#0095DA",
		border: "none",
		boxShadow: "0 3px 0 0 currentColor",
	},
});

const CardAddUser = () => (
	<div className="font-sans mt-[4.5rem] mb-80 mx-4 lg:mx-0 flex lg:block">
		<TabsPrimitive.Root
			className="bg-white-ice flex flex-col pb-9 rounded-lg
			lg:w-[50.5rem] lg:h-[34.5rem] mx-auto shadow-card"
			defaultValue="tab1"
		>
			<div className="pl-9 pt-8">
				<CardTitle title="Adicionar Usuário" />
			</div>
			<div className="mx-9 mt-4 mb-6">
				<CardLine />
			</div>
			<TabsPrimitive.List
				className="shrink-0 mb-10 lg:mx-[3.7rem] flex flex-col lg:flex-row
				gap-2 lg:gap-0 mx-auto border-b border-b-gray-medium"
			>
				<TabsTrigger
					className='tab'
					value="tab1"
				>
					Informações pessoais
				</TabsTrigger>
				<TabsTrigger 
					className='tab'
					value="tab2"
				>	
					Endereço
				</TabsTrigger>
				<TabsTrigger
					className='tab'
					value="tab3"
				>
					Dados Bancários
				</TabsTrigger>
			</TabsPrimitive.List>
			<TabsPrimitive.Content className="w-auto lg:mx-auto" value="tab1">
				<form action="" className="flex flex-wrap justify-center w-auto">
					<div className="lg:mx-14 mx-0">
						<CardLabelInput
							label="Nome Completo"
							type="text"
							inputId="name"
							width="lg:w-[43.25rem] w-auto"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem] flex-wrap gap-[3.25rem] ">
						<CardLabelInput
							label="CPF"
							type="text"
							inputId="cpf"
							width="lg:w-80 w-auto"
							pattern="(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)"
						/>
						<CardLabelInput
							label="E-mail"
							type="email"
							inputId="email"
							width="lg:w-80 w-auto"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem] flex-wrap gap-[3.25rem]">
						<CardLabelInput
							label="N° de matrícula"
							type="number"
							inputId="enrollment"
							width="lg:w-80 w-auto"
						/>
						<CardLabelInput
							label="Vínculo"
							type="text"
							inputId="bond"
							width="lg:w-80 w-auto"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem] flex-wrap gap-[3.25rem]">
						<CardLabelInput
							label="Campus"
							type="text"
							inputId="campus"
							width="lg:w-80 w-auto"
						/>
						<CardLabelInput
							label="Gênero"
							type="text"
							inputId="gender"
							width="lg:w-80 w-auto"
						/>
					</div>
				</form>
			</TabsPrimitive.Content>
			<TabsPrimitive.Content className="mx-0 w-auto justify-center flex" value="tab2">
				<form action="" className="flex flex-wrap  justify-center w-auto ">
					<div className="lg:mx-14 mx-0">
						<CardLabelInput
							label="Endereço"
							type="text"
							inputId="address"
							width="lg:w-[43.25rem] w-auto"
						/>
					</div>
					<div className="mx-14 mt-9">
						<CardLabelInput
							label="Complemento"
							type="text"
							inputId="complement"
							width="lg:w-[43.25rem] w-auto"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem] flex-wrap gap-[3.25rem]">
						<CardLabelInput
							label="Bairro"
							type="text"
							inputId="district"
							width="lg:w-80 w-auto"
						/>
						<CardLabelInput
							label="Cidade"
							type="text"
							inputId="city"
							width="lg:w-80 w-auto"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem] flex-wrap gap-[3.25rem]">
						<CardLabelInput
							label="Estado"
							type="text"
							inputId="state"
							width="lg:w-80 w-auto"
						/>
						<CardLabelInput
							label="CEP"
							type="text"
							inputId="cep"
							width="lg:w-80 w-auto"
						/>
					</div>
				</form>
			</TabsPrimitive.Content>
			<TabsPrimitive.Content className="mx-0 w-auto justify-center flex" value="tab3">
				<form action="" className="flex flex-wrap justify-center w-auto ">
					<div className="flex justify-center gap-x-[3.25rem] flex-wrap gap-[3.25rem]">
						<CardLabelInput
							label="Banco"
							type="text"
							inputId="bank"
							width="lg:w-80 w-auto"
						/>
						<CardLabelInput
							label="Tipo de Conta"
							type="text"
							inputId="bank_type"
							width="lg:w-80 w-auto"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem] flex-wrap gap-[3.25rem]">
						<CardLabelInput
							label="Conta"
							type="text"
							inputId="bank_account"
							width="lg:w-80 w-auto"
						/>
						<CardLabelInput
							label="Agência"
							type="number"
							inputId="bank_agency"
							width="lg:w-80 w-auto"
						/>
					</div>
					<div className="flex justify-end gap-x-3.5 mt-10 w-full mr-14">
						<Button title="Salvar" style={`btn-primary-action`} />
						<Button title="Cancelar" style={`btn-secondary-action`} />
					</div>
				</form>
			</TabsPrimitive.Content>
		</TabsPrimitive.Root>
	</div>
);

export default CardAddUser;
