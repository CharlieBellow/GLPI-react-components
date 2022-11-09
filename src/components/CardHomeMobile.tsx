function CardHomeMobile(){
    return(
        <>
        <div className="bg-white-ice h-[9.75rem] w-[19.5rem] pt-2 pr-2 pb-3 pl-4 rounded-lg">
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
        </div>
        </>
    )
}

export default CardHomeMobile;