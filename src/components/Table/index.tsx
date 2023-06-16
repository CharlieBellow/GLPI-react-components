import { useMessage } from "../../Contexts/MessageContext";
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Spinner,
    useBreakpointValue,
    useDisclosure,
    Table as ChakraTable,
    Thead,
    Th,
    Checkbox,
    Tr
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { AlertDialog } from "../AlertDialog";
import { TableProps } from "./types";

import NextLink from "next/link";
import TableHeader from "./TableHeader";
import { TableRows } from "./TableRow";
import { Pagination } from "./Pagination";
import { TableFilter } from "./TableFilter";

export function Table<T extends { id: string }, K extends keyof T>({
    data = [],
    columns,
    title,
    isFetching,
    isLoading,
    resource,
    isError,
    totalRecords = 0,
    deleteRegister,
    setPage,
    page,
    setFilter,
    refetch,
    error
}: TableProps<T, K>) {
    const { data: session, status } = useSession();
    const token = session?.tokens.accessToken
        ? session?.tokens.accessToken
        : "";

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { successMessage, errorMessage } = useMessage();
    const [currentRegister, setCurrentRegister] = useState<string>("");

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    useEffect(() => {
        if (status === "loading") return
        if (error?.statusCode === 401) {
            signIn(); // Force sign in to hopefully resolve error
        }
    }, [error, status]);




    async function handleDeleteCurrentRegister() {
        const response = await deleteRegister({
            id: currentRegister,
            header: {
                token
            }
        });
        if (response.error) {
            errorMessage(response.error);
        } else {
            successMessage({ message: `${title} excluído(a) com sucesso` });
            if (refetch) {
                refetch();
            }
        }
        setCurrentRegister("");
    }

    async function handleCurrentRegister(id: string) {
        setCurrentRegister(id);
        onOpen();
    }
    return (
        <>
            <AlertDialog
                title={title}
                onClose={onClose}
                isOpen={isOpen}
                deleteRegister={handleDeleteCurrentRegister}
            />
            <Box
                flex="1"
                borderRadius="8"
                bg="gray.800"
                p="8"
            >
                <Flex
                    mb="8"
                    justify="space-between"
                    align="center"
                >
                    <Heading size="lg" fontWeight="normal">
                        {title}
                        {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                    </Heading>

                    <NextLink href={`${resource}/create`} passHref >
                        <Button
                            size="sm"
                            fontSize="sm"
                            colorScheme="green"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}

                        >
                            Cadastrar
                        </Button>
                    </NextLink>
                </Flex>
                <TableFilter />
                {isLoading ? (
                    <Flex justify="center" alignItems={"center"}>
                        <Spinner size={"xl"} />
                    </Flex>
                ) : error ? (
                    <Flex justify="center">
                        Falha ao obter dados
                    </Flex>
                ) : (
                    <>
                        <ChakraTable colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                        <Checkbox colorScheme="green"></Checkbox>
                                    </Th>
                                    <TableHeader columns={columns} />
                                    <Th w="6">Ações</Th>
                                </Tr>
                            </Thead>
                            <TableRows/>

                        </ChakraTable>
                        <Pagination
                            totalCountOfRegisters={totalRecords}
                            currentPage={page}
                            onPageChange={setPage}
                        />
                    </>
                )}
            </Box>
        </>
    )
}