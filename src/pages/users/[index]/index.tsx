import  Head  from "next/head";
import { useRouter } from "next/router";
import DataTable from "../../../components/Table/DataTable";
import { columns, data } from "../../../Utils/tableDataExample";
import { Layout } from "../../../components/Layout";
// * Lista de usuários na tabela '/users/[número da pagina]'

function UserList(){
    const router = useRouter()
    const index = router.query

    return (
        <Layout>
            <Head>
                <title>{"Usuários"}</title>
            </Head>
            <DataTable columns={columns} data={data} currentPage={parseInt(index.index as string)}/>
        </Layout>     
    );
}

export default UserList;