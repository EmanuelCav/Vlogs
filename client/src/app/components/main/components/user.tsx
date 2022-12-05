import React from 'react'
import { useNavigate } from "react-router-dom";

const User = ({ user }: any) => {

    const navigate = useNavigate()

    const navigateProfile = () => {
        navigate(`/main/${user.id}`)
    }

    return (
        <div className='container-users-list' onClick={navigateProfile}>
            <img src={user.picture} alt='picture-user' className='picture-profile' style={{ width: '88px'}}/>
            <p className='nickname-profile'>{user.nickname}</p>
        </div>
    )
}

export default User