import { prisma } from "@/lib/prisma"
import { Fragment } from "react"

export async function Users() {
    const users = await prisma.users.findMany()
    return (
        <Fragment>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </Fragment>
    )
}