import { useState } from "react";
import { ShopContext } from "./shopContext";
import { PRODUCTS } from "../products";

export const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = ()=> {
    let totalAmount = 0;
    for (const item in cartItems) {
        if(cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number((item)));
            totalAmount += cartItems[item] * itemInfo.price
        }
    } 
    
    return totalAmount;
  }

  const clearCart = (itemId, id) => {
    removeFromCart(itemId);
    updateItemCount((0), id)
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemCount,
    getTotalCartAmount,
    clearCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
