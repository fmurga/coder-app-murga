import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { NavLink } from "react-router-dom";

const CartWidget = ({ itemCount }) => {
  return (
    <button className="px-4 py-2 my-2 font-bold text-white hover:text-white hover:bg-slate-400 hover:rounded-full">
      <NavLink to="/cart" className="inline-flex justify-between text-center items-center">
          <p className="mr-1">{itemCount}</p>
          <ShoppingCartIcon />
      </NavLink>
    </button>
  );
};

export default CartWidget;
