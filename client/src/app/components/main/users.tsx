import React from 'react'
import { useSelector } from 'react-redux'

import { IUser } from '../../interfaces/User'

import Share from './components/share'
import User from './components/user'

const Users = () => {

  const { user } = useSelector((state: any) => state)

  return (
    <div className='container-users'>
      <Share user={user} />
      <h1 className='title-vlogs'>Suggested users</h1>
      {
        user.users.map((user: IUser) => {
          return <User user={user} key={user.id} />
        })
      }
    </div>
  )
}

export default Users