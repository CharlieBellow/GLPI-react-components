import { Button, Icon, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsChevronDown, BsTrash } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";

interface ActionMenuProps {
  id: string;
  editPath: string;
  handleCurrentRegister: (id: string) => void;
  isWideVersion: boolean;
}

export function ActionMenu({ id, isWideVersion, editPath, handleCurrentRegister }: ActionMenuProps) {
  return (
    <Menu colorScheme={'blue'} className="text-white-100" >
      <MenuButton as={Button} colorScheme='' className="bg-blue-ufal" size="sm" fontSize="sm" rightIcon={<Icon as={BsChevronDown} />}>
        Opções
      </MenuButton>
      <MenuList bgColor={"#0095DA"}>
        <MenuGroup title='Opções' bgColor={"#0095DA"} className="text-white">
          <MenuItem
            as={NextLink}
            bgColor={"#0095DA"}
            _hover={{ bgColor: "#33AAE1" }}
            href={editPath}
            icon={<Icon as={RiPencilLine}  />}>{isWideVersion ? 'Editar' : ''}
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
    </Menu>
  );
}