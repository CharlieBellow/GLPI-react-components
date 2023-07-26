import * as Icon from '@/components/icons';
import Link from 'next/link';

function ServiceCard(){
    return(
        <div className="flex flex-row items-center justify-between px-12 py-2">
            <div className="text-lg font-bold text-blue-ufal decoration-2 hover:underline">
                <Link href={"#"}>
                    <h1>Serviço1</h1>
                </Link>
            </div>
            <div className="flex flex-row gap-4 pr-8">
                <div className='cursor-pointer rounded-full p-2 text-blue-ufal duration-300 ease-in-out hover:bg-blue-ufal hover:text-white-100'>
                    <Icon.PencilSimple size={24}/>
                </div>
                <div className='cursor-pointer rounded-full  p-2 text-red-ufal duration-300 ease-in-out hover:bg-red-ufal hover:text-white-100'>
                    <Icon.Trash size={24}/>
                </div>
            </div>
        </div>
    );
}
export default ServiceCard;