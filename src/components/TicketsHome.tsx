

interface TicketsHomeProps{
    icon: any;
    situacao: string; 
    numeros: number;
    data: string;
}
// * tickets que aparecem na dashboard

function TicketsHome(props :TicketsHomeProps){
    return(
        <div className="mb-2 grid grid-cols-2 ">
            <div className="flex gap-2">
                {props.icon}
                <p className="w-auto text-base font-semibold">{props.situacao}</p>
            </div>   
            <div className="flex items-center justify-between ">
                <p className="flex w-auto justify-center text-base font-medium text-blue-ufal ">{props.numeros}</p>
                <p className="w-auto text-sm">{props.data}</p>

            </div>
        </div>
    )
}

export default TicketsHome;