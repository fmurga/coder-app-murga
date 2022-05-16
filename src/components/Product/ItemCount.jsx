import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ButtonContainer } from "../buttons/ButtonContainer";
import { Shop, ShoppingCart } from "@mui/icons-material";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [disableDec, setDisableDec] = useState(false);
  const [disableAdd, setDisableAdd] = useState(false);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count === 1) {
      setDisableDec(true);
      setDisableAdd(false);
    }
    if (count === stock) {
      setDisableDec(false);
      setDisableAdd(true);
    }
    if (count > 1) {
      setDisableDec(false);
    }
    if (count < stock){
      setDisableAdd(false);
    }
  }, [disableAdd, disableDec, count, stock]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-2 justify-between my-3">
        <ButtonContainer onClick={decrement} disable={disableDec}>
          <RemoveIcon />
        </ButtonContainer>
        <label className="text-center w-44 bg-slate-200 rounded-lg">
          {count} 
        </label>
        <ButtonContainer onClick={add} disable={disableAdd}>
          <AddIcon />
        </ButtonContainer>
      </div>
      <button
        className="w-7/12 p-2 bg-purple-600 hover:bg-purple-400 text-white font-bold rounded-lg"
        onClick={() => onAdd(count)}>
          <ShoppingCart /> Agregar
      </button>
    </div>
  );
};

export default ItemCount;
