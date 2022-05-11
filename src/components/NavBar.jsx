import React, { useState } from "react";
import icon from "../assets/images/trending-icon.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Menu } from "@mui/icons-material";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 bg-black">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a href="/">
            <img
              className="max-w-sm"
              src={icon}
              alt="Ecommerce Icon"
              width={150}
              height={150}
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
            <li className="font-bold hover:text-white my-3">
              <a href="" className="lg:px-6 lg:py-8 hover:bg-indigo-400">
                Inicio
              </a>
            </li>
            <li className="font-bold hover:text-white my-3">
              <a href="" className="lg:px-6 lg:py-8  hover:bg-indigo-400">
                Productos
              </a>
            </li>
            <li className="font-bold hover:text-white my-3">
              <a href="" className="lg:px-6 lg:py-8  hover:bg-indigo-400">
                Novedades
              </a>
            </li>
            {openNav && (
              <li className="my-3 lg:hidden xl:hidden">
                <button className="px-4 py-2 border-0 rounded-2xl bg-purple-600 font-bold text-white hover:text-white hover:bg-purple-500 ">
                  <div className="flex felx-row justify-between text-center items-center">
                    <PersonOutlineIcon />
                    <p>Login</p>
                  </div>
                </button>
              </li>
            )}
          </ul>
        </div>
        {(openNav === false) ? (
          <div className="right hidden lg:block">
            <button className="px-4 py-2 border-0 rounded-2xl bg-purple-600 font-bold text-white hover:text-white hover:bg-purple-500 ">
              <div className="flex felx-row justify-between text-center items-center">
                <PersonOutlineIcon />
                <p>Login</p>
              </div>
            </button>
          </div>
        ) : (<></>)}
      </div>
    </nav>
  );
};

export default NavBar;
