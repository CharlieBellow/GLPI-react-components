import { styled } from "@stitches/react";
import { CardLabelInput } from "./CardLabelInput";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { Button } from "./Button";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const StyledTabs = styled(TabsPrimitive.Root, {
	display: "flex",
	flexDirection: "column",
	width: 840,
	boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
});

const StyledList = styled(TabsPrimitive.List, {
	flexShrink: 0,
	display: "flex",
	borderBottom: "1px solid #DEE2E6",
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
	all: "unset",
	backgroundColor: "var(--branco-gelo)",
	padding: "0 20px",
	height: 45,
	flex: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: 16,
	lineHeight: "160%",
	color: "var(--fundo-claro)",
	userSelect: "none",
	border: "2px solid var(--cinza-medio)",
	borderTopLeftRadius: 8,
	borderTopRightRadius: 8,
	boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
	"&:first-child": {},
	"&:last-child": {},
	"&:hover": {
		color: "var(--azul-ufal)",
		cursor: "pointer",
	},
	'&[data-state="active"]': {
		fontWeight: "bold",
		color: "var(--azul-ufal)",
		border: "none",
		boxShadow: " 0 3px 0 0 currentColor",
	},
	"&:focus": { position: "relative" },
});

const StyledContent = styled(TabsPrimitive.Content, {
	flexGrow: 1,
	// padding: 20,
	backgroundColor: "var(--branco-gelo)",
	outline: "none",
});

export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;

const Box = styled("div", {});

const CardAddUser = () => (
	<Box className="font-roboto mt-[4.5rem] mb-80">
		{/* h-[34.5rem] */}
		<Tabs
			className="bg-branco-gelo mx-auto w-[50.5rem] h-[34.5rem]"
			defaultValue="tab1"
		>
			<div className="pl-9 pt-8">
				<CardTitle title="Adicionar Usuário" />
			</div>
			{/* antes era mb-4 */}
			<div className="mx-9 mt-4 mb-6">
				<CardLine />
			</div>
			<TabsList className="mb-10 mx-[4.5rem]">
				<TabsTrigger value="tab1">Informações pessoais</TabsTrigger>
				<TabsTrigger value="tab2">Endereço</TabsTrigger>
				<TabsTrigger value="tab3">Dados Bancários</TabsTrigger>
			</TabsList>
			<TabsContent className="mx-auto" value="tab1">
				<form action="">
					<div className="mx-14">
						<CardLabelInput
							label="Nome Completo"
							type="text"
							inputId="name"
							width="w-[43.25rem]"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem]">
						<CardLabelInput
							label="CPF"
							type="text"
							inputId="cpf"
							width="w-80"
							pattern="(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)"
						/>
						<CardLabelInput
							label="E-mail"
							type="email"
							inputId="email"
							width="w-80"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem]">
						<CardLabelInput
							label="N° de matrícula"
							type="number"
							inputId="enrollment"
							width="w-80"
						/>
						<CardLabelInput
							label="Vínculo"
							type="text"
							inputId="bond"
							width="w-80"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem]">
						<CardLabelInput
							label="Campus"
							type="text"
							inputId="campus"
							width="w-80"
						/>
						<CardLabelInput
							label="Gênero"
							type="text"
							inputId="gender"
							width="w-80"
						/>
					</div>
				</form>
			</TabsContent>
			<TabsContent className="mx-auto" value="tab2">
				<form action="">
					<div className="mx-14">
						<CardLabelInput
							label="Endereço"
							type="text"
							inputId="address"
							width="w-[43.25rem]"
						/>
					</div>
					<div className="mx-14 mt-9">
						<CardLabelInput
							label="Complemento"
							type="text"
							inputId="complement"
							width="w-[43.25rem]"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem]">
						<CardLabelInput
							label="Bairro"
							type="text"
							inputId="district"
							width="w-80"
						/>
						<CardLabelInput
							label="Cidade"
							type="text"
							inputId="city"
							width="w-80"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem]">
						<CardLabelInput
							label="Estado"
							type="text"
							inputId="state"
							width="w-80"
						/>
						<CardLabelInput
							label="CEP"
							type="text"
							inputId="cep"
							width="w-80"
						/>
					</div>
				</form>
			</TabsContent>
			<TabsContent className="mx-auto" value="tab3">
				<form action="">
					<div className="flex justify-center gap-x-[3.25rem]">
						<CardLabelInput
							label="Banco"
							type="text"
							inputId="bank"
							width="w-80"
						/>
						<CardLabelInput
							label="Tipo de Conta"
							type="text"
							inputId="bank_type"
							width="w-80"
						/>
					</div>
					<div className="mt-9 flex justify-center gap-x-[3.25rem]">
						<CardLabelInput
							label="Conta"
							type="text"
							inputId="bank_account"
							width="w-80"
						/>
						<CardLabelInput
							label="Agência"
							type="number"
							inputId="bank_agency"
							width="w-80"
						/>
					</div>
					<div className="flex justify-end gap-x-3.5 mt-10">
						<Button title="Salvar" style={`btn-primary-action`} />
						<Button title="Cancelar" style={`btn-secondary-action`} />
					</div>
				</form>
			</TabsContent>
		</Tabs>
	</Box>
);

export default CardAddUser;
