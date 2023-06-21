
import { createContext, useState, ReactNode } from "react";

type SidebarContextProps = {
    children: ReactNode;
  };
type SidebarContextType = {
    open: boolean;
    openMenu: () => void;
    title: string
}

const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType);

export function SidebarProvider({children }: SidebarContextProps){
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const openMenu = () => {
        setOpen(!open);
    }
    return(
        <SidebarContext.Provider value={{open, openMenu, title}}>
            {children}
        </SidebarContext.Provider>
    );
}


export default SidebarContext;