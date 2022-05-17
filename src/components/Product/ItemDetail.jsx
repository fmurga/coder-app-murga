import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (count) => {
    alert("Se Agregaron: " + count + " productos");
  };

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row mx-auto">
        <div className="w-full lg:w-6/12 flex flex-col gap-2 mx-auto px-3">
          <span className="text-lg font-bold py-10">Mujeres/ Ropa/ Sacos</span>
          <div className="flex justify-center items-center">
            <img src={item.pictureUrl} alt={item.title} width={"50%"} />
          </div>
        </div>

        <div className="w-full lg:w-6/12 flex flex-col mx-auto p-10">
          <div className="flex flex-row justify-between items-center">
            <h1 className="py-5 text-purple-500 font-bold text-4xl">
              {item.title}
            </h1>
            <p className="text-lg font-semibold">${item.price}</p>
          </div>
          <p className="text-xl ">{item.description}</p>
          <div className="p-10">
            <ItemCount
              initial={item.initial}
              stock={item.stock}
              onAdd={onAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
