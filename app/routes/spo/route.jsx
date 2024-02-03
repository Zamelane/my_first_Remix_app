import { useLoaderData } from "@remix-run/react";
import { Sequelize } from "sequelize";

export async function loader() {
    const sequelize = new Sequelize({
        database: 'diary',
        username: 'admin',
        password: 'DATABASE_PASSWORD',
        host: 'api.spo-diary.ru',
        port: 5432,
        dialect: 'postgres'
      })
    /*return await SPOModel.findOne({
        where: {
            id: 0
        }
    })*/
    throw new Response("...", {
        status: 400,
        statusText: "Ошибка загрузки данных по СПО из базы"
    })
}

export default function AllSPO() {
    const params = useLoaderData();
    return (
        <div>
            Привет от {params.id}
        </div>
    )
}