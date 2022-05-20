import React, { useEffect, useState } from "react";
import icon from "../../assets/images/trending-icon.png";
import { Menu } from "@mui/icons-material";
import LoginWidget from "../extra/LoginWidget";
import CartWidget from "../extra/CartWidget";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { category } from "../../data/category";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [categories, setCategories] = useState([]);

  /* Dont think getting categories like this for a navbar is a good thing to do */
  const fetchCategories = () => {
    const categoriesProm = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(category)
        reject("No se encontro la categoria");
      }, 1000);
    });
    categoriesProm
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  useEffect(() => {
    fetchCategories()
  }, [])
  

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
              categories.map((link, idx) => (
                <NavItem key={idx} id={link.id} link={link.path} nombre={link.name} />
              ))}
            {openNav && (
              <li className="my-3 lg:hidden xl:hidden flex flex-row items-center justify-between gap-1">
                <CartWidget />
                <LoginWidget />
              </li>
            )}
          </ul>
        </div>
        <div className="right hidden lg:flex lg:flex-row items-center justify-between gap-1">
          <CartWidget />
          <LoginWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
