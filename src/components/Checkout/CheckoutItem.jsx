import React from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";

const CheckoutItem = ({ item }) => {
  return (
    <>
      {item &&
        item.sizeSelected.map((size) => (
          <div className="flex justify-between w-5/6 h-40 border-y-slate-400 shadow-md rounded-lg hover:scale-105 transition duration-100 p-2">
            <div className="inline-flex gap-2">
              <img
                className="rounded-lg"
                src={item.pictureUrl}
                alt={item.title}
                width={100}
              />
              <div>
                <NavLink to={`/item/${item.id}`}>
                  <h2 className="text-purple-600 font-bold text-md">
                    {item.title}
                  </h2>
                </NavLink>
                <p className="text-lg font-semibold">
                  Talle: <span className="font-normal">{size.name}</span>
                </p>
                <p className="text-md font-semibold">${item.price}</p>
              </div>
            </div>
            <div>
              <Select
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.label}
                placeholder={size.peritem}
                isDisabled={true}
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CheckoutItem;
