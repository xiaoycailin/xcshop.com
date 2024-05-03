import { Brand } from "@/interface/Product";
import { Response } from "@/interface/Response";
import { fetcher } from "@/lib/fetcher";

export class brand {
    static async find(brandId: string) {
        try {
            const brandData = await fetcher<Response<Brand>>('http://localhost:3000/api/brand/' + brandId, { method: 'GET' })
            return brandData
        } catch (error) {
            console.log(error)
        }
    }
}