import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { products } from "../../data/products";
import Loading from "../extra/Loading";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const location = useLocation();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

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

  const fetchItemsByCategory = (id) => {
    setLoading(true);
    setError("");
    const listado = new Promise((res, rej) => {
      setTimeout(() => {
        res(products.filter((product) => product.category === id));
        // rej("Error inesperado");
      }, 3000);
    });
    listado
      .then((res) => {
        setItemsFiltered(res);
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
    return () => {
      setItems([]);
    }; 
  }, [currentPath]);

  useEffect(() => {
    fetchItemsByCategory(id);
  }, [id]);

  useEffect(() => {
    return () => {
      setItemsFiltered([]);
    };
  }, [id]);

  return (
    <section className="mt-10">
      <div className="container flex flex-col items-center content-center justify-center mx-auto">
        <p className="font-bold text-2xl">{greeting}</p>
        {loading ? <Loading /> : " "}
        {error && "No se pudieron cargar los productos"}
        {(items && currentPath === "/") ? <ItemList items={items} /> : <></>}
        {itemsFiltered ? <ItemList items={itemsFiltered} /> : <></>}
      </div>
    </section>
  );
};

export default ItemListContainer;
