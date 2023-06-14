import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import DataTable from "../../../components/Table/DataTable";
// import { columns, data } from "../../../Utils/tableDataExample";
import { Layout } from "../../../components/Layout";
// * Lista de usuários na tabela '/users/[número da pagina]'

import {getAllUsers} from "../../../Utils/server/getInfo"


import { Table } from "../../../components/Table";
import { ColumnDefinitionType } from "../../../components/Table/types";
import { usePagination } from "../../../hooks/usePagination";
import { PaginationResponse } from "../../../components/Table/types/paginationresponse";
// import { useSession } from "next-auth/react";
import { User } from "../../../Utils/types";
import { deleteEntity, getPaginationData } from "../../../components/Table/partnercategory";
import { TableContextProvider } from "../../../Contexts/TableContext";
import { SimpleTable } from "../../../components/Table/SimpleTable";

const columns: ColumnDefinitionType<User, keyof User>[] = [
    {
        key: 'name',
        header: 'Nome',
        width: 150
    },
    {
        key: 'created_at',
        header: 'Data de Criação',
        width: 150
    },
]





function UserList(){

    
    const [users, setUsers] = useState();

    
    const teste = [
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Charlie Bellow",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Sui Olivieri Bellow nbkhkjhkjhkjhk jhkjhkjh",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Pedro Duarte",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Charlie Bellow",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Charlie Bellow",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Charlie Bellow",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Charlie Bellow",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Charlie Bellow",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
        {
            avatar: null,
            created_at: "2023-03-22T16:19:14.843Z",
            email: "email@email.com",
            id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
            isAdmin: false,
            name: "Charlie Bellow",
            password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
        },
       
    ]

   const [test, setTest] = useState(teste);
    
    /* colocar função que vai pegar todos os usuários */
    // const categories = list?.data;
    useEffect(() => {
        const token = localStorage.getItem('token') as string
        
        const fetchData = async () => {
            // const response = await getAllUsers(token)

            
            try {
                const response = await getAllUsers(token);
                setUsers(response)
            
                console.log("res", response)
                
                //const { docs } = response.data;
        
                console.log(users);
        
            } catch(err) {
                // TODO
                // adicionar tratamento da exceção
                console.error(err);
            }
        }
        fetchData()
        
    },[ ])


    



    const { list, setPage, page, setFilter, refetch } = usePagination<PaginationResponse<User>>({
        fetchData: getPaginationData,
        // token
    });

console.log(list)
    return (
        <Layout>
            <Head>
                <title>{"Usuários"}</title>
            </Head>
            <TableContextProvider
                title={"Lista de Usuários"}
                resource={"/users/"}
                columns={columns}
                data={test}
                deleteRegister={deleteEntity}
                setFilter={setFilter}
                refetch={refetch}
                page={page}
                setPage={setPage}
                totalCountOfRecord={list.totalCount}
            >
                <SimpleTable isDetail={false} />

            </TableContextProvider>

        </Layout>     
    );
}

export default UserList;