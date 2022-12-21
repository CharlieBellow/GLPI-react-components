

import { Button } from "../Buttons/Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import * as Icon from "phosphor-react";



export function CardTest() {
	

	return (
		<div className="bg-gray-900 w-full absolute h-screen">
			<div className="mx-4">
				<div
					className="mt-18 mx-auto mb-80 flex flex-col lg:block
          bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
          h-auto shadow-card"
				>
					<div className="pl-9 pt-8">
						<CardTitle title="Testes" />
					</div>
					<div className="mx-9 mt-4 mb-10">
						<CardLine />
					</div>
					
					<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
						<Button theme="withIcon" icon={<Icon.PhoneOutgoing size={24} />} />
						<Button
							title="Abrir chamado"
							theme="withIcon"
							icon={<Icon.PhoneOutgoing size={24} />}
						/>
						<Button theme="withIcon" icon={<Icon.PhoneOutgoing size={24} />} />
					</div>
				</div>
			</div>
		</div>
	);
}
