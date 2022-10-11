import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Vlog from '../components/main/vlog';
import Users from '../components/main/users';

import { usersAction } from '../server/actions/user.action';
import { vlogsAction } from '../server/actions/vlog.action';

import { IVlog } from "../interfaces/Vlogs";

const Main = () => {

  const { user, vlog } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(vlogsAction(user.user.token) as any)
    dispatch(usersAction(user.user.token, user.user.user.email) as any)
  }, [dispatch, user.user.token, user.user.user.email])


  return (
    <div className='container-main'>
      {
        vlog.vlogs.map((vlog: IVlog) => {
          return <Vlog vlog={vlog} key={vlog._id} />
        })
      }
      <Users />
    </div>
  )
}

export default Main