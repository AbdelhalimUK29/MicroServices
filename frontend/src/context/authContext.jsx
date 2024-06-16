import {createContext,useState,useContext} from "react";


const authContext=createContext({
    user:null,
    token:null,
    setToken:()=>{  },
    setUser:()=>{  },
});



export default function ContextProvider({children}){
   const [token,_setToken]=useState(localStorage.getItem("Access_token"));
   const [user,setUser]=useState({});
   
   const setToken=(token)=>{
    _setToken(token)
    if(token){
        localStorage.setItem("Access_token",token)
    }else{
        localStorage.removeItem("Access_token")
    }
   }




    return <authContext.Provider  value={{user,token,setToken,setUser}}>
                {children}
    </authContext.Provider>
}
export const AuthStateContext=()=> useContext(authContext);