import TicketsHome from "../TicketsHome";
import * as Icon from "phosphor-react"
const TicketSummary = () => {
  return (
		<>
			<div className="bg-white-ice w-auto h-auto pt-4 px-6 rounded-lg shadow-card box-border">
				<h4 className="text-2xl mb-4 font-bold">Resumo de Tickets</h4>
				<div>
					<TicketsHome
						icon={<Icon.Medal size={18} />}
						situacao={"Meus"}
						numeros={407}
						data={"15/08"}
					/>
					<TicketsHome
						icon={<Icon.XCircle size={18} />}
						situacao={"Não atendidos"}
						numeros={36}
						data={"15/08"}
					/>
					<TicketsHome
						icon={<Icon.PauseCircle size={18} />}
						situacao={"Pausados"}
						numeros={1}
						data={"15/08"}
					/>
					<TicketsHome
						icon={<Icon.Watch size={18} />}
						situacao={"Vencidos"}
						numeros={13}
						data={"15/08"}
					/>
				</div>
			</div>
		</>
	);
}
 
export default TicketSummary;