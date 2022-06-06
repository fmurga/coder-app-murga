import React, { createContext, useEffect, useRef, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [impuestos, setImpuestos] = useState(0);
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  
  const itemsRef = useRef(cartItems);

  const addItem = (item, quantity, selectedSize) => {
    if (isInCart(item.id)) {
      const aux = cartItems.find((prod) => prod.id === item.id);
      const newCartItems = cartItems.filter((prod) => prod.id !== item.id);
      aux.quantity = aux.quantity + quantity;
      const auxSize = { name: selectedSize, peritem: quantity };
      aux.sizeSelected.push(auxSize);
      setCartItems([...newCartItems, aux]);
    } else {
      item.quantity = quantity;
      item.sizeSelected = [];
      const auxSize = { name: selectedSize, peritem: quantity };
      item.sizeSelected.push(auxSize);
      setCartItems([...cartItems, item]);
    }
  };

  const removeItem = (itemId, sizeName) => {
    const aux = cartItems.find((item) => item.id === itemId);
    if (aux.sizeSelected.length > 1) {
      const size = aux.sizeSelected.find((item) => item.name === sizeName);

      const index = aux.sizeSelected.indexOf(size);
      if (index > -1) {
        aux.sizeSelected.splice(index, 1); // 2nd parameter means remove one item only
      }
      setCartItems([...cartItems]);
    } else {
      const newCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems([...newCartItems]);
    }
  };

  const modifyCartItemQuantity = (itemId, newQuantity) => {
    const aux = cartItems.find((prod) => prod.id === itemId);
    const newCartItems = cartItems.filter((prod) => prod.id !== itemId);
    aux.quantity = newQuantity;
    setCartItems([...newCartItems, aux]);
  };

  const totalInCart = () => {

    return cartItems.reduce((acc, prod) => {
      let aux = 0;
      prod.sizeSelected.forEach(element => {
        aux = aux + element.peritem;
      });
      return (acc = acc + aux);
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

  const calcSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal = subtotal + item.quantity * item.price;
    });
    setSubtotal(subtotal);
  };

  const calcImpuestos = () => {
    let impuestos = 0;
    cartItems.forEach((item) => {
      impuestos = impuestos + item.quantity * item.price * 0.21;
    });
    setImpuestos(impuestos);
  };

  const calcTotal = () => {
    setTotal(impuestos + subtotal);
  };


  const addLocalItems = (item) => {
    if(Array.isArray(item)){
      setCartItems([...itemsRef.current, ...item])
    }
    else{
      setCartItems([...itemsRef.current, item]);
    }
  }

  useEffect(() => {
    setItemCount(totalInCart());
  }, [cartItems]);

  useEffect(() => {
    let aux = cartItems;
    console.log("cartItems", aux);
  }, [cartItems]);

  useEffect(() => {
    calcSubtotal();
    calcImpuestos();
    calcTotal();
  }, [cartItems, subtotal, impuestos]);

  useEffect(()=>{
    let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
    addLocalItems(prev_items)
    setIsInitiallyFetched(true)
  },[])


useEffect(() => {
  if(isInitiallyFetched){
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
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
        total,
        subtotal,
        impuestos,
        addLocalItems
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
