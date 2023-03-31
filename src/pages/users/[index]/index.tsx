import  Head  from "next/head";
import { Router, useRouter } from "next/router";
import DataTable from "../../../components/Table/DataTable";
import { columns, data } from "../../../Utils/tableDataExample";

function PlayerList(){
    const router = useRouter()
    const index = router.query

    return (
        <>
            <Head>
                <title>{"Usuários"}</title>
            </Head>
            <DataTable columns={columns} data={data} currentPage={parseInt(index.index)}/>
        </>     
    );
}

export default PlayerList;