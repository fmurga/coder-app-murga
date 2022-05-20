import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
  
  return (
    <div className="flex flex-col justify-center items-center w-80 p-5 m-2 border-2 rounded-lg gap-2 shadow-md hover:shadow-xl">
      <a href="_" className="">
        <h2 className="text-purple-600 font-bold text-lg hover:text-purple-400">{item.title}</h2>
      </a>
      <hr className="text-gray-500"/>
      <img src={item.pictureUrl} alt={item.title} width={150} />
      <p className="text-center text-violet-700 font-bold">${item.price}</p>
      <span className="text-xs text-gray-600">Stock: {item.stock}</span>
      <Link to={`/item/${item.id}`} className="w-7/12 p-2 text-center bg-purple-600 hover:bg-purple-400 text-white font-bold rounded-lg">Ver Producto</Link>
    </div>
  );
};

export default Item;
