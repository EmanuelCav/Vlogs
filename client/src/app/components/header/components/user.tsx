import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {

    const { user } = useSelector((state: any) => state)

    return (
        <div>
            <img src={user.user.user.picture} alt='profile' />
            <p>{user.user.user.nickname}</p>
        </div>
    )
}

export default User