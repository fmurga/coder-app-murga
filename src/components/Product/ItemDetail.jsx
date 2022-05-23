import { ShoppingBag } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "../buttons/ButtonContainer";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const onAdd = (count) => {
    setCount(count);
    alert("Se Agregaron: " + count + " productos");
  };

  const endBuy = () => {
    return navigate("/cart");
  };
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row mx-auto">
        <div className="w-full lg:w-6/12 flex flex-col gap-2 mx-auto">
          <div className="flex justify-center items-center  border-2 rounded-lg p-10">
            {item && (
              <img src={item.pictureUrl} alt={item.title} width={"50%"} />
            )}
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col mx-auto px-10 justify-between">
          <div>
            <div className="flex flex-row justify-between items-center">
              {item && (
                <h1 className="text-purple-500 font-bold text-4xl">
                  {item.title}
                </h1>
              )}

              <p className="text-lg font-semibold">${item.price}</p>
            </div>
            <p className="text-xl">{item.description}</p>
          </div>
          {count === 0 ? (
            <>
              {item && (
                <ItemCount
                  initial={item.initial}
                  stock={item.stock}
                  onAdd={onAdd}
                />
              )}
            </>
          ) : (
            <>
              <ButtonContainer onClick={() => endBuy()}>
                <ShoppingBag />
                Finalizar Compra
              </ButtonContainer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
