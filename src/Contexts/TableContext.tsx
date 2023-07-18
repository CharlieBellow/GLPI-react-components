import {
  DeleteRegisterRequest,
  DeleteRegisterResponse
} from "@/pages/api/shared";
import { ReactNode, createContext, useContext } from "react";
import { ColumnDefinitionType } from "../components/Table/types";
import { useTable } from "../hooks/useTable";

export type ItemWithID = { id: string };

interface TableContextType<T extends ItemWithID, K extends keyof T> {
  data: Array<T>;
  isOpen: boolean;
  isFetching: boolean;
  setIsFetching: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  hasError: boolean;
  setHasError: (value: boolean) => void;
  resource: string;
  title: string;
  setFilter?: (value: string) => void;
  currentRegister: string;
  setCurrentRegister: (value: string) => void;
  columns: ColumnDefinitionType<T, K>[];
  onOpen: () => void;
  onClose: () => void;
  deleteRegister?: ({
    header,
    id,
  }: DeleteRegisterRequest) => Promise<DeleteRegisterResponse>;
  refetch?: () => void;
  totalCountOfRecord?: number;
  page?: number;
  setPage?: (page: number) => void;
  openModalForm?: () => void;
}

interface TableContextProps<T extends ItemWithID, K extends keyof T> {
  title: string;
  resource: string;
  columns: ColumnDefinitionType<T, K>[];
  children: ReactNode;
  data: Array<T>;
  deleteRegister?: (
    data: DeleteRegisterRequest
  ) => Promise<DeleteRegisterResponse>;
  setFilter?: (value: string) => void;
  refetch?: () => void;
  totalCountOfRecord?: number;
  page?: number;
  setPage?: (page: number) => void;
  openModalForm?: () => void;
}
export const TableContext = createContext<
  TableContextType<ItemWithID, keyof ItemWithID>
>({} as TableContextType<ItemWithID, keyof ItemWithID>);

export function TableContextProvider<T extends ItemWithID, K extends keyof T>({
  title,
  resource,
  children,
  columns,
  data: tableData,
  deleteRegister,
  setFilter,
  refetch,
  page,
  setPage,
  totalCountOfRecord,
  openModalForm,
}: TableContextProps<T, K>) {
  const {
    isOpen,
    onOpen,
    onClose,
    isLoading,
    isFetching,
    setIsLoading,
    setIsFetching,
    hasError,
    setHasError,
    currentRegister,
    setCurrentRegister,
  } = useTable<T, K>();

  return (
    <TableContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        isLoading,
        isFetching,
        setIsLoading,
        setIsFetching,
        resource,
        title,
        deleteRegister,
        setFilter,
        columns,
        data: tableData,
        hasError,
        setHasError,
        currentRegister,
        setCurrentRegister,
        refetch,
        page,
        setPage,
        totalCountOfRecord,
        openModalForm,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export function useTableContext<
  T extends ItemWithID,
  K extends keyof T
>(): TableContextType<T, K> {
  const context = useContext<TableContextType<T, K>>(
    TableContext as unknown as React.Context<TableContextType<T, K>>
  );

  if (!context) {
    throw new Error("useTableContext must be used under TableContextProvider");
  }
  return context;
}
