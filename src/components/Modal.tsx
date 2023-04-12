import React, { useState } from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import * as Icon from 'phosphor-react';
import { Form, Formik } from 'formik';
import { Button } from './Buttons/Button';

import { validationSchema } from "../Utils/validations";
import { useMessage } from "../Contexts/MessageContext";
import * as yup from "yup";
import { CardLabelInputFile } from './Inputs/CardLabelInputFile';
import { patchAvatar2 } from '../Utils/server/putInfo';


const validate = yup.object().shape({
	avatar: validationSchema.avatar,

});

export default function Modal() {

  const { errorMessage, successMessage } = useMessage()
  const [isActive, setIsActive] = useState(false)


  const token = localStorage.getItem("token");

  return (

      <Dialog.Root open={isActive} onOpenChange={setIsActive}>
      <Dialog.Trigger className=" bg-blue-ufal rounded-full w-8 h-8 flex justify-center hover:cursor-pointer items-center text-white-100 relative top-10 -left-6 "><Icon.Camera size={ 22}/></Dialog.Trigger>
      <Dialog.Portal className="bg-gray-500 h-45 w-45 flex">
          <Dialog.Overlay  className=" backdrop-blur-sm bg-[rgba(0,0,0,0.2)] data-[state=open]:animate-overlayShow fixed inset-0 "></Dialog.Overlay>
          <Dialog.Content className=" bg-white-100 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ">
          <Dialog.Title className="text-bg m-0 text-base font-bold">
          Alterar imagem
        </Dialog.Title>
        <Dialog.Description className="text-bg mt-3 mb-5 text-base leading-normal">
          Escolha uma nova imagem para o seu perfil.
          </Dialog.Description>
          <Formik
					initialValues={{
						avatar: "",
						
					}}
					validationSchema={validate}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							

              console.log(values)

              // const formData = new FormData();
              // formData.append(values, blob);
              // const res = await axios.post("http://172.27.12.171:3333/users/avatar", formData, {'Content-Type': 'multipart/form-data'})

              
          
              patchAvatar2(values.avatar, token as string)
              console.log("foi")
							successMessage("Imagem alterada com sucesso!");

							actions.resetForm();
						
						}, 600);
					}}
				>
					{({ isSubmitting, isValid }) => (
						<Form action="" className="flex flex-col gap-9 mx-14">
                <div className='gap-4 flex flex-col'>
                  
								{/* <CardLabelInput
									label="Imagem"
									type="text"
									name="avatar"
									inputid="avatar"
									width="lg:w-80 w-full"
                  
                /> */}
                <CardLabelInputFile
                label="Adicionar Foto"
                name="avatar"
                type="file"
                width="w-full"
                inputid="title"
                icon={<Icon.UploadSimple className="absolute flex mr-4" weight="bold" />}
                />
			
                  <div className='flex justify-end w-full'>
								<Button
									title={"Alterar"}
									theme="primaryAction"
									type="submit"
									disabled={isSubmitting || !isValid}
                  />
                  </div>
						
                  </div>
						</Form>
					)}
				</Formik>
          
        <Dialog.Close asChild>
          <button
            className="text-bg hover:bg-blue-ufal focus:shadow-text-black-500    absolute top-[10px] right-[10px] inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
             
          >
            <Icon.X />
          </button>
        </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}
