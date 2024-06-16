import React from 'react'
import { useProductContext } from '../../context/productContext'

const ProductCard = ({_id,name,description,quantity,price,image,item}) => {
  

  const {handelAdd}=useProductContext()

  return (
    <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
      <div className="  h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img src={`http://localhost:5001/${image}`} alt={name} className="h-full w-full object-cover rounded-md" />
      </div>
    <div className="text-center bg-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className='text-gray-600 text-wrap'>{description}</p>
      <h4 className="text-lg text-gray-800 font-bold mt-4">${price} <strike
        className="text-gray-400 ml-2 font-medium">$500</strike>
      </h4>
      <h4 className="text-lg text-gray-800 font-bold mt-2">Stock: <span
        className="text-gray-400 ml-2 font-medium">{quantity}</span>
      </h4>
      <button type="button" onClick={()=>handelAdd(item,_id)}
        className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-600 text-base text-white font-semibold rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  viewBox="0 0 512 512" >
          <path
            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
            data-original="#000000"></path>
        </svg>
        Add to cart</button>
    </div>
  </div>
  )
}

export default ProductCard