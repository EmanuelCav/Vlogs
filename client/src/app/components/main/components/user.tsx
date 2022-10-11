import React from 'react'

const User = ({ user }: any) => {
    return (
        <div className='container-users-list'>
            <p>{user.nickname}</p>
        </div>
    )
}

export default User