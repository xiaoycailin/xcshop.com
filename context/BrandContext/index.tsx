import { CacheBrand } from '@/cache/brand'
import { brand } from '@/client'
import { Brand } from '@/interface/Product'
import { prisma } from '@/lib/prisma'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

const BrandContext = createContext<Brand | null | undefined>(null)

const BrandContextProvider: React.ElementType<{ children?: ReactNode, brandId?: string }> = ({ children, brandId }) => {
    const [title, setTitle] = useState<string | undefined | null>()
    const [data, setData] = useState<Brand | undefined>()
    useEffect(() => {
        CacheBrand.get(brandId || '').then(result => {
            if (result) {
                setTitle(result?.name)
                setData(result)
            }
        })
    }, [brandId])
    return (
        <BrandContext.Provider value={data}>
            <title>{title}</title>
            {children}
        </BrandContext.Provider>
    )
}

export const useBrand = () => useContext(BrandContext)
export default BrandContextProvider