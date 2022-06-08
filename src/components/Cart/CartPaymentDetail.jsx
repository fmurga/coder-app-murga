
import React from "react";
import { NavLink } from "react-router-dom";
import PaymentDetail from "../extra/PaymentDetail";
import CheckOutlined from "../icons/CheckOutlined";

const CartPaymentDetail = () => {

  return (
    <div className="container w-5/12 h-full bg-slate-200 mt-0 pt-6 p-10 m-10 rounded-md">
      <PaymentDetail>
        <NavLink
          to="/checkout"
          className="px-3 py-2 w-max  text-white flex justify-center items-center cursor-pointer bg-purple-600 rounded-full hover:bg-purple-400 disabled:bg-purple-400 ">
          <CheckOutlined />
          Checkout
        </NavLink>
      </PaymentDetail>
    </div>
  );
};

export default CartPaymentDetail;
