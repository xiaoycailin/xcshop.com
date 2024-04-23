'use client'
import Input from '@/components/Input'
import Space from '@/components/Space'
import { Box, Button, Card, CardContent, Checkbox, Container, FormControl, IconButton, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { Fragment, useRef } from 'react'
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import { poppinsFont } from '@/components/fonts'
import Head from 'next/head'
import { LoginWithGoogle } from '../../../components/Buttons';
import AuthHeadInfo from '../../../components/AuthHeadInfo';
import Input2 from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegisterPage = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)

    return (
        <Fragment>
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

                            <Box sx={{
                                display: 'flex',
                                gap: 2
                            }}>
                                <Input InputProps={{ ref: name }} label="Nama Lengkap" />
                                <Input InputProps={{ ref: name }} label="Username" />

                            </Box>
                            <Space />
                            <Input InputProps={{ ref: name }} label="Email" />
                            <Space />
                            <Input InputProps={{ ref: name }} label="Nomor whatsApp" />
                            <Space />
                            <FormControl size='small' fullWidth variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input2
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
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

                            <Box sx={{ marginLeft: 'auto' }}>
                                <Typography variant="caption" style={{ opacity: 0.8 }}><Link href="/auth/forgot-password">Lupa Password?</Link></Typography>
                            </Box>
                            <Space />
                            <Button fullWidth variant="contained">Daftar</Button>
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
        </Fragment>
    )
}

export default RegisterPage