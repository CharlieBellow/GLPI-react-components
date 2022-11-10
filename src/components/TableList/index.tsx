
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
interface TableProps extends React.HTMLAttributes<HTMLElement>{
	itemList: Array<any>;
	listSelectButton: Array<any>
	
}



function TableList(props: TableProps) {

	return (
		<>
			<div
				className="lg:bg-white-100 p-4 lg:m-[4.5rem] rounded-lg h-[41rem]"
				{...props}
			>
				<div className="lg:mb-16" {...props}>
					<TableOptions listSelectButton={props.listSelectButton} />
				</div>

				<div className="h-auto " {...props}>
					<Table colorScheme="whiteAlpha" className="" {...props}>
						<Thead className="border-b-2 mx-6 border-gray-text hidden lg:flex lg:none   lg:justify-between ">
							<div {...props}>
								<Th px={["4", "4", "6"]} className="text-gray-text " width="8">
									<Checkbox
										className="border-gray-text"
										colorScheme="gray"
									></Checkbox>
								</Th>

								<Th className="tabela">Usuário</Th>
							</div>
							{<Th>Data de Cadastro</Th>}
							<Th w="">Ações</Th>
						</Thead>

						<Tbody className="scroll max-w-full lg:top-4 ">
							{props.itemList.map(user => {
								return (
									<div className=" rounded-[0.75rem] lg:rounded-0 bg-white-ice my-3 lg:my-0 flex flex-col lg:flex-row mx-6 pb-0" {...props}>
										<Tr
											className="lg:border-b-2 lg:border-gray-text  lg:bg-white-100  lg:flex flex-row w-full justify-between items-center"
											key={user.name}
										>
											<div className=" flex lg:flex lg:flex-1 flex-row">
												<Td px={["4", "4", "6"]} className="flex items-center ">
													<Checkbox
														className="border-gray-text"
														colorScheme="gray"
													></Checkbox>
												</Td>
												<div className="flex flex-row justify-between w-full">
													<Td className="">
														<Box key={user.name}>
															<Link to="#">
																<Text
																	fontWeight="bold"
																	className="text-blue-ufal"
																>
																	{user.name}
																</Text>
															</Link>
															<Text fontSize="sm" className="text-gray-text">
																{user.email}
															</Text>
														</Box>
													</Td>
													<ButtonMainWithIcon
														classname="lg:hidden items-center bg-transparent text-light-bg"
														icon={<FiMoreVertical className="" size={18} />}
														title=""
													/>
												</div>
											</div>

											<div className="lg:flex lg:flex-1 flex-col lg:flex-row hidden">
												<Td className="text-light-bg text-xs lg:text-base">
													{user.date}
												</Td>
											</div>

											<ButtonMainWithIcon
												classname="lg:flex hidden items-center px-[0.625rem] py-2 m-6 bg-gray-text text-white-100 rounded-md filter shadow-button font-bold text-base "
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
