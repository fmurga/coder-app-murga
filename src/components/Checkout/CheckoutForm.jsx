import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { db } from "../../firebase/firebaseConfig";

const CheckoutForm = () => {
  const { cartItems, total, clear } = useContext(CartContext);
  const navigate = useNavigate();
  const initialForm = {
    name: "",
    email: "",
    phone: 0,
  };
  const [form, setForm] = useState(initialForm);

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
    const ordersColl = collection(db, "orders");
    addDoc(ordersColl, order).then(() => {
      setForm(initialForm);
      clear();
      navigate("/");
    });
  };

  return (
    <div className="w-5/12 h-full rounded-md">
      <div className="leading-loose">
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
              required
              aria-label="Name"
              value={form.name}
            />
          </div>
          <div className="mt-2 w-96">
            <label className="block text-sm text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => handleInputChange(e)}
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              name="email"
              type="email"
              required
              aria-label="Email"
              value={form.email}
            />
          </div>
          <div className=" mt-2 w-96">
            <label className=" block text-sm text-gray-600" htmlFor="phone">
              Telefono
            </label>
            <input
              onChange={(e) => handleInputChange(e)}
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              name="phone"
              type="tel"
              required
              aria-label="Phone"
              value={form.phone}
            />
          </div>
          <div className="mt-4 w-96">
            <button
              className="px-4 py-1 text-white font-bold bg-gray-900 rounded"
              type="submit"
              onClick={handleSubmit}>
              Comprar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
