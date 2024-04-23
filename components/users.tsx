import { prisma } from "@/lib/prisma"
import { Fragment } from "react"
export type User = {
    id: number;
    name: string;
    email: string;
    image: string;
    createdAt: Date;
}
export async function Users() {
    const users = await prisma.users.findMany()
    return (
        <Fragment>
            {users.map((user: User) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </Fragment>
    )
}