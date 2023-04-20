import * as Icon from 'phosphor-react'
import { ReactNode, useState } from 'react';

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
                    <Icon.CaretUp size={26} weight="bold"/>
                </div>}
            </div>
			<div className="border-b-2 border-gray-text bg-gradient-to-r from-transparent from-50% via-gray-text via-50% to-transparent to-50% opacity-40 mt-4"></div>
            {props.expandable ? open && <div className='font-medium lg:text-xl pl-4 mt-4'>
                <p className='flex flex-row'>{props.content}</p>
            </div> : 
            <p>{props.content}</p>}
        </div>
    );
}
export default InfoServiceSeparator;