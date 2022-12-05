import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { loginAction } from '../../../server/actions/user.action';

import { authProps } from "../../../types/auth/auth.props";
import ErrorLogin from '../../../response/messages/errorLogin';

const Login = ({ setIsRegister }: authProps) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState = {
    email: "",
    password: ""
  }

  const [userData, setUserData] = useState(initialState)

  const { email, password } = userData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginAction(userData, navigate) as any)
  }

  const register = () => {
    setIsRegister(true)
  }

  return (
    <div className='container-login'>
      <ErrorLogin />
      <form className='form-login' onSubmit={handleSumbit}>
        <div className='separator'>
          <label className='label-form'>Email</label>
          <input type='text' name='email' className='input-form' onChange={handleChange} value={email} />
        </div>
        <div className='separator'>
          <label className='label-form'>Password</label>
          <input type='password' name='password' className='input-form' onChange={handleChange} value={password} />
        </div>
        <div className='separator'>
          <button className='button-form'>
            LOG IN
          </button>
        </div>
        <div className='separator'>
          <p className='paragraph-account'>I have not an account
            <b className='paragraph-register' onClick={register}>Register</b>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login