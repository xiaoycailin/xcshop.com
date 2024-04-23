import { prisma } from "@/lib/prisma"
import type { Users } from "@prisma/client"
import { Fragment } from "react"

export async function Users() {
    const users = await prisma.users.findMany()
    return (
        <Fragment>
            {users.map((user: Users) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </Fragment>
    )
}