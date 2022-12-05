import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Vlogs from '../components/main/vlog';
import Users from '../components/main/users';

import { usersAction } from '../server/actions/user.action';
import { vlogsAction } from '../server/actions/vlog.action';

const Main = () => {

  const { user, vlog } = useSelector((state: any) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(vlogsAction(user.user.token) as any)
    dispatch(usersAction(user.user.token, user.user.user.email) as any)
  }, [dispatch, user.user.token, user.user.user.email])


  return (
    <div className='container-main'>
      <Users />
      <Vlogs vlog={vlog} user={user} />
    </div>
  )
}

export default Main