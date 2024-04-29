"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetcher } from '@/lib/fetcher';

const ProductContext = createContext<any[]>([])
export const ProductProvider: React.FC<{ children: any }> = ({ children }) => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await fetcher('/api/home', { method: 'GET' })
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

// Hook untuk mengakses nilai produk
export const useProducts = () => useContext(ProductContext);
