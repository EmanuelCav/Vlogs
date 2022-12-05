import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getUserAction, logout, updateProfileAction } from '../../server/actions/user.action'

const DataProfile = ({ params, user, amount }: any) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [profileData, setProfileData] = useState("")
    const [isImage, setIsImage] = useState(false)

    useEffect(() => {
        dispatch(getUserAction(params.id, user.user.token) as any)
    }, [dispatch, params.id, user.user.token, isImage])

    const signOff = () => {
        dispatch(logout(navigate) as any)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        setProfileData(URL.createObjectURL(files![0]) as any)
        setIsImage(true)
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {

            const formData = new FormData()
            formData.append("picture", profileData)
            dispatch(updateProfileAction(formData, user.user.user.id, user.user.token) as any)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container-data-profile'>
            <div>
                <form onSubmit={handleSumbit} id="form-profile">
                    <label htmlFor='profile'>
                        <img src={isImage ? profileData : user.getUser.picture} alt='pict-prof' className='picture-profile' />
                    </label>
                    <input type="file" id='profile' style={{ display: 'none' }} onChange={handleChange} />
                </form>
                <p className='nickname-profile'>{user.getUser.nickname}</p>
                <p className='publications-profile'>Publications: {amount}</p>
            </div>
            <div>
                {
                    params.id == user.user.user.id &&
                    <button className='delete-getvlog' onClick={signOff}>Sign off</button>
                }
                {
                    isImage && <button className='button-profile' form='form-profile'>Update profile</button>
                }
            </div>
        </div>
    )
}

export default DataProfile