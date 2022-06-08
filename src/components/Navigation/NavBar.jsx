import React, { useContext, useEffect, useState } from "react";
import icon from "../../assets/images/trending-icon.png";
import LoginWidget from "../extra/LoginWidget";
import CartWidget from "../extra/CartWidget";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Menu from "../icons/Menu";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [categories, setCategories] = useState([]);
  const {itemCount} = useContext(CartContext)

  const fetchCategories = () => {
    const categories= collection(db, "links");
      getDocs(categories)
        .then((snapshot) => {
          if (snapshot.size === 0) {
            console.log("No results :>> ");
          }
          setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="sticky w-full z-10 top-0 flex flex-wrap items-center justify-between px-2 py-0 bg-black">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <img
              className="max-w-sm"
              src={icon}
              alt="Ecommerce Icon"
              width={100}
              height={100}
            />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setOpenNav(!openNav)}>
            <Menu />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center justify-center" +
            (openNav ? " flex" : " hidden")
          }>
          <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-0 text-white">
            {categories &&
              categories.map((link) => (
                <NavItem
                  key={link.id}
                  id={link.id}
                  link={link.path}
                  name={link.name}
                  subcategories={link.subcategories}
                />
              ))}
            {openNav && (
              <li className="my-3 lg:hidden xl:hidden flex flex-row items-center justify-between gap-1">
                <CartWidget itemCount={itemCount}/>
                <LoginWidget />
              </li>
            )}
          </ul>
        </div>
        <div className="right hidden lg:flex lg:flex-row items-center justify-between gap-1">
          <CartWidget itemCount={itemCount}/>
          <LoginWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
