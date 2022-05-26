import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import Loading from "../extra/Loading";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchItems = () => {
    setLoading(true);
    setError("");
    if (id !== undefined) {
      const q = query(collection(db, "products"), where("category", "==", id));
      getDocs(q)
        .then((snapshot) => {
          if (snapshot.size === 0) {
            console.log("No results :>> ");
          }
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const products = collection(db, "products");
      getDocs(products)
        .then((snapshot) => {
          if (snapshot.size === 0) {
            console.log("No results :>> ");
          }
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

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
        {items ? <ItemList items={items} /> : <></>}
      </div>
    </section>
  );
};

export default ItemListContainer;
