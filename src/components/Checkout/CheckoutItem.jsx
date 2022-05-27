
import React from 'react';
import Select from "react-select";


const CheckoutItem = ({item}) => {
  return (
    <div className="flex justify-between w-5/6 h-40 border-y-slate-400 shadow-md rounded-lg hover:scale-105 transition duration-100 p-2">
    <div className="inline-flex gap-2">
      <img
        className="rounded-lg"
        src={item.pictureUrl}
        alt={item.title}
        width={100}
      />
      <div>
        <h2 className="text-purple-600 font-bold text-md">{item.title}</h2>
        <p className="text-lg font-semibold">
          Talle: <span className="font-normal">{item.sizeSelected}</span>
        </p>
        <p className="text-md font-semibold">${item.price}</p>
      </div>
    </div>
    <div>
      <Select
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        placeholder={item.quantity}
        isDisabled={true}
      />
    </div>
  </div>
  )
}

export default CheckoutItem