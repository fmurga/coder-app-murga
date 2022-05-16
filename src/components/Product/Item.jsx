import React from "react";
import ItemCount from "./ItemCount";

const Item = ({title, price, pictureUrl, stock}) => {

  const onAdd = (count) => {
    alert("Se Agregaron: " + count + " productos");
  };

  
  return (
    <div className="flex flex-col justify-center items-center w-80 p-5 m-2 border-2 rounded-lg gap-2 shadow-md hover:shadow-xl transform transition duration-500 hover:scale-110">
      <a href="_" className="">
        <h2 className="text-purple-600 font-bold text-lg hover:text-purple-400">{title}</h2>
      </a>
      <hr className="text-gray-500"/>
      <img src={pictureUrl} alt={title} width={150} />
      <p className="text-center text-violet-700 font-bold">${price}</p>
      <ItemCount initial={1} stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default Item;
