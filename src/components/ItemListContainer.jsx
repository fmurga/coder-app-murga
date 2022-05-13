import React from "react";
import CardContainer from "./Product/CardContainer";
import ItemCount from "./Product/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    alert("Se Agregaron: " + count + " productos");
  };
  return (
    <div className="container mt-10 flex flex-col items-center content-center justify-center mx-auto">
      <p className="font-bold text-2xl">{greeting}</p>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10 ">
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default ItemListContainer;
