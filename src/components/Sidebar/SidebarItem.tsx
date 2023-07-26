import * as Icon from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import SidebarContext from "./SidebarContext";
interface Item extends React.HTMLAttributes<HTMLElement> {
    item: any;
}
function SidebarItem(props: Item){
    const [selected, setSelected] = useState(false);
    const [hover, setHover] = useState(false);
    const { open } = useContext(SidebarContext);
    const router = useRouter()
    useEffect(() => {
        if(!router.isReady) return;
        if(router.asPath === props.item.path){
            setSelected(true)
        }
    }, [props.item.path, router.asPath, router.isReady])
    const selectItem = () => {
        if(open && !props.item.path){
            setSelected(!selected);
        }else{
            setSelected(false);
        }    
        if(props.item.path){
            setSelected(true)
        }
    }
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Link href={props.item.path? props.item.path : "#"} className={`flex w-full flex-col justify-center`} onClick={() => selectItem()} >
                <div  className={`m-2 flex cursor-pointer flex-row  items-center justify-between gap-4 rounded-lg py-2 duration-300 ease-in-out hover:bg-sky-300${selected && props.item.path ? " text-blue-ufal" : "text-white-100"}`}>
                   <div className="flex flex-row items-center gap-2">
                        <div className="pl-2">
                            {props.item.icon}
                        </div>
                        {open ? <>{props.item.title}</> : <></>}
                    </div>
                    <div className="pr-2">
                        {!props.item.path && open ? !selected ? <Icon.CaretDown size={24} className="flex flex-col justify-self-end"/> :  <Icon.CaretUp size={24} className="flex flex-col justify-self-end"/> : <></>}
                    </div>
                    
                </div>  
            </Link>
            <div className="relative flex w-full flex-col">                
                    {open && selected && props.item.children ? props.item.children.map((child : Item, index : number) => {
                        return <div key={index} className={`mx-2 flex cursor-pointer flex-col items-start gap-4 rounded-lg px-6 py-2 text-white-100 duration-300 ease-in-out hover:bg-sky-300`}>
                            <Link href={child.dir? child.dir : "#"} key={index}>{child.title}</Link>
                        </div>
                    }) : <></>} 
                    {!open && props.item.children ? 
                    <div className="absolute -bottom-2 left-14 z-10 flex w-40 flex-col gap-[0.1rem] overflow-hidden rounded-lg bg-blue-ufal text-white-100 shadow-lg">
                        {props.item.children.map((child: Item, index : number) => {
                            return <Link href={child.dir? child.dir : "#"} key={index} className={`bg-blue-final-gradient p-2 pl-4 hover:bg-sky-300${hover ? "block" : "hidden"}`}>{child.title}</Link>
                        })}
                    </div> 
                    : <></>}
            </div>

        </div>
    )

}
export default SidebarItem;