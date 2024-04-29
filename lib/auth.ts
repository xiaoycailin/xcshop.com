import { ResponseError } from '@/middleware/ResponseError';
import type { NextAuthOptions, User } from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

import { prisma } from './prisma';
import { signIn } from 'next-auth/react';
import ToastX from '@/components/toast';
export const createUser = async (credentials: Record<"type" | "name" | "email" | "password" | "image" | "phone" | "mode", string> | undefined, auth: 'EMAIL' | 'GOOGLE' | 'FACEBOOK') => {
    if (credentials) {
        const userCreate = await prisma.users.create({
            data: {
                email: credentials.email,
                name: credentials.name,
                image: credentials.image,
                auth_from: auth,
                phone: credentials.phone,
                password: credentials.password
            }
        })
        return {
            id: userCreate.uuid,
            email: userCreate.email,
            image: userCreate.image,
            name: userCreate.name
        }
    } else {
        return null
    }
}
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
                type: {},
                name: {},
                phone: {},
                mode: {}
            },
            async authorize(credentials, req) {


                const user = await prisma.users.findFirst({
                    where: {
                        email: credentials?.email
                    }
                })

                if (credentials?.type == 'signin') {
                    if (user?.password === credentials.password) {
                        const userData = {
                            id: user.uuid,
                            email: user.email,
                            name: user.email,
                            phone: user.phone
                        }
                        return userData
                    } else {
                        throw new ResponseError(400, 'Email atau kata sandi tidak valid')
                    }
                }

                if (user && credentials?.type !== 'signup') {
                    const userData = {
                        id: user.uuid,
                        email: user.email,
                        name: user.email,
                        image: user.image,
                        phone: user.phone
                    }
                    // jika request type google dan user tersedia dari GOOGLE
                    if (credentials?.type === 'google' && user.auth_from == 'GOOGLE') {
                        return userData
                    }
                    else if (credentials?.mode == 'check') {
                        return userData
                    }
                    // jika request type google dan user tersedia dari GOOGLE
                    else if (credentials?.type == 'signin' && user.auth_from === 'EMAIL') {
                        if (user.password === credentials.password) {
                            return userData
                        } else {
                            throw new ResponseError(400, 'Email atau kata sandi tidak valid')
                        }
                    } else {
                        // return await createUser(credentials, 'EMAIL')
                        throw new ResponseError(400, 'Email atau kata sandi tidak valid')
                    }
                } else if (credentials?.type === 'signup') {
                    // check registered 
                    const checkUserEmail = await prisma.users.count({ where: { email: credentials.email } })
                    const checkUserPhone = await prisma.users.count({ where: { phone: credentials.phone } })

                    if (checkUserEmail == 0 && checkUserPhone == 0) {
                        return await createUser(credentials, 'EMAIL')
                    } else {
                        throw new ResponseError(400, 'Email atau Nomor WhatsApp sudah pernah terdatar silahakn gunakan yang lain')
                    }
                } else {
                    // jika belum terdaftar dan type
                    return await createUser(credentials, 'GOOGLE')
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
    },
}

export const googleSignIn = async (session?: any) => {
    if (session) {
        const result = await signIn('credentials', {
            email: session?.email,
            image: session?.image,
            name: session?.name,
            type: 'google',
            mode: 'check',
            redirect: false,
        })
        const toast = ToastX.create({ title: 'Berhasil', detail: 'Login berhasil moho tunggu sedang menyiapkan halaman.' })
        if (result?.ok) {
            toast.success()
            location.href = '/'
        } else {
            toast.toastProps.summary = 'Gagal'
            toast.toastProps.detail = result?.error
            toast.error()
        }
    }
}