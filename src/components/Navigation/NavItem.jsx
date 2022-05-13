import React from "react";

const NavItem = ({ link, nombre }) => {
  return (
    <li className="font-bold hover:text-white my-3">
      <a href={link} className="lg:px-6 lg:py-8 hover:bg-indigo-400">
        {nombre}
      </a>
    </li>
  );
};

export default NavItem;
