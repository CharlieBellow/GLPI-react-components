import { DotsThreeVertical } from "@/components/icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropDownMenuProps {
  date: string;
}
export function DropDownMenu(props: DropDownMenuProps) {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="IconButton rounded-md p-1 text-gray-text shadow-lg outline-gray-text hover:text-blue-ufal"
            aria-label="Customise options"
          >
            <DotsThreeVertical size={20} weight="bold" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="h-full w-full rounded-lg bg-gray-medium p-2 text-center">
            <DropdownMenu.Label className="pb-1 text-sm text-gray-text">
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
