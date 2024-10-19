import React, { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from "react-router-dom";
import {products} from '../Data/AllProduct'
import {toast} from 'react-toastify'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const delivery_fee = 10;
  const [search,setSearch] = useState('')
  const[showSearch,setShowSearch] = useState(true)
  const [cartItems,setCartItems] = useState({})
  const navigate = useNavigate()

  const addToCart = async(itemId,size)=>{
    if(!size){
        
        toast.error("Select Product Size")
        return;
    }
   
    let cartData = structuredClone(cartItems)

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] +=1
        }else{
            cartData[itemId][size] = 1
        }
    }
    else{
        cartData[itemId] ={}
        cartData[itemId][size] =1
        toast.success("Added Cart")
    }
    setCartItems(cartData)

}

const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

}

const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
        let itemInfo = products.find((product) => product._id === items);
        for (const item in cartItems[items]) {
            try {
                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            } catch (error) {
            }
        }
    }
    return totalAmount;
}


  const value = {
    products, currency, delivery_fee,search,setSearch,showSearch,
    setShowSearch,cartItems,navigate,addToCart,updateQuantity,getCartAmount
};
  return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider