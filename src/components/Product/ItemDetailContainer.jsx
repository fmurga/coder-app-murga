import React, { useEffect, useState } from "react";
import { getItemById } from "../../helpers/getItemById";
import Loading from "../extra/Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchItem = (id) => {
    setLoading(true);
    setError("");
    const itemProm = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getItemById(id));
        reject("No se encontro el Item");
      }, 3000);
    });
    itemProm
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItem("1");
  }, []);


  return (
    <section className="mt-10 mb-10">
      <div className="container flex justify-center mx-auto">
        {loading ? <Loading /> : <></>}
        {error && <>{error}</>}
        {item && <ItemDetail item={item} />}
      </div>
    </section>
  );
};

export default ItemDetailContainer;
