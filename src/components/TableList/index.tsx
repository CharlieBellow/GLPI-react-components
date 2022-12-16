import { Link } from "react-router-dom";
import { useState } from "react";
import { PencilSimpleLine } from "phosphor-react";
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
	useBreakpointValue,
	//Spinner,
} from "@chakra-ui/react";

import TableOptions from "./TableOptions";
import { DropDownMenu } from "../DropDownMenu";
import { Pagination } from "../Pagination";

interface TableProps extends React.HTMLAttributes<HTMLElement> {
	itemlist: Array<any>;
	listselecbutton: Array<any>;
}

function TableList(props: TableProps) {
	const [page, setPage] = useState(1);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<>
			<div
				className="lg:bg-white-100 p-4 lg:m-10 tv:m-18 rounded-lg h-[41rem] lg:h-auto"
				{...props}
			>
				<div className="lg:mb-16" {...props}>
					<TableOptions
						listselecbutton={props.listselecbutton}
						titleOfTable="Lista de Usuários"
					/>
				</div>

				<div className="h-auto" {...props}>
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
							{isWideVersion && <Th>Data de Cadastro</Th>}
							<Th w="">Ações</Th>
						</Thead>

						<Tbody className="scroll lg:max-w-full lg:top-4  ">
							{props.itemlist.map(user => {
								return (
									<div
										className=" rounded-[0.75rem] lg:rounded-0 bg-white-ice my-3 lg:my-0 flex flex-col lg:flex-row lg:mx-6 pb-0 md:mx-9"
										{...props}
									>
										<Tr
											className="lg:border-b-2 lg:border-gray-text lg:w-full lg:bg-white-100  flex flex-row  justify-between items-center"
											key={user.id}
										>
											<div className=" flex lg:flex lg:flex-1 flex-row">
												<Td
													px={["0", "0", "0"]}
													className="flex items-center mx-1 lg:mx-4"
												>
													<Checkbox
														className="border-gray-text"
														colorScheme="gray"
													></Checkbox>
												</Td>
												<div className="flex flex-row justify-between lg:w-full w-6 0">
													<Td className="text-sm lg:text-lg" key={user.name}>
														<Box className="">
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
												</div>
											</div>

											{isWideVersion && (
												<div className="lg:flex lg:flex-1 flex-col lg:flex-row hidden">
													<Td
														className="text-light-bg text-xs lg:text-base"
														key={user.date}
													>
														{user.date}
													</Td>
												</div>
											)}
											<div className="flex pr-1 ">
												<div className="lg:hidden flex my-auto pr-4 lg:gap-2 gap-0">
													<DropDownMenu date={user.date} />
												</div>
												<ButtonMainWithIcon
													className="flex items-center px-[0.625rem] py-2 lg:m-6 bg-gray-text text-white-100 rounded-md filter shadow-button font-bold text-base"
													icon={
														<PencilSimpleLine
															className="lg:mr-3 mr-0"
															weight="bold"
															size={20}
														/>
													}
													title={isWideVersion ? "Editar" : ""}
												/>
											</div>
										</Tr>
									</div>
								);
							})}
						</Tbody>
					</Table>
				</div>
				<Pagination
					totalCountOfRegisters={props.itemlist.length}
					currentPage={page}
					onPageChange={setPage}
				/>
			</div>
		</>
	);
}

export default TableList;
