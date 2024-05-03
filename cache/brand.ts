import { brand } from "@/client";
import { Brand } from "@/interface/Product";

export class CacheBrand {
    async initialize(data: Brand[]) {
        data.map(async item => {
            const getCache = await CacheBrand.get(item.path!)

            if (!getCache) {
                const brandData = await brand.find(item.path!)
                if (brandData?.data?.path) {
                    sessionStorage.setItem(brandData?.data?.path, JSON.stringify(brandData.data))
                }
            } else {
                sessionStorage.setItem(item.path!, JSON.stringify(getCache))
            }
        })
    }

    static async get(name: string) {
        const data = sessionStorage.getItem(name)
        if (data) {
            return JSON.parse(data) as Brand
        } else {
            return (await brand.find(name))?.data
        }
    }
}