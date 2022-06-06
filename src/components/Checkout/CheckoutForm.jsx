import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { db } from "../../firebase/firebaseConfig";
import PaymentDetail from "../extra/PaymentDetail";
import ModalAcceptBuy from "../Modals/ModalAcceptBuy";

const CheckoutForm = () => {
  const { cartItems, total, clear } = useContext(CartContext);
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState("");
  const [orederId, setOrderId] = useState("");
  const [open, setOpen] = useState(false);
  const initialForm = useMemo(() => {
    return {
      name: "",
      email: "",
      phone: "",
    };
  }, []);

  const [form, setForm] = useState(initialForm);
  const modalMessage = `Se ha creado tu compra con id ${orederId}`;
  const modalTitle = "Compra Exitosa";

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const buyer = form;
    const items = cartItems.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
    }));
    const order = {
      buyer: buyer,
      items: items,
      date: serverTimestamp(),
      total: total,
    };
    checkItemsStock().then((res) => {
      if (res.includes(false)) {
        console.log("No hay Stock :>> ");
        setError(
          "No se ha podido procesar la compra, intente nuevamente mas tarde"
        );
      } else {
        console.log("hay Stock :>> ");
        updateStock();
        const ordersColl = collection(db, "orders");
        addDoc(ordersColl, order).then(({ id }) => {
          setOrderId(id);
          setOpen(true);
        });
      }
    });
  };

  const checkItemsStock = () => {
    const promises = [];

    cartItems.forEach((prod) => {
      const productRef = doc(db, "products", prod.id);
      const promise = getDoc(productRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            prod.sizeSelected.forEach(element => {
              const aux = snapshot
              .data()
              .sizes.filter((size) => size.name === element.name);
              console.log('aux', aux)
            if (aux[0].stock < element.peritem) {
              return false;
            } else {
              return true;
            }
            });
          }
        })
        .catch((err) => console.log("error :>>", err));
      promises.push(promise);
    });
    return Promise.all(promises);
  };

  const updateStock = () => {
    cartItems.forEach((prod) => {
      prod.sizeSelected.forEach(element => {
        const aux = prod.sizes.filter(
          (size) => size.name === element.name
        );
        aux[0].stock = aux[0].stock - element.peritem;
        if (aux[0].stock === 0) {
          aux[0].inStock = false;
        }
      });
      const itemRef = doc(db, "products", prod.id);
      updateDoc(itemRef, prod);
    });
  };

  const endBuy = useCallback(() => {
    setForm(initialForm);
    clear();
    navigate("/");
  }, [clear, initialForm, navigate]);

  useEffect(() => {
    if (submited) {
      endBuy();
    }
  }, [endBuy, submited]);

  return (
    <>
      <div className="w-5/12 h-full rounded-md">
        <div className="leading-loose">
          <p>{error}</p>
          <form
            className="w-full p-10 bg-white rounded shadow-xl"
            onSubmit={handleSubmit}>
            <h2 className="text-gray-800 font-medium text-xl py-2">
              Pagar Compra
            </h2>
            <div className="mt-2">
              <label className="block text-sm text-gray-700" htmlFor="name">
                Nombre
              </label>
              <input
                onChange={(e) => handleInputChange(e)}
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="name"
                name="name"
                type="text"
                aria-label="Name"
                required={true}
                value={form.name}
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => handleInputChange(e)}
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                name="email"
                type="email"
                aria-label="Email"
                required={true}
                value={form.email}
              />
            </div>
            <div className=" mt-2">
              <label className=" block text-sm text-gray-600" htmlFor="phone">
                Telefono
              </label>
              <input
                onChange={(e) => handleInputChange(e)}
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                name="phone"
                type="tel"
                aria-label="Phone"
                required={true}
                value={form.phone}
              />
            </div>
            <PaymentDetail />
            <div className="mt-4">
              <button
                className="px-4 py-1 text-white font-bold bg-gray-900 rounded"
                type="submit">
                Comprar
              </button>
            </div>
          </form>
        </div>
      </div>
      <ModalAcceptBuy
        open={open}
        setOpen={setOpen}
        title={modalTitle}
        message={modalMessage}
        submited={setSubmited}
      />
    </>
  );
};

export default CheckoutForm;
