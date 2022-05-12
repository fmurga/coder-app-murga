import React, { useState } from "react";
import icon from "../assets/images/trending-icon.png";
import { Menu } from "@mui/icons-material";
import LoginWidget from "./LoginWidget";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  
  const links = [
    {
      link: "/",
      nombre: "Inicio",
    },
    {
      link: "/productos",
      nombre: "Productos",
    },
    {
      link: "/novedades",
      nombre: "Novedades",
    },
  ];

  return (
    <nav className="sticky w-full z-10 top-0 flex flex-wrap items-center justify-between px-2 py-0 bg-black">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a href="/">
            <img
              className="max-w-sm"
              src={icon}
              alt="Ecommerce Icon"
              width={100}
              height={100}
            />
          </a>
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
            {links &&
              links.map((link, idx) => (
                <li key={idx} className="font-bold hover:text-white my-3">
                  <a
                    href={link.link}
                    className="lg:px-6 lg:py-8 hover:bg-indigo-400">
                    {link.nombre}
                  </a>
                </li>
              ))}
            {openNav && (
              <li className="my-3 lg:hidden xl:hidden flex flex-row items-center justify-between gap-1">
                <CartWidget />
                <LoginWidget />
              </li>
            )}
          </ul>
        </div>
        {!openNav && (
          <div className="right hidden lg:flex lg:flex-row items-center justify-between gap-1">
            <CartWidget />
            <LoginWidget />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
