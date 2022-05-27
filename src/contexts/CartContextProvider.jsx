import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (item, quantity, selectedSize) => {
    if (isInCart(item.id)) {
      const aux = cartItems.find((prod) => prod.id === item.id);
      const newCartItems = cartItems.filter((prod) => prod.id !== item.id);
      aux.quantity = aux.quantity + quantity;
      aux.sizeSelected = selectedSize;
      setCartItems([...newCartItems, aux]);
    } else {
      item.quantity = quantity;
      setCartItems([...cartItems, item]);
    }
  };

  const removeItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems([...newCartItems]);
  };

  const modifyCartItemQuantity = (itemId, newQuantity) => {
    const aux = cartItems.find((prod) => prod.id === itemId);
    const newCartItems = cartItems.filter((prod) => prod.id !== itemId);
    aux.quantity = newQuantity;
    setCartItems([...newCartItems, aux]);
  };

  const totalInCart = () => {
    return cartItems.reduce((acc, prod) => {
      return (acc = acc + prod.quantity);
    }, 0);
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
    setItemCount(totalInCart());
  }, [cartItems]);

  useEffect(() => {
    let aux = cartItems;
    console.log("cartItems", aux);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        itemCount,
        cartItems,
        modifyCartItemQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
