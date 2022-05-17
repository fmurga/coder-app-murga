import React, { useEffect, useState } from "react";
import { products } from "../../data/products";
import Loading from "../extra/Loading";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchItems = () => {
    setLoading(true);
    setError("");
    const listado = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
        // rej("Error inesperado");
      }, 3000);
    });
    listado
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section className="mt-10">
      <div className="container flex flex-col items-center content-center justify-center mx-auto">
        <p className="font-bold text-2xl">{greeting}</p>
        {loading ? <Loading /> : " "}
        {error && "No se pudieron cargar los productos"}
        {items ? <ItemList items={items}/> : <></>}
      </div>
    </section>
  );
};

export default ItemListContainer;
