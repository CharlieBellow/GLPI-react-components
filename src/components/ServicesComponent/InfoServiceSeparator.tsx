import * as Icon from 'phosphor-react'
import { ReactNode, useState } from 'react';
import {CardLine} from "../../components/Cards/CardLine"

interface InfoServiceSeparatorProps{
    icon: Icon.IconProps;
    title: string;
    content: string | ReactNode;
    expandable: boolean
}

function InfoServiceSeparator(props: InfoServiceSeparatorProps){
    const [open, setOpen] = useState<boolean>(false);

    function openInfo(){
        setOpen(!open)
    }
    return(
        <div className="mx-4 mt-10 flex flex-col text-black-text">
            <div className='flex flex-row items-center justify-between gap-4'>
                <div className="mb-2 flex flex-col gap-2">
                        <div className="flex gap-2">
                            <>{props.icon}</>
                            <h3 className="text-base font-bold lg:text-3xl">{props.title}</h3>
                        </div>
                </div>
                {props.expandable && <div className={`rounded-full p-2 hover:bg-gray-medium ${open ? "rotate-180" : ""} ease=in-out cursor-pointer duration-200`} onClick={openInfo}>
                    {open ?  (<Icon.CaretUp size={26} weight="bold"/>) : (<Icon.CaretDown size={26} weight="bold"/>)}
                    
                </div>}
            </div>
			<CardLine/>
            {props.expandable ? open && <div className='mt-4 pl-4 font-medium lg:text-xl'>
                <p className='flex flex-row'>{props.content}</p>
            </div> : 
            <p>{props.content}</p>}
        </div>
    );
}
export default InfoServiceSeparator;