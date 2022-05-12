import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

const CartWidget = () => {
  return (
    <button className="px-4 py-2 my-2 font-bold text-white hover:text-white hover:bg-slate-400 hover:rounded-full">
      <div className="flex felx-row justify-between text-center items-center">
        <p className="mr-1">4</p>
        <ShoppingCartIcon />
      </div>
    </button>
  );
};

export default CartWidget;
