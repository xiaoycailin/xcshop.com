'use client'
import Input from '@/components/Input'
import Space from '@/components/Space'
import { Box, Button, Card, CardContent, Checkbox, Container, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { Fragment, useRef } from 'react'
import Link from 'next/link';
import { poppinsFont } from '@/components/fonts'
import { Head } from 'next/document'
import { LoginWithGoogle } from '../../../components/Buttons';
import { signIn } from 'next-auth/react'

const LoginPage = () => {

    let email = ''
    let password = ''

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = await signIn('credentials', {
            email: email,
            password: password,
            type: 'signin',
            redirect: false,
        })

        console.log(result)
    }
    return (
        <Fragment>
            <title>Masuk - Brand Name</title>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',// Ubah warna background menjadi abu-abu
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
                                <Input onChange={(e) => email = e.target.value} label="Email Address" />
                                <Space />
                                <Input onChange={(e) => password = e.target.value} label="Password" />
                                <Space />

                                <Box sx={{ marginLeft: 'auto' }}>
                                    <Typography variant="caption" style={{ opacity: 0.8 }}><Link href="/auth/forgot-password">Forgot Password?</Link></Typography>
                                </Box>
                                <Space />
                                <Button fullWidth variant="contained" type="submit">Masuk</Button>
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
        </Fragment>
    )
}

export default LoginPage