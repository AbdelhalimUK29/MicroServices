import axios from 'axios';

const axiosClient=axios.create();

axiosClient.interceptors.request.use((config)=>{
    const token=localStorage.getItem('Access_token');
    config.headers.Authorization=`Bearer ${token}`;
    return config;
})

axiosClient.interceptors.response.use((response)=>{
    return response;

},
(Error)=>{
   try{const {response}=Error;
   console.log(response.status)
    if(response.status===401){
        
        localStorage.removeItem('Access_token');
        
    }
} 
catch(err){
    console.log(err);
}
throw Error;
}
);
export default axiosClient;