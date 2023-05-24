import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Icon from "phosphor-react"
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import { Button } from './Button';

const ButtonDropdownMenu = () => {
 
  const [filter, setFilter] = React.useState('todos');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-white-100 bg-blue-ufal shadow-[0_2px_10px] shadow-black-text outline-none hover:bg-blue-ufal-hover focus:shadow-[0_0_0_2px] focus:shadow-black-text p-3"
          aria-label="Filter"
        >
          <Icon.Funnel size={20} />
        </button>

        {/* <Button theme={'dropdowMenu'} icon={<Icon.Funnel size={20} />} /> */}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className=" bg-gray-dark rounded-md p-3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.RadioGroup value={filter} onValueChange={setFilter} className="">
            <DropdownMenu.RadioItem
              className="text-[13px] leading-none text-black-text p-2 rounded-sm hover:bg-gray-medium rounded-[3px] flex items-center h-[25px]  select-none outline-none data-[disabled]:text-gray-text data-[disabled]:pointer-events-none hover:cursor-pinter data-[highlighted]:bg-gray-medium data-[highlighted]:text-text-blue-ufal justify-between"
              value="todos"
            >
              Todos
              <DropdownMenu.ItemIndicator className="items-center justify-end pl-4">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="text-[13px] leading-none text-black-text items-center p-2 rounded-sm hover:bg-gray-medium rounded-[3px] flex h-[25px] px-[5px]  pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 justify-between"
              value="myServices"
            >
              Atribuídos a mim
              <DropdownMenu.ItemIndicator className="  items-center justify-end pl-4">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className=" text-[13px] leading-none text-black-text p-2 rounded-sm hover:bg-gray-medium rounded-[3px] flex items-center h-[25px]  select-none outline-none data-[disabled]:text-gray-text data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-medium data-[highlighted]:text-tex-blue-ufal justify-between"
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