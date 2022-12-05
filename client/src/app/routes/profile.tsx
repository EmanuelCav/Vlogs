import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

import DataProfile from '../components/profile/dataProfile'
import VlogsProfile from '../components/profile/vlogsProfile'

const Profile = () => {

  const { user, vlog } = useSelector((state: any) => state)
  const params = useParams()

  return (
    <div className='container-profile'>
      <DataProfile params={params} user={user} amount={vlog.amount}/>
      <VlogsProfile params={params} vlogs={vlog} user={user}/>
    </div>
  )
}

export default Profile
