import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ id, link, nombre }) => {
  let activeClassName = "lg:px-6 lg:py-7 bg-indigo-400";
  return (
    <li className="font-bold hover:text-white my-3">
      {link.includes("category") ? (
        <NavLink
          to={`${link}${id}`}
          className={({ isActive }) =>
            isActive ? activeClassName : "lg:px-6 lg:py-7 hover:bg-indigo-400"
          }>
          {nombre}
        </NavLink>
      ) : (
        <NavLink
          to={`${link}`}
          className={({ isActive }) =>
            isActive ? activeClassName : "lg:px-6 lg:py-7 hover:bg-indigo-400"
          }>
          {nombre}
        </NavLink>
      )}
    </li>
  );
};

export default NavItem;
