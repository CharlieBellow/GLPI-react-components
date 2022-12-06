

interface ChamadosHomeProps{
    url: string;
    nome: string;
    area: string; 
    data: string;
}

function ChamadosHome(props :ChamadosHomeProps){
    return(
        <div className="flex mb-2">
            <img
                src={props.url}                
                alt="favicon"
                className="w-6 h-6 rounded-full mr-2"
            />
            <p className="w-36 font-semibold text-base mr-[5.625rem]">{props.nome}</p>
            <p className="w-[6.875rem] flex font-medium text-base text-blue-ufal justify-center mr-[2.625rem]">{props.area}</p>
            <p className="w-10 text-sm">{props.data}</p>
        </div>
    )
}

export default ChamadosHome;