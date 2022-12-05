import React from 'react'

const Success = ({ msg }: {msg: string}) => {
  return (
    <div className='container-message-success'>
        <p className='message'>{msg}</p>
    </div>
  )
}

export default Success