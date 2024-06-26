'use client'
import Input from '@/components/Input'
import Space from '@/components/Space'
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { poppinsFont } from '@/components/fonts'
import { LoginWithGoogle } from '../../../components/Buttons';
import { signIn } from 'next-auth/react'
import ToastX from '@/components/toast'
import Page from '@/components/Page'
import checkAuth from '@/middleware/checkAuth'
import { User } from 'next-auth'
import { googleSignIn } from '@/lib/auth'

const LoginPage = checkAuth(({ session }: { session: User }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        document.querySelector('form')?.querySelector('button')?.setAttribute('disabled', 'disabled')
        const result = await signIn('credentials', {
            email: email,
            password: password,
            type: 'signin',
            redirect: false,
        })
        document.querySelector('form')?.querySelector('button')?.removeAttribute('disabled')

        const toast = ToastX.create({ title: 'Berhasil', detail: 'Login berhasil moho tunggu sedang menyiapkan halaman.' })
        if (result?.ok) {
            toast.success()
            location.href = '/'
        } else {
            toast.toastProps.summary = 'Gagal'
            toast.toastProps.detail = result?.error
            toast.error()
        }
    }

    useEffect(() => {
        googleSignIn(session)
        return () => {
        }
    }, [session])
    return (
        <Page>
            <title>Masuk - Brand Name</title>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Ubah warna background menjadi abu-abu
            }}>
                <div>
                    <Box style={{ textAlign: 'center' }}>
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Image src="https://www.takapedia.com/_next/image?url=https%3A%2F%2Fcdn.takapedia.com%2Fmeta%2Flogo-1-83168561.png&w=384&q=75" height={50} width={50} alt="Image Logo" />
                            <Space />
                            <Typography variant="h6">Welcome Back</Typography>
                            <Typography variant="body1" style={{ opacity: 0.8, fontWeight: '500' }}>Log in to your account to continue</Typography>
                            <Space />
                        </Box>
                    </Box>

                    <Card sx={{
                        width: '400px',
                        backgroundColor: '#ffffff', // Ubah warna card menjadi putih
                    }}>
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: 4
                        }}>

                            <form style={{ width: '100%' }} onSubmit={onSubmit}>
                                <Input onChange={(e) => setEmail(e.target.value)} label="Email Address" />
                                <Space />
                                <Input onChange={(e) => setPassword(e.target.value)} label="Password" />
                                <Space />

                                <Box sx={{ marginLeft: 'auto' }}>
                                    <Typography variant="caption" style={{ opacity: 0.8 }}><Link href="/auth/forgot-password">Forgot Password?</Link></Typography>
                                </Box>
                                <Space />
                                <Button fullWidth variant="contained" type="submit" >Masuk</Button>
                            </form>
                            <Space />
                            <Box style={{ opacity: 0.5 }}>Atau</Box>
                            <Space />
                            
                            <LoginWithGoogle />

                            <Space />
                            <Typography variant='caption' className={poppinsFont.className}>Perlu membuat akun? <Link href="/auth/register">Daftar</Link></Typography>
                        </CardContent>
                    </Card>

                </div>
            </Container>
        </Page>
    )
})

export default LoginPage