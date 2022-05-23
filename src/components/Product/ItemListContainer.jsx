import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Loading from "../extra/Loading";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [currentPath, setCurrentPath] = useState("");

  // const location = useLocation();


  const fetchItems = (id) => {
    setLoading(true);
    setError("");
    const listado = new Promise((res, rej) => {
      // setTimeout(() => {

      // }, 500);
      if (id !== undefined) {
        res(products.filter((product) => product.category === id));
      }else {
        res(products)
      }
      
      rej("Error inesperado");
    });
    listado
      .then((res) => {
        setItems(res)
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   setCurrentPath(location.pathname);
  // }, [location]);


  // useEffect(() => {
  //   return () => {
  //     setItems([]);
  //   };
  // }, [currentPath]);

  useEffect(() => {
    fetchItems(id);
    return () => {
      setItems([]);
    };
  }, [id]);


  return (
    <section className="mt-10">
      <div className="container flex flex-col items-center content-center justify-center mx-auto">
        {isNaN(id) && id !== undefined ? (
          <p className="font-bold text-2xl">{`${greeting}  ${id}`}</p>
        ) : (
          <p className="font-bold text-2xl">{greeting}</p>
        )}

        {loading ? <Loading /> : " "}
        {error && "No se pudieron cargar los productos"}
        {items? <ItemList items={items} /> : <></>}
      </div>
    </section>
  );
};

export default ItemListContainer;
