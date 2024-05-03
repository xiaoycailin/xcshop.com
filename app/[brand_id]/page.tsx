"use client"

import Page, { useDisplay } from "@/components/Page";
import { withData } from "@/middleware/withData";
import { StaticData } from "@/interface/Metadata";
import BrandContextProvider from "@/context/BrandContext";
import { Card, Grid, CardContent } from '@mui/material';
import Image from 'next/image';
import CarouselViews from "@/components/Carousel";
import TextIfoItem from "@/components/TextIfoItem";
import { InputData } from '../../components/TextFields';
import { Product, products } from "@/components/ProductItem"
import { useEffect, useState } from "react";
import { BuyerData } from "@/interface/Response";

export default withData(({ data, params }: { data?: StaticData | null, params: { brand_id: string } }) => {
    const [buyerData, setBuyerData] = useState<BuyerData | null>(null)
    useEffect(() => {
        console.log(Product.selected())
    }, [Product.selected()])

    return (
        <BrandContextProvider brandId={params.brand_id}>
            <Page container useAppBar data={data}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={5} xl={4} sm={12} lg={4}>
                        <Card sx={{ borderRadius: 4 }}>
                            <CardContent>
                                <CarouselViews />
                                <div className="flex justify-between gap-3 w-full">
                                    <div className="flex gap-4">
                                        <div>
                                            <Image className="rounded-lg" src="https://ik.imagekit.io/ljwckh9hmdf/images/mobile-legends.png?v=1700559002&tr=w-256%2Cq-75" alt="" width={80} height={80} />
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 600 }}>Mobile Legends</p>
                                            <p style={{ fontSize: 15 }}>Moonton</p>
                                            <div className="flex gap-1 mt-2">
                                                <div>
                                                    <Image src="/static/images/verified-icon.webp" width={25} height={25} alt="Verivied Icon" />
                                                </div>
                                                <div>
                                                    Terverifikasi
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src="https://ik.imagekit.io/ljwckh9hmdf/lapakgaming/images/rebranding/badge-10x-guarantee.png?tr=w-96%2Cq-75" width={80} height={30} alt="" />
                                    </div>
                                </div>
                                <p style={{ fontWeight: 500, fontSize: 13 }} className="mt-3 ">Cara Topup</p>
                                <div style={{ fontSize: 12, opacity: .8 }}>
                                    <ol className="list-decimal pl-3">
                                        <li>
                                            Masukkan User ID dan Zone ID Anda, Contoh : 1234567 (1234)
                                        </li>
                                        <li>
                                            Pilih Nominal Diamonds yang kamu inginkan
                                        </li>
                                        <li>
                                            Selesaikan pembayaran
                                        </li>
                                        <li>
                                            Diamonds akan ditambahkan ke akun Mobile Legends kamu
                                        </li>
                                    </ol>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={7} xl={8} sm={12} lg={8}>
                        <Card sx={{ borderRadius: 4 }}>
                            <CardContent>
                                <TextIfoItem label="Masukan Data Akun" number={1} />
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:pb-4 mt-4 px-2">
                                    <InputData type="number" label="User ID" placeholder="Ketikan ID" />
                                    <InputData type="number" label="ID Server" placeholder="Ketikan ID Server" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card sx={{ borderRadius: 4 }} className="mt-5">
                            <CardContent>
                                <TextIfoItem label="Pilih Nominal yang Ingin Kamu Beli" number={2} />
                                <div className="mt-4">
                                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                                        {products && products.map(item => (
                                            <Product.Item data={item} key={item.id} />
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Page>
        </BrandContextProvider>
    );
});