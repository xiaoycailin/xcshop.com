import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async () => {
    const result = await prisma.brand.createMany({
        skipDuplicates: true,
        data: [
            {
                brand_id: 'mobile_legends',
                description: 'lorem ipsum dolor sit amet, is cousti, where do you life may be anouncement',
                helper: 'lorem ipsum dolor sit amet, is cousti, where do you life may be anouncement',
                id_checker: 'mobile_legends',
                status: true,
                images: {
                    helper: {
                        src: '/image.png',
                        alt: 'Alt Text',
                        name: 'Helper Image',
                    },
                    banners: [
                        {
                            src: 'https://assets.lapakgaming.com/lapakgaming/images/banner/202404/ID-HB-PUBG-SHADESFANTASY.png',
                            alt: 'Alt Text',
                            name: 'Helper Image',
                        }
                    ],
                    thumbnail: {
                        src: 'https://ik.imagekit.io/ljwckh9hmdf/images/mobile-legends.png',
                        alt: 'Mobile Legends',
                        name: 'Mobile Legends',
                    },
                },
                input_method: 'double_id',
                name: 'Mobile Legends',
                provider: 'Moonton',
                path: 'mobile-legends'
            }
        ]
    })
    return NextResponse.json(result)
}