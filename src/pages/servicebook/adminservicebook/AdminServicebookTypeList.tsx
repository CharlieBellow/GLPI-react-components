import React, { useState } from 'react';
import * as yup from "yup";
import { Button } from '../../../components/Buttons/Button';
import * as Icon from "phosphor-react";
import { deleteGroup } from '../../../Utils/server/delInfo';

import Modal from '../../../components/Modal';
import { CardLabelInput } from '../../../components/Inputs/CardLabelInput';
import { validationSchema } from '../../../Utils/validations';
import { Form, Formik } from 'formik';
import {useMessage} from "../../../Contexts/MessageContext"

interface AdminProps {
  list: any[];
  title: string;
}

const validate = yup.object().shape({
	description: validationSchema.titleGroup,
});

export default function AdminServiceBookTypeList(props: AdminProps) {
  
  const { successMessage } = useMessage()
  
  const token = localStorage.getItem("token")
  
  const [edit, setEdit] = useState(false)

  function updateInput(id) {
    setEdit(false)

    // chamar a função que altera a categoria
  }
  
  return (
    <>
      <div className="bg-white-100 rounded-xl m-4">
        <h1 className="p-4 font-medium text-lg">Categorias</h1>
        <div className="p-6">

      {
        
        props.list.map(item => {
          return (
            
              <div className='py-2' key={item.id}>
              <div  className='flex justify-between py-3 items-center'>
                  <div className='w-1/2 flex'>
                    
                  <Formik
				initialValues={{ description: item.description }}
				validationSchema={validate}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						console.log( "submit:", values );
            // colocar a função que altera o título da categoria
			  successMessage("Login realizado com sucesso!");

	
						
						actions.resetForm();
					}, 400);
				}}
			>
				{({ isSubmitting, isValid }) => (
					<Form>
						<div className="mb-6 px-10">
							<CardLabelInput
								label="Título"
								name="description"
								width="w-full"
                type="text"
                onClick={() => setEdit(true)}
							/>
						</div>
						
                  <div className='flex gap-4' key={item.id}>
                            <Button
                              theme={'primary'}
                              title="Alterar"
                              icon={<Icon.ArrowsClockwise size={24} />} type="submit"
                              disabled={!edit}
                              onClick={() => updateInput(item.id)}
                            />
                    
                    <Button theme={'secondary'} title="Excluir" icon={<Icon.Trash size={24} />} onClick={() => { deleteGroup(item.id, token as string) }} />
                </div>
					</Form>
				)}
			</Formik>
                </div>
              </div>

              </div>
          
          )
        })

      }
        </div>

      </div>
    </>
  )
}
