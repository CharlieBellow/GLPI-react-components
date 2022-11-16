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
	<div className='mx-4'>
		<div 
			className="mt-[4.5rem] mx-auto mb-80 flex flex-col lg:block
			bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-[50.5rem] lg:w-[50.5rem]
			h-auto shadow-card"
		>
			<TabsPrimitive.Root
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
					gap-2 lg:gap-0 mx-14 border-b border-b-gray-medium"
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
				<TabsPrimitive.Content className="outline-none" value="tab1">
					<form action="" className="flex flex-col gap-9 mx-14">
						<CardLabelInput
							label="Nome Completo"
							type="text"
							inputId="name"
							width="w-full"
						/>
						<div className="flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9">
							<CardLabelInput
								label="CPF"
								type="text"
								inputId="cpf"
								width="lg:w-80 w-full"
								pattern="(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)"
							/>
							<CardLabelInput
								label="E-mail"
								type="email"
								inputId="email"
								width="lg:w-80 w-full"
							/>
						</div>
						<div className="flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9">
							<CardLabelInput
								label="N° de matrícula"
								type="number"
								inputId="enrollment"
								width="lg:w-80 w-full"
							/>
							<CardLabelInput
								label="Vínculo"
								type="text"
								inputId="bond"
								width="lg:w-80 w-full"
							/>
						</div>
						<div className="flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9">
							<CardLabelInput
								label="Campus"
								type="text"
								inputId="campus"
								width="lg:w-80 w-full"
							/>
							<CardLabelInput
								label="Gênero"
								type="text"
								inputId="gender"
								width="lg:w-80 w-full"
							/>
						</div>
					</form>
				</TabsPrimitive.Content>
				<TabsPrimitive.Content className="outline-none" value="tab2">
					<form action="" className="flex flex-col gap-9 mx-14">
						<CardLabelInput
							label="Endereço"
							type="text"
							inputId="address"
							width="w-full"
						/>
						<CardLabelInput
							label="Complemento"
							type="text"
							inputId="complement"
							width="w-full"
						/>
						<div className="flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9">
							<CardLabelInput
								label="Bairro"
								type="text"
								inputId="district"
								width="lg:w-80 w-full"
							/>
							<CardLabelInput
								label="Cidade"
								type="text"
								inputId="city"
								width="lg:w-80 w-full"
							/>
						</div>
						<div className="flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9">
							<CardLabelInput
								label="Estado"
								type="text"
								inputId="state"
								width="lg:w-80 w-full"
							/>
							<CardLabelInput
								label="CEP"
								type="text"
								inputId="cep"
								width="lg:w-80 w-full"
							/>
						</div>
					</form>
				</TabsPrimitive.Content>
				<TabsPrimitive.Content className="outline-none" value="tab3">
					<form action="" className="flex flex-col gap-9 mx-14">
						<div className="flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9">
							<CardLabelInput
								label="Banco"
								type="text"
								inputId="bank"
								width="lg:w-80 w-full"
							/>
							<CardLabelInput
								label="Tipo de Conta"
								type="text"
								inputId="bank_type"
								width="lg:w-80 w-full"
							/>
						</div>
						<div className="flex flex-col lg:flex-row justify-center lg:gap-x-[3.25rem] gap-9">
							<CardLabelInput
								label="Conta"
								type="text"
								inputId="bank_account"
								width="lg:w-80 w-full"
							/>
							<CardLabelInput
								label="Agência"
								type="number"
								inputId="bank_agency"
								width="lg:w-80 w-full"
							/>
						</div>
					</form>
					<div className="flex justify-end gap-x-3.5 mt-10 mr-14">
						<Button title="Salvar" theme='primaryAction' />
						<Button title="Cancelar" theme='secondaryAction' />
					</div>
				</TabsPrimitive.Content>
			</TabsPrimitive.Root>
		</div>
	</div>
);

export default CardAddUser;
