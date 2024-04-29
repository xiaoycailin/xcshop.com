import { AccessTimeFilledRounded } from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import React from 'react'
import DiscountPromotion from './DiscountPromotion'

const FlashSale = () => {
    return (
        <>
            <Container>
                <div className="lg-container pr-4 py-3 md:pb-[30px] flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <div className="mr-2 flex items-center text-base md:text-2xl font-bold">FLASH SALE</div>
                        <div className="rounded-full bg-red-500 text-white font-bold flex items-center text-xs md:text-base py-[6px] px-2 md:py-2 md:px-3 gap-1">
                            <AccessTimeFilledRounded />
                            <span data-testid="lgflashsalecountdownmv-span">05 : 55 : 05</span>
                        </div>
                    </div>
                    <a data-testid="lgsectionflashsaleov-lgflashsalepagelinkmv" className="text-custom-primary font-bold block text-sm cursor-pointer" href="/id-id/flash-sale">Lihat semua</a>
                </div>
                <Box sx={{
                    display: 'flex',
                    p: 1,
                    gap: 1.5,
                    maxWidth: '100%',
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '5px',
                        height: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#999',
                        borderRadius: '5px',
                    },
                }}>
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                    <DiscountPromotion />
                </Box>
            </Container>
        </>
    )
}

export default FlashSale