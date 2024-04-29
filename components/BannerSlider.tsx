import { Box, MobileStepper } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";

export const data = [
    {
        cover: "https://assets.lapakgaming.com/lapakgaming/images/banner/202404/ID-HB-PUBG-SHADESFANTASY.png",
        title: "Interstaller",
    },
    {
        cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
        title: "Inception",
    },
    {
        cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
        title: "Blade Runner 2049",
    },
    {
        cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
        title: "Icon man 3",
    },
    {
        cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
        title: "Venom",
    },
    {
        cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
        title: "Steins Gate",
    },
    {
        cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
        title: "One Punch Man",
    },
    {
        cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
        title: "A Silent Voice",
    },
    {
        cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
        title: "Demon Slayer",
    },
    {
        cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
        title: "Attack On Titan",
    },
];


export default function ResponsiveCarousel(props: any) {
    const ref = React.useRef();
    const [clientWidth, setClientWidth] = useState<number>(30)
    useEffect(() => {
        const settingWidth = (width: number) => {
            if (width <= 420) {
                setClientWidth(0)
            }
            if (width > 420) {
                setClientWidth(0)
            }
            if (width > 1000) {
                setClientWidth(5)
            }
            if (width > 1200) {
                setClientWidth(10)
            }
            if (width > 1300) {
                setClientWidth(15)
            }
            if (width > 1400) {
                setClientWidth(18)
            }
            if (width > 1500) {
                setClientWidth(22)
            }
            if (width > 1600) {
                setClientWidth(26)
            }
            if (width > 1700) {
                setClientWidth(35)
            }
            if (width > 1800) {
                setClientWidth(40)
            }
        }
        addEventListener('resize', () => {
            const width = document.documentElement.clientWidth
            settingWidth(width)
        })
        settingWidth(document.documentElement.clientWidth)
    }, [])
    return (
        <Box sx={{
            px: clientWidth
        }}>
            <div style={{ width: "100%", position: "relative" }}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                        let currentVisibleSlide = 5;
                        if (parentWidth <= 1440) currentVisibleSlide = 3;
                        if (parentWidth <= 1080) currentVisibleSlide = 1;
                        // console.log(parentWidth)
                        return (
                            <StackedCarousel
                                ref={carouselRef}
                                slideComponent={Card}
                                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                                carouselWidth={parentWidth}
                                data={data}
                                currentVisibleSlide={currentVisibleSlide}
                                maxVisibleSlide={5}
                                fadeDistance={0.2}
                                useGrabCursor
                            />
                        );
                    }}
                />
            </div>
        </Box>
    )
}

export const Card = function (props: any) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];

    const [ch, setCh] = useState<number>(270)
    useEffect(() => {
        const settingWidth = (width: number) => {
            if (width <= 420) {
                setCh(130)
            }
            if (width > 420) {
                setCh(150)
            }
            if (width > 520) {
                setCh(170)
            }
            if (width > 620) {
                setCh(200)
            }
            if (width > 720) {
                setCh(250)
            }
            if (width > 920) {
                setCh(250)
            }
            if (width > 1000) {
                setCh(250)
            }
            if (width > 1600) {
                setCh(270)
            }
        }

        addEventListener('resize', () => {
            settingWidth(document.documentElement.clientWidth)
        })
        settingWidth(document.documentElement.clientWidth)
    }, [])
    return (
        <div
            style={{
                width: "100%",
                height: 300,
                userSelect: "none",
            }}
        >
            <img
                title="Banner"
                style={{
                    borderRadius: 10,
                    height: ch,
                    width: '100%'
                }}
                draggable={false}
                src={cover}
            />
            <div className="flex justify-center" style={{ marginTop: '0' }}>
                <MobileStepper
                    sx={{
                        background: 'transparent'
                    }}
                    variant="dots"
                    steps={data.length}
                    position="static"
                    activeStep={dataIndex}
                    nextButton
                    backButton
                />
            </div>
        </div>
    );
}