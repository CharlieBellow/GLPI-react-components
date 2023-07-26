import * as Icon from "@/components/icons";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    DotFilledIcon
} from '@radix-ui/react-icons';
import React from 'react';

const ButtonDropdownMenu = () => {
 
  const [filter, setFilter] = React.useState('todos');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-blue-ufal p-3 text-white-100 shadow-[0_2px_10px] shadow-black-text outline-none hover:bg-blue-ufal-hover focus:shadow-[0_0_0_2px] focus:shadow-black-text"
          aria-label="Filter"
        >
          <Icon.Funnel size={20} />
        </button>

        {/* <Button theme={'dropdowMenu'} icon={<Icon.Funnel size={20} />} /> */}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className=" z-50 rounded-md bg-gray-dark p-3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <DropdownMenu.RadioGroup value={filter} onValueChange={setFilter} className="">
            <DropdownMenu.RadioItem
              className="hover:cursor-pinter data-[highlighted]:text-text-blue-ufal flex h-[25px] select-none items-center justify-between rounded-[3px] rounded-sm p-2  text-[13px] leading-none text-black-text outline-none hover:bg-gray-medium data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-medium data-[disabled]:text-gray-text"
              value="todos"
            >
              Todos
              <DropdownMenu.ItemIndicator className="items-center justify-end pl-4">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 flex h-[25px] select-none items-center justify-between rounded-[3px] rounded-sm p-2  px-[5px] pl-[25px] text-[13px] leading-none text-black-text outline-none hover:bg-gray-medium data-[disabled]:pointer-events-none"
              value="myServices"
            >
              Atribuídos a mim
              <DropdownMenu.ItemIndicator className="  items-center justify-end pl-4">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className=" data-[highlighted]:text-tex-blue-ufal flex h-[25px] select-none items-center justify-between rounded-[3px] rounded-sm p-2 text-[13px]  leading-none text-black-text outline-none hover:bg-gray-medium data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-medium data-[disabled]:text-gray-text"
              value="status"
            >
              Status
              <DropdownMenu.ItemIndicator className="items-center justify-end pl-4">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ButtonDropdownMenu;