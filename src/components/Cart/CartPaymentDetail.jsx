import { CheckOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";

const CartPaymentDetail = () => {
  const { subtotal, total, impuestos } = useContext(CartContext);

  return (
    <div className="container w-5/12 h-full bg-slate-200 mt-0 pt-6 p-10 m-10 rounded-md">
      <div className="flex flex-col gap-2">
        <h2 className="text-black border border-x-0 border-t-0 border-b-slate-50 pb-5 font-bold text-xl">
          Detalle de Compra
        </h2>
        <p className="text-gray-500 border border-x-0 border-t-0 border-b-slate-50 py-2">
          Subtotal: {subtotal || 0}
        </p>
        <p className="text-gray-500 border border-x-0 border-t-0 border-b-slate-50 py-2">
          Impuestos: {impuestos || 0}
        </p>
        <div className="inline-flex justify-between">
          <p className="text-black pt-2 font-bold text-lg">
            Total: {total || 0}
          </p>
          <NavLink
            to="/checkout"
            className="px-3 py-2 w-max  text-white flex justify-center items-center cursor-pointer bg-purple-600 rounded-full hover:bg-purple-400 disabled:bg-purple-400 ">
            <CheckOutlined />
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartPaymentDetail;
