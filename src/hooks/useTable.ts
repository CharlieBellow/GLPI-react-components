import { ColumnDefinitionType } from "@/components/Table/types";
import { ItemWithID } from "@/contexts/TableContext";
import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export interface UseTableProps {
  handleDeleteCurrentRegister: () => void
}

export function useTable<T extends ItemWithID, K extends keyof T>() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [resource, setResource] = useState("")
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("");
  const [columns, setColumns] = useState<Array<ColumnDefinitionType<T, K>>>([])
  const [hasError, setHasError] = useState(false)
  const [currentRegister, setCurrentRegister] = useState<string>("");
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });


  return {
    isOpen,
    onOpen,
    onClose,
    isLoading,
    isFetching,
    setIsLoading,
    setIsFetching,
    resource,
    setResource,
    title,
    setTitle,
    filter,
    setFilter,
    columns,
    setColumns,
    hasError,
    setHasError,
    isWideVersion,
    currentRegister,
    setCurrentRegister
  };
}