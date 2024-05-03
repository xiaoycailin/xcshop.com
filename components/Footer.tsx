import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Space from './Space'
import LogoBrand from './Logo';
import ViewPaymentMethod from './ViewPaymentMethod';
import { Mail, WhatsApp } from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <Space />
            <Space />
            <Space />
            <Space />
            <Space />
            <div className="bg-slate-100 py-2">
                <Container>
                    <Space />
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="w-full md:w-4/12 block mb-10 md:mb-2 lg:mb-6 text-left">
                            <LogoBrand width={200} height={100} />

                            <Space />
                            <h6 style={{ fontWeight: 600 }}>PT Global Indokreasi</h6>
                            <p style={{ fontSize: 13, opacity: .7 }}>Website top up game termurah dan terpercaya</p>
                        </div>
                        <div className="w-full md:w-8/12 block mb-10 md:mb-2 lg:mb-6 text-left">
                            <h5 style={{ fontWeight: 600 }} className="mb-3 md:mb-5">Pembayaran Aman</h5>
                            <Space />
                            <ViewPaymentMethod />

                            <Space />
                            <Space />
                            <div className="flex flex-col md:flex-row justify-between gap-5">
                                <div className="mb-10 md:mb-0">
                                    <h5 style={{ fontWeight: 600 }} className="mb-3 md:mb-5">Hubungi Kami</h5>
                                    <a className="flex gap-2 mb-4" href="http://" target="_blank" rel="noopener noreferrer">
                                        <Mail fontSize='small' />
                                        <p style={{ fontSize: 13, opacity: .9 }}>abiaiden220809@gmail.com</p>
                                    </a>
                                    <a className="flex gap-2" href="http://" target="_blank" rel="noopener noreferrer">
                                        <WhatsApp fontSize='small' />
                                        <p style={{ fontSize: 13, opacity: .9 }}>Chat Whatsapp</p>
                                    </a>
                                </div>


                                <div className="mb-10 md:mb-0">
                                    <h5 style={{ fontWeight: 600 }} className="mb-3 md:mb-5">Informasi</h5>
                                    <a className="flex mb-4" href="http://" target="_blank" rel="noopener noreferrer">
                                        <p style={{ fontSize: 13, opacity: .9 }}>Syarat & Ketentuan</p>
                                    </a>
                                    <a className="flex mb-4" href="http://" target="_blank" rel="noopener noreferrer">
                                        <p style={{ fontSize: 13, opacity: .9 }}>Kebijakan Privasi</p>
                                    </a>
                                    <a className="flex mb-4" href="http://" target="_blank" rel="noopener noreferrer">
                                        <p style={{ fontSize: 13, opacity: .9 }}>Blog</p>
                                    </a>
                                    <a className="flex" href="http://" target="_blank" rel="noopener noreferrer">
                                        <p style={{ fontSize: 13, opacity: .9 }}>Karir</p>
                                    </a>
                                </div>

                                <div className="mb-10 md:mb-0">
                                    <h5 style={{ fontWeight: 600 }} className="mb-3 md:mb-5">Ikuti Kami</h5>
                                    <div className="flex md:justify-start gap-3">
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <Image src="/static/images/icon-facebook.png" width={25} height={25} alt="" />
                                        </a>
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <Image src="/static/images/icon-instagram.png" width={25} height={25} alt="" />
                                        </a>
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <Image src="/static/images/icon-x-20231018.png" width={25} height={25} alt="" />
                                        </a>
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <Image src="/static/images/icon-tiktok.png" width={25} height={25} alt="" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer