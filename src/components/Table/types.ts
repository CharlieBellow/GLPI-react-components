import { ItemWithID } from "@/contexts/TableContext";
import { ServerError } from "@/exceptions/ServerError";
import { DeleteRegisterRequest, DeleteRegisterResponse } from "@/pages/api/shared";

export type ColumnDefinitionType<T extends ItemWithID, K extends keyof T> = {
    key: string;
    header: string;
    width?: number;
}

export type TableProps<T extends ItemWithID, K extends keyof T> = {
    title: string;
    totalRecords: number;
    data: Array<T>;
    resource: string;
    columns: Array<ColumnDefinitionType<T, K>>;
    deleteRegister: (data: DeleteRegisterRequest) => Promise<DeleteRegisterResponse>;
    refetch?: () => void;
    setPage: (page: number) => void;
    setFilter: (filter: string) => void;
    page: number;
    isFetching?: boolean;
    isLoading?: boolean;
    isError?: boolean;
    error?: ServerError
}




