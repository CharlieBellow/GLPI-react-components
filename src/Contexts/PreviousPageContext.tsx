import React, { createContext, useContext, useState, useEffect } from 'react';

interface PreviousPageContextProps {
    page: string;
    changePage: (page: string) => void;
}

interface PreviousPageProviderProps {
    children: React.ReactNode;
}

export const PreviousPageContext = createContext({} as PreviousPageContextProps);

export function PreviousPageProvider({children} : PreviousPageProviderProps) {
    const [page, setPage] = useState("")

    function changePage(page: string){
        setPage(page);
    }
    return (
        <PreviousPageContext.Provider value={{page: page, changePage: changePage}}>
            {children}
        </PreviousPageContext.Provider>
    )
}
export function usePreviousPage(){
    const previousPageContext = useContext(PreviousPageContext)

    return previousPageContext;
}