import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let aux = cartItems.find((prod) => prod.id === item.id);
      cartItems.splice((prod) => prod.id === item.id);
      aux.quantity = aux.quantity + quantity;
      setCartItems([...cartItems, aux]);
      setItemCount(itemCount + quantity);
    } else {
      item.quantity = quantity;
      setCartItems([...cartItems, item]);
      setItemCount(itemCount + quantity);
    }
  };

  const removeItem = (itemId) => {
    const removed = cartItems.find((item) => item.id === itemId);
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems([...newCartItems]);
    setItemCount(itemCount - removed.quantity);
  };

  //TODO: Mejorar logica esta medio extraña
  const modifyCartItemQuantity = (itemId, newQuantity) => {
    const aux = cartItems.find((prod) => prod.id === itemId);
    cartItems.splice((prod) => prod.id === itemId);
    aux.quantity = newQuantity;
    if (newQuantity > aux.quantity) {
      setItemCount(itemCount + (itemCount - newQuantity));
    } else {
      setItemCount(itemCount - (itemCount - newQuantity));
    }
    setCartItems([...cartItems, aux]);
  };

  const clear = () => {
    setCartItems([]);
    setItemCount(0);
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
    console.log("cartItems :>> ", cartItems);
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
