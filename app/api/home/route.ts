import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json({
        success: true,
        error: null,
        message: 'SUCCESS',
        auth: await getServerSession(authOptions),
        data: {
            brand: await prisma.brand.findMany(),
            metadata: {
                
            },
            serverTime: new Date(),
        }
    })
}