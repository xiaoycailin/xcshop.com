import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { ResponseError } from "@/middleware/ResponseError"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    const brandId = req.nextUrl.pathname.replace('/api/brand/', '')
    const brand = await prisma.brand.findFirst({
        where: {
            path: brandId
        }
    })
    if (brand) {
        return NextResponse.json({
            success: true,
            message: null,
            data: brand
        })
    } else {
        return Response.json({
            success: false,
            message: 'Product Not Found',
        })
    }
}