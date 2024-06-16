import React from 'react';
import {IoMdLock} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi'
import { CarteItems } from './CarteItems';
import { useProductContext } from '../../context/productContext';


export const SideBar = () => {
  const {IsOpen,setIsOpen,Cart,ClearCart}=useProductContext()
  const Total=Cart.reduce((acc,item)=>{
    const price=parseFloat(item.price)
    const amount=parseInt(item.amount)   
    // console.log(typeof item.price ,typeof )
     return acc+(price * amount)}
  
  ,0)
  return (
    <div className={` ${IsOpen ? 'right-0' : '-right-full' }  transition-all duration-500
     w-full h-full  fixed bg-gray-50 top-0
       md:w-[600px] lg:w-[500px] z-40 overflow-y-scroll p-6`}>
      <div className=' flex justify-between items-center '>
        <div>
          Shopping Book({Cart.length})
        </div>
        <div className='text-[22px] font-sans text-black/60
         cursor-pointer 
         ' >
           <IoMdLock onClick={()=>setIsOpen(!IsOpen)}  />
        </div>            
      </div>
     <div className='w-full '>
      {Cart.map((el,index)=>{
        return <CarteItems el={el} key={index}/> })}
     </div>
    <div className='py-6'>
      <div className='flex justify-between items-center '>
        <div>
          total:<span>{Total.toFixed(2)}</span>
        </div>
        <div className='bg-red-500 w-10 h-10 rounded-lg
         flex items-center justify-center text-white cursor-pointer text-xl'
         onClick={ClearCart}><FiTrash2 /></div>
      </div>
    </div>
    </div>
  )
}
