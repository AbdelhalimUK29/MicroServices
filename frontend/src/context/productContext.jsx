import {createContext, useContext, useState} from "react"


const productContext=createContext({
    Products:[],
    Cart:[],
    IsOpen:null,
    setProducts:()=>{ },
    handelAdd:()=>{ },
    setIsOpen:()=>{ },MinceOne:()=>{ },
    AddMore:()=>{ },ClearCart:()=>{ },
    RemoveItem:()=>{ },
})

export default function ProductProvider({children}){
    const [Products,setProducts]=useState([]);
    const [Cart,setCart]=useState([]);
    const [IsOpen,setIsOpen]=useState(false)
    
    const handelAdd=(item,id)=>{
        const newItem={...item,amount:1}
       
        //check if the item is already in the cart
        const CartItem=Cart.find((item)=>{
            return item._id ===id })
        if (CartItem){
            const newCart=[...Cart].map((item)=>{
                if(item._id===id){
                    return {...item,amount:CartItem.amount +1 }
                }else{
                    return item;
                }
            })
            setCart(newCart)
        }else{
            setCart([...Cart,newItem])
        }  
        }
        const RemoveItem=(id)=>{
            const NewCart=Cart.filter((item)=>{
                return item._id !== id
            })
            setCart(NewCart);
        }
        const ClearCart =()=>{
            setCart([])
        }
        const AddMore=(id)=>{
            const CarteItem=Cart.find((item)=>{
                return item._id==id
            })
            if (CarteItem){
                const NewItems=[...Cart].map((item)=>{
                    if(item._id==id){
                        return {...item,amount:CarteItem.amount +1}
                    }else{
                        return item
                    }
                })
                setCart(NewItems)
            }
        }
        const MinceOne=(id)=>{
          const CarteItem=Cart.find((item)=>{
            return item._id==id
          })
          if(CarteItem.amount >1){
            const NewCart=[...Cart].map((item)=>{
                if(item._id===id){
                return {...item,amount:CarteItem.amount -1} 
                }else{
                    return item
                }
            })
            setCart(NewCart);
          }else{
            setCart(Cart.filter((item)=>item._id!=id))
          }
        }
       

    return (
        <productContext.Provider value={{Products,setProducts,handelAdd,Cart,IsOpen,setIsOpen,RemoveItem,
            MinceOne,AddMore,ClearCart
        }}>
            {children}
        </productContext.Provider>
    )
}

export const useProductContext=()=> useContext(productContext);
