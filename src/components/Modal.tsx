"use client";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Camera, X } from "@/components/icons";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui/Button";

import { useMessage } from "@/hooks/useMessage";

import { validationSchema } from "../Utils/validations";


const formSchema = yup.object().shape({
  avatar: validationSchema.avatar,
});

type FormValues = yup.InferType<typeof formSchema>;

type ModalProps = {
  avatar: string;
};

export default function Modal({ avatar }: ModalProps) {
  const { successMessage } = useMessage();
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      avatar: avatar,
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    successMessage("Imagem alterada com sucesso!")
  };

  return (
    <Dialog.Root open={isActive} onOpenChange={setIsActive}>
      <Dialog.Trigger className=" relative -left-6 top-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-ufal text-white-100 hover:cursor-pointer ">
        <Camera size={22} />
      </Dialog.Trigger>
      <Dialog.Portal className="h-45 w-45 flex bg-gray-500">
        <Dialog.Overlay className=" fixed inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm data-[state=open]:animate-overlayShow " />
        <Dialog.Content className=" bg-white fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow ">
          <Dialog.Title className="m-0 text-base font-bold text-bg">
            Alterar imagem
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-3 text-base leading-normal text-bg">
            Escolha uma nova imagem para o seu perfil.
          </Dialog.Description>

          <form
            action=""
            className="mx-14 flex flex-col gap-9"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <Input
                {...register("avatar")}
                label="Imagem"
                type="file"
                errorMessage={errors.avatar?.message}
              />

              <div className="flex w-full justify-end">
                <Button theme="primary" type="submit" disabled={isSubmitting}>
                  Alterar
                </Button>
              </div>
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              className="focus:shadow-text-black-500 absolute right-[10px]    top-[10px] inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-bg hover:bg-blue-ufal focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
