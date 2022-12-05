import React, { useState } from 'react'

import Create from './components/create'

const Share = ({ user }: any) => {

  const [isCreating, setIsCreating] = useState(false)

  const isCreatingVlog = () => {
    setIsCreating(!isCreating)
  }

  return (
    <>
      <div className='container-share'>
        <button className='button-share' onClick={isCreatingVlog}>SHARE A VLOG</button>
      </div>
      {
        isCreating && <Create setIsCreating={setIsCreating} user={user} />
      }
    </>
  )
}

export default Share