import { Users } from "@/components/users";
import { Suspense } from "react";
import Lists from '../components/Lists';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Page from "@/components/Page";


export const dynamic = 'force-dynamic'
export default async function Home() {
    const session = await getServerSession(authOptions)

    return (
        <Page>
            <title>Home Page</title>
            <Lists />
        </Page>
    );
}
