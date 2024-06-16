import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { useProductContext } from '../context/productContext'

const TopProduct = ({image,name,description,_id,item}) => {

  const {handelAdd}=useProductContext()
  return (
    <div data-aos='zoom-in' className='rounded-xl  
                    bg-white dark:bg-gray-800 hover:bg-primary 
                    dark:hover:bg-[#193BAA] shadow-xl group duration-300 
                    dark:text-white my-10
                    '>
                    <div className='flex items-center justify-center'>
                        <img src={`http://localhost:5001/${image}`} alt=''
                        className='w-[150px] h-[220px] object-cover
                        group-hover:scale-105 duration-300 rounded-xl drop-shadow-md'/>
                    </div>
                    <div className='p-2 text-center'>
                    <div className='flex items-center justify-center gap-1 w-full  '>
                      <FaStar className='text-yellow-400 '/>
                      <FaStar className='text-yellow-400 '/>
                      <FaStar className='text-yellow-400 '/>
                      <FaStar className='text-yellow-400 '/>
                      <FaStar className='text-yellow-400 '/>
                    </div>
                    <h1 className='text-xl font-bold text-black'>
                        {name}
                    </h1>
                    <p className='text-gray-800 group-hover:text-white text-sm 
                    dark:text-white dark:group-hover:text-gray-800
                     duration-300 line-clamp-2 text-nowrap '>
                        {description}
                    </p>
                    <button onClick={()=>handelAdd(item,_id)} className='rounded-full bg-gradient-to-r from-secondary 
                    to-brave py-1 px-4 hover:scale-105
                    text-center text-black border border-blue-600'  >
                     Order Now
                    </button>
                    </div>
                   </div>
  )
}

export default TopProduct