
import { Link } from "react-router-dom";
import { FaSearch, FaUserEdit, FaPlus } from "react-icons/fa";
import ButtonMainWithIcon from "../ButtonMainWithIcon";

import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Text,
	Box,
	Checkbox,
} from "@chakra-ui/react";

import ButtonSelect from "../ButtonSelect";

import PaginationTable from '../PaginationTable'
interface TableProps {
	itemList: Array<any>
}

function TableList(props: TableProps) {

	return (
		<>
			<div className="bg-branco-100 p-4 m-[4.5rem] rounded-lg h-[41rem]">
				<div className="flex flex-row items-center justify-between text-cinza-texto mx-8 mt-6 mb-14">
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

					<ButtonSelect />
					<div className="relative">
						<ButtonMainWithIcon
							classname="flex items-center px-[0.625rem] py-2 bg-azul-ufal text-branco-100 rounded-md shadow-sombra-botao font-bold text-base"
							icon={<FaPlus className="mr-3" />}
							title="Adicionar"
						/>
					</div>
				</div>

				<div className="h-[26.375rem] overflow-y-auto">
					<Table colorScheme="whiteAlpha" className="">
						<Thead className="border-b-2 border-cinza-texto">
							<Th px={["4", "4", "6"]} className="text-cinza-texto" width="8">
								<Checkbox
									className="border-cinza-texto"
									colorScheme="gray"
								></Checkbox>
							</Th>

							<Th>Usuário</Th>
							{<Th>Data de Cadastro</Th>}
							<Th w="6">Ações</Th>
						</Thead>

						<Tbody className="">
							{props.itemList.map(user => {
								return (
									<Tr className="border-b-2 border-cinza-texto">
										<Td px={["4", "4", "6"]}>
											<Checkbox
												className="border-cinza-texto"
												colorScheme="gray"
											></Checkbox>
										</Td>
										<Td>
											<Box>
												<Link to="#" key={user.id}>
													<Text fontWeight="bold" className="text-azul-ufal">
														{user.name}
													</Text>
												</Link>
												<Text fontSize="sm" className="text-cinza-texto">
													{user.email}
												</Text>
											</Box>
										</Td>
										<Td className="text-fundo-claro">{user.date}</Td>

										<ButtonMainWithIcon
											classname="flex items-center px-[0.625rem] py-2 m-6 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base"
											icon={<FaUserEdit className="mr-3" />}
											title="Editar"
										/>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
				</div>
				<PaginationTable />
			</div>
		</>
	);
}

export default TableList;
