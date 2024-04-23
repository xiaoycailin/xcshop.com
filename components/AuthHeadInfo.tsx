import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Space from './Space'

const AuthHeadInfo = () => {
    return (
        <Box style={{ textAlign: 'center' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src="https://www.takapedia.com/_next/image?url=https%3A%2F%2Fcdn.takapedia.com%2Fmeta%2Flogo-1-83168561.png&w=384&q=75" height={50} width={50} alt="Image Logo" />
                <Space />
                <Typography variant="h6">Selamat Datang</Typography> {/* Ubah title menjadi "Selamat Datang" */}
                <Typography variant="body1" style={{ opacity: 0.8, fontWeight: '500' }}>Log in to your account to continue</Typography>
                <Space />
            </Box>
        </Box>
    )
}

export default AuthHeadInfo