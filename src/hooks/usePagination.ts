import { PaginationParamsRequest, PaginationRequest } from "../components/Table/types/paginationrequest";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { ServerError } from "../exceptions/ServerError";

interface UsePaginationProps<T> {
    token?: string;
    fetchData: ({ page, params, token }: PaginationRequest) => Promise<T>
}

export function usePagination<T extends { error?: ServerError }>({ fetchData, token }: UsePaginationProps<T>) {
    const [page, setPage] = useState<number>(1);
    const [paginationFilter, setPaginationFilter] = useState<PaginationParamsRequest>({} as PaginationParamsRequest);
    const [list, setList] = useState<T>({} as T);
    const [query, setQuery] = useState('');
    const searchQuery = useDebounce(query, 2000);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function refetch() {
        const newList = await fetchData({ page, params: paginationFilter, token });        
        setList(newList)
    }

    function setFilter(searchQuery: string) {
        const newFilter = { ...paginationFilter, searchQuery }
        setPaginationFilter(newFilter);

    }

    useEffect(() => {
        setIsLoading(true);        
        fetchData({ page, params: paginationFilter, token }).then((list) => {
            setList(list);
            setHasError(list.error ? true : false);
            setIsLoading(false);
        });
    }, [paginationFilter, page]);

    return { list, refetch, setPage, page, setFilter, isLoading };
}