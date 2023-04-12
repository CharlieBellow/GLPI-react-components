import Link from 'next/link';
import * as Icon from 'phosphor-react'

function ServiceCard(){
    return(
        <div className="flex flex-row justify-between px-12 py-2">
            <div className="text-blue-ufal font-bold text-lg hover:underline decoration-2">
                <Link href={"#"}>
                    <h1>Serviço1</h1>
                </Link>
            </div>
            <div className="flex flex-row gap-4 pr-8">
                <div className='text-blue-ufal cursor-pointer hover:bg-blue-ufal hover:text-white-100 rounded-full p-2 ease-in-out duration-300'>
                    <Icon.PencilSimple size={24}/>
                </div>
                <div className='text-red-ufal cursor-pointer  hover:bg-red-ufal hover:text-white-100 rounded-full p-2 ease-in-out duration-300'>
                    <Icon.Trash size={24}/>
                </div>
            </div>
        </div>
    );
}
export default ServiceCard;