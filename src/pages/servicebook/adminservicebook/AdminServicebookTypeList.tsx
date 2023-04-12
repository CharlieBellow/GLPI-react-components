import React, { useState } from 'react';
import * as yup from "yup";
import { Button } from '../../../components/Buttons/Button';
import * as Icon from "phosphor-react";
import { deleteGroup } from '../../../Utils/server/delInfo';

import { CardLabelInput } from '../../../components/Inputs/CardLabelInput';
import { validationSchema } from '../../../Utils/validations';
import { Form, Formik } from 'formik';
import {useMessage} from "../../../Contexts/MessageContext"
import GroupCard from '../../../components/Cards/CardAdmin/GroupCard';

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

  function updateInput(id: string) {
    setEdit(false)

    // TODO chamar a função que altera a categoria
  }
  
  return (
    <>
      <div className="bg-white-ice rounded-xl m-8 p-12">
        <div className='flex flex-row pb-8 justify-between'>
            <h1 className="p-4 text-black-text font-bold text-md">Administrar Servicebook</h1>
            <Button title="Novo Grupo" theme='withIcon' icon={<Icon.Plus size={24}/>}/>
        </div>
        <div className='px-4'>
          <GroupCard/>

        </div>
      {/*
        
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
            // TODO colocar a função que altera o título da categoria
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

      */}
        </div>

    </>
  )
}
