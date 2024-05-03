"use client"
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react'
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
import Space from './Space';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const ResponsiveContext = createContext<{ isMobile: boolean }>({ isMobile: false })
export const Responsive: React.ElementType<{ children?: ReactNode }> = ({ children }) => {
    const [ch, setCh] = useState<boolean>(false)
    useEffect(() => {
        const settingWidth = (width: number) => {
            if (width <= 420) {
                setCh(true)
            }
            if (width > 420) {
                setCh(true)
            }
            if (width > 520) {
                setCh(true)
            }
            if (width > 620) {
                setCh(true)
            }
            if (width > 720) {
                setCh(false)
            }
            if (width > 920) {
                setCh(false)
            }
            if (width > 1000) {
                setCh(false)
            }
            if (width > 1600) {
                setCh(false)
            }
        }

        addEventListener('resize', () => {
            settingWidth(document.documentElement.clientWidth)
        })
        settingWidth(document.documentElement.clientWidth)
    }, [])
    return (
        <ResponsiveContext.Provider value={{ isMobile: ch }}>
            {children}
        </ResponsiveContext.Provider>
    )
}
export const useResponsive = () => useContext(ResponsiveContext)

export const useDisplay = () => {
    const [isMobile, setMobile] = useState(false)
    const detectMobile = () => {
        const width = document.documentElement.clientWidth
        // console.log(width)
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        }

        if (width < 420) {
            return true
        }
        if (width < 520) {
            return true
        }
        if (width < 620) {
            return true
        }
        if (width < 720) {
            return false
        }
        if (width < 920) {
            return false
        }
        if (width < 1000) {
            return false
        }
        if (width < 1600) {
            return false
        }
        return false
    }
    const resize = (cb: (ev: UIEvent) => void) => addEventListener('resize', (e) => {
        cb(e)
    })

    useEffect(() => {
        resize(() => {
            setMobile(detectMobile())
        })
        setMobile(detectMobile())
    }, [])
    return { detectMobile, resize, isMobile }
}
const Page: React.FC<{ children: any, useAppBar?: boolean, container?: boolean, data?: StaticData | null }> = ({ children, useAppBar, data, container }) => {
    const refToast = useRef<Toast>(null)
    const showToast = (data: ToastMessage) => {
        refToast.current?.show({ ...data, life: 3000 });
    }
    useEffect(() => {
        ToastX.initialize(showToast)
    }, [])

    return (
        <>
            <PrimeReactProvider value={{
                autoZIndex: true,
                locale: 'id',
                unstyled: false,
            }}>
                <Toast ref={refToast} position="top-right" />
            </PrimeReactProvider>
            <Responsive>
                {useAppBar ? <div className="content-wrapper">
                    <div className="bg-header backdrop-blur">
                        <div className="w-full app-bar flex justify-between">
                            <Image src="https://ik.imagekit.io/ljwckh9hmdf/lapakgaming/images/rebranding/logo.png" width={150} height={50} alt="Logo" />

                            <div className="flex gap-2 justify-center align-middle">
                                <SearchBar sugestItem={data?.data?.brand} />
                                <ProfileButton auth={data?.auth} />
                            </div>
                        </div>
                    </div>

                    <div className="app-container">
                        {container ? (
                            <Container maxWidth="lg">
                                {children}
                            </Container>
                        ) : children}
                        <Space />
                        <Space />
                        <Space />
                        <Space />
                        <Space />
                        <Space />
                    </div>
                </div> : children}
            </Responsive>

            <GoogleAnalytics gaId="G-F355ZJ3FVC" />
            <GoogleTagManager gtmId="GTM-NGKNLB3Z" />
        </>
    )
}

export default Page