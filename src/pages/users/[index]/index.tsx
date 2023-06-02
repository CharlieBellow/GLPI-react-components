import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import DataTable from "../../../components/Table/DataTable";
// import { columns, data } from "../../../Utils/tableDataExample";
import { Layout } from "../../../components/Layout";
// * Lista de usuários na tabela '/users/[número da pagina]'


import { Table } from "../../../components/Table";
import { ColumnDefinitionType } from "../../../components/Table/types";
import { usePagination } from "../../../hooks/usePagination";
import { PaginationResponse } from "../../../components/Table/types/paginationresponse";
// import { useSession } from "next-auth/react";
import { PartnerCategory } from "../../../components/Table/core/partner-category.entity";
import { deleteEntity, getPaginationData } from "../../../components/Table/partnercategory";
import { TableContextProvider } from "../../../Contexts/TableContext";
import { SimpleTable } from "../../../components/Table/SimpleTable";

const columns: ColumnDefinitionType<PartnerCategory, keyof PartnerCategory>[] = [
    {
        key: 'description',
        header: 'Tipo de Documento',
        width: 150
    },
    {
        key: 'createdAt',
        header: 'Data de Criação',
        width: 150
    },
]

useEffect(() => {
    const token = localStorage.getItem('token') as string
})


function UserList(){
    const router = useRouter()
    const index = router.query

    // const { data: session } = useSession();
    // ? session?.tokens.accessToken
    // : "";
    
    
    const { list, setPage, page, setFilter, refetch } = usePagination<PaginationResponse<PartnerCategory>>({
        fetchData: getPaginationData,
        token
    });

    /* colocar função que vai pegar todos os usuários */
    // const categories = list?.data;


    return (
        <Layout>
            <Head>
                <title>{"Usuários"}</title>
            </Head>
            <TableContextProvider
                title={"Categoria Conveniado"}
                resource={"/core/partnercategory"}
                columns={columns}
                data={categories}
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