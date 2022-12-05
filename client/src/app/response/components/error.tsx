import React from 'react'

const Error = ({ msg }: {msg: string}) => {
  return (
    <div className='container-message'>
        <p className='message'>{msg}</p>
    </div>
  )
}

export default Error