import { axiosPrivate } from "apis/api"

export const GetDateProduct = async(uuid: string) => {
    try {
        const res = await axiosPrivate(`/inventory?id=${uuid}`)
    }
}