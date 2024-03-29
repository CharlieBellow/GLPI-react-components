import NextLink from "next/link";

import {
  Box,
  Button,
  Table as ChakraTable,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import { ItemWithID, useTableContext } from "../../Contexts/TableContext";
import { Pagination } from "./Pagination";
import { TableFilter } from "./TableFilter";
import TableHeader from "./TableHeader";
import { TableRows } from "./TableRow";

interface SimpleTableProps {
  isDetail: boolean;
}

export function SimpleTable<T extends ItemWithID, K extends keyof T>({
  isDetail = false,
}: SimpleTableProps) {
  const {
    isFetching,
    isLoading,
    resource,
    title,
    hasError,
    page,
    setPage,
    totalCountOfRecord,
    openModalForm,
  } = useTableContext();

  return (
    <>
      <Box
        flex="1"
        borderRadius="8"
        className="m-10 w-auto bg-gray-medium shadow-card"
        p={isDetail ? "0" : "8"}
      >
        <Flex mb="8" justify="space-between" align="center">
          <Heading
            size={isDetail ? "sm" : "lg"}
            fontWeight="normal"
            className=""
          >
            {title}
            {!isLoading && isFetching && (
              <Spinner size="sm" className="text-gray-text" ml="4" />
            )}
          </Heading>

          <NextLink href={openModalForm ? "" : `${resource}/create`} passHref>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme=""
              className="bg-gray-text"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              onClick={openModalForm}
            >
              Cadastrar
            </Button>
          </NextLink>
        </Flex>
        {!isDetail && <TableFilter />}
        {isLoading ? (
          <Flex justify="center" alignItems={"center"}>
            <Spinner size={"xl"} />
          </Flex>
        ) : hasError ? (
          <Flex justify="center">Falha ao obter dados</Flex>
        ) : (
          <>
            <ChakraTable colorScheme="whiteAlpha" className="">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="blue" className="border-gray-text" />
                  </Th>
                  <TableHeader />
                  <Th w="6">Ações</Th>
                </Tr>
              </Thead>
              <TableRows />
            </ChakraTable>
            {totalCountOfRecord && setPage && (
              <Pagination
                totalCountOfRegisters={totalCountOfRecord}
                currentPage={page}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </Box>
    </>
  );
}
