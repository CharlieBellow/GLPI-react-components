import { useState } from "react";

import * as yup from "yup";

import { Button } from "@/components/Buttons/Button";
import GroupCard from "@/components/Cards/CardAdmin/GroupCard";
import * as Icon from "@/components/icons";

import { validationSchema } from "@/Utils/validations";

import { useMessage } from "@/Contexts/MessageContext";

interface AdminProps {
  list: any[];
  title: string;
}

const validate = yup.object().shape({
  description: validationSchema.titleGroup,
});

export default function AdminServiceBookTypeList(props: AdminProps) {
  const { successMessage } = useMessage();

  const token = localStorage.getItem("token");

  const [edit, setEdit] = useState(false);

  function updateInput(id: string) {
    setEdit(false);

    // TODO chamar a função que altera a categoria
  }

  return (
    <>
      <div className="m-8 rounded-xl bg-white-ice p-12">
        <div className="flex flex-row justify-between pb-8">
          <h1 className="text-md p-4 font-bold text-black-text">
            Administrar Servicebook
          </h1>
          <Button title="Novo Grupo" theme="primary">
            <Icon.Plus size={24} />
            Novo Grupo
          </Button>
        </div>
        <div className="px-4">
          <GroupCard />
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
  );
}
