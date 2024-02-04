import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node"
import { getSPO } from "spo.server";
import { DataTable } from "@/components/ui/data-table";
import { SPOCols, columns } from "./columns"

export async function loader({
    request
}: LoaderFunctionArgs) {
    try {
        return await getSPO()
    } catch {
        throw new Response("...", {
            status: 400,
            statusText: "Ошибка загрузки данных по СПО из базы"
        })
    }
}


export default function Component() {
    const data = useLoaderData<typeof loader>()
    return (
        <DataTable columns={columns} columnsTranslate={SPOCols} data={data} />
    )
}