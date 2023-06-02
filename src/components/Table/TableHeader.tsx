import { ColumnDefinitionType } from "../../components/Table/types";
import { ItemWithID, useTableContext } from "../../Contexts/TableContext";
import { Th } from "@chakra-ui/react";

type TableHeaderProps<T extends ItemWithID, K extends keyof T> = {
    columns?: Array<ColumnDefinitionType<T, K>>;
}

export function TableHeader<T extends ItemWithID, K extends keyof T>({ columns }: TableHeaderProps<T, K>) {
    const { columns: contextColumns} = useTableContext<T,K>();
    let tableColumns;

    if (contextColumns){
        tableColumns = contextColumns;
    }else
    if (columns){
        tableColumns = columns;
    }else
        tableColumns = [] as Array<ColumnDefinitionType<T, K>>;
    const headers = tableColumns.map((column, index) => {

        return (
            <Th key={`headCell-${index}`}>
                {column.header}
            </Th>
        );
    });
    return (
        <>{headers}</>
    )
}


export default TableHeader;