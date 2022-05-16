import React from "react";
import ItemCount from "./ItemCount";

const Item = ({item}) => {

  const onAdd = (count) => {
    alert("Se Agregaron: " + count + " productos");
  };

  
  return (
    <div className="flex flex-col justify-center items-center w-80 p-5 m-2 border-2 rounded-lg gap-2 shadow-md hover:shadow-xl">
      <a href="_" className="">
        <h2 className="text-purple-600 font-bold text-lg hover:text-purple-400">{item.title}</h2>
      </a>
      <hr className="text-gray-500"/>
      <img src={item.pictureUrl} alt={item.title} width={150} />
      <p className="text-center text-violet-700 font-bold">${item.price}</p>
      <p className="text-center">{item.description}</p>
      <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
    </div>
  );
};

export default Item;
