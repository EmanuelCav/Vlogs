import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteVlogAction, getVlogAction } from '../server/actions/vlog.action';

const Vlog = () => {

    const { user, vlog } = useSelector((state: any) => state)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        dispatch(getVlogAction(params.id!, user.user.token) as any)
    }, [dispatch, params.id, user.user.token])

    const deleteVlog = () => {
        const isConfirm = window.confirm("Are you sure you want delete this vlog?")
        if (isConfirm) {
            dispatch(deleteVlogAction(params.id!, user.user.token, navigate, user.user.user.id) as any)
        }
    }

    return (
        <div className='container-getvlog'>
            <h1 className='title-getvlog'>{vlog.vlog.title}</h1>
            <p className='description-getvlog'>{vlog.vlog.description}</p>
            {
                vlog.vlog.userId === user.user.user.id &&
                <button className='delete-getvlog' onClick={deleteVlog}>Delete</button>
            }
            <p className='information-getvlog'>{vlog.vlog.information}</p>
            {
                vlog.vlog.images?.map((image: any, index: number) => {
                    return <img src={image.image} alt='img-vlog' className='image-getvlog' key={index} />
                })
            }
        </div>
    )
}

export default Vlog