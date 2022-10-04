import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../Pagination";
import { FaSearch, FaUserEdit, FaPlus } from "react-icons/fa";
import ButtonMainWithIcon from "../ButtonMainWithIcon";

import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Text,
	Box,
	Flex,
	Heading,
	Button,
	Icon,
	Checkbox,
	useBreakpointValue,
	Spinner,
} from "@chakra-ui/react";

function TableList() {
	return (
		<>
			<div className="bg-branco-100 p-4 m-[4.5rem] rounded-lg">
				<div className="flex flex-row items-center justify-between text-cinza-texto mx-8 my-6">
					<h4 className="font-medium text-2xl">Lista de usuário</h4>

					<div className="flex flex-row items-center">
						<label htmlFor="search" className="pr-6 font-normal text-xl">
							Busca
						</label>
						<div className="relative">
							<FaSearch
								size={18}
								className="header__iconSearch absolute top-[25%] left-[20px] text-cinza-texto"
							/>
							<input
								type="text"
								name="search"
								placeholder="pesquisar usuário"
								className="header__searchBar text-cinza-texto bg-branco-gelo-forte rounded-xl focus:outline-azul-ufal border-none shadow-sombra-card py-2 pr-[101px] pl-[58px] text-base font-normal"
							/>
						</div>
					</div>

					<div className="relative">
						<ButtonMainWithIcon
							classname="flex items-center px-[0.625rem] py-2 bg-azul-ufal text-branco-100 rounded-md shadow-sombra-botao font-bold text-base"
							icon={<FaPlus className="mr-3" />}
							title="Adicionar"
						/>
					</div>
				</div>

				<Table colorScheme="whiteAlpha">
					<Thead className="border-b-2 ">
						<Th px={["4", "4", "6"]} color="gray.300" width="8">
							<Checkbox colorScheme="pink"></Checkbox>
						</Th>
						<Th>Usuário</Th>
						{<Th>Data de Cadastro</Th>}
						<Th w="6">Ações</Th>
					</Thead>

					<Tbody>
						<Tr className="border-b-2">
							<Td px={["4", "4", "6"]}>
								<Checkbox colorScheme="pink"></Checkbox>
							</Td>
							<Td>
								<Box>
									<Link to="/">
										<Text fontWeight="bold">"user.name"</Text>
									</Link>
									<Text fontSize="sm" color="gray.300">
										user.email
									</Text>
								</Box>
							</Td>
							<Td>user.createdAt</Td>
							<Td>
								<ButtonMainWithIcon
									classname="flex items-center px-[0.625rem] py-2 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base"
									icon={<FaUserEdit className="mr-3" />}
									title="Editar"
								/>
							</Td>
						</Tr>
						<Tr className="border-b-2">
							<Td px={["4", "4", "6"]}>
								<Checkbox colorScheme="pink"></Checkbox>
							</Td>
							<Td>
								<Box>
									<Link to="/">
										<Text fontWeight="bold">"user.name"</Text>
									</Link>
									<Text fontSize="sm" color="gray.300">
										user.email
									</Text>
								</Box>
							</Td>
							<Td>user.createdAt</Td>
							<Td>
								<ButtonMainWithIcon
									classname="flex items-center px-[0.625rem] py-2 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base"
									icon={<FaUserEdit className="mr-3" />}
									title="Editar"
								/>
							</Td>
						</Tr>
						<Tr className="border-b-2">
							<Td px={["4", "4", "6"]}>
								<Checkbox colorScheme="pink"></Checkbox>
							</Td>
							<Td>
								<Box>
									<Link to="/">
										<Text fontWeight="bold">"user.name"</Text>
									</Link>
									<Text fontSize="sm" color="gray.300">
										user.email
									</Text>
								</Box>
							</Td>
							<Td>user.createdAt</Td>
							<Td>
								<ButtonMainWithIcon
									classname="flex items-center px-[0.625rem] py-2 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base"
									icon={<FaUserEdit className="mr-3" />}
									title="Editar"
								/>
							</Td>
						</Tr>
						<Tr className="border-b-2">
							<Td px={["4", "4", "6"]}>
								<Checkbox colorScheme="pink"></Checkbox>
							</Td>
							<Td>
								<Box>
									<Link to="/">
										<Text fontWeight="bold">"user.name"</Text>
									</Link>
									<Text fontSize="sm" color="gray.300">
										user.email
									</Text>
								</Box>
							</Td>
							<Td>user.createdAt</Td>
							<Td>
								<ButtonMainWithIcon
									classname="flex items-center px-[0.625rem] py-2 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base"
									icon={<FaUserEdit className="mr-3" />}
									title="Editar"
								/>
							</Td>
						</Tr>
						<Tr className="border-b-2">
							<Td px={["4", "4", "6"]}>
								<Checkbox colorScheme="pink"></Checkbox>
							</Td>
							<Td>
								<Box>
									<Link to="/">
										<Text fontWeight="bold">"user.name"</Text>
									</Link>
									<Text fontSize="sm" color="gray.300">
										user.email
									</Text>
								</Box>
							</Td>
							<Td>user.createdAt</Td>
							<Td>
								<ButtonMainWithIcon
									classname="flex items-center px-[0.625rem] py-2 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base"
									icon={<FaUserEdit className="mr-3" />}
									title="Editar"
								/>
							</Td>
						</Tr>
					</Tbody>
				</Table>

				{/*<Pagination
						totalCountOfRegisters={10}
						currentPage={1}
						onPageChange={setPage}
				/>*/}
			</div>
		</>
	);
}

export default TableList;
