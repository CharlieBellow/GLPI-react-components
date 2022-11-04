
import { Link } from "react-router-dom";
import {PencilSimpleLine } from "phosphor-react";
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


import PaginationTable from '../PaginationTable'
import TableOptions from "./TableOptions";
import { FiMoreVertical } from "react-icons/fi";
interface TableProps {
	itemList: Array<any>;
	listSelectButton: Array<any>
}



function TableList(props: TableProps) {

	return (
		<>
			<div className="lg:bg-branco-100 p-4 lg:m-[4.5rem] rounded-lg h-[41rem]">
				<div className="lg:mb-16">
					<TableOptions listSelectButton={props.listSelectButton} />
				</div>

				<div className="h-[26.375rem] overflow-y-auto">
					<Table colorScheme="whiteAlpha" className="">
						<Thead className="border-b-2 border-cinza-texto hidden lg:flex lg:none lg:absolute lg:right-[7.863rem] lg:left-[20.288rem]  lg:justify-between lg:top-[18.438rem] max-w-[1450px] mx-auto ">
							<div>
								<Th
									px={["4", "4", "6"]}
									className="text-cinza-texto "
									width="8"
								>
									<Checkbox
										className="border-cinza-texto"
										colorScheme="gray"
									></Checkbox>
								</Th>

								<Th className="tabela">Usuário</Th>
							</div>
							{<Th>Data de Cadastro</Th>}
							<Th w="">Ações</Th>
						</Thead>

						<Tbody className="scroll max-w-full lg:top-4">
							{props.itemList.map(user => {
								return (
									<div className=" rounded-[0.75rem] lg:rounded-0 bg-branco-gelo my-3 lg:my-0 flex flex-col lg:flex-row mx-6">
										<Tr
											className="lg:border-b-2 lg:border-cinza-texto  lg:bg-branco-100  lg:flex flex-row w-full justify-between items-center"
											key={user.name}
										>
											<div className=" flex lg:flex lg:flex-1 flex-row">
												<Td px={["4", "4", "6"]} className="flex items-center ">
													<Checkbox
														className="border-cinza-texto"
														colorScheme="gray"
													></Checkbox>
												</Td>
												<div className="flex flex-row justify-between w-full">
													<Td className="">
														<Box key={user.name}>
															<Link to="#">
																<Text
																	fontWeight="bold"
																	className="text-azul-ufal"
																>
																	{user.name}
																</Text>
															</Link>
															<Text fontSize="sm" className="text-cinza-texto">
																{user.email}
															</Text>
														</Box>
													</Td>
													<ButtonMainWithIcon
														classname="lg:hidden items-center bg-transparent text-fundo-claro pr-5"
														icon={<FiMoreVertical className="" size={18} />}
														title=""
													/>
												</div>
											</div>

											<div className="lg:flex lg:flex-1 flex-col lg:flex-row hidden">
												<Td className="text-fundo-claro text-xs lg:text-base">
													{user.date}
												</Td>
											</div>

											<ButtonMainWithIcon
												classname="lg:flex hidden items-center px-[0.625rem] py-2 m-6 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base "
												icon={
													<PencilSimpleLine
														className="mr-3"
														weight="bold"
														size={20}
													/>
												}
												title="Editar"
											/>
										</Tr>
									</div>
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
