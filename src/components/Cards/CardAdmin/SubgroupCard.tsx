import * as Icon from 'phosphor-react'
import {useState} from 'react';
import { CardLine } from '../CardLine';
import ServiceCard from './ServiceCard';

function SubgroupCard(){
    const [open, setOpen] = useState<boolean>(false);

    function deleteSubgroup(){
        console.log('deletando subgrupo')
    }
    function editSubgroup(){
        console.log('editando subgrupo')
    }
    function openCard(){
        setOpen(!open)
    }
    const list = [1, 2]
    return(
        <div className="bg-white-100 p-4 rounded-lg shadow-md ease-in-out duration-300 mt-4"> 
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row text-black-text items-center gap-4 pl-2">
                    <Icon.Airplane size={24}/>
                    <div className="flex flex-col">
                        <h1 className="font-bold cursor-text">Subgrupo 1</h1>
                        <h3 className="text-sm font-light cursor-text">2 Serviços</h3>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className="bg-blue-ufal p-2 rounded-lg text-white-100 z-10 cursor-pointer" onClick={editSubgroup}>
                        <Icon.Pencil size={24}/>
                    </div>
                    <div className="bg-red-ufal p-2 rounded-lg text-white-100 z-10 cursor-pointer" onClick={deleteSubgroup}>
                        <Icon.Trash size={24}/>
                    </div>
                    <div className={`${open? "hover:bg-white-100"  : "hover:bg-gray-medium"} rounded-full p-4 cursor-pointer`} onClick={openCard}>
                        {open ? <Icon.CaretUp size={24}/> : <Icon.CaretDown size={24}/>}
                    </div>
                </div>
            </div>
            {open ? <div className='pt-4'><CardLine/></div> : <></>}
            {open ? list.map(subgroup => {
                return <div>
                    <ServiceCard/>
                    <CardLine/>
                    </div>
            }) : <></>}
            
        </div>
    );
}
export default SubgroupCard;