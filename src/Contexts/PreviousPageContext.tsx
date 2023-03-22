import React, { createContext, useContext, useState, useEffect } from 'react';

interface PreviousPageContextProps {
    page: string;
    changePage: (page: string) => void;
    justLogged: boolean;
    changeLogged: (logged: boolean) => void;
}

interface PreviousPageProviderProps {
    children: React.ReactNode;
}

export const PreviousPageContext = createContext({} as PreviousPageContextProps);

export function PreviousPageProvider({children} : PreviousPageProviderProps) {
    const [page, setPage] = useState("")
    const [justLogged, setJustLogged] = useState(false)

    function changePage(page: string) {
        setPage(page);
    }
    function changeLogged(logged: boolean) {
        setJustLogged(logged);
    }
    return (
        <PreviousPageContext.Provider value={{page: page, changePage: changePage, justLogged: justLogged, changeLogged: changeLogged}}>
            {children}
        </PreviousPageContext.Provider>
    )
}
export function usePreviousPage(){
    const previousPageContext = useContext(PreviousPageContext)

    return previousPageContext;
}