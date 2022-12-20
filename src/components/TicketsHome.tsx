

interface TicketsHomeProps{
    icon: any;
    situacao: string; 
    numeros: number;
    data: string;
}

function TicketsHome(props :TicketsHomeProps){
    return(
        <div className="mb-2 grid grid-cols-2 ">
            <div className="flex gap-2">
                {props.icon}
                <p className="w-auto font-semibold text-base">{props.situacao}</p>
            </div>   
            <div className="flex justify-between items-center ">
                <p className="w-auto flex font-medium text-base text-blue-ufal justify-center ">{props.numeros}</p>
                <p className="w-auto text-sm">{props.data}</p>

            </div>
        </div>
    )
}

export default TicketsHome;