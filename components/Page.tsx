"use client"
import React, { useEffect, useRef } from 'react'
import { Toast, ToastMessage } from 'primereact/toast';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ToastX from './toast';
import '../app/page.css'
import { Container } from '@mui/material';
import Image from 'next/image';
import ProfileButton from './ProfileButton';
import { SearchBar } from './Buttons';
import { StaticData } from '@/interface/Metadata';


const Page: React.FC<{ children: any, useAppBar?: boolean, data?: StaticData | null }> = ({ children, useAppBar, data }) => {
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
            {useAppBar ? <div className="content-wrapper">
                <div className="app-bar flex justify-between">
                    <Image src="https://ik.imagekit.io/ljwckh9hmdf/lapakgaming/images/rebranding/logo.png" width={150} height={50} alt="Logo" />

                    <div className="flex gap-2 justify-center align-middle">
                        <SearchBar sugestItem={data?.data?.brand} />
                        <ProfileButton auth={data?.auth} />
                    </div>
                </div>
                <div className="app-container">
                    {children}
                </div>
            </div> : children}
            <Toast ref={refToast} position="top-right" />
        </PrimeReactProvider>
    )
}

export default Page