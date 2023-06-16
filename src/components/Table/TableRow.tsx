import {useEffect} from "react"
import { ColumnDefinitionType } from "../../components/Table/types";
import { Checkbox, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ActionMenu } from "./ActionMenu";
import { ItemWithID, useTableContext } from "../../Contexts/TableContext";
import { useMessage } from "../../Contexts/MessageContext";
import { AlertDialog } from "../AlertDialog";

import { useSession } from "next-auth/react";

type TableRowsProps<T extends { id: string }, K extends keyof T> = {
    data: Array<T>;
    resource: string;
    columns: Array<ColumnDefinitionType<T, K>>;
    handleCurrentRegister: (id: string) => void;
}


// Type guard for the primitive types which will support printing
// out of the box

//@ts-ignore()
export function TableRows<T extends ItemWithID, K extends keyof T>() {
    const {
        data: dataContext,
        columns,
        resource,
        title,
        onClose,
        isOpen,
        onOpen,
        deleteRegister,
        currentRegister,
        setCurrentRegister,
        refetch
    } = useTableContext<T, K>();

    const {errorMessage, successMessage} = useMessage()

    // const { data: session, status } = useSession();
    // const token = session?.tokens.accessToken
    //     ? session?.tokens.accessToken
    //     : "";

    
    const token = localStorage.getItem("token");

    async function handleDeleteCurrentRegister() {
        if (deleteRegister){
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
        }
        
        setCurrentRegister("");
    }

    async function handleCurrentRegister(id: string) {
        setCurrentRegister(id);
        onOpen();
    }


    const rows = dataContext?.map((row, index) => {
        return (
            <Tr key={`row-${index}`} className="">
                <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="gray" className="border-gray-text"></Checkbox>
                </Td>
                {
                    columns.map((column, index2) => {
                        const key = column.key as K;
                        const value = row[key] as ReactNode;
                        return (
                            <Td key={`cell-${index2}`}>
                                <Text>{value}</Text>
                            </Td>
                        );
                    }
                    )}
                <Td>
                    <ActionMenu
                        id={row.id}
                        editPath={`${resource}/${row.id}`}
                        handleCurrentRegister={handleCurrentRegister}
                        isWideVersion={true}
                    />

                </Td>
            </Tr>
        );
    });
    return (
        <>
            <AlertDialog
                title={title}
                onClose={onClose}
                isOpen={isOpen}
                deleteRegister={handleDeleteCurrentRegister}
            />
            <Tbody>
                {rows}
            </Tbody>
        </>
    );
}