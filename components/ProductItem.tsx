import React, { useRef, useState } from 'react'
import Image from 'next/image';

export const products = [
    {
        "id": 3530,
        "code": "MLBB_ID_5",
        "name": "5 (5+0) Diamonds",
        "currency": "IDR",
        "price": 1410,
        "memberPrice": 1410,
        "silverPrice": 1410,
        "goldPrice": 1410,
        "vipPrice": 1410,
        "originalPrice": 0,
        "sectionId": 17,
        "sectionName": "Diamonds",
        "image": "https://cdn.takapedia.com/common/90b01334-83d2-4fea-b4de-04656cca60a6.png",
        "minBuyAmount": 1,
        "maxBuyAmount": 1,
        "info": "",
        "processTime": 0
    },
    {
        "id": 3538,
        "code": "MLBB_ID_10",
        "name": "10 (5+5) Diamonds",
        "currency": "IDR",
        "price": 1410,
        "memberPrice": 1410,
        "silverPrice": 1410,
        "goldPrice": 1410,
        "vipPrice": 1410,
        "originalPrice": 0,
        "sectionId": 17,
        "sectionName": "Diamonds",
        "image": "https://cdn.takapedia.com/common/90b01334-83d2-4fea-b4de-04656cca60a6.png",
        "minBuyAmount": 1,
        "maxBuyAmount": 1,
        "info": "",
        "processTime": 0
    },
]
export namespace Product {
    export const selectedClassName = "products-item selected bg-secondary-700 ring-2 ring-primary-500 ring-offset-2 ring-offset-secondary-500 relative flex cursor-pointer rounded-xl border border-transparent p-2.5 shadow-sm outline-none duration-300 ease-in-out hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 hover:ring-offset-secondary-600 md:p-4 ring-purple-500"

    export const unSelectedClassName = "products-item bg-secondary-600 relative flex cursor-pointer rounded-xl border border-purple-100 p-2.5 shadow-sm outline-none duration-300 ease-in-out hover:ring-2 hover:ring-primary-500 hover:ring-offset-2 hover:ring-offset-secondary-600 md:p-4 ring-purple-500"
    export const selected = (): ProductKey | undefined => productData

    export type ProductKey = typeof products[0]
    export const Item: React.FC<{ className?: string, selectedClass?: string, onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, ref: React.RefObject<HTMLDivElement>, product?: ProductKey) => void, data?: ProductKey }> = ({ className = unSelectedClassName, selectedClass, onClick, data }) => {
        const refElement = useRef<HTMLDivElement>(null)
        return (
            <div className={`products-item ${selectedClass ? selectedClass : className}`} ref={refElement} onClick={async (e) => {
                document.querySelectorAll<HTMLDivElement>('.products-item').forEach(element => {
                    element.className = `${Product.unSelectedClassName}`
                })
                if (refElement.current) {
                    refElement.current.className = Product.selectedClassName
                }
                productData = data
                onClick && onClick(e, refElement, data)
            }}>
                <span className="flex flex-1">
                    <span className="flex flex-col justify-between">
                        <span className="trunc block text-xs font-semibold text-black dark:text-black">{data?.name}</span>
                        <div>
                            <span className="mt-1 flex items-center text-black dark:text-black/75" style={{ fontSize: 13 }}>Rp {Intl.NumberFormat('id-ID').format(data?.price || 0)}</span>
                        </div>
                    </span>
                </span>
                <div className="flex aspect-square w-8 items-center">
                    <Image width={300} height={300} src={data?.image || ''} alt={data?.code || ''} />
                </div>
            </div>
        )
    }
}

let productData: Product.ProductKey | undefined
