import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GiPalmTree } from "react-icons/gi";

const Main = () => {

  const navigate = useNavigate()

  const navigateMain = () => {
    if (localStorage.getItem('auth-data')) {
      navigate('/main')
    }
  }

  return (
    <div className='container-main-header'>
      <GiPalmTree className='icon-header' onClick={navigateMain} />
      <h1 className='text-header' onClick={navigateMain}>VLOGS</h1>
    </div>
  )
}

export default Main