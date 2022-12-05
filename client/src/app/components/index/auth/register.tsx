import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import { registerAction } from '../../../server/actions/user.action';

import { authProps } from "../../../types/auth/auth.props";

import ErrorRegister from '../../../response/messages/errorRegister';

const Register = ({ setIsRegister }: authProps) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialState = {
    nickname: "",
    email: "",
    password: "",
    confirm: ""
  }

  const [userData, setUserData] = useState(initialState)

  const [pass, setPass] = useState(false)
  const [confirmPass, setConfirmPass] = useState(false)

  const { nickname, email, password, confirm } = userData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value })
  }

  const sumbitChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(registerAction(userData, navigate) as any)
  }

  const login = () => {
    setIsRegister(false)
  }

  const showPassword = () => {
    setPass(!pass)
  }
  const showConfirmPassword = () => {
    setConfirmPass(!confirmPass)
  }

  return (
    <div className='container-register'>
      <ErrorRegister />
      <form className='form-register' onSubmit={sumbitChange}>
        <div className='separator'>
          <label className='label-form'>Nick name</label>
          <input type='text' name='nickname' className='input-form' onChange={handleChange} value={nickname} />
        </div>
        <div className='separator'>
          <label className='label-form'>Email</label>
          <input type='text' name='email' className='input-form' onChange={handleChange} value={email} />
        </div>
        <div className='separator'>
          <label className='label-form'>Password</label>
          <div className='container-input-password'>
            <input type={pass ? "text" : "password"} name='password' className='input-form' onChange={handleChange} value={password} />
            {
              pass ? <AiFillEyeInvisible onClick={showPassword} className="show-pass" /> : <AiFillEye onClick={showPassword} className="show-pass" />
            }
          </div>
        </div>
        <div className='separator'>
          <label className='label-form'>Confirm password</label>
          <div className='container-input-password'>
            <input type={confirmPass ? "text" : "password"} name='confirm' className='input-form' onChange={handleChange} value={confirm} />
            {
              confirmPass ? <AiFillEyeInvisible onClick={showConfirmPassword} className="show-confirm" /> : <AiFillEye onClick={showConfirmPassword} className="show-confirm" />
            }
          </div>
        </div>
        <div className='separator'>
          <button className='button-form'>
            REGISTER
          </button>
        </div>
        <div className='separator'>
          <p className='paragraph-account'>I have already an account
            <b className='paragraph-register' onClick={login}>Log In</b>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register