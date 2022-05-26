import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

const CartPaymentDetail = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [impuestos, setImpuestos] = useState(0);
  
  const {cartItems} = useContext(CartContext);


  const calcSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal = subtotal + (item.quantity * item.price);
    });
    setSubtotal(subtotal);
  }

  const calcImpuestos = () => {
    let impuestos = 0;
    cartItems.forEach(item => {
      impuestos = impuestos + (item.quantity * item.price * 0.21);
    });
    setImpuestos(impuestos)
  }

  const calcTotal = () => {
    setTotal(impuestos + subtotal)
  }

  useEffect(() => {
    calcSubtotal();
    calcImpuestos();
    calcTotal();
  }, [subtotal, impuestos, total])
  


  return (
    <div className="container w-5/12 h-full bg-slate-200 mt-0 pt-6 p-10 m-10 rounded-md">
      <div className="flex flex-col gap-2">
        <h2 className="text-black border border-x-0 border-t-0 border-b-slate-50 pb-5 font-bold text-xl">
          Detalle de Compra
        </h2>
        <p className="text-gray-500 border border-x-0 border-t-0 border-b-slate-50 py-2">
          Subtotal: {subtotal}
        </p>
        <p className="text-gray-500 border border-x-0 border-t-0 border-b-slate-50 py-2">
          Impuestos: {impuestos}
        </p>
        <p className="text-black pt-2 font-bold text-lg">Total: {total}</p>
      </div>
    </div>
  );
};

export default CartPaymentDetail;
