import { useState, useEffect } from "react";
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
    Checkbox,
    chakra,
    useBreakpointValue,
  } from '@chakra-ui/react'
import * as Icon from "phosphor-react"

import ButtonDropdownMenu from "../Buttons/ButtonDropDownMenu"
import {gettAllUsers} from "../../Utils/server/getInfo"

import { Column, flexRender, PaginationState, useReactTable, ColumnDef, getPaginationRowModel, SortingState, getCoreRowModel, getSortedRowModel} from '@tanstack/react-table'

import Search from '../../components/Inputs/Search'
import {Button} from '../../components/Buttons/Button'
import Pagination from "./Pagination";
import MobileTableElement from "./MobileTableElement";

export type DataTableProps<Data extends object> = {
    data: Data[];
    columns: ColumnDef<Data, any>[];
    currentPage: number
};

// TODO estilizar a tabela como no figma

const columnsTitle = ["Usuários", "Data", "Ações"]


function DataTable<Data extends object>({
    data,
    columns,
    currentPage,
}: DataTableProps<Data>) {
    const [sorting, setSorting] = useState<SortingState>([]);

    const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
    // const table = useReactTable({
    //     columns,
    //     data,
    //     getCoreRowModel: getCoreRowModel(),
    //     onSortingChange: setSorting,
    //     getSortedRowModel: getSortedRowModel(),
    //     getPaginationRowModel: getPaginationRowModel(),
    //     state: {
    //         sorting
    //     },
    // });

    const [table, setTable] = useState<object[]>([{}])
useEffect(() => {



})


    return(
        <div className="flex flex-col items-center font-thin w-auto">
            <div className=" lg:py-10 lg:px-[6rem] w-full">
                <div className="lg:bg-white-100 rounded-lg h-[45.06rem] lg:shadow-lg m-8 pb-6 pr-8">
                    <div className="flex flex-row lg:flex-row gap-4 justify-center lg:items-center lg:justify-between pr-5">
                        <div className="py-6 px-8 hidden lg:block">
                            <h3>Lista de Usuários</h3>
                        </div>
                        <div className="flex flex-row items-center gap-8">
                            <h3 className="hidden lg:block">Busca</h3>
                            <div className=" py-8 lg:py-0">
                                <Search placeholder="pesquisar dado desejado"/>
                            </div>
                                <ButtonDropdownMenu />
                            <div className="hidden lg:block">
                                <Button theme="primary" title="Adicionar" icon={<Icon.Plus size={20} />} />
                            </div>
                        </div>
                    </div>
                    <Table variant={"striped"} className="mx-4 ">
                        <Thead>
                            {isWideVersion && table.getHeaderGroups().map((headerGroup : any) => (
                                <Tr key={headerGroup.id} className="">
                                    {headerGroup.headers.map((header : any) => {
                                        const meta: any = header.column.columnDef.meta;
                                        return(
                                            <Th className=""
                                                key={header.id}
                                                onClick={header.column.getToggleSortingHandler()}
                                                isNumeric={meta?.isNumeric}
                                                >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </Th>
                                        );
                                    })}
                                </Tr>
                            ))}
                            {!isWideVersion && <Th></Th>}
                        </Thead>    
                        <Tbody className="mr-10 right-7">
                            {isWideVersion && table.getRowModel().rows.map((row : any) => (
                            <Tr key={row.id} className="mr-10 right-7">
                                {row.getVisibleCells().map((cell : any) => {
                                    const meta: any = cell.column.columnDef.meta;
                                    return (
                                        <Td key={cell.id} isNumeric={meta?.isNumeric} className="mr-10 pr-3 right-7">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Td>
                                    )
                                })}
                            </Tr>
                            ))}
                            {!isWideVersion && 
                                    <MobileTableElement name="user" email="email" date="date"/>

                            }
                        </Tbody>
                    </Table>
                    <div className="hidden lg:block">
                        <Pagination table={table} currentPage={currentPage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DataTable