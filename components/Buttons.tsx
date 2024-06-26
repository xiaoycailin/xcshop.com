'use client'
import { Button as B, Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, Popover, Typography } from '@mui/material';
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import '../app/page.css'
import { ArrowBack, Search } from '@mui/icons-material'
import Space from '@/components/Space';
import { Brand } from '@/interface/Product'
import Link from 'next/link';
export const LoginWithGoogle = () => {
    return (
        <B onClick={(e) => signIn('google', { redirect: false })} size="small" startIcon={<Image src="/google.svg" alt="Google SVG" width={30} height={30} />} variant="outlined" fullWidth>
            Lanjutkan Dengan Google
        </B>
    )
}

export const Button: React.ElementType<{ children: any }> = ({ children }) => {
    return (
        <button className="active:opacity-90 ml-0 md:ml-4 px-5 h-[40px] mt-[2px] border border-solid border-custom-primary rounded-full text-custom-primary font-bold text-sm">{children}</button>
    )
}


const Items: React.ElementType<{ items?: Brand[] | null }> = ({ items }) => items?.length === 0 ? (
    <p className="min-hscreen text-center align-middle items-center w-full h-full">
        Tidak di temukan
    </p>
) : items?.map((item: Brand, index: number) => (
    <Box key={Math.random()} sx={{
        my: 2
    }} >
        <Link href="/mobile-legends" className="flex justify-start gap-3 align-middle items-center">
            <Image className="rounded-lg" src={item.images?.thumbnail?.src || ''} width={50} height={50} alt={item.images?.thumbnail?.alt || ''} />
            <div>
                <p style={{ fontWeight: 500 }}>{item.name}</p>
                <p style={{ marginTop: '-4px', fontSize: 13, opacity: 0.7 }}>Moonton</p>
            </div>
        </Link>
        {items.length - 1 === index ? null : (<><Space /><Divider /></>)}
    </Box>
))

export const SearchBar: React.ElementType<{ onSearch?: (value: string) => void, sugestItem?: Brand[] }> = ({ onSearch, sugestItem }) => {

    const [isMobile, setIsMobile] = useState(false);
    const [sugestItemFiltered, setFilter] = useState<Brand[] | undefined | null>();

    useEffect(() => {
        addEventListener('resize', () => {
            setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
            if (document.documentElement.clientWidth < 632) setIsMobile(true)
        })
        if (document.documentElement.clientWidth < 632) setIsMobile(true)
        setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }, [])

    const [visible, setVisible] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState<HTMLInputElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const searchItem = (items?: Brand[], searchName?: string) => items?.filter(item => {
        const nameMatch = item.name?.toLowerCase().includes(searchName?.toLowerCase() || '');
        const providerMatch = item.provider?.toLowerCase().includes(searchName?.toLowerCase() || '');
        return nameMatch || providerMatch
    })

    const [textSearch, setTextSearch] = useState<string>('')
    useEffect(() => {
        setFilter(searchItem(sugestItem, textSearch))
    }, [sugestItem, textSearch])

    return (
        <>
            {isMobile ? (
                <>
                    <IconButton className="mt-[2px]" onClick={() => setVisible(true)}>
                        <Search fontSize="inherit" />
                    </IconButton>
                    <Dialog
                        fullScreen
                        open={visible}
                    >
                        <Box sx={{ padding: 1 }}>
                            <Space />
                            <div className="flex gap-1 bg-slate-50">
                                <IconButton onClick={() => setVisible(false)}>
                                    <ArrowBack />
                                </IconButton>
                                <input className="w-full lg:w-[400px] h-[40px] text-xs md:text-sm lg:text-base px-4 py-2 bg-white border border-custom-black-subdued rounded-full focus:outline-none focus:border-[color:#1111a8] transition-all mt-[2px]" type="text" title="ap" placeholder="Cari Game..." onChange={(e) => setTextSearch(e.target.value)} defaultValue={textSearch} />
                                <IconButton />
                            </div>
                            <Space />
                            <Divider />
                        </Box>
                        <DialogContent style={{ width: '100%' }}>
                            <Items items={sugestItemFiltered} />
                        </DialogContent>
                    </Dialog>
                </>
            ) : (
                <>
                    <input className="w-full lg:w-[400px] h-[40px] text-xs md:text-sm lg:text-base px-4 py-2 bg-white border border-custom-black-subdued rounded-full focus:outline-none focus:border-[color:#1111a8] transition-all mt-[2px]" type="text" title="ap" placeholder="Cari Game..." onClick={(e) => handleClick(e)} readOnly />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Box sx={{
                            width: '400px'
                        }}>

                            <Box sx={{ padding: 1 }}>
                                <Space />
                                <div className="flex gap-1">
                                    <IconButton onClick={handleClose}>
                                        <ArrowBack />
                                    </IconButton>
                                    <input autoFocus className="w-full lg:w-[400px] h-[40px] text-xs md:text-sm lg:text-base px-4 py-2 bg-white border border-custom-black-subdued rounded-full focus:outline-none focus:border-[color:#1111a8] transition-all" type="text" title="ap" placeholder="Cari Game..." onChange={(e) => setTextSearch(e.target.value)} defaultValue={textSearch} />
                                    <IconButton />
                                </div>
                                <Space />
                                <Divider />
                            </Box>

                            <Box sx={{ px: 3, minHeight: 200, maxHeight: 600, overflow: 'auto' }}>
                                <Items items={sugestItemFiltered} />
                            </Box>

                        </Box>
                        <Space />
                    </Popover>
                </>
            )}
        </>
    )
}