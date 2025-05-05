// components/navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClasses = "block py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition-colors";

  return (
    <nav className="flex flex-col space-y-2">
      <NavLink to="/" className={linkClasses}>Home</NavLink>
      <NavLink to="/users/1" className={linkClasses}>User 1</NavLink>
      <NavLink to="/users/2" className={linkClasses}>User 2</NavLink>
      <NavLink to="/users/3" className={linkClasses}>User 3</NavLink>
    </nav>
  );
}

export default Navbar;
