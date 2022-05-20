import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/extra/NotFound";
import ItemDetailContainer from "../components/Product/ItemDetailContainer";
import ItemListContainer from "../components/Product/ItemListContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/offers" element={<ItemListContainer />} />


      <Route path="/category" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />

      <Route path="/item/:id" element={<ItemDetailContainer />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
