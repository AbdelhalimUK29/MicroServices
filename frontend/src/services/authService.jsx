import axios from "axios";
import axiosClient from "../axiosClient";

const API_URL="http://localhost:5000/"
const register=(data)=>{
    return axiosClient.post(API_URL+"api/auth/register",data)
    
}

const login=(data)=>{
    return axiosClient.post(API_URL+"api/auth/login",data);
}

export default{register,login };