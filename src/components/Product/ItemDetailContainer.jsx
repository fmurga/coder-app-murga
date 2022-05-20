import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../helpers/getItemById";
import Loading from "../extra/Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  /* Item Id from params */
  const { id } = useParams();

  /* States */
  const [item, setItem] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* Fetch Item */
  const fetchItem = (id) => {
    let idProd = parseInt(id);
    setLoading(true);
    setError("");
    const itemProm = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getItemById(idProd));
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
    fetchItem(id);
  }, [id]);

  return (
    <section className="mt-10 mb-10">
      <div className="container flex justify-center mx-auto">
        {loading ? <Loading /> : <></>}
        {error && <>{error}</>}
        {(Object.keys(item).length !== 0) && <ItemDetail item={item} />}
      </div>
    </section>
  );
};

export default ItemDetailContainer;
