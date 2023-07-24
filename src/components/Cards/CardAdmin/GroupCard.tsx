import * as Icon from 'phosphor-react'
import {useState} from 'react';
import { CardLine } from '../CardLine';
import SubgroupCard from './SubgroupCard';
function GroupCard(){

    const [open, setOpen] = useState<boolean>(false);

    function deleteGroup(){
        console.log('deletando grupo')
    }
    function editGroup(){
        console.log('editando grupo')
    }
    function openCard(){
        setOpen(!open)
    }
    const list = [1, 2, 3]
    return(
        <div className={`${open? "bg-gray-medium" : "bg-white-100"} z-0 rounded-lg p-4 shadow-md duration-300 ease-in-out`}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4 pl-2 text-black-text">
                    <Icon.Book size={32}/>
                    <div className="flex flex-col">
                        <h1 className="cursor-text font-bold">Grupo 1</h1>
                        <h3 className="cursor-text text-sm font-light">3 subgrupos</h3>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className="z-10 cursor-pointer rounded-lg bg-blue-ufal p-2 text-white-100" onClick={editGroup}>
                        <Icon.Pencil size={24}/>
                    </div>
                    <div className="z-10 cursor-pointer rounded-lg bg-red-ufal p-2 text-white-100" onClick={deleteGroup}>
                        <Icon.Trash size={24}/>
                    </div>
                    <div className={`${open? "hover:bg-white-100"  : "hover:bg-gray-medium"} cursor-pointer rounded-full p-4`} onClick={openCard}>

                        {open ? <Icon.CaretUp size={24}/> : <Icon.CaretDown size={24}/>}

                    </div>
                </div>
            </div>
            {open ? <div className='pt-4'><CardLine/></div> : <></>}
            {open ? list.map(subgroup => {
                return <SubgroupCard key={ subgroup} />
            }) : <></>}
        </div>
    );
}
export default GroupCard;