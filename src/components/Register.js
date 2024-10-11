import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {register} from "../features/auth/authSlice"

const Register = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(register({email,password}))
        setEmail("")
        setPassword("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='email'
        />
        <input
        type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'
        />
        <button type='submit'>Register</button>
    </form>
  )
}

export default Register