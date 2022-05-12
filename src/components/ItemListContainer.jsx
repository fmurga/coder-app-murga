import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container h-screen flex items-center content-center justify-center mx-auto">
      <p className="font-bold text-2xl">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
