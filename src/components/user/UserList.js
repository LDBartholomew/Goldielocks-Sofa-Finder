import React, { useState, useEffect } from 'react'
import { User } from './User'
import { getAllUsers, getUserById } from '../../modules/UserManager'

export const UserList = () => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return getAllUsers().then((usersFromAPI) => {
            setUsers(usersFromAPI)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="user">
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    )
}
