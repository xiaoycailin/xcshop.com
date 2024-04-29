import React, { Fragment } from 'react'
import { Button } from './Buttons'
import Link from 'next/link'
import { User } from 'next-auth'
import { IconButton } from '@mui/material'
import { signOut } from 'next-auth/react'
import Image from 'next/image';

const ProfileButton: React.FC<{ auth?: { user?: User } }> = ({ auth }) => {
    return (
        <Fragment>
            {
                auth ? (
                    <IconButton onClick={() => signOut({
                        redirect: true,
                        callbackUrl: '/auth/login'
                    })}>
                        <Image className="rounded-full" src={auth.user?.image || ''} width={30} height={30} alt="PP" />
                    </IconButton>
                ) : (
                    <Button>
                        <Link href="/auth/login">Masuk</Link>
                    </Button>
                )
            }
        </Fragment>
    )
}

export default ProfileButton