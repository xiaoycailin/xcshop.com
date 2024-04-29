import React, { useEffect, useState } from 'react';
import { fetcher } from '@/lib/fetcher';
import { StaticData } from '@/interface/Metadata';

export const withData = (WrappedComponent: React.FC<any>) => {
    return (props: any) => {
        const [Data, setData] = useState<StaticData | null>(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await fetcher<StaticData>('/api/home', { method: 'GET' });
                    setData(data);
                } catch (error) {
                    console.error("Error fetching Data:", error);
                }
            };

            fetchData();
        }, []);

        return (
            <WrappedComponent {...props} data={Data} />
        );
    };
};
