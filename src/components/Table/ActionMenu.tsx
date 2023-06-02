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
    <Menu colorScheme={'purple'} >
      <MenuButton as={Button} colorScheme='purple' size="sm" fontSize="sm" rightIcon={<Icon as={BsChevronDown} />}>
        Opções
      </MenuButton>
      <MenuList bgColor={"purple.500"} >
        <MenuGroup title='Opções' bgColor={"purple.500"} >
          <MenuItem
            as={NextLink}
            bgColor={"purple.500"}
            _hover={{ bgColor: "purple.600" }}
            href={editPath}
            icon={<Icon as={RiPencilLine} />}>{isWideVersion ? 'Editar' : ''}
          </MenuItem>
          <MenuItem
            onClick={() => handleCurrentRegister(id)}
            bgColor={"purple.500"}
            _hover={{ bgColor: "purple.600" }}
            icon={<Icon as={BsTrash} />}>
            {isWideVersion ? 'Excluir' : ''}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}