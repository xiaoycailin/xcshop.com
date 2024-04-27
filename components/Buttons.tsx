'use client'
import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export const LoginWithGoogle = () => {
    return (
        <Button onClick={(e) => signIn('google', { redirect: false })} size="small" startIcon={<Image src="/google.svg" alt="Google SVG" width={30} height={30} />} variant="outlined" fullWidth>
            Lanjutkan Dengan Google
        </Button>
    )
}