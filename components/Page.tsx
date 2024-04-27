"use client"
import React, { useEffect, useRef } from 'react'
import { Toast, ToastMessage } from 'primereact/toast';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ToastX from './toast';



const Page: React.FC<any> = ({ children }) => {
    const refToast = useRef<Toast>(null)
    const showToast = (data: ToastMessage) => {
        refToast.current?.show({ ...data, life: 3000 });
    }
    useEffect(() => {
        ToastX.initialize(showToast)
    }, [])

    return (
        <PrimeReactProvider value={{
            autoZIndex: true,
            locale: 'id',
            unstyled: false,
        }}>
            {children}
            <Toast ref={refToast} position="top-right" />
        </PrimeReactProvider>
    )
}

export default Page