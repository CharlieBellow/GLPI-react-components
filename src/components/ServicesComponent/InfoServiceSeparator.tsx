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
        <div className="mt-10 mx-4 text-black-text flex flex-col">
            <div className='flex gap-4 flex-row items-center justify-between'>
                <div className="flex gap-2 flex-col mb-2">
                        <div className="flex gap-2">
                            <>{props.icon}</>
                            <h3 className="lg:text-3xl text-base font-bold">{props.title}</h3>
                        </div>
                </div>
                {props.expandable && <div className={`hover:bg-gray-medium rounded-full p-2 ${open ? "rotate-180" : ""} ease=in-out duration-200 cursor-pointer`} onClick={openInfo}>
                    {open ?  (<Icon.CaretUp size={26} weight="bold"/>) : (<Icon.CaretDown size={26} weight="bold"/>)}
                    
                </div>}
            </div>
			<CardLine/>
            {props.expandable ? open && <div className='font-medium lg:text-xl pl-4 mt-4'>
                <p className='flex flex-row'>{props.content}</p>
            </div> : 
            <p>{props.content}</p>}
        </div>
    );
}
export default InfoServiceSeparator;