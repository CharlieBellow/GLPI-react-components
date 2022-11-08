
import { useState } from "react";

import { Table } from "react-chakra-pagination";

import ButtonMainWithIcon from "../../components/ButtonMainWithIcon";
import { PencilSimpleLine } from "phosphor-react";

import { Link } from "react-router-dom";

import {
	Flex,
	Text,
	Box,
	Heading,
	Checkbox,
} from "@chakra-ui/react";

//não aceita phosphor-icons
import { FiUser } from "react-icons/fi";
import TableOptions from "../../components/TableList/TableOptions";

type User = {
	id: number;
	name: string;
	email: string;
	date: string;
};

const users: User[] = [
	{ id: 1, name: "Charlie", email: "email@email.com", date: "01/02/2022" },
	{ id: 2, name: "Humberto", email: "humberto@email.com", date: "01/02/2022" },
	{ id: 3, name: "Ítalo", email: "italo@email.com", date: "01/02/2022" },
	{ id: 4, name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" },
	{ id: 5, name: "Josue", email: "zue@email.com", date: "01/02/2022" },
	{ id: 6, name: "Luan", email: "luan@email.com", date: "01/02/2022" },
	{ id: 7, name: "Marcos", email: "marcos@email.com", date: "01/02/2022" },
	{ id: 8, name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" },
	{ id: 9, name: "Pedro", email: "pedro@email.com", date: "01/02/2022" },
	{ id: 10, name: "Felipe", email: "lipe@email.com", date: "01/02/2022" },
	{
		id: 11,
		name: "Giancarlo",
		email: "giancarlo@email.com",
		date: "01/02/2022",
	},
	{ id: 12, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
	{ id: 13, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
	{ id: 14, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
	{ id: 1, name: "Charlie", email: "email@email.com", date: "01/02/2022" },
	{ id: 2, name: "Humberto", email: "humberto@email.com", date: "01/02/2022" },
	{ id: 3, name: "Ítalo", email: "italo@email.com", date: "01/02/2022" },
	{ id: 4, name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" },
	{ id: 5, name: "Josue", email: "zue@email.com", date: "01/02/2022" },
	{ id: 6, name: "Luan", email: "luan@email.com", date: "01/02/2022" },
	{ id: 7, name: "Marcos", email: "marcos@email.com", date: "01/02/2022" },
	{ id: 8, name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" },
	{ id: 9, name: "Pedro", email: "pedro@email.com", date: "01/02/2022" },
	{ id: 10, name: "Felipe", email: "lipe@email.com", date: "01/02/2022" },
	{
		id: 11,
		name: "Giancarlo",
		email: "giancarlo@email.com",
		date: "01/02/2022",
	},
	{ id: 12, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
	{ id: 13, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
	{ id: 14, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
];

const ItemSelect = ["Nome", "Email", "Data de Criação", "Matrícula"];

function TableTeste() {
	const [page, setPage] = useState(1);

	const tableData = users.map(user => ({
		name: (
			<Flex align="center">
				<Checkbox className="border-cinza-texto" colorScheme="gray"></Checkbox>
				<div className="flex flex-col justify-between w-full ml-5">
					<Link to="#">
						<Text fontWeight="bold" className="text-azul-ufal">
							{user.name}
						</Text>
					</Link>
					<Text fontSize="sm" className="text-cinza-texto">
						{user.email}
					</Text>
				</div>
			</Flex>
		),
		date: (
			<div className="lg:flex lg:flex-1 flex-col lg:flex-row hidden">
				<div className="text-fundo-claro text-xs lg:text-base">{user.date}</div>
			</div>
		),
		action: (
			<ButtonMainWithIcon
				classname="lg:flex hidden items-center px-[0.625rem] py-2 m-0 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base "
				icon={<PencilSimpleLine className="mr-3" weight="bold" size={20} />}
				title="Editar"
			/>
		),
	}));

	const tableColumns = [
		{
			Header: "Nome Completo",
			accessor: "name" as const,
		},
		{
			Header: "Data de Cadastro",
			accessor: "date" as const,
		},
		{
			Header: "Ações",
			accessor: "action" as const,
		},
	];

	return (
		<>
			<div className="w-full  bg-branco-gelo-forte">
				<div className="flex bg-branco-gelo-forte w-screen lg:max-w-[1900px] mx-auto">
					<div className="w-screen h-full lg:h-auto lg:w-auto ">
						<Box p="12" className="">
							<Heading size="sm" as="h3">
								<TableOptions
									titleOfTable={"Lista de usuário"}
									listSelectButton={ItemSelect}
								/>
							</Heading>

							<Box mt="6" className=" bg-branco-100 rounded-lg">
								<Table
									colorScheme="blue"
									// Fallback component when list is empty
									emptyData={{
										icon: FiUser,
										text: "Nobody is registered here.",
									}}
									totalRegisters={users.length}
									page={page}
									// Listen change page event and control the current page using state
									onPageChange={page => setPage(page)}
									columns={tableColumns}
									data={tableData}
								/>
							</Box>
						</Box>
					</div>
				</div>
			</div>
		</>
	);
}

export default TableTeste;
