
import { useState } from "react";

import { Table } from "react-chakra-pagination";

import ButtonMainWithIcon from "../../components/ButtonMainWithIcon";
import { PencilSimpleLine, DotsThreeVertical } from "phosphor-react";

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
import ButtonSelect from "../../components/ButtonSelect";

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
	{ id: 11, name: "Giancarlo", email: "giancarlo@email.com", date: "01/02/2022",},
	{ id: 12, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
	{ id: 13, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
	{ id: 14, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
	{ id: 15, name: "Charlie", email: "email@email.com", date: "01/02/2022" },
	{ id: 16, name: "Humberto", email: "humberto@email.com", date: "01/02/2022" },
	{ id: 17, name: "Ítalo", email: "italo@email.com", date: "01/02/2022" },
	{ id: 18, name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" },
	{ id: 19, name: "Josue", email: "zue@email.com", date: "01/02/2022" },
	{ id: 20, name: "Luan", email: "luan@email.com", date: "01/02/2022" },
	{ id: 21, name: "Marcos", email: "marcos@email.com", date: "01/02/2022" },
	{ id: 22, name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" },
	{ id: 23, name: "Pedro", email: "pedro@email.com", date: "01/02/2022" },
	{ id: 24, name: "Felipe", email: "lipe@email.com", date: "01/02/2022" },
	{ id: 25, name: "Giancarlo", email: "giancarlo@email.com", date: "01/02/2022",},
	{ id: 26, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
	{ id: 27, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
	{ id: 28, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
];

const ItemSelect = ["Tudo", "Nome", "Email", "Data de Criação", "Matrícula", "Descrição"];
const editTableOptions = ["Editar", "Excluir", "desativar"];

function TableTeste() {
	const [page, setPage] = useState(1);

	const tableData = users.map(user => ({
		name: (
			<Flex align="center" className="w-full">
				<Checkbox className="border-gray-text" colorScheme="gray"></Checkbox>
				<div className="flex flex-col justify-between lg:w-full ml-5 text-sm lg:text-base p-0">
					<Link to="#">
						<Text fontWeight="bold" className="text-blue-ufal">
							{user.name}
						</Text>
					</Link>
					<Text fontSize="sm" className="text-gray-text text-xs">
						{user.email}
					</Text>
					<Text fontSize="sm" className="text-gray-text text-xs">
						{user.date}
					</Text>

				</div>
			</Flex>
		),
		date: (
			<div className="lg:flex lg:flex-row w-16 lg:w-full">
				<div className="text-light-bg text-xs lg:text-base ">{user.date}</div>
			</div>
		),
		action: (
			<div className="flex lg:items-center lg:justify-end">
				<ButtonMainWithIcon
					classname="lg:flex hidden items-center px-[0.625rem] mx-0 py-2 bg-gray-text text-white-100 rounded-md filter shadow-button font-bold text-base "
					icon={<PencilSimpleLine className="mr-3" weight="bold" size={20} />}
					title="Editar"
				/>
				{/* botão de opções para mobile não funciona */}
				<ButtonSelect
					placeholder=""
					className="text-gray-text lg:hidden flex hover:text-blue-ufal shadow-sm"
					icon={
						<DotsThreeVertical
							size={24}
						/>
					}
					listSelectButton={editTableOptions}
					
				/>
			</div>
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
			Header: "",
			accessor: "action" as const,
		},
	];

	return (
		<>
			<div className="w-full bg-white-strong-ice">
				<div className="flex bg-white-strong-ice w-screen lg:max-w-[75rem] lg:mx-auto ">
					<div className="w-full h-full lg:h-auto lg:w-full justify-center  ">
						<Box p="12" className=" bg-white-100 my-9 mx-9 rounded-lg">
							<Heading size="sm" as="h3" className="">
								<TableOptions
									titleOfTable={"Lista de usuários"}
									listSelectButton={ItemSelect}
								/>
							</Heading>
							<div className="lg:w-full">
								<Box mt="6" className=" bg-white-100 rounded-lg">
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
							</div>
						</Box>
					</div>
				</div>
			</div>
		</>
	);
}

export default TableTeste;
