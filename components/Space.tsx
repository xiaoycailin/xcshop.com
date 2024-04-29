import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Space = () => {
    return (
        <Box sx={{ p: 1 }}></Box>
    )
}

export const SpaceMarginAuto = () => {
    const [margin, setMargin] = useState('')
    useEffect(() => {
        const setupMargin = (width: number) => {
            if (width > 400) {
                setMargin('-120px')
            }
            if (width > 450) {
                setMargin('-100px')
            }
            if (width > 530) {
                setMargin('-60px')
            }
            if (width > 620) {
                setMargin('-50px')
            }
            if (width > 706) {
                setMargin('-20px')
            }
            if (width > 1400) {
                setMargin('0px')
            }
        }
        addEventListener('resize', () => {
            setupMargin(document.documentElement.clientWidth)
        })
        setupMargin(document.documentElement.clientWidth)
    }, [])

    return (
        <div style={{ marginTop: margin }}></div>
    )
}

export default Space