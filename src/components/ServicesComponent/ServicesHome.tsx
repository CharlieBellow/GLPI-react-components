import Image from "next/image";

// ? pode apagar?
interface ServicesHomeProps{
    url: string;
    nome: string;
    area: string; 
    data: string;
}

function ServicesHome(props :ServicesHomeProps){
    return(
        <div className="flex py-1">
            <Image
                src={props.url}                
                alt="favicon"
          className="mr-2 h-6 w-6 rounded-full"
          width={ 96 }
          height={96}
            />
            <p className="w-full text-base font-semibold ">{props.nome}</p>
            <p className="flex w-full justify-center text-base font-medium text-blue-ufal">{props.area}</p>
            <p className=" text-sm">{props.data}</p>
        </div>
    )
}

export default ServicesHome;