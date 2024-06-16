import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { AuthStateContext } from '../context/authContext'

const GuestLayout = () => {
    const{token}=AuthStateContext();
   if(token){
    return <Navigate to="/"/>
   }
  return (
    <div>
      <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
  <div className='flex flex-wrap items-center justify-between gap-4 w-full'>
  <div><h1>
    <Link to="/" className='font-mono font-bold text-2xl'>Book<span className='text-blue-600'>Shop</span></Link>
    </h1>
    </div>

    

    <div className='flex items-center max-lg:ml-auto space-x-5'>
      <Link to="/Dashboard/show">
      <span className='hover:text-[#007bff] text-black-600 font-bold block text-base'>
        Dashboard
      </span>
      </Link>
      <Link to="/signup">
      <span className='hover:text-[#007bff] text-black-600 font-bold block text-base'>
        Sign in
      </span>
      </Link>
    </div>
  </div>
</header>

      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default GuestLayout