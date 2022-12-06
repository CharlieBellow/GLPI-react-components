import { Button } from "./Button";

function CardHomeMobile(){
    return(
        <>
        <div className="bg-white-ice h-[9.75rem] w-[19.5rem] pt-2 px-2 rounded-lg -mt-16 shadow-card box-border ds:w-[37.5rem] ds:h-[18.75rem] ds:mt-0 ds:px-6">
            <h4 className="text-base font-bold ds:text-4xl">Resumo</h4>
            <div className="flex flex-col ds:mt-4">
                <div className="flex justify-between w-full items-center">
                    <p className="flex text-xs gap-1 my-2 w-40 ds:w-80 ds:text-2xl">                
                        <h5 className="font-bold">Chamado atual:</h5>
                        141526
                    </p>

                    <p className="flex flex-wrap font-bold text-xs gap-1 text-[#FFC107] my-2 w-26 ds:w-52 ds:text-2xl">
                        <h5 className="text-black">Status:</h5>
                        Pendente
                    </p>

                    
                </div>

                <div className="flex justify-between w-full items-center ds:mt-5">                
                    
                    <p className="flex font text-xs gap-1 w-40 ds:w-80 ds:text-2xl">                
                        <h5 className="font-bold">Chamado anterior:</h5>
                        131524
                    </p>

                    <p className="flex font-bold text-xs gap-1 text-[#DC3545] w-26 ds:w-52 ds:text-2xl">
                        <h5 className="text-black">Status:</h5>
                        Finalizado
                    </p>
                </div>
            </div>
            <div className="flex justify-between mt-5 ds:hidden">            
                <Button title={"Botão principal"} theme={"tertiaryMobile"} />
                <Button title={"Botão principal"} theme={"primaryMobile"}/>
            </div>

            <div className="justify-between hidden ds:flex mt-10">            
             <Button title={"Meus Chamados"} theme={"tertiary"} />
             <Button title={"Abrir Chamados"} theme={"primary"}/>
            </div>
        </div>
        </>
    )
}

export default CardHomeMobile;

// tirar o título