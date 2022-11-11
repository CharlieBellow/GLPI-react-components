
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



function TableListTeste(props: TableProps) {

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

export default TableListTeste;

//
//import {
//	Text,
//	Box,
//	Flex,
//	Heading,
//	Button,
//	Icon,
//	Table,
//	Thead,
//	Th,
//	Checkbox,
//	Tbody,
//	Tr,
//	Td,
//	useBreakpointValue,
//	Spinner,
//} from "@chakra-ui/react";
//
//import NextLink from "next/link";
//
//import { Header } from "../../components/Header/";
//import { Sidebar } from "../../components/Sidebar/";
//import { Pagination } from "../../components/Pagination/";
//
//import { RiAddLine, RiPencilLine } from "react-icons/ri";
//import { useUsers } from "../../services/hooks/useUsers";
//import { useState } from "react";
//
//import { Link } from "@chakra-ui/react";
//import { queryClient } from "../../services/queryClient";
//import { api } from "../../services/api";
//
//export default function UserList() {
//	const [page, setPage] = useState(1);
//	const { data, isLoading, isFetching, error } = useUsers(page);
//	const isWideVersion = useBreakpointValue({
//		base: false,
//		lg: true,
//	});
//
//	async function handlePrefetchUser(userId: string) {
//		await queryClient.prefetchQuery(
//			["user", userId],
//			async () => {
//				const response = await api.get(`/users/${userId}`);
//				return response.data;
//			},
//			{
//				staleTime: 1000 * 60 * 10,
//			}
//		);
//	}
//
//	return (
//		<Box>
//			<Header></Header>
//			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
//				<Sidebar />
//				<Box flex="1" borderRadius="8" bg="gray.800" p="8">
//					<Flex mb="8" justify="space-between" align="center">
//						<Heading size="lg" fontWeight="normal">
//							Usuários
//							{!isLoading && isFetching && (
//								<Spinner size="sm" color="gray.500" ml="4" />
//							)}
//						</Heading>
//						<NextLink href="/users/create" passHref>
//							<Button
//								as="a"
//								size="sm"
//								fontSize="sm"
//								colorScheme="pink"
//								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
//							>
//								Criar novo Usuário
//							</Button>
//						</NextLink>
//					</Flex>
//
//					{isLoading ? (
//						<Flex justify="center">
//							<Spinner />
//						</Flex>
//					) : error ? (
//						<Flex justify="center">Falha ao obter dados</Flex>
//					) : (
//						<>
//							<Table colorScheme="whiteAlpha">
//								<Thead>
//									<Th px={["4", "4", "6"]} color="gray.300" width="8">
//										<Checkbox colorScheme="pink"></Checkbox>
//									</Th>
//									<Th>Usuário</Th>
//									{isWideVersion && <Th>Data de Cadastro</Th>}
//									<Th w="6">Ações</Th>
//								</Thead>
//
//								<Tbody>
//									{data.users.map(user => {
//										return (
//											<Tr>
//												<Td px={["4", "4", "6"]}>
//													<Checkbox colorScheme="pink"></Checkbox>
//												</Td>
//												<Td>
//													<Box>
//														<Link
//															color="purple.400"
//															onMouseEnter={() => handlePrefetchUser(user.id)}
//														>
//															<Text fontWeight="bold">{user.name}</Text>
//														</Link>
//														<Text fontSize="sm" color="gray.300">
//															{user.email}
//														</Text>
//													</Box>
//												</Td>
//												{isWideVersion && <Td>{user.createdAt}</Td>}
//												<Td>
//													<Button
//														as="a"
//														size="sm"
//														fontSize="sm"
//														colorScheme="purple"
//														leftIcon={<Icon as={RiPencilLine} />}
//													>
//														{isWideVersion ? "Editar" : ""}
//													</Button>
//												</Td>
//											</Tr>
//										);
//									})}
//								</Tbody>
//							</Table>
//
//							<Pagination
//								totalCountOfRegisters={data.totalCount}
//								currentPage={page}
//								onPageChange={setPage}
//							/>
//						</>
//					)}
//				</Box>
//			</Flex>
//		</Box>
//	);
//}
