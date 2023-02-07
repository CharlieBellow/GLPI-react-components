import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsThreeVertical} from "phosphor-react";



interface DropDownMenuProps {
	date: string;
}
export function DropDownMenu(props: DropDownMenuProps) {
	return (
		<>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild>
					<button className="IconButton hover:text-blue-ufal text-gray-text outline-gray-text shadow-lg rounded-md p-1" aria-label="Customise options">
						<DotsThreeVertical size={20} weight="bold" />
					</button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenu.Content className="bg-gray-medium text-center p-2 rounded-lg h-full w-full">
						<DropdownMenu.Label className="text-sm text-gray-text pb-1">
							Data de cadastro:
						</DropdownMenu.Label>
						<DropdownMenu.Item className="text-md text-light-bg">
							
							{props.date}
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</>
	);
}
