import React from 'react'

import VlogProfile from '../profile/components/vlogProfile'

import { IVlog } from '../../interfaces/Vlogs'

const Vlogs = ({ vlog, user }: any) => {

  return (
    <div className='contain-vlogs'>
      <h1 className='title-vlogs'>Vlogs</h1>
      <div className='container-vlogs'>
        {
          vlog.vlogs.map((v: IVlog, index: number) => {
            return <VlogProfile vlog={v} user={user} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Vlogs