import { ResponseError } from '@/middleware/ResponseError';
import type { NextAuthOptions, User } from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

import { prisma } from './prisma';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'Email',
                    placeholder: 'example@domain.com',
                    type: 'email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                },
                image: {},
            },
            async authorize(credentials, req) {
                const getUser = await prisma.users.findFirst({
                    where: {
                        email: credentials?.email,
                    }
                })

                if (getUser) {
                    const user: User = {
                        id: getUser.id.toString(),
                        email: getUser.email,
                        name: getUser.name,
                        image: getUser.image,
                    }
                    return user
                } else {
                    throw new ResponseError(600, 'User Not Found')
                }
            },
        }),
        Google({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
        }),
    ],
    pages: {
        signIn: '/auth/login',
    }
}