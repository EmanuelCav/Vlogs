import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const User = () => {

    const { user } = useSelector((state: any) => state)

    const navigate = useNavigate()

    const navigateProfile = () => {
        navigate(`/main/${user.user.user.id}`)
    }

    return (
        <div className='container-user-header'>
            <img src={user.user.user.picture} alt='profile' className='picture-user-header' onClick={navigateProfile}/>
            <p className='text-user-header' onClick={navigateProfile}>{user.user.user.nickname}</p>
        </div>
    )
}

export default User