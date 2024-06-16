import React, { useState } from 'react';
import productService from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const Navigate=useNavigate()
  const [error,setError]=useState(false)
  const [formData,setFormData]=useState({
    name:'',
    description:'',
    price:'',
    quantity:'',
    image:null,
  })

  const handelChange=(e)=>{
    setFormData(
      {
        ...formData,
      [e.target.name]:e.target.value    }
    )
  }

  const handelImageChange=(e)=>{
    setFormData(
      {
        ...formData,
        image:e.target.files[0],
      }
    )
  }
  
  const handelSubmit= async (e)=>{
    e.preventDefault();
    setError(false)
    const { name, description, price, quantity, image } = formData;
    const formDataWithoutImage = { name, description, price, quantity };

     // Create a new FormData object
     const DataToSend = new FormData();
     DataToSend.append('name', name);
     DataToSend.append('description', description);
     DataToSend.append('price', price);
     DataToSend.append('quantity', quantity);
     DataToSend.append('image', image);
     

     const res = await productService.createProduct(DataToSend)
     .then((res)=>{
      Navigate('/dashboard/show')
      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: '',
        image: null,
      });
     }
    )
     .catch((err)=>{console.log(err)
      const{response}=err;
      if(response ){
        if(response.status===400){
          setError(response.data.message.message)

        }else{
          console.log(err)
        }
      }
     })
  }
  return (
   
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"70vh",}}>
      <div>
      <button className='py-1 bg-blue-500 rounded-md px-2 my-2 text-white '>Add Product</button>
    <form className="space-y-4 font-[sans-serif] max-w-md mx-auto bg-[#FFFFFF]"
    style={{boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.1)",}} onSubmit={handelSubmit}>
      {error && <div className='text-white bg-red-600 py-2 rounded-md font-mono text-center '>
              {error}
        </div>}
        <input type="file"  name="image" onChange={handelImageChange} 
        accept='image/*'  required
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 border-transparent focus:border-blue-500 rounded" />
      <input type="text" placeholder="Product Name" name="name" onChange={handelChange} value={formData.name}
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 focus:border-blue-500 rounded"  required />
      <textarea  placeholder="Description...." name="description" onChange={handelChange} 
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 focus:border-blue-500 rounded" value={formData.description} required ></textarea> 
      <input type="number" placeholder="Enter Price"  name="price" onChange={handelChange} value={formData.price}
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 focus:border-blue-500 rounded" required />
      <input type="number" placeholder="Enter Quantity"  name="quantity" onChange={handelChange} value={formData.quantity}
        className="px-4 py-3 bg-gray-100 w-full text-sm outline-none
         border-b-2 border-transparent focus:border-blue-500 rounded" required />

      <button type="submit"
        className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm
         bg-blue-500 text-white rounded hover:bg-blue-600">save</button>
    </form>
    </div>
    </div>
  )
}

export default ProductForm