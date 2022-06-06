import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Select from "react-select";
import { CartContext } from "../../contexts/CartContextProvider";
import { NavLink } from "react-router-dom";

const CartItem = ({ item }) => {
  const { modifyCartItemQuantity, removeItem } = useContext(CartContext);
  const [selectedValue, setSelectedValue] = useState(item.quantity);
  const [selectOptions, setSelectOptions] = useState([]);
  const options = () => {
    let aux = [];
    for (let i = 1; i <= 6; i++) {
      aux = [...aux, { value: i, label: i }];
    }
    return aux;
  };

  const handleSelectChange = (selectedValue) => {
    setSelectedValue(selectedValue);
    modifyCartItemQuantity(item.id, selectedValue.value);
  };

  useEffect(() => {
    setSelectOptions(options());
  }, []);

  return (
    <>
      {item.sizeSelected.map((size) => (
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
              onChange={handleSelectChange}
              options={selectOptions}
              getOptionValue={(option) => option.value}
              getOptionLabel={(option) => option.label}
              value={selectedValue}
              placeholder={size.peritem}
            />
          </div>
          <div>
            <button
              onClick={() => removeItem(item.id, size.name)}
              type="button"
              className="bg-white rounded-full p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <CloseIcon />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
