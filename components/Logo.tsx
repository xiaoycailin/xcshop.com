import Image from 'next/image'
import React from 'react'

const LogoBrand: React.ElementType<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
        <Image src="https://ik.imagekit.io/ljwckh9hmdf/lapakgaming/images/rebranding/logo.png" width={width || 150} height={height || 50} alt="Logo" />
    )
}

export default LogoBrand