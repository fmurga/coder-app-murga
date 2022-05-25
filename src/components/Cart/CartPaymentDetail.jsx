import React from "react";

const CartPaymentDetail = () => {
  return (
    <div className="container w-5/12 h-full bg-slate-200 mt-0 pt-6 p-10 m-10 rounded-md">
      <div className="flex flex-col gap-2">
        <h2 className="text-black border border-x-0 border-t-0 border-b-slate-50 pb-5 font-bold text-xl">
          Detalle de Compra
        </h2>
        <p className="text-gray-500 border border-x-0 border-t-0 border-b-slate-50 py-2">
          Subtotal:{" "}
        </p>
        <p className="text-gray-500 border border-x-0 border-t-0 border-b-slate-50 py-2">
          Impuestos:{" "}
        </p>
        <p className="text-gray-500 border border-x-0 border-t-0 border-b-slate-50 py-2">
          Envio:{" "}
        </p>
        <p className="text-black pt-2 font-bold text-lg">Total: </p>
      </div>
    </div>
  );
};

export default CartPaymentDetail;
