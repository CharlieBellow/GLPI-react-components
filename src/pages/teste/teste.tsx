import { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Checkbox,
    chakra,
    useBreakpointValue,
  } from '@chakra-ui/react'

  import * as Icon from "phosphor-react"



import Search from '../../components/Inputs/Search'
import {Button} from '../../components/Buttons/Button'
import Pagination from "../../components/Table/Pagination";
import { getAllUsers } from "../../Utils/server/getInfo";
import { CardLabelInputCheckbox } from "../../components/Inputs/CardLabelInputCheckbox";

import {validationSchema} from "../../Utils/validations";

const validateWhitOutPatrimony = yup.object().shape({
	id: validationSchema.
});


// inserir a base do formik para colocar o checkbox na tabela

export type DataTableProps<Data extends object> = {
    data: Data[];
    columns: ColumnDef<Data, any>[];
    currentPage: number
};

// TODO estilizar a tabela como no figma

// colocar o filtro da tela de serviços aqui

// adicionar botão togle para o filtro

const headerTitle = ["nome", "data", "açoes"]

export function Teste<Data extends object>() {

    const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});
   

  const [lista, setLista] = useState([]);
  

	
  useEffect( () => {
      
      const fetchData = async () => {
          const token = localStorage.getItem("token")
          
    const response = await getAllUsers(token)

          setLista(response)
}
fetchData()
    
  }, [ lista ]);

console.log("lista", lista);

    return(
        <div className="flex flex-col items-center font-thin ">
            <div className=" lg:py-10 lg:px-[6rem] w-full">
                <div className="lg:bg-slate-100 rounded-lg h-[45.06rem] lg:shadow-lg">
                    <div className="flex flex-row lg:flex-row gap-4 justify-center lg:items-center lg:justify-between">
                        <div className="py-6 px-8 hidden lg:block">
                            <h3>Lista de Usuários</h3>
                        </div>
                        <div className="flex flex-row items-center gap-8">
                            <h3 className="hidden lg:block">Busca</h3>
                            <div className=" py-8 lg:py-0">
                                <Search placeholder="pesquisar dado desejado"/>
                            </div>
                            <div className="hidden lg:block">
                                <Button theme="primary"/>
                            </div>
                        </div>
                    </div>

                    <Formik
                    validateOnMount={true}
                    initialValues={{
                        id: "",
                    }}
                    validationSchema={validate}
                    onSubmit={(values, actions) => {
                        console.log("submetendo formulário")
                        setTimeout(() => {
                            console.log("submit:", values);

                            if (token !== null) {
                                axios({
                                    method: 'post',
                                    baseURL: "http://172.27.12.171:3333",
                                    url: `/servicebook/serviceorder/`,
                                    data: values,
                                    headers: { authorization: `Bearer ${token}` }
                                })
                        
            

                                successMessage("Serviço criado com sucesso!");

                                actions.resetForm();
                            } else {
                                errorMessage("Algo deu errado. Tente novamente.")
                            }

                        }, 400);
                    }}
                    >
                    <Table variant={"unstyled"}>
                        <Thead>
                                <Tr  className="flex flex-row ">
                                <div className="flex w-full justify-between">
                                    {isWideVersion && headerTitle.map((headerGroup: any) => (
                                    
                                        <Th
                                            key={headerGroup}
                                        
                                        >
                                            {headerGroup}
                                            {/* <CardLabelInputCheckbox name={""} value={""} /> */}
                                        </Th>
                                        
                                    
                                    ))
                                }
                                </div>
                                </Tr>
                        </Thead>    
                        <Tbody>
                            {isWideVersion && lista.map((row: any) => (
                                <div className="flex flex-row w-full justify-between items-center">
                                <Tr key={row.id}>
                                
                                  
                                        <Td key={row.id} className="flex flex-col w-100">
                                            <div><CardLabelInputCheckbox name={lista.id} value={lista.id}/></div>
                                        <div>{row.name}</div>
                                        <div>{row.email}</div>
                                    </Td>
                                    
                                </Tr>
                                
                               
                                <Tr key={row.id} className="w-auto  flex justify-center">
                                
                                  
                                    <Td key={row.id} >
                                        {row.created_at}
                                    </Td>
                                    
                                </Tr>
                                <Tr key={row.id}>
                                
                                  
                                        <Td key={row.id} >
                                            <div className="flex gap-3">

                                        <Button title="editar" icon={<Icon.Plus size={20}/>} theme="primary"/>
                                        <Button title="editar" icon={<Icon.Plus size={20}/>} theme="primary"/>
                                            </div>
                                    </Td>
                                    
                                </Tr>
                                </div>
                           ) )}
                        
                            {/* {!isWideVersion && 
                                    <MobileTableElement name="user" email="email" date="date"/>

                            } */}
                        </Tbody>
                    </Table>
                    <div className="hidden lg:block">
                        {/* <Pagination table={table} currentPage={currentPage}/> */}
                        </div>
                        </Formik>
                </div>
            </div>
        </div>
    )
}
