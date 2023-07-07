import { Button, Icon, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import { BsChevronDown, BsTrash } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { SquaresFour, User, Wrench, Gear, ListDashes } from "phosphor-react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger
} from "@radix-ui/react-accordion";

interface ActionMenuProps {
  id: string;
  editPath: string;
  handleCurrentRegister: (id: string) => void;
  isWideVersion: boolean;
}

export function ActionMenu({ id, isWideVersion, editPath, handleCurrentRegister }: ActionMenuProps) {
  return (
    <Menu colorScheme={'blue'} className="text-white-100" >
      <Accordion
      type="single"
			defaultValue=""
			collapsible
			// className="rounded-[6px] flex-col pb-[2.063rem]"
      >
      <MenuButton as={Button} colorScheme='' className="bg-blue-ufal" size="sm" fontSize="sm" rightIcon={<Icon as={BsChevronDown} />}>
        Opções
      </MenuButton>
        <MenuList bgColor={"#0095DA"}>
          <MenuGroup title='Opções' bgColor={"#0095DA"} className="text-white-100">
          <MenuItem
            as={NextLink}
            bgColor={"#0095DA"}
            _hover={{ bgColor: "#33AAE1" }}
            href={editPath}
              icon={<Icon as={RiPencilLine} />}>{isWideVersion ? 'Editar' : ''}
              
              
              <AccordionItem value="Editar">
              <AccordionTrigger className="w-full flex items-center justify-between mr-2">
					<div className="flex flex-row text-white-100 font-semibold text-sm items-center content-start w-full lg:my-4 my-2 mx-0  hover:text-blue-dark-final-gradient">
						<Link href="/privateroutes/dashboard" className="flex flex-row">
							<SquaresFour size={20} className="menu__icon mr-2" />
							<p className="text-invisible">Dashboard</p>
						</Link>
					</div>
                </AccordionTrigger>
                </AccordionItem>
              
          </MenuItem>
          <MenuItem
            onClick={() => handleCurrentRegister(id)}
            bgColor={"#0095DA"}
            _hover={{ bgColor: "#33AAE1" }}
            icon={<Icon as={BsTrash} />}>
            {isWideVersion ? 'Excluir' : ''}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Accordion>
    </Menu>
  );
}