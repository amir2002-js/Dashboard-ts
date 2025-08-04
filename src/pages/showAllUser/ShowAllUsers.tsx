import UserCard from '../../components/ui/UserCard'
import { useGetUsers } from '../../hooks/query/queries'
import { useEffect } from 'react'

export default function ShowAllUsers() {
    const users = useGetUsers()

    useEffect(() => {
        console.log(users.failureReason?.response)
        console.log(users.data)
    })
    return (
        <div className="mt-4 pb-4 justify-center items-center justify-items-center *:grow grid grid-cols-2 max-md:grid-cols-1 gap-7">
            {users.data?.map((item) => (
                <UserCard
                    key={item.ID}
                    username={item.username}
                    createAt={item.CreatedAt}
                    email={item.email}
                    role={item.role}
                />
            ))}
        </div>
    )
}
