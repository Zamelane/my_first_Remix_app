import { SPOModel } from "@db"

export const getSPO = async () => {
    return await SPOModel.findAll()
}