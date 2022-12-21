

interface ServicesHomeProps{
    url: string;
    nome: string;
    area: string; 
    data: string;
}

function ServicesHome(props :ServicesHomeProps){
    return(
        <div className="flex py-1">
            <img
                src={props.url}                
                alt="favicon"
                className="w-6 h-6 rounded-full mr-2"
            />
            <p className="w-full font-semibold text-base ">{props.nome}</p>
            <p className="w-full flex font-medium text-base text-blue-ufal justify-center">{props.area}</p>
            <p className=" text-sm">{props.data}</p>
        </div>
    )
}

export default ServicesHome;