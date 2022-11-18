import { Button } from "./Button";

function CardHomeMobile(){
    return(
        <>
        <div className="bg-white-ice h-[9.75rem] w-[19.5rem] pt-2 px-2 rounded-lg -mt-16  shadow-card">
            <h4 className="text-base font-bold">Resumo</h4>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p className="flex font text-xs gap-1 my-2">                
                        <h5 className="font-bold">Chamado atual:</h5>
                        141526
                    </p>

                    <p className="flex font text-xs gap-1">                
                        <h5 className="font-bold">Chamado anterior:</h5>
                        131524
                    </p>

                    
                </div>

                <div className="flex flex-col">                
                    <p className="flex font-bold text-xs gap-1 text-[#FFC107] my-2">
                        <h5 className="text-black">Status:</h5>
                        Pendente
                    </p>

                    <p className="flex font-bold text-xs gap-1 text-[#DC3545]">
                        <h5 className="text-black">Status:</h5>
                        Finalizado
                    </p>
                </div>
            </div>
            <div className="flex justify-between mt-5">
             <Button title={"Botão principal"} style={"bg-gray-medium text-xs text-gray-text px-6 py-2"} />
             <Button title={"Botão principal"} style={"bg-blue-final-gradient text-xs text-white-ice px-6 py-2"} />
            </div>
        </div>
        </>
    )
}

export default CardHomeMobile;

// Perguntas: tamanho, fonte usada, usar margin negativa