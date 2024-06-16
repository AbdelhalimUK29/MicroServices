import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import authService from '../services/authService';
import { AuthStateContext } from '../context/authContext';



const SignUp = () => {
  const name=useRef();
  const email=useRef();
  const password=useRef();
  const [error,setError]=useState("")
  const {setToken,setUser}=AuthStateContext()
  

  const handelSubmit= async(e)=>{
    setError("")
    e.preventDefault()
    const Payload={
      name:name.current.value,
      email:email.current.value,
      password:password.current.value,
    }
    console.log(Payload)
    console.log("start")
    const res = await authService.register(Payload)
    .then(({data})=>{
      setUser(data)
      setToken(data.token)
    })
    .catch((err)=>{
      const {response} = err;
      console.log(err)
      if(response.status===401){
        setError(response.data.message)
      }
    })
  }

  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"70vh",}}>
      
    <form className="space-y-4 font-[sans-serif] max-w-md mx-auto bg-[#FFFFFF]"
    style={{boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.1)",}} onSubmit={handelSubmit}>
      {error && <div className='text-white bg-red-600 py-2 rounded-md font-mono text-center '>
              {error}
        </div>}
      <input type="text" placeholder="Enter Name"
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 focus:border-blue-500 rounded" ref={name} />
      <input type="email" placeholder="Enter Email" ref={email}
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 focus:border-blue-500 rounded" />

      <input type="password" placeholder="Enter Password" ref={password}
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 border-transparent focus:border-blue-500 rounded" />

      <button type="submit"
        className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm
         bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
         <p className='message'>Already registered ? <Link to='/login'>Sign in Now!</Link></p>
    </form>
    </div>
  )
}

export default SignUp