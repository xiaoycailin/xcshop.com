import { Carousel } from "react-responsive-carousel";

import React from 'react'
import Image from "next/image";
import  'react-responsive-carousel/lib/styles/carousel.css'
const CarouselViews = () => {
    return (
        <Carousel showArrows infiniteLoop autoPlay swipeable>
            <div>
                <Image className="rounded-lg" src="https://assets.lapakgaming.com/lapakgaming/images/banner/202404/HB-LGID-KOFteaser.png?tr=w-640%2Cq-75" width={760} height={300} alt="" />
            </div>
            <div>
                <Image className="rounded-lg" src="https://assets.lapakgaming.com/lapakgaming/images/banner/202404/HB-LGID-KOFteaser.png?tr=w-640%2Cq-75" width={760} height={300} alt="" />
            </div>
            <div>
                <Image className="rounded-lg" src="https://assets.lapakgaming.com/lapakgaming/images/banner/202404/HB-LGID-KOFteaser.png?tr=w-640%2Cq-75" width={760} height={300} alt="" />
            </div>
            <div>
                <Image className="rounded-lg" src="https://assets.lapakgaming.com/lapakgaming/images/banner/202404/HB-LGID-KOFteaser.png?tr=w-640%2Cq-75" width={760} height={300} alt="" />
            </div>
            <div>
                <Image className="rounded-lg" src="https://assets.lapakgaming.com/lapakgaming/images/banner/202404/HB-LGID-KOFteaser.png?tr=w-640%2Cq-75" width={760} height={300} alt="" />
            </div>
            <div>
                <Image className="rounded-lg" src="https://assets.lapakgaming.com/lapakgaming/images/banner/202404/HB-LGID-KOFteaser.png?tr=w-640%2Cq-75" width={760} height={300} alt="" />
            </div>
        </Carousel>
    )
}

export default CarouselViews