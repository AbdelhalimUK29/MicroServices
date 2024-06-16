import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import productService from '../../services/productService'

const ShowProduct = () => {
   const [Product,setProduct]=useState([]);

   const IMAGE_URL='http://localhost:5001/uploads/'

  
  useEffect(()=>{

    listProduct()
  },[])
  
  const handelDelete= async (id)=>{

    const res = await productService.deleteProduct(id)
    .then((res)=>{
      //setNotification
      setProduct(Product.filter(item=> item._id===id))
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  
  const listProduct=()=>{
    
    productService.getProduct()
    .then(({data})=>{
      console.log(data)
      setProduct(data)

    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:"8px",}}>
        <h1>Products</h1>
        <Link to="/dashboard/create" className='btn-add '>
          ADD Product
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr className='text-center'>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
              <tbody>
                {
                  Product.map((item,index)=>{
                    return (
                      <tr key={item._id} >
                        <td>{index +1}</td>
                        <td>
                          <img src={`http://localhost:5001/${item.image}`} alt={item.name} className=' rounded-md w-8 h-[30px] bg-cover '/>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <div className='text-center'>
                          <button className='btn-edit'>
                        <Link to={`/dashboard/update/${item._id}`}  >Edit</Link>
                          </button>
                        <button  className='btn-delete'style={{marginLeft:'4px'}}
                           onClick={()=>handelDelete(item._id)}
                        >delete</button>
                          </div>
                        </td>

                      </tr>
                    )
                  })
                }
              </tbody>
        </table>
      </div>   
    </div>
  )
}

export default ShowProduct