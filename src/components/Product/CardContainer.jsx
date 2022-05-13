import React from "react";
import ItemCount from "./ItemCount";

const CardContainer = () => {
  const onAdd = (count) => {
    alert("Se Agregaron: " + count + " productos");
  };
  return (
    <div className="flex flex-col justify-center items-center w-80 p-5 m-2 border-2 gap-2">
      <h2>Saco Mujer</h2>
      <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <img src="/assets/images/saco-mujer.jpg" alt="saco mujer" width={150} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
};

export default CardContainer;
