
import { User } from 'next-auth';
import { Brand } from './Product';
export interface StaticData {
    success?: boolean,
    error?: string | null,
    message?: string,
    auth?: {
        user?: User
    },
    data?: {
        brand: Brand[],
        metadata: any,
        serverTime: Date
    }
}