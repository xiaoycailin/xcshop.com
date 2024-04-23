import { Users } from "@/components/users";
import { Suspense } from "react";
import Lists from '../components/Lists';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export const dynamic = 'force-dynamic'
export default async function Home() {
    const session = await getServerSession(authOptions)

    return (
        <>
            <Lists /> <br />
            Email: {session?.user?.email} <br />
            Name: {session?.user?.name}
        </>
    );
}
