import React, { useEffect, useState } from 'react';
import { fetcher } from '@/lib/fetcher';
import { StaticData } from '@/interface/Metadata';
import { CacheBrand } from '@/cache/brand';

export const withData = (WrappedComponent: React.FC<any>) => {
    return (props: any) => {
        const [Data, setData] = useState<StaticData | null>(null)
        const cacheBrand = new CacheBrand()
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await fetcher<StaticData>('/api/home', { method: 'GET' });
                    setData(data)
                    if (data.data && location.pathname == '/') {
                        await cacheBrand.initialize(data.data?.brand)
                    }
                } catch (error) {
                    console.error("Error fetching Data:", error);
                }
            };
            fetchData()
        }, [])

        return (
            <WrappedComponent {...props} data={Data} />
        )
    }
}
