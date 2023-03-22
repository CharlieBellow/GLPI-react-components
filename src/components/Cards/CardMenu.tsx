import * as Icon from "phosphor-react";
import { useState, useContext, useEffect } from "react";
import SidebarContext from "../Sidebar/SidebarContext";
import Image from "next/image"
interface CardMenuProps extends React.HTMLAttributes<HTMLElement> {
	pagetitle: string;
}
function CardMenu(props: CardMenuProps){
    const { openMenu } = useContext(SidebarContext);
    const [title, setTitle] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(document.readyState !== "complete") return;
        if(document.readyState === "complete"){
            setTimeout(() => {
                setLoaded(true)
            }, 300);
        }
      })
    useEffect(() => {
        setTitle(document.title);
      }, [loaded])

    return(
            <div className="bg-blue-600 w-full bg-[#DEE2E6] text-white-100 h-[10rem] p-6 lg:rounded-none lg:bg-blue-600 lg:text-white relative z-0 lg:pt-16">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-4 w-[15rem]">
                        <Icon.List size={32} onClick={() => openMenu()} className="cursor-pointer"/>
                        <h3 className="hidden text-white lg:block">{title !== "" ? title : ""}</h3>
                    </div>
                    <div className="hidden justify-self-center lg:block">
                    </div>
                    <div className="flex flex-row items-center gap-[1.5rem]">
                        <Icon.Question size={32}/>
                        <div className="w-[2rem] h-[2rem] bg-black-200">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default CardMenu;