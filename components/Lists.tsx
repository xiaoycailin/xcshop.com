'use client'
import { signOut } from "next-auth/react";

import { Fragment } from "react";
import { Button } from '@mui/material';

export default function Lists() {
    return (
        <Fragment>
            <Button onClick={() => signOut({
                redirect: true,
                callbackUrl: '/auth/login'
            })}>SignOut</Button>
        </Fragment>
    )
}