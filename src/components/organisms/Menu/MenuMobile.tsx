import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,  DrawerHeader, DrawerOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { List } from "phosphor-react";
import React from "react";


import logoUfal from "../../../assets/brasao-ufal.png";
import AccordionMenu from "../../Accordions/AccordionMenu";
import { AccordionMenuHelp } from "../../Accordions/AccordionMenuHelp";

// esse mesmo componente será usado para fazer as opções de usuário das telas desktop  

export function MenuMobile() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	//const firstField = React.useRef();

	return (
		<>
			<Button
				leftIcon={<List size={24} />}
				colorScheme=""
				onClick={onOpen}
				className="m-4"
			></Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				//initialFocusRef={firstField}
			>
				<DrawerOverlay />
				<DrawerContent
					background={"#4FB4E4"}
					color={"#ffffff"}
					className="font-bold text-white-100"
				>
					<DrawerCloseButton />
					<DrawerHeader>
						<img
							src={logoUfal}
							alt="logo da ufal"
							className={"w-14 h-24 mt-7 mx-auto mb-3"}
						/>
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing="24px">
							<Box >
								<h4 className="text-white-100 font-bold text-sm text-invisible ">
									Geral
								</h4>
								<AccordionMenu />
							</Box>

							<Box>
								<h4 className="text-white-100 font-bold text-sm text-invisible">
									Ajuda
								</h4>
								<AccordionMenuHelp />
							</Box>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
