import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import EmptyCart from "../extra/EmptyCart";
import CheckoutForm from "./CheckoutForm";
import CheckoutItemList from "./CheckoutItemList";

const CheckoutContainer = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <section className="container mx-auto h-full py-10">
      {cartItems.length > 0 ? (
        <>
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-2xl">Checkout</h1>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-between mx-20 py-10">
              <CheckoutItemList items={cartItems} />
              <CheckoutForm />
            </div>
          </div>
        </>
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </section>
  );
};

export default CheckoutContainer;
