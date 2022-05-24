import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      return;
    } else {
      console.log(quantity);
      // let num = quantity.toString();
      item.quantity = quantity;
      setCartItems([...cartItems, item]);
      setItemCount(itemCount + quantity);
    }
  };

  const removeItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(...newCartItems);
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (itemId) => {
    let i;
    for (i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === itemId) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    let items = cartItems;
    console.log('items :>> ', items);
  }, [cartItems])
  

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear, itemCount, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
