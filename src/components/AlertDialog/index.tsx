import { useRef } from "react";

import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  AlertDialog as ChakraAlertDialog,
} from "@chakra-ui/react";

interface AlertDialogProps {
  title: string;
  isOpen: boolean;
  deleteRegister: () => void;
  onClose: () => void;
}

export function AlertDialog({
  title,
  isOpen,
  onClose,
  deleteRegister,
}: AlertDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <ChakraAlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent className="bg-gray-medium" bg="">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {`Excluir ${title} `}
            </AlertDialogHeader>

            <AlertDialogBody>
              Você tem certeza? Esta ação não pode ser desfeita.
            </AlertDialogBody>

            <AlertDialogFooter gap={2}>
              <Button
                colorScheme="red"
                onClick={async () => {
                  deleteRegister();
                  onClose();
                }}
                ml={3}
              >
                Excluir
              </Button>
              <Button
                colorScheme=""
                className="bg-gray-text"
                ref={cancelRef}
                onClick={onClose}
              >
                Cancelar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </ChakraAlertDialog>
    </>
  );
}
