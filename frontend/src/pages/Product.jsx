import React, { useEffect, useState } from 'react';
import ProductCard from "../components/Product/ProductCard"
import SearchBar from '../components/Product/SearchBar';
import { useProductContext } from '../context/productContext';
import productService from '../services/productService';

const Product = () => {
  const {setProducts,Products}=useProductContext();
  const [Data,setData]=useState([])
  

  const [filter,setFilter]=useState({
    name:"",
    price:"",
})

  const handelChange=(e)=>{
     setFilter({
      ...filter,
      [e.target.name]:e.target.value
     })
     
  }

  const handelFilter=()=>{
    const{name,price}=filter
     setData(Products)
    if(name && price){
      setData(Products.filter(item=>item.name.includes(filter.name) && item.price ==filter.price))
    }else if(name && price==""){
      setData(Products.filter(item=>item.name.includes(filter.name)))
    }
    else if(price && name==""){
      setData(Products.filter(item=>item.price ==filter.price)) 
    }
    
  }
  

  useEffect(()=>{

    const fetchProductData= async()=>{
      const res=await productService.getProduct()
      .then(({data})=>{
        setProducts(data)
        setData(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    fetchProductData()
  },[])
 
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">     
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Book store</h2>
      <div className='flex justify-center items-center'>
      <SearchBar change={handelChange} filter={handelFilter}/>
      </div>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 mx-4">best Product</h2>
       <p className='text-gray-600 mb-12 mx-4'>find Your Perfect Match and dive into the world of books</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          Data.map((item)=>{
           return  <ProductCard key={item._id} {...item} item={item} />
          })
        }
        
        </div>
      </div>
  )
}

export default Product
