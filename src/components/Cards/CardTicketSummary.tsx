import * as Icon from "@/components/icons";
import TicketsHome from "../TicketsHome";
const TicketSummary = () => {
  return (
		<>
			<div className="box-border h-auto w-full rounded-lg bg-white-ice px-6 pt-4 shadow-card">
				<h4 className="mb-4 text-2xl font-bold">Resumo de Tickets</h4>
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