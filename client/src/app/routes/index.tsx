import React, { useState } from 'react'

import Info from '../components/index/info/info'
import Login from '../components/index/auth/login'
import Register from '../components/index/auth/register'

const Index = () => {

  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className='container-index'>
      {
        isRegister ? (
          <Register setIsRegister={setIsRegister} />
        ) : (
          <>
            <Login setIsRegister={setIsRegister} />
            <Info />
          </>
        )
      }
    </div>
  )
}

export default Index