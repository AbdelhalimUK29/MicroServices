import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import authService from '../services/authService';
import { AuthStateContext } from '../context/authContext';

const Login = () => {

  
  const email=useRef();
  const password=useRef();
  const [error,setError]=useState("")
  const {setToken,setUser}=AuthStateContext()
  

  const handelSubmit= async(e)=>{
    setError("")
    e.preventDefault()
    const Payload={
      email:email.current.value,
      password:password.current.value,
    }
    console.log(Payload)
    console.log("start")
    const res = await authService.login(Payload)
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
    <form className="space-y-4 font-[sans-serif] max-w-md mx-auto bg-[#FFFFFF] transition-all"
    style={{boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.1)",}}
                 onSubmit={handelSubmit}>
      {error && <div className='text-white bg-red-600 py-2 rounded-md font-mono text-center '>
              {error}
        </div>}
      <input type="email" placeholder="Enter Email"
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 border-blue-500 rounded"  ref={email}/>

      <input type="password" placeholder="Enter Password"
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 border-transparent focus:border-blue-500 rounded" ref={password}/>

      <button 
        className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm
         bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
         <p className='message'>You Do not Have Account Yet ? <Link to='/signup'>Register !</Link></p>
    </form>
    </div>
  )
}

export default Login