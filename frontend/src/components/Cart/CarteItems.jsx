import React from 'react';
import {IoMdRemove,IoMdAdd,IoMdTrash,IoMdClose} from 'react-icons/io';
import { useProductContext } from '../../context/productContext';
export const CarteItems = ({el}) => {
  const {name,price,image,amount,_id}=el;
 const {RemoveItem,MinceOne,AddMore}=useProductContext()
  
  const ImageURL=`http://localhost:5001/${image}`
  return (
    <div className='flex items-center w-full py-2'>
      <div className='flex items-center gap-6  w-full'>
      <div
  
  
> <img src={ImageURL} alt={name} className='w-[80px] h-[80px] bg-cover bg-center bg-no-repeat rounded-lg'/></div>
    <div className='flex flex-col w-full'>
    <div className='flex justify-between items-center '>
    <div>{name}</div>
    <div className='hover:text-red-600 text-xl cursor-pointer
    '><IoMdClose onClick={()=>RemoveItem(_id)}/>
    </div>
    </div>
    <div className='  flex justify-between items-center '>
    <div className='flex items-center gap-1'><div className='cursor-pointer 
    ' onClick={()=>MinceOne(_id)}><IoMdRemove/></div>{amount}
    <div className='cursor-pointer' onClick={()=>AddMore(_id)}><IoMdAdd/></div></div>
    <div className='text-gray-500 text-lg'>{parseFloat(price * amount).toFixed(2)}$</div></div>
    </div>
    
    
    </div>
  </div>
  )
}