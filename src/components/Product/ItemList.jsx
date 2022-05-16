import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    console.log(items)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10 ">
      {items &&
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
          />
        ))}
    </div>
  );
};

export default ItemList;
