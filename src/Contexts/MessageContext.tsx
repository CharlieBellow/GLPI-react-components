import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"
interface MessageContextProps {
    errorMessage: (message: string) => void;
    successMessage: (message: string) => void;
    warnMessage: (message: string) => void;
    infoMessage: (message: string) => void;
}
interface MessageProviderProps {
    children: React.ReactNode;
  }
  

export const MessageContext = createContext({} as MessageContextProps);

export function MessageProvider( { children}: MessageProviderProps){

    function errorMessage(message: string): void{
        toast.error(message);
    }
    function successMessage(message: string): void{
        toast.success(message);
    }
    function warnMessage(message: string): void{
        toast.warn(message);
    }
    function infoMessage(message: string): void{
        toast.info(message);
    }
    return(
        <MessageContext.Provider value={{errorMessage: errorMessage, successMessage: successMessage, infoMessage: infoMessage, warnMessage: warnMessage}}>
            {children}
        </MessageContext.Provider>
    )
}
export function useMessage(){
    const messageContext = useContext(MessageContext)

    return messageContext;
}