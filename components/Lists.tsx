'use client'
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from '@mui/material';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Lists() {
    const session = await getServerSession(authOptions)
    return (
        <Fragment>
            {!session ? <Button><Link href="/auth/login">SignIn</Link></Button> : <Button onClick={() => signOut()}>SignOut</Button>}
        </Fragment>
    )
}