'use client'
import Input from '@/components/Input'
import Space from '@/components/Space'
import { Box, Button, Card, CardContent, Checkbox, Container, FormControl, IconButton, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import { poppinsFont } from '@/components/fonts'
import Head from 'next/head'
import { LoginWithGoogle } from '../../../components/Buttons';
import AuthHeadInfo from '../../../components/AuthHeadInfo';
import Input2 from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ToastX from '@/components/toast'
import Page from '@/components/Page'

import { Button as Btn } from '../../../middleware/Button'
import checkAuth from '@/middleware/checkAuth'
import { User } from 'next-auth'
import { googleSignIn } from '@/lib/auth'

const RegisterPage = checkAuth(({ session }: { session: User }) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const button = new Btn('#ytkipoi')

        if (!name || name.trim() === '') {
            ToastX.text('Nama lengkap harus diisi').error()
            return
        }

        if (!email || email.trim() === '') {
            ToastX.text('Email harus diisi').error()
            return
        }

        if (!phone || phone.trim() === '') {
            ToastX.text('Nomor WhatsApp harus diisi').error()
            return
        }

        if (!password || password.trim() === '') {
            ToastX.text('Password harus diisi').error()
            return
        }


        button.disable().text('Loading...')

        const result = await signIn('credentials', {
            name, email, phone, password,
            type: 'signup',
            redirect: false
        })

        button.enable().text('Daftar')

        const toast = ToastX.create({ title: 'Berhasil', detail: 'Login berhasil mohon tunggu sedang menyiapkan halaman.' })
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
            <title>Daftar - Brand Name</title>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <div>
                    <AuthHeadInfo />

                    <Card sx={{
                        width: '400px',
                        backgroundColor: '#ffffff',
                    }}>
                        <CardContent sx={{
                            padding: 4,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>

                            <form style={{ width: '100%' }} onSubmit={submitForm}>
                                <Input type="text" onChange={(e) => setName(e.target.value)} label="Nama Lengkap" />
                                <Space />
                                <Input type="email" onChange={(e) => setEmail(e.target.value)} label="Email" />
                                <Space />
                                <Input type="number" onChange={(e) => setPhone(e.target.value)} label="Nomor whatsApp" />
                                <Space />
                                <FormControl size='small' fullWidth variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input2
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(e) => setPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Space />

                                <Typography variant="caption" style={{ opacity: 0.8 }}>Dengan melakukan daftar berarti anda menyetujui syarat & ketentuan xcastore.com</Typography>
                                <Space />
                                <Button id='ytkipoi' fullWidth variant="contained" type="submit">Daftar</Button>
                            </form>
                            <Space />

                            <Box style={{ opacity: 0.5 }}>Atau</Box>

                            <Space />

                            <LoginWithGoogle />

                            <Space />
                            <Typography variant='caption' className={poppinsFont.className}>Sudah memiliki akun? <Link href="/auth/login">Login</Link></Typography>
                        </CardContent>
                    </Card>

                </div>
            </Container>
        </Page>
    )
})

export default RegisterPage