

interface TicketsHomeProps{
    icon: any;
    situacao: string; 
    numeros: number;
    data: string;
}

function TicketsHome(props :TicketsHomeProps){
    return(
        <div className="flex mb-2">
            <div className="flex gap-2 mr-36">
                {props.icon}
                <p className="w-28 font-semibold text-base">{props.situacao}</p>
            </div>                
            <p className="w-8 flex font-medium text-base text-blue-ufal justify-center mr-[5.25rem]">{props.numeros}</p>
            <p className="w-10 text-sm">{props.data}</p>
        </div>
    )
}

export default TicketsHome;