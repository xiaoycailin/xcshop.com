import { Box, Card, LinearProgress } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Space from './Space'
import { calulatePercent } from '@/lib/utils'

const DiscountPromotion = () => {
    return (
        <Card sx={{
            width: 200,
            minWidth: 200,
            p: 1.5,
            borderRadius: 3
        }}>
            <div className="flex gap-2 justify-center">
                <Image src="https://ik.imagekit.io/ljwckh9hmdf/images/tr:n-icon_category/GENSHINCRYSTAL.jpg" width={60} height={60} alt="Thumbnail" className="rounded-lg" />
                <div>
                    <p style={{ fontSize: 13, fontWeight: 700 }}>3689+670 Crystals</p>
                    <p style={{ fontSize: 11, fontWeight: 400 }}>Genshin Impact</p>
                </div>
            </div>

            <Space />
            <p style={{ fontWeight: 600 }}>Rp20.789</p>
            <div className="mb-2 lg:mb-3 flex items-center gap-2">
                <p className="flex items-center px-2 py-1 font-bold text-[10px] lg:text-xs rounded-full bg-red-100 text-red-500" style={{ widows: 'auto !important', fontSize: 14 }}>
                    -5%
                </p>
                <p className="line-through" style={{ fontSize: 12 }}>Rp22.890</p>
            </div>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={calulatePercent(500, 85)} sx={{ borderRadius: 20 }} color="warning" />
            </Box>
            <p className="mt-2" style={{ fontSize: 12, fontWeight: 500 }}>{500 - 85} Tersisa</p>
        </Card>
    )
}

export default DiscountPromotion