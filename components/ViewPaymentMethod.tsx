import Image from 'next/image'
import React from 'react'
import { Grid } from '@mui/material';

const ViewPaymentMethod = () => {
    return (
        <>
            <div className="w-full flex flex-row flex-wrap gap-3 md:gap-4 items-center">
                <Image src="https://ik.imagekit.io/ljwckh9hmdf/Payment_Method/idr/footer/gopay.png?w=96&q=75" width={75} height={30} alt="" />
                <Image src="https://ik.imagekit.io/ljwckh9hmdf/Payment_Method/idr/footer/gopay.png?w=96&q=75" width={75} height={30} alt="" />
                <Image src="https://ik.imagekit.io/ljwckh9hmdf/Payment_Method/idr/footer/gopay.png?w=96&q=75" width={75} height={30} alt="" />
                <Image src="https://ik.imagekit.io/ljwckh9hmdf/Payment_Method/idr/footer/gopay.png?w=96&q=75" width={75} height={30} alt="" />
                <Image src="https://ik.imagekit.io/ljwckh9hmdf/Payment_Method/idr/footer/gopay.png?w=96&q=75" width={75} height={30} alt="" />
                <p style={{ marginBottom: 0, opacity: .7, fontSize: 14 }}>+20 Lainnya</p>
            </div>
        </>
    )
}

export default ViewPaymentMethod