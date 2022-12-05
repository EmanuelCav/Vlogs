import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";

import { myVlogsAction } from '../../server/actions/vlog.action';

import VlogProfile from './components/vlogProfile';
import SuccessRemove from '../../response/messages/successRemove';

import { IVlog } from '../../interfaces/Vlogs';

const VlogsProfile = ({ params, vlogs, user }: any) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(myVlogsAction(params.id, user.user.token) as any)
    }, [dispatch, params.id, user.user.token])

    return (
        <div className='container-vlogs-profile'>
            {
                user.user.user.id == params.id && <SuccessRemove />
            }
            {
                vlogs.vlogs.map((vlog: IVlog) => {
                    return <VlogProfile vlog={vlog} user={user} key={vlog._id}/>
                })
            }
        </div>
    )
}

export default VlogsProfile