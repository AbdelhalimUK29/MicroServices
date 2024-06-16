
import axiosClient from "../axiosClient";


const API_URL="http://localhost:5001/"

const getProduct=()=>{
    return axiosClient.get(API_URL+"api/products/" )
}

const getProductById=(id)=>{
    return axiosClient.get(API_URL+"api/products/"+id)
}

const createProduct=(Payload)=>{
    return axiosClient.post(API_URL+"api/products/",Payload,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        }
    )

}

const updateProduct=(id,Payload)=>{
    return axiosClient.put(API_URL+"api/products/"+id,Payload,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        }
    )
}

const deleteProduct=(id)=>{
    return axiosClient.delete(API_URL+"api/products/"+id)
}

export default {getProduct,getProductById,
    createProduct,updateProduct,
    deleteProduct

};

