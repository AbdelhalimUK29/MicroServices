import React, { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { AuthStateContext } from '../context/authContext'
import { IoCartOutline } from "react-icons/io5"
import { FaUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Footer from '../components/Footer';
import { SideBar } from '../components/Cart/SideBar';
import { useProductContext } from '../context/productContext';


const DefaultLayout = () => {
    const {token}=AuthStateContext()
    const [check,setCheck]=useState(false)
    const {setIsOpen,IsOpen,Cart}=useProductContext()
    if(!token){
        return <Navigate to="/login"/>
    }
    const handelLogOut=()=>{
      localStorage.removeItem("Access_token")
      window.location.pathname="/login"
    }
    const number=Cart.reduce((acc,item)=>acc +item.amount,0)
  return (
    <div>
      <header className='shadow-md py-4  top-0 sticky z-[20] ' >
  <div className='flex justify-between items-center px-4'>
    <div><h1>
    <Link to="/" className='font-mono font-bold text-2xl'>Book<span className='text-blue-600'>Shop</span></Link>
    </h1>
    </div>
    
   <div className='flex justify-between items-center gap-x-4 '>
      <ul className='md:flex justify-center items-center hidden '  >  
        <li className='max-lg:border-b max-lg:py-3 px-3'>
          <Link to="/home" className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Home</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><Link to='/product'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Product</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Feature</a>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Blog</a>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>About</a>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Contact</a>
        </li>
      </ul>
      <div className='flex items-center  space-x-5'>
      <button className='md:hidden block '>
          {check  ?  <IoMdClose className='text-2xl' onClick={()=>setCheck(!check)}/>
           :  <IoMdMenu className='text-2xl' onClick={()=>setCheck(!check)}/>}
        </button>
        <FaUser className="cursor-pointer hover:fill-[#007bff] inline h-[30px]"
         onClick={handelLogOut}/>
      <span className="relative">
          <span className='hover:fill-[#007bff]'>
          <IoCartOutline className="cursor-pointer  inline w-[20px] h-[20px]" 
            onClick={()=>setIsOpen(!IsOpen)}/>
          </span>    
        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{number}</span>
      </span>
    </div> 
   </div>
  </div>
  <div className={`${ check ? "" : "hidden" }  absolute z-[9999]` }>
  <ul className='md:hidden justify-center items-center h-[50vh]  bg-white shadow-md
  w-[300px]'  >  
        <li className='max-lg:border-b max-lg:py-3 px-3'>
          <Link to="/home" className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Home</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><Link to='/product'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Product</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Feature</a>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Blog</a>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>About</a>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='#'
            className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Contact</a>
        </li>
      </ul>
  </div>
</header>
      <SideBar />
      <div><Outlet/></div>
      <Footer/>  
    </div>
  )
}

export default DefaultLayout