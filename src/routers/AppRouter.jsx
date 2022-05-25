import React from "react";
import { Route, Routes } from "react-router-dom";
import CartContainer from "../components/Cart/CartContainer";
import NotFound from "../components/extra/NotFound";
import ItemDetailContainer from "../components/Product/ItemDetailContainer";
import ItemListContainer from "../components/Product/ItemListContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={"Todos los productos"}/>} />
      <Route path="/offers" element={<ItemListContainer greeting={"Ofertas"}/>} />

      <Route path="/cart" element={<CartContainer />} />

      {/* <Route path="/category" element={<CategoryListContainer />} /> */}
      <Route path="/category/:id" element={<ItemListContainer greeting={"Ropa de "}/>} />

      <Route path="/item/:id" element={<ItemDetailContainer />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
