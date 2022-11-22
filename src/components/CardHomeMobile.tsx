import { Button } from "./Button";

function CardHomeMobile(){
    return(
        <>
        <div className="bg-white-ice h-[9.75rem] w-full max-w-xs pt-2 px-2 rounded-lg -mt-16 shadow-card box-border">
            <h4 className="text-base font-bold">Resumo</h4>
            <div className="flex flex-col">
                <div className="flex justify-between w-full">
                    <p className="flex text-xs gap-1 my-2 w-40">                
                        <h5 className="font-bold">Chamado atual:</h5>
                        141526
                    </p>

                    <p className="flex flex-wrap font-bold text-xs gap-1 text-[#FFC107] my-2 w-26">
                        <h5 className="text-black">Status:</h5>
                        Pendente
                    </p>

                    
                </div>

                <div className="flex justify-between w-full">                
                    
                    <p className="flex font text-xs gap-1 w-40">                
                        <h5 className="font-bold">Chamado anterior:</h5>
                        131524
                    </p>

                    <p className="flex font-bold text-xs gap-1 text-[#DC3545] w-26">
                        <h5 className="text-black">Status:</h5>
                        Finalizado
                    </p>
                </div>
            </div>
            <div className="flex justify-between mt-5">
             <Button title={"Botão principal"} theme={"tertiaryMobile"} />
             <Button title={"Botão principal"} theme={"primaryMobile"}/>
            </div>
        </div>
        </>
    )
}

export default CardHomeMobile;

// Perguntas: tamanho, fonte usada, usar margin negativa