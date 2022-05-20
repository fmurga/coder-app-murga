import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate()
  const onAdd = (count) => {
    alert("Se Agregaron: " + count + " productos");
    return navigate("/cart");
  };

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row mx-auto">
        <div className="w-full lg:w-6/12 flex flex-col gap-2 mx-auto pt-10">
          {item && <span className="text-lg font-bold">{item.category}</span>}
          <div className="flex justify-center items-center  border-2 rounded-lg p-10">
            {item && (
              <img src={item.pictureUrl} alt={item.title} width={"50%"} />
            )}
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col mx-auto p-10">
          <div className="flex flex-row justify-between items-center">
            {item && (
              <h1 className="py-5 text-purple-500 font-bold text-4xl">
                {item.title}
              </h1>
            )}

            <p className="text-lg font-semibold">${item.price}</p>
          </div>
          <p className="text-xl ">{item.description}</p>
          <div className="p-10">
            {item && (
              <ItemCount
                initial={item.initial}
                stock={item.stock}
                onAdd={onAdd}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
