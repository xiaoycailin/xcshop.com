import { User } from "next-auth"
import { useEffect, useState } from "react"

const checkAuth = (WrappedComp: React.ComponentType<any>) => {

    const CheckAuth: React.FC<any> = (props) => {
        const [session, setSession] = useState<User | null>(null)
        useEffect(() => {
            fetch('/api/session', {
                method: 'GET',
            }).then(async (result) => {
                const json = await result.json()
                setSession(json?.user)
            })
            return() => {
            }
        }, [])
        return (
            <WrappedComp
                {...props}
                session={session}
            />
        )
    }
    return CheckAuth
}

export default checkAuth