import { Card, Container, CardContent, Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Space from '@/components/Space';
import Image from 'next/image';
import Link from 'next/link';

const B: React.FC<{ text?: React.ReactNode }> = ({ text }) => (
    <button className="lg-capsule-av py-2 px-3 text-xs md:text-base bg-white rounded-full border border-solid text-custom-black-secondary border-custom-black-subdued mr-2 !text-xs md:!text-sm !font-medium" title="" style={{ opacity: .7, fontSize: 13 }}>{text}</button>
)
const BrandList = () => {

    useEffect(() => {
        setInterval(() => {
            const docTop = document.querySelector<HTMLDivElement>('.lg-home__capsule-section')
            const fromTop = docTop?.getBoundingClientRect().top || 0
            if (fromTop < 105) {
                if (docTop) {
                    docTop.classList.add('bg-slate-50', 'shadow-lg')
                }
            } else {
                if (docTop) {
                    docTop.classList.remove('bg-slate-50', 'shadow-lg')
                }
            }
        }, 0)
    }, [])
    return (
        <>
            <Space />
            <Container className="w-full lg-home__capsule-section sticky top-[-1px] md:top-[-1px] z-10 overflow-x-auto whitespace-nowrap p-3 px-5" sx={{
                display: 'none'
            }}>
                <B text="❤️ Favorit Kamu" />
            </Container>

            <Space />
            <Container>
                <Typography variant="h6" style={{ fontWeight: 600 }}>Topup Games</Typography>
                <Space />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>

                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2.4} lg={2}>
                            <Card sx={{ maxWidth: 200, minWidth: 50, borderRadius: 3, cursor: 'pointer', p: 1.5 }}>
                                <Link href="/mobile-legends">
                                    <Image src="https://cdn.takapedia.com/1e1016e8-4847-49c8-8141-51ac4a9e03e0.webp" width={170} height={300} alt="" />
                                    <Space />
                                    <p style={{ fontWeight: 600, fontSize: 13 }} className="text-center">Mobile Legends</p>
                                </Link>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>

            </Container>
        </>
    )
}

export default BrandList