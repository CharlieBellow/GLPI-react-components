
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
    const [hidden, setHidden] = useState(true);
    const [title, setTitle] = useState("");
    const openMenu = () => {
        setOpen(!open);
        setHidden(!hidden);
    }
    return(
        <SidebarContext.Provider value={{open, openMenu, title, hidden}}>
            {children}
        </SidebarContext.Provider>
    );
}


export default SidebarContext;